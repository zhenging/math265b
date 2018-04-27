### Section 9.6 Alternating Series
p677: 1, 2, 6, 7, 9, 11, 13, 15, 19, 22, 24, 27, 45, 46, 47, 48, 49, 52, 53, 54, 57bdg, 61 (On #11-27 below, if sequence diverges note test used.)

1\. Explain why the sequence of partial sums for an alternating series is not an increasing sequence.
>Solution
Because $S_{n+1} - S_{n} = a_{n+1}$ alternates signs.

2\. Describe how to apply the Alternating Series Test.
>Solution
1\. The terms of the series are nonincreasing in magnitude.
2\. $\dlim_{k \to \infty} a_k=0$

6\. Give an example of a convergent alternating series that fails to converge absolutely.
>Solution
$\sum_{k=1}^{\infty} \frac{(-1)^k}{k^{2/3}}$.

7\. Is it possible for a series of positive terms to converge conditionally? Explain.
>Solution
No, If the terms are positive, then the absolute value of each term is the term itself, so convergence and absolute convergence would mean the same thing in this context.

9\. Is it possible for an alternating series to converge absolutely but not conditionally?
>Solution
Yes. For example, $\sum_{k=1}^{\infty} \frac{(-1)^k}{k^3}$ converges absolutely and thus not conditionally.

11–28\. **Alternating Series Test** Determine whether the following series converge.
11\. $\sum_{k=0}^{\infty} \frac{(-1)^k}{2k+1}$
>Solution
The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{2k+1} = 0$, so the given series converges.

13\. $\sum_{k=1}^{\infty} \frac{(-1)^k k}{3k+2}$
>Solution
$\dlim_{k \to \infty} \frac{k}{3k+2} = \frac{1}{3} \ne 0$, so the given series diverges.

15\. $\sum_{k=1}^{\infty} \frac{(-1)^{k+1}}{k^3}$
>Solution
The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{k^3} = 0$, so the given series converges.

19\. $\sum_{k=2}^{\infty} (-1)^k\frac{k^2-1}{k^2 + 3}$
>Solution
$\dlim_{k \to \infty} \frac{k^2-1}{k^2 + 3} = 1 \ne 0$, so the given series diverges.

22\. $\sum_{k=1}^{\infty} \frac{\cos (\pi k)}{k^2}$
>Solution
1\. $\sum_{k=1}^{\infty} \frac{\cos (\pi k)}{k^2} = \sum_{k=1}^{\infty} \frac{(-1)^k}{k^2}$
2\. The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{k^2} = 0$, so the given series converges.

24\. $\sum_{k=2}^{\infty} \frac{(-1)^k}{k \ln^2 k}$
>Solution
The terms of the series decreases in magnitude for $k \ges 2$, and $\dlim_{k \to \infty} \frac{1}{k \ln^2 k} = 0$, so the given series converges.

27\. $\sum_{k=0}^{\infty} \frac{(-1)^k}{\sqrt{k^2+4}}$
>Solution
The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{\sqrt{k^2+4}} = 0$, so the given series converges.

45–56\. **Absolute and conditional convergence** Determine whether the following series converge absolutely or conditionally, or diverge.
45\. $\sum_{k=1}^{\infty} \frac{(-1)^k}{k^{2/3}}$
>Solution
1\. The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{k^{2/3}} = 0$, so the given series converges.
2\. $\sum_{k=1}^{\infty} |\frac{(-1)^k}{k^{2/3}}| = \sum_{k=1}^{\infty} \frac{1}{k^{2/3}}$. $\sum_{k=1}^{\infty} \frac{1}{k^{2/3}}$ diverges (p-series, $p<1$).
Therefore, the given series converge conditionally.

46\. $\sum_{k=1}^{\infty} \frac{(-1)^k}{\sqrt k}$
>Solution
1\. The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{\sqrt k} = 0$, so the given series converges.
2\. $\sum_{k=1}^{\infty} |\frac{(-1)^k}{\sqrt k}| = \sum_{k=1}^{\infty} \frac{1}{\sqrt k}$. $\sum_{k=1}^{\infty} \frac{1}{\sqrt k}$ diverges (p-series, $p =\frac{1}{2}<1$).
Therefore, the given series converge conditionally.

47\. $\sum_{k=1}^{\infty} \frac{(-1)^{k+1}}{k^{3/2}}$
>Solution
1\. The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{k^{3/2}} = 0$, so the given series converges.
2\. $\sum_{k=1}^{\infty} |\frac{(-1)^{k+1}}{k^{3/2}}| = \sum_{k=1}^{\infty} \frac{1}{k^{3/2}}$. $\sum_{k=1}^{\infty} \frac{1}{k^{3/2}}$ coverges (p-series, $p>1$).
Therefore, the given series converge absolutely.

48\. $\sum_{k=1}^{\infty} (-\frac{1}{3})^k$
>Solution
Both $\sum_{k=1}^{\infty} (-\frac{1}{3})^k$ and $\sum_{k=1}^{\infty} (\frac{1}{3})^k$ converges (Geomeric Series, $|r|<1$), so the given series converges absolutely.

49\. $\sum_{k=1}^{\infty} \frac{\cos k}{k^3}$
>Solution
$\frac{|\cos k|}{k^3} \les \frac{1}{k^3}$. $\sum_{k=1}^{\infty} \frac{1}{k^3}$ converges (p-series, $p>1$), so $\sum_{k=1}^{\infty} \frac{|\cos k|}{k^3}$ converges. The given series converges absolutely.

52\. $\sum_{k=1}^{\infty} (-1)^k e^{-k}$
>Solution
$\sum_{k=1}^{\infty} (-1)^k e^{-k} = \sum_{k=1}^{\infty} (\frac{-1}{e})^k$. $\sum_{k=1}^{\infty} (\frac{|-1|}{e})^k$ converges (geometric series, $|r|<1$), so the given series converges absolutely.

53\. $\sum_{k=1}^{\infty} \frac{(-1)^k k}{2k+1}$
>Solution
$\dlim_{k \to \infty} \frac{k}{2k+1} = \frac{1}{2} \ne 0$, so the given series diverges.

54\. $\sum_{k=2}^{\infty} \frac{(-1)^k}{\ln k}$
>Solution
1\. The terms of the series decreases in magnitude, and $\dlim_{k \to \infty} \frac{1}{\ln k} = 0$, so the given series converges.
2\. $\sum_{k=2}^{\infty} |\frac{(-1)^k}{\ln k}| = \sum_{k=2}^{\infty} \frac{1}{\ln k}$. Because $\frac{1}{\ln k} > \frac{1}{k}$ for $k\ges 2$ and the series $\sum_{k=2}^{\infty} \frac{1}{k}$ diverges, $\sum_{k=2}^{\infty} \frac{1}{\ln k}$ diverges by the Direct Comparison Test.
Therefore, the given series converges conditionally.

57\. **Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
b. A series that converges absolutely must converge.
d. If $\sum a_k$ diverges, $\sum |a_k|$ diverges.
g. If $\sum a_k$ converges conditionally, then $\sum |a_k|$ diverges.
>Solution
a. True.
b. True.
g. True.

61\. Geometric series In Section 9.3, we established that the geometric series $\sum r^k$ converges provided $|r| < 1$. Notice that if $-1 < r < 0$, the geometric series is also an alternating series. Use the Alternating Series Test to show that for $-1 < r < 0$, the series $\sum r^k$ converges.
>Solution
Let $r = -s$, then $0 < s < 1$,
$$
\begin{aligned}
\sum r^k = \sum (-1)^k s^k
\end{aligned}
$$
Because $|s| < 1$,the terms $s^k$ decreases and $\dlim_{k \to \infty} s^k = 0$, so by the Alternating Series Test, the series $\sum s^k$ converges, so $\sum (-1)^k s^k = \sum r^k$ converges.
