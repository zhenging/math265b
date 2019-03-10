### Section 9.2 Sequences
p637: 9, 11, 13, 15, 23, 27, 31, 32, 33, 34, 35, 37 (graphing optional), 39, 41, 42, 45, 47, 49, 53, 55, 63, **67**, **75cef**

9–34\. **Limits of sequences** Find the limit of the following sequences or determine that the limit does not exist.
9\. $\left\{\dfrac{n^3}{n^4+1}\right\}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} \left(\frac{n^3}{n^4+1}\right)&= \lim_{n \to \infty} \left(\frac{1}{n+\frac{1}{n^3}}\right) = 0
\end{aligned}
$$

11\. $\left\{\dfrac{3n^3-1}{2n^3+1}\right\}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} \left(\frac{3n^3-1}{2n^3+1}\right)&= \lim_{n \to \infty} \left(\frac{3-\frac{1}{n^3}}{2+\frac{1}{n^3}}\right) = \frac{3}{2}
\end{aligned}
$$

13\. $\left\{\dfrac{3^{n+1}+3}{3^n}\right\}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} \left(\frac{3^{n+1}+3}{3^n}\right) &= \lim_{n \to \infty}( 3 + \frac{1}{3^{n-1}}) = 3
\end{aligned}
$$

23\. $\left\{\dfrac{n}{e^n + 3n}\right\}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty}\left(\frac{n}{e^n + 3n}\right) &= \lim_{n \to \infty}\left(\frac{1}{e^n + 3}\right) &\text{L'Hopital's Rule}\\
&= 0
\end{aligned}
$$

27\. $\{b_n\}$ where $b_n = \begin{cases}\dfrac{n}{n+1} &\text{if } n \les 5000\\ne^{-n}&\text{if } n > 5000\end{cases}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} b_n &= \lim_{n \to \infty} ne^{-n}\\
&= \lim_{n \to \infty} \frac{n}{e^n}\\
&= \lim_{n \to \infty} \frac{1}{e^n} &\text{L'Hopital's Rule}\\
&= 0
\end{aligned}
$$

31\. $\{n\sin(\dfrac{6}{n})\}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} (n\sin(\frac{6}{n}))&= \lim_{n \to \infty} (\frac{\sin(\frac{6}{n})}{\frac{1}{n}})\\
&= \lim_{m \to 0+} (\frac{\sin(6m)}{m})\\
&= \lim_{m \to 0+} (\frac{6\cos (6m)}{1}) &\text{L'Hopital's Rule}\\
&= 6
\end{aligned}
$$

32\. $\left\{\dfrac{(-1)^n}{n}\right\}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} \frac{(-1)^n}{n} &= 0
\end{aligned}
$$

33\. $\left\{\dfrac{(-1)^n n}{n+1}\right\}$
>Solution
When n is odd, the term is $\dfrac{-n}{n+1}$, and approaches $-1$; when n is even, the term is $\dfrac{n}{n+1}$, and approaches $1$. Thus the sequecne has no limit.

34\. $\left\{\dfrac{(-1)^{n+1} n^2}{2n^3+n}\right\}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} \frac{n^2}{2n^3+n} &= \lim_{n \to \infty} \frac{1}{2n+\frac{1}{n}} = 0\\
\lim_{n \to \infty} \frac{(-1)^{n+1} n^2}{2n^3+n} &= 0
\end{aligned}
$$

35–44\. **Limits of sequences and graphing** Find the limit of the following sequences or determine that the limit does not exist. Verify your result with a graphing utility.
35\. $a_n = \sin(\dfrac{n\pi}{2})$
>Solution
The sequence has no limit.

37\. $a_n = \dfrac{\sin(n\pi / 3)}{\sqrt n}$
>Solution
$$
\begin{aligned}
\frac{-1}{\sqrt n} &\les \lim_{n \to \infty} \frac{\sin(n\pi / 3)}{\sqrt n} \les \frac{1}{\sqrt n}\\
\lim_{n \to \infty} \frac{-1}{\sqrt n} &= \lim_{n \to \infty} \frac{1}{\sqrt n} = 0\\
\lim_{n \to \infty} \frac{\sin(n\pi / 3)}{\sqrt n} &= 0 &\text{Sequzze Theorem}
\end{aligned}
$$

39\. $a_n = 1 + \cos{(\dfrac{1}{n})}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} (1 + \cos{(\frac{1}{n})}) &= 1 + 1 = 2
\end{aligned}
$$

41\. $a_n = e^{-n} \cos n$
>Solution
$$
\begin{aligned}
-e^{-n} &\les \lim_{n \to \infty} e^{-n} \cos n \les e^{-n}\\
\lim_{n \to \infty} -e^{-n} &= \lim_{n \to \infty} e^{-n} = 0\\
\lim_{n \to \infty} e^{-n} \cos n &= 0 &\text{Sequzze Theorem}
\end{aligned}
$$

42\. $a_n = \dfrac{\ln n}{n^{1.1}}$
>Solution
$$
\begin{aligned}
\lim_{n \to \infty} \frac{\ln n}{n^{1.1}} &= \lim_{n \to \infty}\frac{\frac{1}{n}}{1.1n^{0.1}} &\text{L'Hopital's Rule}\\
&= \lim_{n \to \infty}\frac{1}{1.1n^{1.1}} = 0
\end{aligned}
$$

45–52\. **Geometric sequences** Determine whether the following sequences converge or diverge and describe whether they do so monotonically or by oscillation. Give the limit when the sequence converges.
45\. $\{(0.2)^n\}$
>Solution
$0.2 < 1$, the sequence converges to 0 and it does so monotonically.

47\. $\{(-0.7)^n\}$
>Solution
$|-0.7| < 1$, the sequence converges to 0 and it does so by oscillation.

49\. $\{(1.00001)^n\}$
>Solution
$1.00001 > 1$, the sequence diverges.

53–58\. **Squeeze Theorem** Find the limit of the following sequences or state that they diverge.
53\. $\left\{\dfrac{\cos n}{n}\right\}$
>Solution
$$
\begin{aligned}
\frac{-1}{n} &\les \frac{\cos n}{n} \les \frac{1}{n}\\
\lim_{n \to \infty} \frac{-1}{n} &= \frac{1}{n} = 0 \\
\lim_{n \to \infty} \frac{\cos n}{n} &= 0
\end{aligned}
$$

55\. $\left\{\dfrac{\sin n}{2^n}\right\}$
>Solution
$$
\begin{aligned}
\frac{-1}{2^n} &\les \frac{\sin n}{2^n} \les \frac{1}{2^n}\\
\lim_{n \to \infty} \frac{-1}{2^n} &= \frac{1}{2^n} = 0 \\
\lim_{n \to \infty} \frac{\sin n}{2^n} &= 0
\end{aligned}
$$

63–68\. **Growth rates of sequences** Use Theorem 9.6 to find the limit of the following sequences or state that they diverge.
63\. $\left\{\dfrac{n!}{n^n}\right\}$
>Solution
By Theorem 9.6, $n! \ll n^n$, $\dlim_{n \to \infty} \dfrac{n!}{n^n}= 0$.

67\. $\left\{\dfrac{n^{1000}}{2^n}\right\}$
>Solution
By Theorem 9.6, $n^p \ll b^n$, $n^{1000} \ll 2^n$ , so $\dlim_{n \to \infty} \dfrac{n^{1000}}{2^n}= 0$.

75\. **Explain why or why not** Determine whether the following state ments are true and give an explanation or counterexample.
c. The convergent sequences $\{a_n\}$ and $\{b_n\}$ differ in their first 100 elements, but $a_n = b_n$ for $n>100$. It follows that $\dlim_{n\to \infty} a_n= \dlim_{n\to \infty} b_n$.
>Solution
True.

e. If the sequence $\{a_n\}$ converges, then the sequence $\{(-1)^n a_n\}$ converges.
>Solution
False. Counterexample $\{3+ \frac{1}{n^2}\}$, $\dlim_{n \to \infty} (3+ \frac{1}{n^2}) = 3$, but the sequence $\{(-1)^n(3+ \frac{1}{n^2}\}$ does not converge.

f. If the sequence $\{a_n\}$ diverges, then the sequence $\{0.000001 a_n\}$ diverges.
>Solution
True.
