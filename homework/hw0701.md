### Section 7.1 Basic Approaches
p506: 11, 13, **23**, 25, **27**

7–14\. **Substitution Review** Evaluate the following integrals.
11\. $\dint \frac{\ln 2x}{x} dx$
>Solution
$$
\begin{aligned}
u = \ln 2x, du &= \frac{dx}{x}\\
\int \frac{\ln 2x}{x} dx &= \int udu\\
&= \frac{1}{2}u^2 + C = \frac{1}{2}\ln^2 2x + C
\end{aligned}
$$

13\. $\dint \frac{e^x}{e^x+1}dx$
>Solution
$$
\begin{aligned}
u = e^x+ 1, du &= e^x dx\\
\int \frac{e^x}{e^x+1}dx &= \int \frac{1}{u}du\\
&= \ln u + C = \ln (e^x+1) + C
\end{aligned}
$$

23–28\. **Splitting fractions** Evaluate the following integrals.
23\. $\dint \frac{x+2}{x^2+4}dx$
>Solution
$$
\begin{aligned}
\int \frac{x+2}{x^2+4}dx &= \int \frac{x}{x^2+4}dx + 2\int \frac{1}{x^2+4}dx\\
&= \frac{1}{2}\int \frac{1}{u}du + \int \frac{1}{v^2+1}dv &(u=x^2+4, v=\frac{1}{2}x)\\
&= \frac{1}{2}\ln |u| + \arctan v + C\\
&= \frac{1}{2}\ln (x^2+4) + \arctan (\frac{x}{2}) + C
\end{aligned}
$$

<!-- pagebreak -->
25\. $\dint \frac{\sin t + \tan t}{\cos^2 t}dt$
>Solution
$$
\begin{aligned}
\int \frac{\sin t + \tan t}{\cos^2 t} dt &= \int \frac{\sin t}{\cos^2 t} dt + \int \frac{\tan t}{\cos^2 t} dt\\
&= \int \frac{\sin t}{\cos^2 t} dt + \int \frac{\sin t}{\cos^3 t} dt\\
&= -\int \frac{1}{u^2}du -\int \frac{1}{u^3} du & (u=\cos t)\\
&= \frac{1}{u} + \frac{1}{2u^2} + C = \sec t + \frac{1}{2}\sec^2 t + C
\end{aligned}
$$

27\. $\dint \frac{2-3x}{\sqrt {1-x^2}}dx$
>Solution
$$
\begin{aligned}
\int \frac{2-3x}{\sqrt {1-x^2}}dx &= 2\int \frac{1}{\sqrt {1-x^2}}dx - 3\int \frac{x}{\sqrt {1-x^2}}dx\\
&=2\arcsin x +\frac{3}{2}\int \frac{1}{\sqrt u}du & (u=1-x^2)\\
&=2\arcsin x + 3\sqrt u + C = 2\arcsin x + 3\sqrt (1-x^2) + C
\end{aligned}
$$
