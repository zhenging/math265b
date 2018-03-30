---
date: 02/26/2018
---

### Math265B Group 3

1\. Consider the region of the plane between the curve $f(x) =\dfrac{1}{x}$ and the ax-axis over the interval $[1, \infty]$. If this region is revolved about the x-axis, the resulting solid is called ***Gabriel's Horn***. [Graph (1)](https://www.desmos.com/calculator/jtxtwirg5w)
a. Set up an integral that represents the volume of this solid of revolution
b. Evaluate this integral and determine whether the volume is finite or infinite. If the volume is finite, specify what it is. Evaluate the integral by hand showing complete steps using appropriate limit notation.
>Solution
$$
\begin{aligned}
V &= \pi \int_1^{\infty} (\frac{1}{x})^2 dx\\
&= \pi \lim_{t \to \infty} \int_1^t (\frac{1}{x})^2 dx\\
&=\pi \lim_{t \to \infty} (-\frac{1}{x})\mid_0^t\\
&=\pi \lim_{t \to \infty}(-\frac{1}{t} + \frac{1}{1}) \\
&= \pi(1-0) = \pi\\
\end{aligned}
$$

2\. The surface area $S$ of this solid is given by the improper integral $S=2\pi\displaystyle \int_1^{\infty}\frac{1}{x} \sqrt{1+\frac{1}{x^4}}dx$. Using a calculator program, investigate whether this integral appears to converge or diverge. Write down which definite integrals you explore and their approximate values below.
>Solution
$$
\begin{aligned}
S(t) &= 2\pi\int_1^t\frac{1}{x} \sqrt{1+\frac{1}{x^4}}dx\\
S(1) &= 0\\
S(10) &\approx 15.178\\
S(100) &\approx 29.645\\
S(1000) &\approx 44.112\\
S(10000) &\approx 58.580
\end{aligned}
$$
$S$ diverges as $t$ goes infinity.
