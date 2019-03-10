### Section 9.4 The Divergence and Integral Tests

#### The Divergence Test

>Theorem 9.8 Divergence Test
If $\sum a_k$ converges, then $\dlim_{k \to \infty} a_k=0$. Equivalently, if $\dlim_{k \to \infty} a_k \ne 0$, then the series diverges.

_Important note: Theorem 9.8 can not be used to determine convergence._

##### Proof
Let $\{ S_n \}$ be the sequence of partial sums for the series $\sum a_k$ . Assuming the series converges, it has a finite value, call it $S$, where
$$
\begin{aligned}
S = \lim_{k \to \infty} S_k = \lim_{k \to \infty} S_{k-1}.
\end{aligned}
$$
Note that $S_{k-1} - S_k = a_k$. Therefore,
$$
\begin{aligned}
\lim_{k \to \infty} a_k = \lim_{k \to \infty} (S_{k-1} - S_k) = S - S = 0
\end{aligned}
$$
that is, $\dlim_{k \to \infty} a_k=0$. The second part of the test follows immediately because it is the _contrapositive_ of the first part.
![Graph](../assets/theorem0908.png)

##### Examples
a. $\sum_{k=0}^{\infty} \frac{k}{k+1}$ &emsp; b. $\sum_{k=1}^{\infty} \frac{1+3^k}{2^k}$ &emsp; c. $\sum_{k=1}^{\infty} \frac{1}{k}$ &emsp; d. $\sum_{k=1}^{\infty} \frac{1}{k^2}$
>Solution
a. Divergent.
b. Divergent.
c. **Inconclusive**. $\dlim_{k \to \infty} \frac{1}{k} = 0$. (The divergence test can not be used to prove that a series converges.)
d. **Inconclusive**. Similar to part c.

#### The p-Series

>Theorem 9.11 Convergentce of the p-Series
The p-Series $\sum_{k=1}^{\infty}\dfrac{1}{k^p}$, for $p > 1$, and diverges, for $p \les 1$.

##### Proof
Todo

##### Examples
a. $\sum_{k=1}^{\infty} \frac{1}{\sqrt[4]{k^3}}$ &emsp; b. $\sum_{k=4}^{\infty} \frac{1}{(k-1)^2}$
>Solution
a. Divergent.
b. **Convergent**.

#### The Integral Test

>Theorem 9.10 Integral Test
Suppose $f$ is a continuous, positive, decreasing function, for $x \ges 1$, and ket $a_k = f(k)$, for $k=1, 2, 3 \cdots$. Then
$$
\begin{aligned}
\sum_{k=1}^{\infty} a_k \quad \text{and} \quad \dint_1^{\infty} f(x)dx
\end{aligned}
$$
either both converge or both diverge. In the case of convergence, the value of the integral is _not_, in general, equal to the value of the series.

##### Proof
Todo

##### Examples
a. $\sum_{k=1}^{\infty} \frac{k}{k^2+1}$ &emsp; b. $\sum_{k=3}^{\infty} \frac{1}{\sqrt{2k-5}}$ &emsp; c. $\sum_{k=0}^{\infty} \frac{1}{k^2+4}$
>Solution
a. Divergent.
b. Divergent.
c. **Convergent.**


#### Homework
p659: 2, 3, 5, 6, 9, 10, 11, 12, 13, 19,20, **21**, 23, 25, **27**, 29, 31, 32, **33**, **43**, 45, 49, 50, 51abf, 55, 56, 57, **60ab**

2\. Is it true that if the terms of a series of positive terms decrease to zero, then the series converges? Explain using an example.
>Solution
False. Counterexample $\sum_{k=1}^{\infty} \frac{1}{k}$

3\. Can the Integral Test be used to determine whether a series diverges?
>Solution
Yes. Either the series and the integral both converge, or both diverge, if the terms are _postive_ and _decreasing_.

5\. For what values of $p$ does the series $\sum_{k=10}^{\infty} \frac{1}{k^p}$ (initial index is 10)) converge? For what values of $p$ does it diverges?
>Solution
When $p>1$, the series converges, and diverges for all other values of $p$.

6\. Explain why the sequence of partial sums for a series with positive terms is an increasing sequence.
>Solution
$S_{n+1} = S_{n} + a_{n+1}$. As long as $a_{n+1} > 0$, $S_{n+1} > S_{n}$.

9–18\. **Divergence Test** Use the Divergence Test to determine whether the following series diverge or state that the test is inconclusive.
9\. $\sum_{k=0}^{\infty} \frac{k}{2k+1}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k}{2k+1} &= \lim_{k \to \infty} (\frac{1}{2} - \frac{1}{4k+2})\\
&= \frac{1}{2} - 0 = \frac{1}{2}
\end{aligned}
$$
The series _diverges_ as $\dlim_{k \to \infty}a_k \ne 0$ by the Divergence Test.

10\. $\sum_{k=1}^{\infty} \frac{k}{k^2+1}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k}{k^2+1} &= \lim_{k \to \infty} \frac{1}{k+\frac{1}{k}} = 0
\end{aligned}
$$
The divergence test is _inconclusive_ as $\dlim_{k \to \infty}a_k = 0$ by the Divergence Test.

11\. $\sum_{k=2}^{\infty} \frac{k}{\ln k}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k}{\ln k} &= \lim_{k \to \infty} \frac{1}{\frac{1}{k}} \\
&= \lim_{k \to \infty} k = \infty
\end{aligned}
$$
The series _diverges_ as $\dlim_{k \to \infty}a_k \ne 0$ by the Divergence Test.

12\. $\sum_{k=1}^{\infty} \frac{k^2}{2^k}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k^2}{2^k} = 0 &\qquad k^2 \ll 2^k
\end{aligned}
$$
The divergence test is _inconclusive_ as $\dlim_{k \to \infty}a_k = 0$ by the Divergence Test.

13\. $\sum_{k=0}^{\infty} \frac{1}{1000 + k}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{1}{1000 + k} = 0
\end{aligned}
$$
The divergence test is _inconclusive_ as $\dlim_{k \to \infty}a_k = 0$ by the Divergence Test.

19–28\. **Integral Test** Use the Integral Test to determine the convergence or divergence of the following series, or state that the conditions of the test are not satisfied and, therefore, the test does not apply.
19\. $\sum_{k=2}^{\infty} \frac{1}{k \ln k}$
>Solution
1\. The associated function $f(x) = \frac{1}{x \ln x}$ is positive, for $x \ges 2$.
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
\int_2^{\infty} \frac{1}{x \ln x} dx &= \lim_{t \to \infty} \int_2^t \frac{1}{x \ln x} dx\\
&= \lim_{t \to \infty} [\ln (\ln x)]\mid_2^t \\
&= \infty
\end{aligned}
$$
Because the integral _diverges_, the series also _diverges_.

20\. $\sum_{k=1}^{\infty} \frac{k}{\sqrt{k^2 + 4}}$
>Solution
1\. The associated function $f(x) = \frac{x}{\sqrt{x^2 + 4}}$ is positive, for $x \ges 1$.
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
1\. The associated function $f(x) = xe^{-2x^2}$ is positive, for $x \ges 1$.
2\. The derivative is $f(x)$ is always positive, so $f(x)$ is a continous and _increasing_ function.
$$
\begin{aligned}
f'(x) &= e^{-2x^2} + x \cdot (-4x) \cdot e^{-2x^2}\\
&= e^{-2x^2}(1-4x^2) < 0 &\text{for } x \ges 1
\end{aligned}
$$
3\. The relevant integral is
$$
\begin{aligned}
\int_1^{\infty} xe^{-2x^2} dx &= \lim_{t\to \infty} \int_0^t xe^{-2x^2} dx\\
&= \lim_{t\to \infty} (-\frac{1}{4}e^{-2x^2}) \mid_0^t = \frac{1}{4e^2}
\end{aligned}
$$
Because the integral _converges_, the series also _converges_.

23\. $\sum_{k=0}^{\infty} \frac{1}{\sqrt{k + 8}}$
>Solution
1\. The associated function $f(x) = \frac{1}{\sqrt{x + 8}}$ is positive, for $x\ges 0$.
2\. The derivative of $f(x)$ is always negative, so $f(x)$ is a continous and _decreasing_ function.
$$
\begin{aligned}
f'(x) &= -\frac{1}{2(k+8)^{3/2}} < 0 &\text{for } x \ges 0
\end{aligned}
$$
3\. The relevant integral is
$$
\begin{aligned}
\int_1^{\infty} \frac{1}{\sqrt{x + 8}} dx &= \lim_{t\to \infty} \int_0^t \frac{1}{\sqrt{x + 8}} dx\\
&= \lim_{t\to \infty} 2\sqrt{x + 8} \mid_0^t = \infty
\end{aligned}
$$
Because the integral _diverges_, the series also _diverges_.

25\. $\sum_{k=1}^{\infty} \frac{k}{e^k}$
>Solution
1\. The associated function $f(x) = \frac{k}{e^k}$ is positive, for $x\ges 1$.
2\. The derivative of $f(x)$ is always negative, so $f(x)$ is a continuous and _decreasing_ function.
$$
\begin{aligned}
f'(x) &= e^{-x} -xe^{-x}\\
&= e^{-x}(1-x) < 0 &\text{for } x > 1
\end{aligned}
$$
3\. The relevant integral is
$$
\begin{aligned}
\int_1^{\infty} xe^{-x} dx &= \lim_{t\to \infty} \int_1^t  xe^{-x} dx\\
&= \lim_{t\to \infty} (-e^{-x} - xe^{-x}) \mid_1^t\\
&= \frac{2}{e}
\end{aligned}
$$
Because the integral _converges_, the series also _converges_.

27\. $\sum_{k=1}^{\infty} \frac{|\sin k|}{k^2}$
>Solution
The associated function $f(x) = \frac{|\sin x|}{x^2}$ is a not a decreasing function. The integral test does not apply.

29–34\. **p-Series** Determine the convergence or divergence of the following series.
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
$p=\frac{1}{3} < 1$. By Converence of p-Series, the series _diverges_.

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

51\. **Explain why or why not** Determine whether the following state-
ments are true and give an explanation or counterexample.
a. If $\sum_{k=1}^{\infty} a_k$ converges, then $\sum_{k=10}^{\infty} a_k$ converges.
>Solution
True.

b. If $\sum_{k=1}^{\infty} a_k$ diverges, then $\sum_{k=10}^{\infty} a_k$ diverges.
>Solution
True.

f. If $\dlim_{k\to \infty} a_k = 0$, then $\sum a_k$ converges.
>Solution
False.

52–57\. **Choose your test** Determine whether the following series converge or diverge.
55\. $\sum_{k=1}^{\infty}\sqrt{\frac{k+1}{k}}$
>Solution
$$
\begin{aligned}
\lim_{k\to \infty} \sqrt{\frac{k+1}{k}} = 1
\end{aligned}
$$
The series _diverges_ as $\dlim_{k \to \infty}a_k \ne 0$ by the Divergence Test.

56\. $\sum_{k=1}^{\infty}\frac{2^k + 3^k}{4^k}$
>Solution
$$
\begin{aligned}
\sum_{k=1}^{\infty}\frac{2^k + 3^k}{4^k} &= \sum_{k=0}^{\infty}\frac{2}{4} \cdot (\frac{2}{4})^k + \sum_{k=0}^{\infty}\frac{3}{4} \cdot (\frac{3}{4})^k
\end{aligned}
$$

57\. $\sum_{k=2}^{\infty}\frac{4}{k \ln^2 k}$
>Solution
1\. The associated function $f(x) = \frac{1}{x \ln^2 x}$ is positive, for $x \ges 2$.
2\. The derivative of $f(x)$ is always negetive, so $f(x)$ is a continues and decreasing function.
$$
\begin{aligned}
f'(x) &= -\frac{1}{(x\ln^2 x)^2} \cdot (\ln^2 x + x \cdot 2\ln x \cdot \frac{1}{x})\\
&= -\frac{\ln^2 x + 2\ln x}{(x\ln^2 x)^2} < 0 &\text{for } x \ges 2
\end{aligned}
$$
3\. The relevant integrals is
$$
\begin{aligned}
\int_2^{\infty} \frac{1}{x \ln^2 x} dx&= \lim_{t \to \infty} \int_2^t \frac{1}{x \ln^2 x} dx\\
&= \lim_{t \to \infty} (-\frac{1}{\ln x})\mid_2^t \\
&= \lim_{t \to \infty} (\frac{1}{\ln 2}-\frac{1}{\ln t}) = \frac{1}{\ln 2}
\end{aligned}
$$
Because the integral _coverges_, the series also _coverges_.

60\. **Find a series** Find a series that
a. converges faster than $\sum \frac{1}{k^2}$ but slower than $\sum \frac{1}{k^3}$.
>Solution
$\sum \frac{1}{k^{2.5}}$

b. diverges faster than $\sum \frac{1}{k}$ but slower than $\sum \frac{1}{\sqrt k}$.
>Solution
$\sum \frac{1}{k^{0.75}}$
