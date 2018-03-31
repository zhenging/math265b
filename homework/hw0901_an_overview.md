### Section 9.1 An Overview
p625: 2, 3, 7, 8, 9, 11, 13, 15, 19, 23, 25, 27, 31, 33, 35, 43, 44, 55, 59, 68, 71, 74, 75, 77, 79, 81

2\. Suppose the sequence $\{a_n\}$ is defined by the explicit formula $a_n = 1/n$, for $n = 1, 2, 3, \cdots$. Write out the first five terms of the sequence.
>Solution
$a_1 = 1, a_2 = \frac{1}{2}, a_3 = \frac{1}{3}, a_4 = \frac{1}{4}, a_5 = \frac{1}{5}$

3\. Suppose the sequence $\{a_n\}$ is defined by the recurrence relation $a_{n+1} = na_n$, for $n = 1, 2, 3, \cdots$, where $a_1 = 1$. Write out the first five terms of the sequence.
>Solution
$a_1 = 1, a_2 = 1, a_3 = 2, a_4 = 6, a_5 = 24$

7\. The terms of a sequence of partial sums are defined by $\sum_{k=1}^n k^2$, for $n = 1, 2, 3, \cdots$. Evaluate the first four terms of the sequence.
>Solution
$$
\begin{aligned}
S_1 &= \sum_{k=1}^1 k^2 = 1^2 = 1\\
S_2 &= \sum_{k=1}^2 k^2 = 1^2 + 2^2= 5\\
S_3 &= \sum_{k=1}^3 k^2 = 1^2 + 2^2 + 3^2= 14\\
S_4 &= \sum_{k=1}^4 k^2 = 1^2 + 2^2 + 3^2 + 4^2 = 30
\end{aligned}
$$

8\. Consider the infinite series $\sum_{k=1}^{\infty} \frac{1}{k}$. Evaluate the first four terms of the sequence of partial sums.
>Solution
$$
\begin{aligned}
S_1 &= \sum_{k=1}^1 \frac{1}{k} = 1\\
S_2 &= \sum_{k=1}^2 \frac{1}{k} = 1 + \frac{1}{2}\\
S_3 &= \sum_{k=1}^3 \frac{1}{k} = 1 + \frac{1}{2} + \frac{1}{3}\\
S_4 &= \sum_{k=1}^4 \frac{1}{k} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4}
\end{aligned}
$$

9–16\. **Explicit formulas** Write the first four terms of the sequence $\{a_n\}_{n=1}^{\infty}$
9\. $a_n = \frac{1}{10^n}$
>Solution
$a_1 = \frac{1}{10}, a_2 = \frac{1}{100}, a_3 = \frac{1}{1000}, a_4 = \frac{1}{10000}$

11\. $a_n = \frac{(-1)^n}{2^n}$
>Solution
$a_1 = -\frac{1}{2}, a_2 = \frac{1}{4}, a_3 = -\frac{1}{8}, a_4 = \frac{1}{16}$

13\. $a_n = \frac{2^{n+1}}{2^n + 1}$
>Solution
$a_1 = \frac{4}{3}, a_2 = \frac{8}{5}, a_3 = \frac{16}{9}, a_4 = \frac{32}{17}$

15\. $a_n = 1+ \sin(\pi n/2)$
>Solution
$a_1 = 2, a_2 = 1, a_3 = 0, a_4 = 1$

17–22\. **Recurrence relations** Write the first four terms of the sequence $\{a_n\}$ defined by the following recurrence relations.
19\. $a_{n+1}=3a_n-12; a_1 = 10$
>Solution
$a_1 = 10, a_2 = 18, a_3 = 42, a_4 = 114$

23–30\. **Working with sequences** Several terms of a sequence $\{a_n\}_{n=1}^{\infty}$ are given.
a. Find the next two terms of the sequence.
b. Find a recurrence relation that generates the sequence (supply the initial value of the index and the first term of the sequence).
c. Find an explicit formula for the general nth term of the sequence.
23\. $\{1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}, \cdots\}$
>Solution
a. The next two terms are $\frac{1}{32}, \frac{1}{64}$.
b. $a_{n+1} = \frac{a_n}{2}, a_1 = 1$
c. $a_n = \frac{1}{2^{n-1}}$

25\. $\{-5, 5, -5, 5, \cdots\}$
a. The next two terms are $-5, 5$.
b. $a_{n+1} = -a_n, a_1 = -5$
c. $a_n = (-1)^n \cdot 5$

27\. $\{1, 2, 4, 8, 16\}$
>Solution
a. The next two terms are $32, 64$.
b. $a_{n+1} = 2a_n, a_1 = 1$
c. $a_n = 2^{n-1}$

31–40\. **Limits of sequences** Write the terms $a_1, a_2, a_3$, and $a_4$ of the following sequences. If the sequence appears to converge, make a conjecture about its limit. If the sequence diverges, explain why.
31\. $a_n = 10^n - 1; n=1, 2, 3, \cdots$
>Solution
$a_1 = 9, a_2 = 99, a_3 = 999, a_4 = 9999$. The sequence diverges, because the terms get larger without bound.

33\. $a_n = \frac{1}{10^n}; n=1, 2, 3, \cdots$
>Solution
$a_1 = \frac{1}{10}, a_2 = \frac{1}{100}, a3 = \frac{1}{1000}, a_4 = \frac{1}{10000}$. The sequence converges to zero.

35\. $a_n = \frac{(-1)^n}{n}; n=1, 2, 3, \cdots$
>Solution
$a_1 = -1, a_2 = \frac{1}{2}, a3 = -\frac{1}{3}, a_4 = \frac{1}{4}$. The sequence converges to zero.

41–46\. **Explicit formulas for sequences** Consider the formulas for the following sequences. Using a calculator, make a table with at least 10 terms and determine a plausible value for the limit of the sequence or state that it does not exist.
43\. $a_n = n^2-n; n=1, 2, 3, \cdots$
>Solution
n     | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
------|---|---|---|---|---|---|---|---|---|----|
$a_n$ | 0 | 2 | 6 | 12 | 20 | 30 | 42 | 56 | 72 | 90 |
The sequence appears to diverge.

44\. $a_n = \frac{100n-1}{10n}; n=1, 2, 3, \cdots$
>Solution
n     | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
------|---|---|---|---|---|---|---|---|---|----|
$a_n$ | 9.9 | 9.95 | 9.96667 | 9.975 | 9.98 | 9.9833 | 9.9857 | 9.9875 | 9.988889 | 9.99 |
The limits of the the sequence appears to be 10.

55–58\. **Heights of bouncing balls** Suppose a ball is thrown upward to a height of $h_0 meters$. Each time the ball bounces, it rebounds to a fraction $r$ of its previous height. Let $h_n$ be the height after the nth bounce. Consider the following values of $h_0$ and $r$.
a. Find the first four terms of the sequence of heights $\{h_n\}$.
b. Find an explicit formula for the nth term of the sequence $\{h_n\}$.
55\. $h_0 = 20, r=0.5$
>Solution
a. $h_1 = rh_0 = 10, h_2 = rh_1 = 5, h_3 = rh_2 = 2.5, h_4 = rh_3 = 1.25$
b. $h_n = 20(0.5)^n$

59–62\. **Sequences of partial sums** For the following infinite series, find the first four terms of the sequence of partial sums. Then make a conjecture about the value of the infinite series.
59\. $0.3+0.03+0.003+\cdots$
>Solution
$S_1 = 0.3, S_2 = 0.03, S_3 = 0.003, S_4 = 0.0003$. It appears that the infinite series has a value of $\frac{1}{3}$.

68–69\. **Distance traveled by bouncing balls** Suppose a ball is thrown upward to a height of $h_0$ meters. Each time the ball bounces, it rebounds to a fraction $r$ of its previous height. Let $h_n$ be the height after the nth bounce and let $S_n$ be the total distance the ball has trav eled at the moment of the nth bounce.
a. Find the first four terms of the sequence $\{S_n\}$.
b. Make a table of 20 terms of the sequence $\{S_n\}$ and determine a plausible value for the limit of $\{S_n\}$.
68\. $h_0 = 20, r=0.5$
>Solution
a. $S_n = \sum_{k=0}^n 20 \cdot (0.5)^k, S_0 = 20, S_1 = 30, S_2 = 35, S_3 = 37.5$
b. The limit is 40.

70–77\. **Sequences of partial sums** Consider the following infinite
series.
a. Write out the first four terms of the sequence of partial sums.
b. Estimate the limit of $\{S_n\}$ or state that it does not exist.
71\. $\sum_{k=1}^{\infty} 9(0.1)^k$
>Solution
a. $S_1 = 0.9, S_2 = 0.99, S_3 = 0.999, S_4 = 0.9999$.
b. The limit is 1.

74\. $\sum_{k=1}^{\infty} k$
>Solution
a. $S_1 = 1, S_2 = 3, S_3 = 6, S_4 = 10$.
b. The limit does not exist.

75\. $\sum_{k=1}^{\infty} (-1)^k$
>Solution
a. $S_1 = -1, S_2 = 0, S_3 = -1, S_4 = 0$.
b. The limit does not exist.

77\. $\sum_{k=1}^{\infty} \frac{3}{10^k}$
>Solution
a. $S_1 = 0.3, S_2 = 0.33, S_3 = 0.333, S_4 = 0.3333$.
b. The limit is $\frac{1}{3}$.

78–81\. **Practical sequences** Consider the following situations that generate a sequence.
a. Write out the first five terms of the sequence.
b. Find an explicit formula for the terms of the sequence.
c. Find a recurrence relation that generates the sequence.
d. Using a calculator or a graphing utility, estimate the limit of the sequence or state that it does not exist.

79\. **Radioactive decay** A material transmutes 50% of its mass to another element every 10 years due to radioactive decay. Let $M_n$ be the mass of the radioactive material at the end of the nth decade, where the initial mass of the material is $M_0 = 20 g$.
>Solution
a. $M_1 = 10, M_2 = 5, M_3 = 2.5, M_4 = 1.25, M_5 = 0.625$.
b. $M_n = 20\cdot(0.5)^n$
c. $M_{n+1} = 0.5M_n$
d. The limit is 0.

81\. **Drug elimination** Jack took a 200-mg dose of a strong painkiller at midnight. Every hour, 5% of the drug is washed out of his bloodstream. Let $d_n$ be the amount of drug in Jack’s blood n hours after the drug was taken, where $d_0 = 200 mg$.
>Solution
a. $d_1 = 190, d_2 = 180.5, d_3 = 171.475, d_4 = 162.90125, d_5 = 154.75619$.
b. $d_n = 200\cdot(0.95)^n$
c. $d_{n+1} = 0.95d_n$
d. The limit is 0.
