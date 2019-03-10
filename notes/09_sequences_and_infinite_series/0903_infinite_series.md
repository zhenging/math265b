### Section 9.3 Infinite Series
p644: 1, 6, 7, 11, 16(also write in sigma notation), 19, 21, 23, **25**, 32, 35, 37, 41, 55, 65, **69ab**, 71, 87a, **95**, 96

1\. What is the defining characteristic of a geometric series? Give an example.
>Solution
The geometric series has the form of $\sum_{k=0}^{\infty} ar^k$, where $r$ is constant. Example: $2^0 + 2^1 + 2^2 + \cdots$, where $a=1, r=2$

6\. What is the condition for convergence of the geometric series $\sum_{k=0}^{\infty} ar^k$?
>Solution
$|r| < 1$

7-18\. **Geometric sums** Evaluate the following geometric sums.
7\. $\sum_{k=0}^{8} 3^k$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{8} 3^k &= 1\cdot \frac{1-3^9}{1-3} = 9841
\end{aligned}
$$

11\. $\sum_{k=0}^{9} (-\frac{3}{4})^k$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{9} (-\frac{3}{4})^k &= 1 \cdot \frac{1-(-\frac{3}{4})^{10}}{1+ \frac{3}{4}} \approx 0.5392
\end{aligned}
$$

16\. $1+ \frac{2}{3} + \frac{4}{9} + \frac{8}{27}$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{3} (\frac{2}{3})^k &= 1\cdot \frac{1-(\frac{2}{3})^4}{1-\frac{2}{3}} = \frac{65}{27}
\end{aligned}
$$

19–34\. **Geometric series** Evaluate the geometric series or state that it diverges.
19\. $\sum_{k=0}^{\infty} (\frac{1}{4})^k$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{\infty} (\frac{1}{4})^k &= 1\cdot \frac{1}{1-\frac{1}{4}} = \frac{4}{3}
\end{aligned}
$$

21\. $\sum_{k=0}^{\infty} (0.9)^k$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{\infty} (0.9)^k &= 1\cdot \frac{1}{1-0.9} = 10
\end{aligned}
$$

23\. $\sum_{k=0}^{\infty} (1.01)^k$
>Solution
The series diverges, as $r=1.01 > 1$.

25\. $\sum_{k=1}^{\infty} e^{-2k}$
>Solution
$$
\begin{aligned}
\sum_{k=1}^{\infty} e^{-2k} &= e^{-2}\cdot \frac{1}{1-e^{-2}} = \frac{1}{e^2-1}
\end{aligned}
$$

32\. $\sum_{k=1}^{\infty} \frac{3^{k-1}}{4^{k+1}}$
>Solution
$$
\begin{aligned}
\sum_{k=1}^{\infty} \frac{3^{k-1}}{4^{k+1}} &= \frac{1}{4^2} \cdot \frac{1}{1-\frac{3}{4}} =\frac{1}{4}
\end{aligned}
$$

35–40\. **Geometric series with alternating signs** Evaluate the geometric series or state that it diverges.
35\. $\sum_{k=0}^{\infty} (-\frac{9}{10})^k$
>Solution
$$
\begin{aligned}
\sum_{k=0}^{\infty} (-\frac{9}{10})^k &= 1 \cdot \frac{1}{1+ \frac{9}{10}} = \frac{10}{19}
\end{aligned}
$$

37\. $3\sum_{k=0}^{\infty} \frac{(-1)^k}{\pi^k}$
>Solution
$$
\begin{aligned}
3\sum_{k=0}^{\infty} \frac{(-1)^k}{\pi^k} &= 3\sum_{k=0}^{\infty} (-\frac{1}{\pi})^k \\
&= 3 \cdot 1 \cdot \frac{1}{1+\frac{1}{\pi}} = \frac{3\pi}{\pi + 1}
\end{aligned}
$$

41–54\. **Decimal expansions** Write each repeating decimal first as a geometric series and then as a fraction (a ratio of two integers).
41\. $0.\overline{3} = 0.333\cdots$
>Solution
$$
\begin{aligned}
0.\overline{3} &= \sum_{k=0}^{\infty} 0.3 \cdot (0.1)^k\\
&= 0.3 \cdot \frac{1}{1-0.3} = \frac{1}{3}
\end{aligned}
$$

55–68\. **Telescoping series** For the following telescoping series, find a formula for the nth term of the sequence of partial sums $\{S_n\}$. Then evaluate $\dlim_{n \to \infty} S_n$ to obtain the value of the series or state that the series diverges.
55\. $\sum_{k=1}^{\infty}(\frac{1}{k+1} - \frac{1}{k+2})$
>Solution
$$
\begin{aligned}
S_n &= \sum_{k=1}^{\infty}(\frac{1}{k+1} - \frac{1}{k+2}) \\
&= \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \cdots + \left(\frac{1}{n+1} - \frac{1}{n+2}\right)\\
&= \frac{1}{2} + \left(-\frac{1}{3} + \frac{1}{3}\right) + \left(-\frac{1}{4} + \frac{1}{4}\right) + \cdots + \left(-\frac{1}{n+1} + \frac{1}{n+1}\right) - \frac{1}{n+2}\\
&= \frac{1}{2} - \frac{1}{n+2}\\
\lim_{n\to \infty} S_n &= \frac{1}{2} - 0 = \frac{1}{2}
\end{aligned}
$$

65\. $\sum_{k=1}^{\infty}(\frac{1}{\sqrt{k+1}} - \frac{1}{\sqrt{k+3}})$
>Solution
$$
\begin{aligned}
S_n &= \sum_{k=1}^{\infty}(\frac{1}{\sqrt{k+1}} - \frac{1}{\sqrt{k+3}}) \\
&= \left(\frac{1}{\sqrt 2} - \frac{1}{\sqrt 4}\right) + \left(\frac{1}{\sqrt 3} - \frac{1}{\sqrt 5}\right) + \left(\frac{1}{\sqrt 4} - \frac{1}{\sqrt 6}\right) \cdots + \left(\frac{1}{\sqrt{n+1}} - \frac{1}{\sqrt{n+3}}\right)\\
&= \frac{1}{\sqrt 2} + \frac{1}{\sqrt 3} + \left( -\frac{1}{\sqrt 4} + \frac{1}{4}\right) + \cdots + \left( -\frac{1}{\sqrt {n+1}} + \frac{1}{\sqrt {n+1}}\right) -\frac{1}{\sqrt {n+2}} - \frac{1}{\sqrt{n+3}}
\\
&= \frac{1}{\sqrt 2} + \frac{1}{\sqrt 3} - \frac{1}{\sqrt {n+2}} - \frac{1}{\sqrt{n+3}}\\
\lim_{n\to \infty} S_n &= \frac{1}{\sqrt 2} + \frac{1}{\sqrt 3} - 0 - 0 = \frac{1}{\sqrt 2} + \frac{1}{\sqrt 3}
\end{aligned}
$$

69\. **Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
a. $\sum_{k=1}^{\infty}(\frac{\pi}{e})^{-k}$ is a convergent geometric series.
>Solution
True. $\sum_{k=1}^{\infty}(\frac{\pi}{e})^{-k} = \sum_{k=1}^{\infty}(\frac{e}{\pi})^k$ and $\frac{e}{\pi} < 1$

b\. If a is a real number, and $\sum_{k=12}^{\infty} a^k$ converges, then $\sum_{k=1}^{\infty} a^k$ converges.
>Solution
True. Let $L = \sum_{k=12}^{\infty} a^k$, then $\sum_{k=1}^{\infty} a^k = \sum_{k=1}^{11} a^k + L$

70–73. **Evaluating series** Evaluate the series or state that it diverges.
71\. $\sum_{k=1}^{\infty} \frac{(-2)^k}{3^{k+1}}$
>Solution
$$
\begin{aligned}
\sum_{k=1}^{\infty} \frac{(-2)^k}{3^{k+1}} &= \sum_{k=1}^{\infty} \frac{1}{3} \cdot (-\frac{2}{3})^k\\
&= -\frac{2}{9}\cdot \frac{1}{1+\frac{2}{3}}= -\frac{2}{15}
\end{aligned}
$$

87\. **Snowflake island fractal** The fractal called the snowflake island (or Koch island) is constructed as follows: Let I 0 be an equilateral triangle with sides of length 1. The figure $I_1$ is obtained by replacing the middle third of each side of $I_0$ by a new outward equilateral triangle with sides of length $1/3$ (see figure). The process is repeated where $I_{n + 1}$ is obtained by replacing the middle third of each side of $I_n$ by a new outward equilateral triangle with sides of length $1 / 3^{n + 1}$. The limiting figure as $n \to \infty$ is called the snowflake island.
a. Let $L_n$ be the perimeter of $I_n$. Show that $\dlim_{n \to \infty} L_n = \infty$
>Solution
The length of one side of $I_0$ is 1.
The length of one side of $I_1$ is $\frac{4}{3}$.
The length of one side of $I_2$ is $\frac{4}{3} \cdot \frac{4}{3} = (\frac{4}{3})^2$.
$\cdots$
The length of one side of $I_n$ is $\frac{4}{3} \cdot \frac{4}{3} \cdots \frac{4}{3} = (\frac{4}{3})^n$.
$$
\begin{aligned}
L_n &= 3 \cdot (\frac{4}{3})^n\\
\lim_{n \to \infty} L_n &= \infty &\frac{4}{3}> 1
\end{aligned}
$$

95\. **Functions defined as series** Suppose a function $f$ is defined by the geometric series $f(x) = \sum_{k=0}^{\infty} (-1)^k x^k$.
a. Ealuate $f(0.2), f(0.5), f(1)$ and $f(1.5)$, if possible.
b. What is the domain of $f$?
>Solution
$$
\begin{aligned}
f(x) &= \sum_{k=0}^{\infty} (-x)^k = \frac{1}{1+x}
\end{aligned}
$$
$f$ is a geometric series and $f(x)$ exists only when $|x|<1$.
a. $f(0) = 1, f(0.2) = \frac{1}{1.2} = \frac{5}{6}, f(0.5) = \frac{1}{1.5} = \frac{2}{3}$, $f(1)$ and $f(1.5)$ do not exist.
b. The domain of $f$ is $\{x: |x|< 1\}$

96\. **Functions defined as series** Suppose a function $f$ is defined by the geometric series $f(x) = \sum_{k=0}^{\infty} x^{2k}$.
a. Ealuate $f(0.2), f(0.5), f(1)$ and $f(1.5)$, if possible.
b. What is the domain of $f$?
>Solution
$$
\begin{aligned}
f(x) &= \sum_{k=0}^{\infty} (x^2)^k = \frac{1}{1-x^2}
\end{aligned}
$$
$f$ is a geometric series and $f(x)$ exists only when $x^2<1$.
a. $f(0) = 1, f(0.2) = \frac{1}{1-0.04} = \frac{25}{24}, f(0.5) = \frac{1}{1-0.25} = \frac{4}{3}$, $f(1)$ and $f(1.5)$ do not exist.
b. The domain of $f$ is $\{x: -1< x < 1\}$
