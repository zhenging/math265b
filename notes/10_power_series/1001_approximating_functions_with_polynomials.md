### Section 10.1 Approximating Functions with Polynomials
p692: 1, 2, 3, 4, 7, 9, 15, 17 (do n =2,3 for #15 and 17), 23, 27, 31, 33, 35 (Do n = 2,3 for #31,33,35), 40, 45, 75e, 85.
(There May be changes/omissions to this section of HW On all of the following, use Theorem 10.2 to find a bound on the error: Some of the book answers use a larger M than necessary.... 55, 56, 57, 59, 60, 61, 62, 63, 65, 66, 67, 69, 79, 81) - (TBA)

1\. Suppose you use a Taylor polynomial with n = 2 centered at 0 to approximate a function f . What matching conditions are satisfied
by the polynomial?
>Solution
Let the polynomial be $p(x)$, then $p(0) = f(0), p'(0) = f(0)$ and, $p''(0) = f''(0)$

2\. Does the accuracy of an approximation given by a Taylor polynomial generally increase or decrease with the order of the approximation? Explain.
>Solution
As the order of approximation increases, the accuracy increases too.

3\. The first three Taylor polynomials for $f(x) = \sqrt{1+x}$ centered at 0 are $p_0(x) = 1, p_1(x) = 1 + \frac{x}{2}$, and $p_2(x) = 1 + \frac{x}{2} - \frac{x^2}{8}$. Find three approximations to $\sqrt{1.1}$.
>Solution
$$
\begin{aligned}
p_0(0.1) &= 1 \\
p_1(0.1) &= 1 + \frac{0.1}{2} = 1.05\\
p_2(0.1) &= 1 + \frac{0.1}{2} - \frac{0.1^2}{8} = 1.04875
\end{aligned}
$$

4\. In general, how many terms do the Taylor polynomials $p_2$ and $p_3$
have in common?
>Solution
There will be 3 common terms. $f(0) + f'(0)x + \frac{f''(0)}{2!}x^2$

7–14. **Linear and quadratic approximation**
a. Find the linear approximating polynomial for the following functions centered at the given point a.
b. Find the quadratic approximating polynomial for the following functions centered at the given point a.
c. Use the polynomials obtained in parts (a) and (b) to approximate the given quantity.
7\. $f(x) = 8x^{3/2}, a=1$; approximate $8(1.1^{3/2})$
>Solution
$$
\begin{aligned}
p_1(x) &= 8 + 12(x-1) &p_1(1.1) = 9.2\\
p_2(x) &= 8 + 12(x-1) + 3(x-1)^2 &p_2(1.1) = 9.23
\end{aligned}
$$

9\. $f(x) = e^{-x}, a=0$; approximate $e^{-0.2}$
>Solution
$$
\begin{aligned}
p_1(x) &= 1-x &p_1(0.2) = 0.8\\
p_2(x) &= 1-x + \frac{1}{2}x^2 &p_2(0.2) = 0.82
\end{aligned}
$$

15–22\. **Taylor polynomials**
a. Find the nth-order Taylor polynomials of the given function centered at 0, for n = 2 and 3.
b. Graph the Taylor polynomials and the function.
15\. $f(x) = \cos x$
>Solution
$$
\begin{aligned}
p_0(x) &= 1\\
p_1(x) &= 1\\
p_2(x) &= 1 - \frac{1}{2}x^2\\
p_3(x) &= 1 - \frac{1}{2}x^2
\end{aligned}
$$

17\. $f(x) = \ln(1-x)$
>Solution
$$
\begin{aligned}
p_0(x) &= 0\\
p_1(x) &= -x\\
p_2(x) &= -x - \frac{1}{2}x^2\\
p_3(x) &= -x - \frac{1}{2}x^2 - \frac{1}{3}x^3
\end{aligned}
$$

23–28. **Approximations with Taylor polynomials**
a. Use the given Taylor polynomial $p_2$ to approximate the given quantity.
b. Compute the absolute error in the approximation assuming the exact value is given by a calculator.
23\. Approximating $\sqrt{1.05}$ using $f(x) = \sqrt{1+x}$ and $p_2(x) = 1 + x/2 -x^2/8$.
>Solution
$$
\begin{aligned}
p_2(0.05) &= 1.0246875\\
Error &= |p_2(0.05) - f(0.05)| = 7.58\times 10^{-6}
\end{aligned}
$$

27\. Approximating $e^{-0.15}$ using $f(x) = e^{-x}$ and $p_2(x) = 1 - x + x^2/2$.
>Solution
$$
\begin{aligned}
p_2(0.15) &= 0.86125\\
Error &= |p_2(0.15) - f(0.15)| = 5.42 \times 10^{-4}
\end{aligned}
$$

29–38. **Taylor polynomials centered at $a \ne 0$.**
a. Find the nth-order Taylor polynomials for the given function centered at the given point a, for n = 2 and 3.
b. Graph the Taylor polynomials and the function.
31\. $f(x) = \sin x, a=\pi/4$
>Solution
$$
\begin{aligned}
p_0(x) &= \frac{\sqrt 2}{2}\\
p_1(x) &= \frac{\sqrt 2}{2} + \frac{\sqrt 2}{2}(x-\frac{\pi}{4})\\
p_2(x) &= \frac{\sqrt 2}{2} + \frac{\sqrt 2}{2}(x-\frac{\pi}{4}) - \frac{\sqrt 2}{4}(x-\frac{\pi}{4})^2\\
p_3(x) &= \frac{\sqrt 2}{2} + \frac{\sqrt 2}{2}(x-\frac{\pi}{4}) - \frac{\sqrt 2}{4}(x-\frac{\pi}{4})^2 - \frac{\sqrt 2}{12}(x-\frac{\pi}{4})^3
\end{aligned}
$$

33\. $f(x) = \sqrt x, a = 9$
>Solution
$$
\begin{aligned}
p_0(x) &= 3\\
p_1(x) &= 3 + \frac{1}{6}(x-9)\\
p_2(x) &= 3 + \frac{1}{6}(x-9)-\frac{1}{216}(x-9)^2\\
p_3(x) &= 3 + \frac{1}{6}(x-9)-\frac{1}{216}(x-9)^2 + \frac{1}{3888}(x-9)^3
\end{aligned}
$$

35\. $f(x) = \ln x, a = e$
>Solution
$$
\begin{aligned}
p_0(x) &= 1\\
p_1(x) &= 1 + \frac{1}{e}(x-e)\\
p_2(x) &= 1 + \frac{1}{e}(x-e) - \frac{1}{2e^2}(x-e)^2\\
p_3(x) &= 1 + \frac{1}{e}(x-e) - \frac{1}{2e^2}(x-e)^2 + \frac{1}{3e^3}(x-e)^3
\end{aligned}
$$

39–48. **Approximations with Taylor polynomials**
a. Approximate the given quantities using Taylor polynomials with n = 3.
b. Compute the absolute error in the approximation assuming the exact value is given by a calculator.
40\. $\cos(-0.2)$
>Solution
$$
\begin{aligned}
p_3(x) &= 1-\frac{x^2}{2}\\
p_3(-0.2) &= 0.98\\
Error &= |p_3(-0.2) - f(-0.2)| = 0.0000665778
\end{aligned}
$$

45\. $\sqrt{101}$
>Solution
$$
\begin{aligned}
p_3(x) &= 10 + \frac{1}{20}(x-100) - \frac{1}{8000}(x-100)^2 + \frac{1}{1600000}(x-100)^3\\
p_3(101) &= 10.049875625\\
Error &= |p_3(101) - f(101)| = 3.88 \times 10^{-9}
\end{aligned}
$$

75\. Matching functions with polynomials Match functions a–f with Taylor polynomials A–F (all centered at 0). Give reasons for your choices.
e. $\frac{1}{(1+2x)^3}$
>Solution
$$
\begin{aligned}
p_2(x) &= f(0) + f'(0)x + \frac{f''(0)}{2!}x^2\\
&= 1 - 6x + 24x^2
\end{aligned}
$$

85\. **Errors in approximations** Suppose you approximate $\sin x$ at the points x = - 0.2, - 0.1, 0.0, 0.1, and 0.2 using the Taylor polynomials $p_3 = x - x^3 / 6$ and $p_5 = x - x^3/6 + x^5/120$. Assume that the exact value of $\sin x$ is given by a calculator.
a. Complete the table showing the absolute errors in the approximations at each point. Show two significant digits.
b. In each error column, how do the errors vary with x? For what values of x are the errors the largest and smallest in magnitude?
x    | $\vert\sin x - p_3(x)\vert$ | $\vert\sin x - p_5(x)\vert$
-----|-----------------------------|----------------------------
-0.2 | $2.7 \times 10^{-6}$ | $2.5 \times 10^{-9}$
-0.1 | $8.3 \times 10^{-8}$ | $2.0 \times 10^{-11}$
0.0  | $0$ | $0$
0.1  | $8.3 \times 10^{-8}$ | $2.0 \times 10^{-11}$
0.2  | $2.7 \times 10^{-6}$ | $2.5 \times 10^{-9}$
>Solution
a. See Table Above.
b.  The errors are equal for positive and negative x, and appear to get larger as x gets farther from zero.
