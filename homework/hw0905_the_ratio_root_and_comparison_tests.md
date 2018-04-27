### Section 9.5 The Ratio, Root and Comparison Tests
p668: 4, 5, 8, 9, 10, 11, 13, 15, 16, 17, 19, 20, 24, 27, 28, 29, 31, 33, **34**, 35, **38**, 39, 42, 43, **45**, 47, 48, 51, 52, **60**, 69. (Use Ratio Test on #45, 47)

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

27–38\. **Comparison tests** Use the Comparison Test or Limit Comparison Test to determine whether the following series converge.
27\. $\sum_{k=1}^{\infty} \frac{1}{k^2+4}$
>Solution
1\. $\dfrac{1}{k^2+4} < \dfrac{1}{k^2}$
2\. $\sum_{k=1}^{\infty} \dfrac{1}{k^2}$ converges. (p-series and p>1)
Therefore, the given converges by the Direct Comparison Test.

28\. $\sum_{k=1}^{\infty} \frac{k^2+k-1}{k^4+4k^2 - 3}$
>Solution
1\. Let $a_k = \frac{k^2+k-1}{k^4+4k^2 - 3}, b_k = \frac{1}{k^2}$, $a_k, b_k >0$ for $k \ges 1$
$$
\begin{aligned}
L = \lim_{k \to \infty} \frac{a_k}{b_k} &= \lim_{k \to \infty} \frac{k^4+k^3-k^2}{k^4+4k^2 - 3} = 0
\end{aligned}
$$
2\. $\sum_{k=1}^{\infty} b_k$ converges.
Therefore, the given series converges by the Limit Comparison Test.

29\. $\sum_{k=1}^{\infty} \frac{k^2-1}{k^3+4}$
>Solution
1\. Let $a_k = \frac{k^2-1}{k^3+4}, b_k = \frac{1}{k}$, $a_k, b_k >0$ for $k > 2$
$$
\begin{aligned}
L = \lim_{k \to \infty} \frac{a_k}{b_k} &= \lim_{k \to \infty} \frac{k^3-k}{k^3+4} = 1
\end{aligned}
$$
2\. $\sum_{k=1}^{\infty} b_k$ diverges.
Therefore, the given series diverges too by the Limit Comparison Test.

31\. $\sum_{k=1}^{\infty} \frac{1}{k^{3/2}+1}$
>Solution
1\. $0 < \dfrac{1}{k^{3/2} + 1} < \dfrac{1}{k^{3/2}}$
2\. $\sum_{k=1}^{\infty} \dfrac{1}{k^{3/2}}$ converges. (p-series, p>1)
Therefore, the given series converges by the Direct Comparison Test.

33\. $\sum_{k=1}^{\infty} \frac{\sin(1/k)}{k^2}$
>Solution
1\. $0 < \dfrac{\sin(1/k)}{k^2} < \dfrac{1}{k^2}$
2\. $\sum_{k=1}^{\infty} \dfrac{1}{k^2}$ converges. (p-series, p>1)
Therefore, the given series converges by the Direct Comparison Test.

34\. $\sum_{k=1}^{\infty} \frac{1}{3^k - 2^k}$
>Solution
Todo
$$
\begin{aligned}
\end{aligned}
$$

35\. $\sum_{k=1}^{\infty} \frac{1}{2k-\sqrt k}$
>Solution
1\. Let $a_k = \frac{1}{2k-\sqrt k}, b_k = \frac{1}{2k}$, $a_k, b_k >0$ for $k \ges 1$
$$
\begin{aligned}
L = \lim_{k \to \infty} \frac{a_k}{b_k} &= \lim_{k \to \infty} \frac{2k}{2k-\sqrt k} \\
&= \lim_{k \to \infty} \frac{2}{2-\frac{1}{2\sqrt k}} = 1
\end{aligned}
$$
2\. $\sum_{k=1}^{\infty} b_k$ diverges.
Therefore, the given series diverges too by the Limit Comparison Test.

38\. $\sum_{k=1}^{\infty} \frac{1}{(k \ln k)^2}$
>Solution
1\. $0 < \frac{1}{(k \ln k)^2} < \frac{1}{k^2}$, for all $k \ges 3$
2\. $\sum_{k=1}^{\infty} \frac{1}{k^2}$ converges. (p-series)
Therefore, the given series converges too by the Direct Comparison Test.

39\. **Explain why or why not** Determine whether the following state
ments are true and give an explanation or counterexample.
a. Suppose that $0 < a_k < b_k$. If $\sum a_k$ converges, then $\sum b_k$ converges.
b. Suppose that $0 < a_k < b_k$. If $\sum a_k$ diverges, then $\sum b_k$ diverges.
c. Suppose that $0 < b_k < c_k < a_k$. If $\sum a_k$ converges, then $\sum b_k$ and $\sum c_k$ converges.
>Solution
a. False. let $\{a_k\}$ be all zeros, and $\{b_k\}$ be all 1's.
b. True. This is the result from the Direct Comparison Test.
c. True. This is the result from the Direct Comparison Test.

40–69\. **Choose your test** Use the test of your choice to determine whether the following series converge.
42\. $\sum_{k=1}^{\infty} (\frac{k^2}{2k^2+1})^k$
>Solution
$$
\begin{aligned}
\rho = \lim_{k \to \infty} \sqrt[k]{(\frac{k^2}{2k^2+1})^k} = \lim_{k \to \infty} \frac{k^2}{2k^2+1} = \frac{1}{2}
\end{aligned}
$$
Because $\rho < 1$, the series converges by the Root Test.

43\. $\sum_{k=1}^{\infty} \frac{k^{100}}{(k+1)!}$
>Solution
$$
\begin{aligned}
r = \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{(k+1)^{100}/(k+2)!}{k^{100}/(k+1)!}\\
&= \lim_{k \to \infty} (\frac{k+1}{k})^{100} \cdot \frac{1}{k+2}\\
&= 1^{100} \cdot 0 = 0
\end{aligned}
$$
Because $0 \les r < 1$, the series converges by the Ratio Test.

45\. $\sum_{k=1}^{\infty} (\sqrt[k]{k}-1)^{2k}$
>Solution
$$
\begin{aligned}
\rho = \lim_{k \to \infty} \sqrt[k]{(\sqrt[k]{k}-1)^{2k}} = \lim_{k \to \infty} (\sqrt[k]{k}-1)^2 = 0
\end{aligned}
$$
Because $\rho < 1$, the series converges by the Root Test. ($\dlim_{k \to \infty} \sqrt[k]{k} = 1$ can be proved.)

47\. $\sum_{k=1}^{\infty} \frac{k^2+2k+1}{3k^2+1}$
>Solution
$$
\begin{aligned}
\lim_{k \to \infty} \frac{k^2+2k+1}{3k^2+1} &= \frac{1}{3}
\end{aligned}
$$
Because $\dlim_{k \to \infty} a_k \ne 0$, the series diverges by the Divergence Test.

48\. $\sum_{k=1}^{\infty} \frac{1}{5^k-1}$
>Solution
1\. Let $a_k = \frac{1}{5^k-1}, b_k = \frac{1}{5^k}$, $a_k, b_k > 0$ for $k \ges 1$.
$$
\begin{aligned}
L = \lim_{k \to \infty} \frac{a_k}{b_k} &= \lim_{k \to \infty} \frac{5^k}{5^k - 1} = 1
\end{aligned}
$$
2\. $\sum_{k=1}^{\infty} b_k$ converges. (Geometric series)
Therefore, the given series converges too by the Limit Comparison Test.

51\. $\sum_{k=1}^{\infty} \frac{1}{\sqrt{k^3-k+1}}$
>Solution
1\. Let $a_k = \frac{1}{\sqrt{k^3-k+1}}, b_k = \frac{1}{\sqrt{k^3}}$, $a_k, b_k > 0$ for $k \ges 1$.
$$
\begin{aligned}
L = \lim_{k \to \infty} \frac{a_k}{b_k} &= \lim_{k \to \infty} \frac{k^3}{k^3-k+1} = 1
\end{aligned}
$$
2\. $\sum_{k=1}^{\infty} b_k$ converges. (Geometric series)
Therefore, the given series converges too by the Limit Comparison Test.

52\. $\sum_{k=1}^{\infty} \frac{(k!)^3}{(3k)!}$
>Solution
$$
\begin{aligned}
r = \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \frac{\frac{((k+1)!)^3}{(3k+3))!}}{\frac{(k!)^3}{(3k)!}}\\
&= \lim_{k \to \infty} \frac{k^2}{27k^2 + 27k + 6} = \frac{1}{27}
\end{aligned}
$$
Because $r<1$, the given series converges by the Ratio Test.

60\. $\sum_{k=1}^{\infty} \frac{1}{k^2 \ln k}$
>Solution
1\. $0 < \frac{1}{k^2 \ln k} < \frac{1}{k^2}$
2\. $\sum_{k=1}^{\infty} \frac{1}{k^2}$ converges. (p-series)
Therefore, the given series converges too by the Direct Comparison Test.

69\. $\frac{1}{1!} + \frac{4}{2!} + \frac{9}{3!} + \frac{16}{4!} + \cdots$
>Solution
The series is $\sum_{k=1}^{\infty} \frac{k^2}{k!}$
$$
\begin{aligned}
r = \lim_{k \to \infty} \frac{a_{k+1}}{a_k} &= \lim_{k \to \infty} \frac{\frac{(k+1)^2}{(k+1)!}}{\frac{k^2}{k!}}\\
&= \lim_{k \to \infty} \frac{k+1}{k^2} = 0
\end{aligned}
$$
Because $r<1$, the given series converges by the Ratio Test.
