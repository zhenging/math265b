// eslint-disable
const ReactDOMServer = require('react-dom/server');
const evaluate = require('eval');

function findAsset(src, compiler, webpackStatsJson) {
  const asset = compiler.assets[src];
  if (asset) {
    return asset;
  }

  let chunkValue = webpackStatsJson.assetsByChunkName[src];
  if (!chunkValue) {
    return null;
  }
  // Webpack outputs an array for each chunk when using sourcemaps
  if (chunkValue instanceof Array) {
    // Is the main bundle always the first element?
    chunkValue = chunkValue[0];
  }
  return compiler.assets[chunkValue];
}

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
function getAssetsFromCompiler(compiler, webpackStatsJson) {
  const assets = {};
  for (const chunk in webpackStatsJson.assetsByChunkName) {
    let chunkValue = webpackStatsJson.assetsByChunkName[chunk];

    // Webpack outputs an array for each chunk when using sourcemaps
    if (chunkValue instanceof Array) {
      // Is the main bundle always the first element?
      chunkValue = chunkValue[0];
    }

    if (compiler.options.output.publicPath) {
      chunkValue = compiler.options.output.publicPath + chunkValue;
    }
    assets[chunk] = chunkValue;
  }

  return assets;
}

function createAssetFromContents(contents) {
  return {
    source() {
      return contents;
    },
    size() {
      return contents.length;
    }
  };
}

// src can be either a filename or a chunk name
function ReactToHtmlWebpackPlugin(destPath, src, options) {
  this.src = src;
  this.destPath = destPath;
  this.options = typeof options === 'object' ? options : {};
}

ReactToHtmlWebpackPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compiler, done) => {
    const webpackStatsJson = compiler.getStats().toJson();

    try {
      const asset = findAsset(this.src, compiler, webpackStatsJson);
      if (!asset) {
        throw new Error(`Output file not found: "${this.src}"`);
      }

      const source = asset.source();
      const Component = evaluate(
        source,
        /* filename: */ undefined,
        /* scope: */ undefined,
        /* includeGlobals: */ true
      );
      const elem = Component();
      const html = ReactDOMServer.renderToStaticMarkup(elem);
      // eslint-disable-next-line
      const template = this.options.template;

      if (template != null && typeof template !== 'function') {
        throw new Error('Template must be a function');
      }

      const output =
        typeof template === 'function'
          ? template({
            html,
            assets: getAssetsFromCompiler(compiler, webpackStatsJson)
          })
          : html;
      compiler.assets[this.src] = createAssetFromContents('');
      compiler.assets[this.destPath] = createAssetFromContents(output);
    } catch (err) {
      return done(err);
    }

    done();
  });
};

module.exports = ReactToHtmlWebpackPlugin;
// eslint-enable
