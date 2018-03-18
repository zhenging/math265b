### Section 7.7 Numerical Integration
p556: 1, 2, 3, 11, 14, 15, 18, 19, 23 (also give Simpson’s), 31, 39a, 53b, 61

1\. If the interval $[4, 18]$ is partitioned into $n = 28$ subintervals of equal length, what is $\Delta x$?
>Solution
$\Delta x = \frac{18-4}{28} = \frac{1}{2}$

2\. Explain geometrically how the Midpoint Rule is used to approximate a definite integral.
>Solution
The Midpoint Rule approximtes the definite integrals by using a rectangle over each subintervals with width being $\Delta x$ and the height being $f(x_k)$, where $x_k$ is the midpoint in kth subinterval.

3\. Explain geometrically how the Trapezoid Rule is used to approximate a definite integral.
>Solution
The Trapezoid Rule approximates the definite integrals by using a trapezoid over each subintervals rather than a rectangle.

11–14\. **Midpoint Rule approximations** Find the indicated Midpoint Rule approximations to the following integrals.
11\. $\dint_2^{10} 2x^2 dx$ using $n=4$ subintervals.
>Solution
Graph (11). The approximation is underestimated.
$$
\begin{aligned}
\int_2^{10} 2x^2 dx &\approx M(4) = (2\cdot 3^2 + 2\cdot 5^2 + 2\cdot 7^2 +2\cdot 9^2) \cdot \frac{10-2}{4} = 656
\end{aligned}
$$

14\. $\dint_0^1 e^{-x} dx$ using $n=8$ subintervals.
>Solution
Graph (14). The approximation is underestimated.
$$
\begin{aligned}
\int_0^1 e^{-x} dx &\approx M(8) = (e^{\frac{1}{16}} + e^{\frac{3}{16}} + \cdots + e^{\frac{15}{16}}) \cdot \frac{1-0}{8} = 0.6317
\end{aligned}
$$

15–18\. **Trapezoid Rule approximations** Find the indicated Trapezoid Rule approximations to the following integrals.
15\. $\dint_2^{10} 2x^2 dx$ using $n=4$ subintervals.
>Solution
Graph (15).
$$
\begin{aligned}
L(4) &= \sum_{k=1}^4 f(2+2(k-1)) \cdot 2 = 480 &\text{Underestimate}\\
R(4) &= \sum_{k=1}^4 f(2+2k) \cdot 2 = 864 &\text{Overestimate}\\
T(4) &= \lb \frac{1}{2}f(2) + \sum_{k=1}^{n-1}f(2+2k) + \frac{1}{2}f(10)\rb \cdot 2 = 672 &\text{Overestimate}
\end{aligned}
$$

18\. $\dint_0^1 e^{-x} dx$ using $n=8$ subintervals.
>Solution
Graph (18).
$$
\begin{aligned}
L(8) &= \sum_{k=1}^4 f(\frac{k-1}{8}) \cdot \frac{1}{8}\approx 0.67245095 &\text{Overestimate}\\
R(8) &= \sum_{k=1}^4 f(\frac{k}{8}) \cdot \frac{1}{8} \approx 0.59343588 &\text{Underestimate}\\
T(8) &= \lb \frac{1}{2}f(0) + \sum_{k=1}^{n-1}f(\frac{k}{8}) + \frac{1}{2}f(1)\rb \cdot \frac{1}{8}\approx 0.63294341 &\text{Underestimate}
\end{aligned}
$$

19\. **Midpoint Rule, Trapezoid Rule, and relative error** Find the Midpoint and Trapezoid Rule approximations to $\dint_0^1 \sin \pi x dx$ using $n=25$ subintervals. Compute the relative error of each approximation.
>Solution
$$
\begin{aligned}
I &= \int_0^1 \sin \pi x dx = \frac{2}{\pi}\\
M(25) &= \sum_{k=1}^{25} f(\frac{\frac{k-1}{25} + \frac{k}{25}}{2}) \cdot \frac{1}{25} \approx 0.63703884\\
E_{m\_relative} &= \frac{|I-M(25)|}{I} \approx 6.58\times 10^{-4}\\
T(25) &= \lb \frac{1}{2}f(0)+\sum_{k=1}^{25-1}f(x_k)+\frac{1}{2}f(1) \rb \cdot \frac{1}{25} \approx 0.63578179\\
E_{t\_relative} &= \frac{|I-T(25)|}{I} \approx 1.32\times 10^{-4}\\
\end{aligned}
$$

21–26\. **Comparing the Midpoint and Trapezoid Rules** Apply the Midpoint and Trapezoid Rules to the following integrals. Make a table similar to Table 7.5 showing the approximations and errors for $n = 4, 8, 16, 32$. The exact values of the integrals are given for computing the error.
23\. $\dint_0^{\frac{\pi}{4}} 3\sin 2x dx = \frac{3}{2}$
>Solution
| n | $M(n)$| Error $T(n)$ | $T(n)$ | Error $T(n)$ | $S(n)$ | Error $S(n)$|
|----|------------|--------------|-----------|----|---|----|
| 4 | 1.50968181 | $9.68 \times 10^{-3}$ | 1.48067370 | $1.93 \times 10^{-2}$ |1.50001244 | $1.24\times 10^{-5}$ |
| 8 | 1.50241228 | $2.41 \times 10^{-3}$ | 1.49517776 | $4.82 \times 10^{-3}$ |1.50000078| $7.75 \times 10^{-7}$|
| 16| 1.50060256 | $6.03 \times 10^{-4}$ | 1.49879502 | $1.20 \times 10^{-3}$ |1.50000004 | $4.84\times 10^{-8}$|
| 32| 1.50015060 | $1.51 \times 10^{-4}$ | 1.49969879 | $3.01 \times 10^{-4}$ |1.50000000 | $3.00 \times 10^{-9}$|

31\. **Trapezoid Rule and Simpson’s Rule** Consider the following integrals and the given values of $n$.
$\dint_0^1 e^{2x}dx;n=25$.
a. Find the Trapezoid Rule approximations to the integral using $n$ and $2n$ subintervals.
b. Find the Simpson’s Rule approximation to the integral using $2n$ subintervals. It is easiest to obtain Simpson’s Rule approximations from the Trapezoid Rule approximations, as in Example 6.
c. Compute the absolute errors in the Trapezoid Rule and Simpson’s Rule with $2n$ subintervals.
>Solution
| n   | $T(n)$ | Error $T(n)$ | $S(n)$ | Error $S(n)$ |
|:---:|:------:|:------------:|:-------:|:-----------:|
| 25  | 3.19623161 | - | - | - |
| 50  | 3.19495397 | $4.26 \times 10^{-4}$ | 3.19452805 | $2.66 \times 10^{-9}$ |
| 100 | 3.19463453 | - | - | - |

39\. **Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
a. The Trapezoid Rule is exact when used to approximate the definite integral of a linear function.
>Solution
Because the region under the curve is the sum of all trapezoids over each intervals.

53\. **U.S. oil produced and imported** The figure shows the rate at which U.S. oil was produced and imported between 1920 and 2005 in units of millions of barrels per day. The total amount of oil produced or imported is given by the area of the region under the corresponding curve. Be careful with units because both days and years are used in this data set. Graph (53).
b. Use numerical integration to estimate the amount of oil imported between 1940 and 2000. Use the method of your choice and experiment with values of $n$.
>Solution
Let $n$ = 6
$$
\begin{aligned}
x_{0,\cdots n} &= [1940, 1950, \cdots 2000]\\
S(n) &= \lb f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + 4f(x_5) + f(x_6)\rb \cdot \frac{10}{3} \cdot 365
\end{aligned}
$$

61\. **Another Simpson’s Rule formula** Another Simpson’s Rule formula is $S(2n) = \dfrac{2M(n) + T(n)}{3}$, for $n \ges 1$. Use this rule to estimate $\dint_1^e \frac{1}{x}$ using $n=10$ subintervals.
>Solution
$$
\begin{aligned}
M(5) &= \sum_{k=1}^5 f(\frac{\lb1+\frac{(k-1)(e-1)}{10}\rb + \lb1 + \frac{k(e-1)}{10} \rb}{2}) \cdot \frac{e-1}{10} \approx 0.99894242\\
T(5) &= \lb \frac{1}{2}f(a) + \sum_{k=1}^n f(1 + \frac{k(e-1)}{10}) + \frac{1}{2}f(b)\rb \cdot \frac{e-1}{10} \approx 1.00212039\\
S(10) &= \frac{2M(5) + T(5)}{3} \approx 1.00000174
\end{aligned}
$$
