### Section 9.4 The Divergence and Integral Tests
p659: 2, 3, 5, 6, 9, 10, 11, 12, 13, 19,20, 21, 23, 25, 27, 29, 31, 32, 33, **43**, 45, 49, 50, 51abf, 55, 56, 57, 60ab

2\. Is it true that if the terms of a series of positive terms decrease to zero, then the series converges? Explain using an example.
>Solution

3\. Can the Integral Test be used to determine whether a series diverges?

5\. For what values of $p$ does the series $\sum_{k=10}^{\infty} \frac{1}{k^p}$ (initial index is 10)) converge? For what values of $p$ does it diverges?

6\. Explain why the sequence of partial sums for a series with positive terms is an increasing sequence.

9–18\. **Divergence Test** Use the Divergence Test to determine whether the following series diverge or state that the test is inconclusive.
9\. $\sum_{k=0}^{\infty} \frac{k}{2k+1}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k}{2k+1} &= \lim_{k \to \infty} (\frac{1}{2} - \frac{1}{4k+2})\\
&= \frac{1}{2} - 0 = \frac{1}{2}
\end{aligned}
$$
The series _diverges_ as $\dlim_{k \to \infty}a_k \ne 0$.

10\. $\sum_{k=1}^{\infty} \frac{k}{k^2+1}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k}{k^2+1} &= \lim_{k \to \infty} \frac{1}{k+\frac{1}{k}} = 0
\end{aligned}
$$
The divergence test is _inconclusive_ as $\dlim_{k \to \infty}a_k = 0$.

11\. $\sum_{k=2}^{\infty} \frac{k}{\ln k}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k}{\ln k} &= \lim_{k \to \infty} \frac{1}{\frac{1}{k}} \\
&= \lim_{k \to \infty} k = \infty
\end{aligned}
$$
The series _diverges_ as $\dlim_{k \to \infty}a_k \ne 0$.

12\. $\sum_{k=1}^{\infty} \frac{k^2}{2^k}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k^2}{2^k} = 0 &\qquad k^2 \ll 2^k
\end{aligned}
$$
The divergence test is _inconclusive_ as $\dlim_{k \to \infty}a_k = 0$.

13\. $\sum_{k=0}^{\infty} \frac{1}{1000 + k}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{1}{1000 + k} = 0
\end{aligned}
$$
The divergence test is _inconclusive_ as $\dlim_{k \to \infty}a_k = 0$.

19–28\. **Integral Test** Use the Integral Test to determine the convergence or divergence of the following series, or state that the conditions of the test are not satisfied and, therefore, the test does not apply.
19\. $\sum_{k=2}^{\infty} \frac{1}{k \ln k}$
>Solution
1\. The associated function is $f(x) = \frac{1}{x \ln x}$, which is positive, for $x \ges 2$.
2\. The derivative of $f(x)$ is always negetive, so $f(x)$ is a continues and decreasing function.
$$
\begin{aligned}
f'(x) &= -\frac{1}{(x\ln x)^2} \cdot (\ln x + x \cdot \frac{1}{x})\\
&= -\frac{\ln x + 1}{(x\ln x)^2} < 0 &\text{for } x \ges 2
\end{aligned}
$$
3\. The relevant integrals is
$$
\begin{aligned}
\int_2^{\infty} \frac{1}{x \ln x} &= \lim_{t \to \infty} \int_2^t \frac{1}{x \ln x} &\text{Definition of improper integral}\\
&= \lim_{t \to \infty} [\ln (\ln x)]\mid_2^t \\
&= \infty
\end{aligned}
$$
Because the integral diverges, the series also diverges.

20\. $\sum_{k=1}^{\infty} \frac{k}{\sqrt{k^2 + 4}}$
>Solution
1\. The associated function is $f(x) = \frac{x}{\sqrt{x^2 + 4}}$, which is positive, for $x \ges 1$.
2\. The derivative is $f(x)$ is always positive, so $f(x)$ is a continous and _increasing_ function.
$$
\begin{aligned}
f'(x) &= \frac{1\cdot \sqrt{x^2 + 4} - x \cdot \frac{2x}{2\sqrt {x^2 + 4}}}{x^2 + 4}\\
&= \frac{4}{(x^2 + 4)^{\frac{3}{2}}} > 0 &\text{for } x \ges 1
\end{aligned}
$$
Because the associated function is an increasing function, the integral test does not apply.

21\. $\sum_{k=1}^{\infty} ke^{-2k^2}$
>Solution
1\. The associated function $f(x) = xe^{-2x^2}$, which is positive, for $x \ges 1$.
2\. The derivative is $f(x)$ is always positive, so $f(x)$ is a continous and _increasing_ function.
$$
\begin{aligned}
f'(x) &= e^{-2x^2} + x \cdot (-2x^2) \cdot (-4x) \cdot e^{-2x^2}\\
&= e^{-2x^2}(8x^4 + 1) > 0 &\text{for } x \ges 1
\end{aligned}
$$
Because the associated function is an increasing function, the integral test does not apply.

23\. $\sum_{k=0}^{\infty} \frac{1}{\sqrt{k + 8}}$
Todo

25\. $\sum_{k=1}^{\infty} \frac{k}{e^k}$
Todo

27\. $\sum_{k=1}^{\infty} \frac{|\sin k|}{k^2}$
Todo

29–34\. **p-series** Determine the convergence or divergence of the following series.
29\. $\sum_{k=1}^{\infty} \frac{1}{k^{10}}$
>Solution
$p=10 > 1$. By Converence of p-Series, the series _converges_.

31\. $\sum_{k=3}^{\infty} \frac{1}{(k-2)^2}$
>Solution
$\sum_{k=3}^{\infty} \frac{1}{(k-2)^2} = \sum_{k=1}^{\infty} \frac{1}{k^2} = 1+ \frac{1}{2^2}+ \frac{1}{3^2} + \cdots$
$p=2 > 1$. By Converence of p-Series, the series _converges_.

32\. $\sum_{k=1}^{\infty} 2k^{-3/2}$
>Solution
$p=\frac{3}{2} > 1$. By Converence of p-Series and Properties of Convergent Series, the series _converges_.

33\. $\sum_{k=1}^{\infty} \frac{1}{\sqrt[3] k}$
>Solution
$p=\frac{3}{2} > 1$. By Converence of p-Series, the series _converges_.

43–50\. **Properties of series** Use the properties of infinite series to evaluate the following series.
43\. $\sum_{k=1}^{\infty} \frac{4}{12^k}$
>Solution
$$
\begin{aligned}
\sum_{k=1}^{\infty} \frac{4}{12^k} &= \sum_{k=0}^{\infty} \frac{1}{3} \cdot (\frac{1}{12})^k\\
&= \frac{1}{3} \cdot \frac{1}{1-\frac{1}{12}} = \frac{4}{11}
\end{aligned}
$$

45\. $\sum_{k=0}^{\infty} \lb 3(\frac{2}{5})^k - 2(\frac{5}{7})^k\rb$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{\infty} \lb 3(\frac{2}{5})^k - 2(\frac{5}{7})^k\rb &= 3 \cdot \frac{1}{1-\frac{2}{5}} - 2 \cdot \frac{1}{1-\frac{5}{7}} = -2
\end{aligned}
$$

49\. $\sum_{k=1}^{\infty} \lb (\frac{1}{6})^k + (\frac{1}{3})^{k-1}\rb$
>Solution
$$
\begin{aligned}
\sum_{k=1}^{\infty} \lb (\frac{1}{6})^k + (\frac{1}{3})^{k-1}\rb &= \sum_{k=0}^{\infty} \frac{1}{6} \cdot (\frac{1}{6})^k + \sum_{k=0}^{\infty} (\frac{1}{3})^k\\
&= \frac{1}{6} \cdot \frac{1}{1-\frac{1}{6}} + 1 \cdot \frac{1}{1-\frac{1}{3}} = \frac{17}{10}
\end{aligned}
$$

50\. $\sum_{k=0}^{\infty} \frac{2-3^k}{6^k}$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{\infty} \frac{2-3^k}{6^k} &= \sum_{k=0}^{\infty} 2 \cdot (\frac{1}{6})^k - \sum_{k=0}^{\infty} (\frac{3}{6})^k\\
&= 2\cdot \frac{1}{1-\frac{1}{6}} - 1 \cdot \frac{1}{1-\frac{3}{6}} = \frac{2}{5}
\end{aligned}
$$

51abf\.

55\.

56\.

57\.

60\. ab
