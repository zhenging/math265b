import PropTypes from 'prop-types';
import './MarkdownBody.css';

const MarkdownBody = props => (
  <div className="container">
    <div className="note-menu-container" />
    <article className="markdown-body">
      <p>{props.md}</p>
    </article>
  </div>
);

MarkdownBody.propTypes = {
  md: PropTypes.string.isRequired
};

export default MarkdownBody;
