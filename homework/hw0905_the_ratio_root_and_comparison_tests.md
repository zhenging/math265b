### Section 9.5 The Ratio, Root and Comparison Tests
p668: 4, 5, 8, 9, 10, 11, 13, 15, 16, 17, 19, 20, 24, 27, 28, 29, 31, 33, 34, 35, 38, 39, 42, 43, 45, 47, 48, 51, 52, 60, 69. (Use Ratio Test on #45, 47)

4\. What is the first test you should use in analyzing the convergence of a series?
>Solution
The Divergence Test. If $\dlim_{k \to \infty} a_k \ne 0$, then the series diverges.

5\. What tests are advisable if the series involves a factorial term?
>Solution
Ratio Test.

8\. Do the tests discussed in this section tell you the value of the series? Explain.
>Solution
No.

9–18\. **The Ratio Test** Use the Ratio Test to determine whether the following series converge.
9\. $\sum_{k=1}^{\infty} \frac{1}{k!}$
>Solution
$$
\begin{aligned}
r= \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{1/(k+1)!}{1/k!}\\
&= \lim_{k \to \infty} \frac{1}{k+1} = 0
\end{aligned}
$$
Because $r=0$, the series converges by the Ratio Test.

10\. $\sum_{k=1}^{\infty} \frac{2^k}{k!}$
>Solution
$$
\begin{aligned}
r= \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{2^{k+1}/(k+1)!}{2^k/k!}\\
&= \lim_{k \to \infty} \frac{2}{k+1} = 0
\end{aligned}
$$
Because $r=0$, the series converges by the Ratio Test.

11\. $\sum_{k=1}^{\infty} \frac{k^2}{4^k}$
>Solution
$$
\begin{aligned}
r = \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{(k+1)^2/4^{k+1}}{k^2/4^k}\\
&= \lim_{k \to \infty} \frac{1}{4} \left(\frac{k+1}{k}\right)^2 = \frac{1}{4}
\end{aligned}
$$
Because $0 \les r < 1$, the series converges by the Ratio Test.

13\. $\sum_{k=1}^{\infty} ke^{-k}$
>Solution
$$
\begin{aligned}
r = \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{(k+1)e^{-k-1}}{ke^{-k}}\\
&=\lim_{k \to \infty} (\frac{1}{e} \cdot \frac{k+1}{k}) = \frac{1}{e}
\end{aligned}
$$
Because $0 \les r < 1$, the series converges by the Ratio Test.

15\. $\sum_{k=1}^{\infty} \frac{2^k}{k^{99}}$
>Solution
$$
\begin{aligned}
r= \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{2^{k+1}/(k+1)^{99}}{2^k/k^{99}}\\
&= 2\lim_{k \to \infty} (\frac{k}{k+1})^{99} = 2
\end{aligned}
$$
Because $r=2 > 1$, the series diverges by the Ratio Test.

16\. $\sum_{k=1}^{\infty} \frac{k^6}{k!}$
>Solution
$$
\begin{aligned}
r = \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{(k+1)^6/(k+1)!}{k^6/k!}\\
&= \lim_{k \to \infty} \frac{(k+1)^5}{k^6} = 0
\end{aligned}
$$
Because $r=0$, the series converges by the Ratio Test.

17\. $\sum_{k=1}^{\infty} \frac{(k!)^2}{(2k)!}$
>Solution
$$
\begin{aligned}
r = \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty}\frac{((k+1)!)^2/(2k+2)!}{(k!)^2/(2k)!}\\
&= \lim_{k \to \infty} (\frac{(k+1)!}{k!})^2 \cdot \frac{(2k)!}{(2k+2)!}\\
&= \lim_{k \to \infty} \frac{(k+1)^2}{(2k+2)(2k+1)}\\
&= \lim_{k \to \infty} \frac{k+1}{4k+2} = \frac{1}{4}
\end{aligned}
$$
Because $0 \les r < 1$, the series converges by the Ratio Test.

19–26\. **The Root Test** Use the Root Test to determine whether the following series converge.
19\. $\sum_{k=1}^{\infty} \left(\frac{4k^3+k}{9k^3+k+1} \right)^k$
>Solution
$$
\begin{aligned}
\rho = \lim_{k \to \infty} \sqrt[k]{\left(\frac{4k^3+k}{9k^3+k+1} \right)^k} = \lim_{k \to \infty} \frac{4k^3+k}{9k^3+k+1} = \frac{4}{9}
\end{aligned}
$$
Because $0 \les \rho <1$, the series converges by the Root Test.

20\. $\sum_{k=1}^{\infty} \left(\frac{k+1}{2k} \right)^k$
>Solution
$$
\begin{aligned}
\rho = \lim_{k \to \infty} \sqrt[k]{\left(\frac{k+1}{2k} \right)^k} = \lim_{k \to \infty} \frac{k+1}{2k} = \frac{1}{2}
\end{aligned}
$$
Because $0 \les \rho <1$, the series converges by the Root Test.

24\. $\sum_{k=1}^{\infty} \left(\frac{1}{\ln(k+1)} \right)^k$
>Solution
$$
\begin{aligned}
\rho = \lim_{k \to \infty} \sqrt[k]{\left(\frac{1}{\ln(k+1)} \right)^k} = \lim_{k \to \infty} \frac{1}{\ln(k+1)} = 0
\end{aligned}
$$
Because $\rho = 0$, the series converges by the Root Test.

27–38\. Comparison tests Use the Comparison Test or Limit Comparison Test to determine whether the following series converge.
27\. $\sum_{k=1}^{\infty} \frac{1}{k^2+4}$
>Solution
1\. $\dfrac{1}{k^2+4} < \dfrac{1}{k^2}$
2\. $\sum_{k=1}^{\infty} \dfrac{1}{k^2}$ converges. (p-series and p>1)
Therefore, the given converges by the Direct Comparison Test.

28\. $\sum_{k=1}^{\infty} \frac{k^2+k-1}{k^4+4k^2 - 3}$
>Solution
1\. Let $a_k = \frac{k^2+k-1}{k^4+4k^2 - 3}, b_k = \frac{1}{k^2}$
$$
\begin{aligned}
L = \lim_{k \to \infty} \frac{a_k}{b_k} &= \lim_{k \to \infty} \frac{k^4+k^3-k^2}{k^4+4k^2 - 3} = 0
\end{aligned}
$$
2\. $\sum_{k=1}^{\infty} b_k$ converges.
Therefore, the given series converges.

29\. $\sum_{k=1}^{\infty} \frac{k^2-1}{k^3+4}$
>Solution
1\. Let $a_k = \frac{k^2-1}{k^3+4}, b_k = \frac{1}{k}$
$$
\begin{aligned}
L = \lim_{k \to \infty} \frac{a_k}{b_k} &= \lim_{k \to \infty} \frac{k^3-k}{k^3+4} = 1
\end{aligned}
$$
2\. $\sum_{k=1}^{\infty} b_k$ diverges.
Therefore, the given series diverges too by the Limit Comparison Test.

31\. $\sum_{k=1}^{\infty} \frac{1}{k^{3/2}+1}$
>Solution
1\. $\dfrac{1}{k^{3/2} + 1} < \dfrac{1}{k^{3/2}}$
2\. $\sum_{k=1}^{\infty} \dfrac{1}{k^{3/2}}$ converges. (p-series, p>1)
Therefore, the given series converges by the Direct Comparison Test

33\. $\sum_{k=1}^{\infty} \frac{\sin(1/k)}{k^2}$
>Solution


34\.
35\.
38\.
39\.
42\.
43\.
45\.
47\.
48\.
51\.
52\.
60\.
69
