### Chapter 4 Applications of the Derivative Review
p322: 1c, 4, 39, 49, 71-79
1\. **Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
c. $F(x) = x^2+10$ and $G(x)=x^-100$ are antiderivatives of the same function.
>Solution
True. Both are the antiderivatives of $2x$.

3–4\. **Designer functions** Sketch the graph of a function continuous on the given interval that satisfies the following conditions.
4\. $f$ is continuous on $(-\infty, \infty)$; $f'(x)<0$ and $f''(x) <0$ on $(-\infty,0)$; $f'(x)>0$ and $f''(x)>0$ on $(0, \infty)$.
>Solution
Graph (4).

38–51\. **Limits** Evaluate the following limits. Use l’Hôpital’s Rule when needed.
39\. $\dlim_{t\to 0}\dfrac{1-\cos 6t}{2t}$
>Solution
$$
\begin{aligned}
\dlim_{t\to 0}\dfrac{1-\cos 6t}{2t} &= \dlim_{t\to 0}\dfrac{6\sin 6t}{2} = \frac{0}{2} = 0
\end{aligned}
$$

49\.$\dlim_{x\to 0}\csc x \sin^{-1}x$
>Solution
$$
\begin{aligned}
\dlim_{x\to 0}\csc x \sin^{-1}x &= \lim_{x\to 0}\frac{\sin^{-1} x}{\sin x}\\
&= \lim_{x\to 0}\frac{\frac{1}{\sqrt{1-x^2}}}{\cos x}\\
&= \frac{\frac{1}{\sqrt{1-0^2}}}{\cos 0} = 1
\end{aligned}
$$

68–81\. **Indefinite integrals** Determine the following indefinite integrals.
71\. $\dint (\frac{1}{x^2} - \frac{2}{x^{5/2}})dx$
>Solution
$$
\begin{aligned}
\int (\frac{1}{x^2} - \frac{2}{x^{5/2}})dx &= \int (x^{-2})dx -2\int(x^{-5/2})dx\\
&= -\frac{1}{x} + \frac{4}{3x^{3/2}} + C
\end{aligned}
$$

72\. $\dint \frac{x^4-2\sqrt x + 2}{x^2} dx$
>Solution
$$
\begin{aligned}
\int \frac{x^4-2\sqrt x + 2}{x^2} dx &= \int x^2dx -2\int x^{-3/2}dx + 2\int x^{-2}dx\\
&= \frac{1}{3}x^3 + \frac{4}{\sqrt x} - \frac{2}{x} + C
\end{aligned}
$$

73\. $\dint (1+\cos 3\th) d\th$
>Solution
$$
\begin{aligned}
\int (1+\cos 3\th) d\th &= \int d\th + \frac{1}{3}\int (3\cos 3\th) d\th\\
&= \th + \frac{1}{3}\sin 3\th + C
\end{aligned}
$$

74\. $\dint (2\sec^2 x)dx$
>Solution
$\dint (2\sec^2 x)dx = 2\tan x + C$

75\. $\dint (\sec 2x \tan 2x)dx$
>Solution
$\dint (\sec 2x \tan 2x)dx = \frac{1}{2}\sec 2x + C$

76\. $\dint (2e^{2x})dx$
>Solution
$\dint (2e^{2x})dx = e^{2x} + C$

77\. $\dint (\frac{12}{x})dx$
>Solution
$\dint (\frac{12}{x})dx = 12\ln |x| + C$

78\. $\dint (\frac{1}{\sqrt {1-x^2}})dx$
>Solution
$\dint (\frac{1}{\sqrt {1-x^2}})dx = \arcsin x + C$

79\. $\dint (\frac{1}{1+x^2})dx$
>Solution
$\dint (\frac{1}{1+x^2})dx = \arctan x + C$
