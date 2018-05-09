### Section 10.2 Properties of Power Series
p702: 1, 2, 9, 10, 11, **13**, 14, 15, 17, 19, 20, 21, 26, 29, 31, 33, **35**, 37, 41, 42, **45**, **53a**, 57, 58, 59, **65**, **66**, 71, 72, 76

1\. Write the first four terms of a power series with coefficients $c_0, c_1, c_2$, and $c_3$ centered at 0.
>Solution
$c_0 + c_1 x + c_2 x^2 + c_3 x^3$

2\. Write the first four terms of a power series with coefficients $c_0, c_1, c_2$, and $c_3$ centered at 3.
>Solution
$c_0 + c_1 (x-3) + c_2 (x-3)^2 + c_3 (x-3)^3$

9–28. **Interval and radius of convergence** Determine the radius of convergence of the following power series. Then test the endpoints to determine the interval of convergence.
9\. $\sum (2x)^k$
>Solution
$$
\begin{aligned}
\rho = \lim_{k \to \infty}\sqrt[k]{|a_k|} = \lim_{k \to \infty} |2x|
\end{aligned}
$$
By the Root test, the radius of convergence is $R=\frac{1}{2}$. When $x=\frac{1}{2}$, $\sum 1$ diverges; when $x=-\frac{1}{2}$, $\sum (-1)^k$ diverges too. The interval of convergence is $(-\frac{1}{2}), \frac{1}{2})$.

10\. $\sum \frac{(2x)^k}{k!}$
>Solution
$$
\begin{aligned}
r &= \lim_{k \to \infty} | \frac{(2x)^{k+1}/(k+1)!}{(2x)^{k}/k!}\\
&= |2x| \lim_{k \to \infty}\frac{1}{k+1} = 0
\end{aligned}
$$
By the Ratio Test, the series converges for all x. The interval of convergence is $(-\infty, \infty)$. The radius of convergence is $R =\infty$.

11\. $\sum \frac{(x-1)^k}{k}$
>Solution
$$
\begin{aligned}
r &= \lim_{k \to \infty} | \frac{(x-1)^{k+1}/k+1}{(x-1)^{k}/k}|\\
&= |x-1| \lim_{k \to \infty}\frac{k}{k+1} \\
&= |x-1|
\end{aligned}
$$
By the Ratio test, the radius of convergence is $R=1$. When $x=2$, $\sum \frac{1}{k}$ diverges; when $x=0$, $\sum \frac{(-1)^k}{k}$ converges. The interval of convergence is $[0, 2)$.

13\. $\sum (kx)^k$
>Solution
$$
\begin{aligned}
\rho = \lim_{k \to \infty}\sqrt[k]{|a_k|} = \lim_{k \to \infty} |kx|\\
\end{aligned}
$$
By the Root Test, for x=0, the series converges. The radius of convergence is $R=0$.

14\. $\sum k!(x-10)^k$
>Solution
$$
\begin{aligned}
r &= \lim_{k \to \infty} |\frac{(k+1)!(x-10)^{k+1}}{k!(x-10)^k}|\\
&= |x-10| \lim_{k \to \infty} (k+1)
\end{aligned}
$$
By the Ratio Test, for x=10, the series converges. The radius of convergence is $R=0$.

15\. $\sum \sin^k(\frac{1}{k}) x^k$
>Solution
$$
\begin{aligned}
\rho &= \lim_{k \to \infty} \sqrt[k]{|a_k|} = |x|\lim_{k \to \infty} \sin(\frac{1}{k})\\
&= |x| \cdot 0 = 0
\end{aligned}
$$
By the Root Test, the series converges for all x. The radius of convergence is $R=\infty$, and the interval of convergence is $(-\infty, \infty)$.

17\. $\sum (\frac{x}{3})^k$
>Solution
$$
\begin{aligned}
\rho &= \lim_{k \to \infty} \sqrt[k]{|a_k|} = |\frac{x}{3}|
\end{aligned}
$$
By the Root Test, the series converges for $|\frac{x}{3}| < 1$. When x=3, $\sum 1$ diverges; when x=-3, $\sum (-1)^k$ diverges too. The radius of convergence is $R=3$, and the interval of convergence is $(-3, 3)$.

19\. $\sum \frac{x^k}{k^k}$
>Solution
$$
\begin{aligned}
\rho &= \lim_{k \to \infty} \sqrt[k]{|a_k|} = \lim_{k \to \infty} |\frac{x}{k}| = 0
\end{aligned}
$$
By the Root Test, the series converges for all x. The radius of convergence is $R=\infty$, and the interval of convergence is $(-\infty, \infty)$.

20\. $\sum (-1)^k \frac{k(x-4)^k}{2^k}$
>Solution
$$
\begin{aligned}
r &= \lim_{k \to \infty} |\frac{\frac{(k+1)(x-4)^{k+1}}{2^{k+1}}}{\frac{k(x-4)^k}{2^k}}|\\
&= |\frac{x-4}{2}| \lim_{k \to \infty} \frac{k+1}{k}\\
&= |\frac{x-4}{2}|
\end{aligned}
$$
By the Ratio Test, the series converges for $|\frac{x-4}{2}| < 1$, or $2 < x < 6$. When x=6, $\sum (-1)^k k$ diverges when $x=2$, $\sum k$ diverges too. The radius of converges is $R=2$, and the interval of convergence is $(2, 6)$.

21\. $\sum \frac{k^2 x^{2k}}{k!}$
>Solution
$$
\begin{aligned}
r &= \lim_{k \to \infty} \frac{(k+1)^2 x^{2k+2} / (k+1)!}{k^2 x^{2k} / k!}
&= x^2 \lim_{k \to \infty} \frac{k+1}{k^2} = 0
\end{aligned}
$$
By the Ratio Test, the series converges for all x. The radius of convergence is $R=\infty$, and the interval of convergence is $(-\infty, \infty)$.

26\. $\sum \frac{(-2)^k (x+3)^k}{3^{k+1}}$
>Solution
$$
\begin{aligned}
r &= \lim_{k \to \infty} \frac{\frac{(-2)^{k+1} (x+3)^{k+1}}{3^{k+2}}}{\frac{(-2)^k (x+3)^k}{3^{k+1}}}\\
&= |\frac{2}{3}(x+3)|
\end{aligned}
$$
By the Ratio Test, the series converges for $|\frac{2}{3}(x+3)| < 1$, or $-\frac{9}{2} < x < \frac{3}{2}$. When $x=-\frac{9}{2}$, $\sum \frac{1}{3}$ diverges; when $x=\frac{3}{2}$ diverges too. The radius of convergence is $R=\frac{3}{2}$, and the interval of convergence is $(-\frac{9}{2}, \frac{3}{2})$.

29–34. **Combining power series** Use the geometric series
$$
f(x) = \dfrac{1}{1-x} = \sum_{k=0}^{\infty}x^k
$$
for $|x| < 1$, to find the power series representation for the following functions (centered at 0). Give the interval of convergence of the new series.
29\. $f(3x) = \frac{1}{1-3x}$
>Solution
$f(3x) = \sum_{k=0}^{\infty}(3x)^k$. The series converges for $(-\frac{1}{3}, (\frac{1}{3}))$

31\. $h(x) = \frac{2x^3}{1-x}$
>Solution
$h(x) = \sum_{k=0}^{\infty}2x^3 x^k = \sum_{k=0}^{\infty}2x^{k+3}$. The series converges for $(-1, 1)$.

33\. $p(x) = \frac{4x^{12}}{1-x}$
>Solution
$p(x) = \sum_{k=0}^{\infty}4x^{12} x^k = \sum_{k=0}^{\infty}4x^{k+12}$. The series converges for $(-1, 1)$.

35–40. **Combining power series** Use the power series representation
$$
f(x) = \ln(1-x) = -\sum_{k=1}^{\infty}\frac{x^k}{k}
$$
for $-1 \les x < 1$, to find the power series representation for the following functions (centered at 0). Give the interval of convergence of the new series.
35\. $f(3x) = \ln(1-3x)$
>Solution
$f(3x) = -\sum_{k=1}^{\infty}\frac{(3x)^k}{k}$
$$
\begin{aligned}
r &= \lim_{k \to \infty} \frac{\frac{(3x)^{k+1}}{k+1}}{\frac{(3x)^k}{k}}\\
&= |3x| \lim_{k \to \infty} \frac{k}{k+1} = |3x|
\end{aligned}
$$
By the Ratio Test, the series converges for $|x| < \frac{1}{3}$.

37\. $h(x) = x\ln(1-x)$
>Solution
$h(x) = -\sum_{k=1}^{\infty}\frac{x^{k+1}}{k}$
$$
\begin{aligned}
r &= \lim_{k \to \infty} \frac{\frac{x^{k+2}}{k+1}}{\frac{x^{k+1}}{k}}\\
&= |x| \lim_{k \to \infty} \frac{k}{k+1} = |x|
\end{aligned}
$$
By the Ratio Test, the series converges for $|x| < 1$.

41–46. **Differentiating and integrating power series** Find the power series representation for g centered at 0 by differentiating or integrating the power series for f (perhaps more than once). Give the interval of convergence for the resulting series.
41\. $g(x) = \frac{1}{(1-x)^2}$ using $f(x) = \frac{1}{1-x}$
>Solution
The power series for $f(x)$ is $\sum_{k=0}^{\infty}x^k$, for $|x|<1$. The power series for $g(x) = f'(x)$ is $\sum_{k=0}^{\infty}kx^{k-1}$. It also converges for $|x|<1$.

42\. $g(x) = \frac{1}{(1-x)^3}$ using $f(x) = \frac{1}{1-x}$
>Solution
$g(x) = (f(x))^3$, therefore the power series for $g(x)$ is $\sum_{k=0}^{\infty}x^{3k}$. It converges for $|x|<1$.

45\. $g(x) = \ln(1-3x)$ using $f(x) = \frac{1}{1-3x}$
>Solution
The power series for $f(x)$ is $\sum_{k=0}^{\infty}(3x)^k$.
$$
\begin{aligned}
g(x) = -3\int \frac{1}{1-3x} dx
\end{aligned}
$$
Therefore the power series for $g(x)$ is $-3 \sum_{k=0}^{\infty} 3^k \frac{x^{k+1}}{k+1}$. It also converges for $|x|<1$.

53\. **Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
a. The interval of convergence of the power series $\sum c_k(x-3)^k$ could be $(-2, 8)$.
>Solution
True. This power series is centered at $x=3$, and $(-2, 8)$ is symmetric about 3.

56–59. **Summation notation** Write the following power series in summation (sigma) notation.
57\. $1 - \frac{x}{2} + \frac{x^2}{3} - \frac{x^3}{4} + \cdots$
>Solution
$\sum_{k=0}^{\infty} (-1)^k \frac{x^k}{k+1}$

58\. $x - \frac{x^3}{4} + \frac{x^5}{9} - \frac{x^7}{16} + \cdots$
>Solution
$\sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(k+1)^2}$

59\. $-\frac{x^2}{1!} + \frac{x^4}{2!} - \frac{x^6}{3!} + \frac{x^8}{4!} + \cdots$
>Solution
$\sum_{k=1}^{\infty} (-1)^k \frac{x^{2k}}{k!}$

62–67. **Series to functions** Find the function represented by the following series and find the interval of convergence of the series.
65\. $\sum_{k=0}^{\infty} e^{-kx}$
>Solution
The series is a geometri series with ratio of $e^{-x}$. The series converges for $e^{-x}<1$, or $x>$0
$$
\begin{aligned}
\sum_{k=0}^{\infty} e^{-kx} = \frac{1}{1-e^{-x}}
\end{aligned}
$$

66\. $\sum_{k=1}^{\infty} \frac{(x-2)^k}{3^{2k}}$
>Solution
The series is a geometri series with ratio of $\frac{x-2}{9}$. The series converges for $|\frac{x-2}{9}| < 1$, or $-7 < x < 11$.
$$
\begin{aligned}
\sum_{k=1}^{\infty} \frac{(x-2)^k}{3^{2k}} &= \sum_{k=0}^{\infty} (\frac{x-2}{9}) \cdot (\frac{x-2}{9})^k\\
&= \frac{x-2}{9} \cdot \frac{1}{1-\frac{x-2}{9}}\\
&= \frac{x-2}{11-x}
\end{aligned}
$$

69–72. **Exponential function** In Section 10.3, we show that the power series for the exponential function centered at 0 is
$$
\begin{aligned}
e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}
\end{aligned}
$$
for  $-\infty < x \infty$. Use the methods of this section to find the power series for the following functions. Given the interval of convergence for the resulting series.
71\. $f(x) = e^{-3x}$
>Solution
$e^{-3x} = \sum_{k=0}^{\infty} \frac{(-3x)^k}{k!}$

72\. $f(x) = x^2 e^x$
>Solution
$x^2 e^x = x^2\sum_{k=0}^{\infty} \frac{(2x)^k}{k!}$

76\. Inverse sine Given the power series
$$
\begin{aligned}
\frac{1}{\sqrt{1-x^2}} = 1 + \frac{1}{2}x^2 + \frac{1\cdot 3}{2\cdot 4} x^4 + \frac{1\cdot 3 \cdot 5}{2\cdot 4 \cdot 6}x^6 + \cdots
\end{aligned}
$$
for $-1 < x < 1$, find the power series for $f(x) = \sin^{-1} x$ centered at 0
>Solution
$$
\begin{aligned}
f'(x) &= \frac{1}{\sqrt{1-x^2}}\\
f(x) &= \int (1 + \frac{1}{2}x^2 + \frac{1\cdot 3}{2\cdot 4} x^4 + \frac{1\cdot 3 \cdot 5}{2\cdot 4 \cdot 6}x^6 + \cdots) dx\\
&= x + \frac{1}{2 \cdot 3}x^3 + \frac{1\cdot 3}{2\cdot 4 \cdot 5} x^5 + \frac{1\cdot 3 \cdot 5}{2\cdot 4 \cdot 6 \cdot 7}x^7 + \cdots
\end{aligned}
$$
