---
tags: [limit, squeeze theorem]
page: 76
section: 2.3 Techniques for Computing Limits
---

### The Squeeze Theorem
The *Squeeze Theorem* provides another useful method for calculating limits. Suppose functions $f$ and $h$ have the same limit $L$ at a and assume the function $g$ is trapped between $f$ and $h$. The *Squeeze Theorem* says that g must also have the limit $L$ at $a$. A proof of this theorem is outlined in Exercise 54 of Section 2.7.

>Theorem 2.5 The Squeeze Theorem
Assume the functions $f$, $g$, and $h$ satisfy $f(x) \les g(x) \les h(x)$ for all values of $x$ near $a$, except possibly at $a$. If $\dlim_{x \to a}f(x) = \lim_{x \to a}h(x) = L$, then $\dlim_{x \to a}g(x) = L$.

#### Examples
1\. **Sine and cosine limits**. A geometric argument may be used to show that $-\pi/2 < x < \pi/2$,
$$
-|x| \les \sin{x} \les |x| \text{ and } 0 \les 1-\cos{x} \les |x|
$$
Use the Squeeze Theorem to confirm the following limits.
a. $\dlim_{x \to 0}\sin{x} = 0$ &emsp; b. $\dlim_{x \to 0}\cos{x} = 1$
>Solution
Todo

2\. **Applying the Squeeze Theorem**. Use the Squeeze Theorem to verify that $\dlim_{x \to 0}{x^2\sin(\dfrac{1}{x})} = 0$.
>Solution
Todo
