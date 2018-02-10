### Chapter 2-Limits Review
p125: 31, 34
31–36\. **Limits at infinity** Evaluate the following limits or state that they do not exist.
31\. $\dlim_{x\to \infty}\dfrac{2x-3}{4x+10}$
>**Solution**
$$
\eqalign{
\lim_{x\to \infty}\frac{2x-3}{4x+10} &= \lim_{x\to \infty}\dfrac{2-\frac{3}{x}}{4+\frac{10}{x}}\\
&= \frac{2-0}{4+0} = \frac{1}{2}
}
$$

34\. $\dlim_{z\to \infty}(e^{-2z} + \dfrac{2}{z})$
>**Solution**
$$
\eqalign{
\lim_{z\to \infty}(e^{-2z} + \frac{2}{z}) &= 0+0=0
}
$$

### Chapter 3-Derivatives Review
p229: 21, 23, 27, 31, 44
15–36\. **Evaluating derivatives** Evaluate and simplify the following derivatives.
21\. $\dfrac{d}{du}(\dfrac{4u^2+u}{8u+1})$
>**Solution**
$$
\eqalign{
\frac{d}{du}(\frac{4u^2+u}{8u+1}) &= \frac{(8u+1)\cdot \frac{d}{du}(4u^2+u) - (4u^2+u)\cdot \frac{d}{du}(8u+1)}{(8u+1)^2}\\
&=\frac{(8u+1)(8u+1)-8(4u^2+u)}{(8u+1)^2}\\
&=\frac{32u^2+8u+1}{(8u+1)^2}\\
}
$$

23\. $\dfrac{d}{d\theta}(\tan (\sin \theta))$
>**Solution**
$$
\eqalign{
\frac{d}{d\theta}(\tan (\sin \theta)) &= \sec^2 (\sin \theta) \cdot \cos \theta
}
$$

<!-- pagebreak -->
27\. $\dfrac{d}{dx}(x\ln^2 x)$
>**Solution**
$$
\eqalign{
\frac{d}{dx}(x\ln^2 x) &= \frac{d}{dx}(x)\cdot \ln^2 x + x\cdot \frac{d}{dx}(\ln^2 x)\\
&=\ln^2 x + x\cdot 2\ln x \cdot \frac{d}{dx}(\ln x)\\
&=\ln^2 x + 2\ln x
}
$$

31\. $\dfrac{d}{dx}\lb\sin^{-1} \dfrac{1}{x}\rb$
>**Solution**
$$
\eqalign{
\frac{d}{dx}\lb\sin^{-1} \frac{1}{x}\rb &= \frac{1}{\sqrt {1-\frac{1}{x^2}}} \cdot \frac{d}{dx}(\frac{1}{x})\\
&= \frac{1}{\sqrt {1-\frac{1}{x^2}}} \cdot (-\frac{1}{x^2})\\
&=- \inv{\sqrt{x^4-x^2}}
}
$$

41–44\. **Tangent lines** Find an equation of the line tangent to the following curves at the given point.
44\. $x^2y+y^3=75; (x, y)=(4, 3)$
>**Solution**
$$
\eqalign{
\frac{d}{dx}(x^2y+y^3) &= \frac{d}{dx}(75) \\
2xy + x^2 y' + 3y^2 y' &=0 \To y' = -\frac{2xy}{x^2+3y^2}\\
y' \mid_{x=4, y=3} &= -\frac{2\cdot 4\cdot 3}{4^2+3\cdot 3^2} = -\frac{24}{43}
}
$$
The equation of the tangent line is $y-3=-\frac{24}{43}(x-4) \text{ or } y= -\frac{24}{43}x + \frac{225}{43}$

<!-- pagebreak -->
### Chapter 4-Applications of the Derivative Review
p322: 1c, 4, 39, 49, 71-79
1\. **Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
c. $F(x) = x^2+10$ and $G(x)=x^-100$ are antiderivatives of the same function.
>**Solution**
True. Both are the antiderivatives of $2x$.

3–4\. **Designer functions** Sketch the graph of a function continuous on the given interval that satisfies the following conditions.
4\. $f$ is continuous on $(-\infty, \infty)$; $f'(x)<0$ and $f''(x) <0$ on $(-\infty,0)$; $f'(x)>0$ and $f''(x)>0$ on $(0, \infty)$.
>**Solution**
Graph (4).

38–51\. **Limits** Evaluate the following limits. Use l’Hôpital’s Rule when needed.
39\. $\dlim_{t\to 0}\dfrac{1-\cos 6t}{2t}$
>**Solution**
$$
\eqalign{
\dlim_{t\to 0}\dfrac{1-\cos 6t}{2t} &= \dlim_{t\to 0}\dfrac{6\sin 6t}{2} = \frac{0}{2} = 0
}
$$

49\.$\dlim_{x\to 0}\csc x \sin^{-1}x$
>**Solution**
$$
\eqalign{
\dlim_{x\to 0}\csc x \sin^{-1}x &= \lim_{x\to 0}\frac{\sin^{-1} x}{\sin x}\\
&= \lim_{x\to 0}\frac{\inv{\sqrt{1-x^2}}}{\cos x}\\
&= \frac{\inv{\sqrt{1-0^2}}}{\cos 0} = 1
}
$$

68–81\. **Indefinite integrals** Determine the following indefinite integrals.
71\. $\dint (\frac{1}{x^2} - \frac{2}{x^{5/2}})dx$
>**Solution**
$$
\eqalign{
\int (\frac{1}{x^2} - \frac{2}{x^{5/2}})dx &= \int (x^{-2})dx -2\int(x^{-5/2})dx\\
&= -\frac{1}{x} + \frac{4}{3x^{3/2}} + C
}
$$

72\. $\dint \frac{x^4-2\sqrt x + 2}{x^2} dx$
>**Solution**
$$
\eqalign{
\int \frac{x^4-2\sqrt x + 2}{x^2} dx &= \int x^2dx -2\int x^{-3/2}dx + 2\int x^{-2}dx\\
&= \frac{1}{3}x^3 + \frac{4}{\sqrt x} - \frac{2}{x} + C
}
$$

73\. $\dint (1+\cos 3\theta) d\theta$
>**Solution**
$$
\eqalign{
\int (1+\cos 3\theta) d\theta &= \int d\theta + \frac{1}{3}\int (3\cos 3\theta) d\theta\\
&= \theta + \frac{1}{3}\sin 3\theta + C
}
$$

74\. $\dint (2\sec^2 x)dx$
>**Solution**
$\dint (2\sec^2 x)dx = 2\tan x + C$

75\. $\dint (\sec 2x \tan 2x)dx$
>**Solution**
$\dint (\sec 2x \tan 2x)dx = \frac{1}{2}\sec 2x + C$

76\. $\dint (2e^{2x})dx$
>**Solution**
$\dint (2e^{2x})dx = e^{2x} + C$

77\. $\dint (\frac{12}{x})dx$
>**Solution**
$\dint (\frac{12}{x})dx = 12\ln |x| + C$

78\. $\dint (\inv{\sqrt {1-x^2}})dx$
>**Solution**
$\dint (\inv{\sqrt {1-x^2}})dx = \arcsin x + C$

79\. $\dint (\inv{1+x^2})dx$
>**Solution**
$\dint (\inv{1+x^2})dx = \arctan x + C$

### Chapter 5-Integration Review
p387: 15, 21, 31
15–30\. **Evaluating integrals** Evaluate the following integrals.
15\. $\dint_{-2}^2 (3x^4-2x+1)dx$
>**Solution**
$$
\eqalign{
\int_{-2}^2 (3x^4-2x+1)dx &= (\frac{3}{5}x^5-x^2 + x) \mid_{-2}^2 = \frac{212}{5}
}
$$

21\. $\dint_0^1 \sqrt x(\sqrt x + 1)dx$
>**Solution**
$$
\eqalign{
\int_0^1 \sqrt x(\sqrt x + 1)dx &= \int_0^1 xdx + \int_0^1 x^{1/2}\\
&= (\frac{1}{2}x^2 + \frac{2}{3}x^{3/2})\mid_0^1 = \frac{7}{6}
}
$$

31–34\. **Area of regions** Compute the area of the region bounded by the graph of f and the x-axis on the given interval. You may find it useful to sketch the region.
31\. $f(x) = 16-x^2; [-4, 4]$
>**Solution**
$$
\eqalign{
\int_{-4}^4 (16-x^2)dx &= (16x-\frac{1}{3}x^3) \mid_{-4}^4= \frac{256}{3}
}
$$
