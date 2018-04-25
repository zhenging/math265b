---
tags: [divergence test, infinite series, proof]
page: 648
section: 9.4 The Divergence Test
---

### The Divergence Test

>Theorem 9.8 Divergence Test
If $\sum a_k$ converges, then $\dlim_{k \to \infty} a_k=0$. Equivalently, if $\dlim_{k \to \infty} a_k \ne 0$, then the series diverges.

_Important note: Theorem 9.8 can not be used to determine convergence._

#### Proof
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

#### Examples
a. $\sum_{k=0}^{\infty} \frac{k}{k+1}$ &emsp; b. $\sum_{k=1}^{\infty} \frac{1+3^k}{2^k}$ &emsp; c. $\sum_{k=1}^{\infty} \frac{1}{k}$ &emsp; d. $\sum_{k=1}^{\infty} \frac{1}{k^2}$
>Solution
a. Divergent.
b. Divergent.
c. **Inconclusive**. $\dlim_{k \to \infty} \frac{1}{k} = 0$. (The divergence test can not be used to prove that a series converges.)
d. **Inconclusive**. Similar to part c.
