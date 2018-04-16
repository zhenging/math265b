---
tags: [geometric series, infinite series, proof]
page: 641
sectiin: 9.3 Infinite Series
---

### Geometric Series

>Theorem 9.7 Geometric Series
Let $a \ne 0$ and $r$ be real numbers. If $|r| < 1$, then $\sum_{k=0}^{\infty} ar^k = \dfrac{a}{1-r}$. If $|r| \ges 1$, and the series diverges.

#### Proof
A geometric sum with $n$ terms has the form
$$
\begin{aligned}
S_n &= a+ar + ar^2 + \cdots + ar^{n-1} = \sum_{k=0}^{n-1} ar^k &\text{(1)}\\
rS_n &= r(a+ar + ar^2 + \cdots + ar^{n-1})\\
&= ra+ar^2 + ar^3 + \cdots + ar^n &\text{(2)}\\
S_n - rS_n &= a-ar^n &\text{(1) - (2)}\\
S_n &= a\cdot \frac{1-r^n}{1-r} &\text{(3)}
\end{aligned}
$$
The value of the geometric series is the limit of its sequence of partial sums (provided it exists). Using equation (3), we have
$$
\begin{aligned}
\sum_{k=0}^{\infty} ar^k &= \lim_{n\to \infty} \underbrace{\sum_{k=0}^{n-1} ar^k}_{\color{#38accd}\text{geometric sum } S_n} = \lim_{n\to \infty} a\cdot \frac{1-r^n}{1-r}
\end{aligned}
$$
We must examine the behavior of $r^n$ as $n \to \infty$
$$
\begin{aligned}
\lim_{n \to \infty} r^n = \begin{cases}
0 &\text{if } |r| < 1\\
1 &\text{if } r=1\\
\text{does not exist} &\text{if } r \les -1 \text{ or } r>1
\end{cases}
\end{aligned}
$$
case #1: $|r| < 1, \lim_{n \to \infty} r^n$.
$$
\begin{aligned}
\lim_{n \to \infty} S_n  = \lim_{n \to \infty}  a \frac{1-r^n}{1-r} = a\frac{1-0}{1-r} = \frac{a}{1-r}
\end{aligned}
$$
case #2: $|r| > 1, \lim_{n \to \infty} r^n$ does not exist, so $\lim_{n \to \infty} S_n$ does not exist and the series diverges.
case #3: When $r=1$, then the series diverges too; when $r=-1$, the sequence of partial sums oscillates between $0$ and $a$. So if $r=\pm 1$, the geometric series _diverges_.

#### Examples
a. $\sum_{k=0}^{\infty} 1.1^k$ &emsp; b. $\sum_{k=0}^{\infty} e^{-k}$ &emsp; c. $\sum_{k=2}^{\infty} 3(-0.75)^k$
>Solution
a. Divergent.
b. $\frac{e}{e-1}$
b. $\frac{27}{28}$
