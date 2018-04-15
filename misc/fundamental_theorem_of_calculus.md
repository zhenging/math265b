---
tags: [integration, the fundamental theorem]
page: 355
section: 5.3 Fundamental Theorem of Calculus
---

### The Fundamental Theorem of Calculus

>Theorem 5.3 (Part 1) Fundamental Theorem of Calculus
If $f$ is continuous on $[a,b]$ then the area function
$$
A(x) = \int_a^x {f(t)}dt, \text{ for } a \les x \les b
$$
is continous on $[a, b]$ and differentiable on $(a,b)$. The area function satisfies $A'(x) = f(x)$; or equivalently,
$$
A'(x) = \frac{d}{dx}{\int_a^x {f(t)}d(t)} = f(x),
$$
which means that the area function of $f$ is an antiderivative of $f$ on $[a, b]$.

>Theorem 5.3 (Part 2) Fundamental Theorem of Calculus
If $f$ is continuous on $[a,b]$ and $F$ is any antiderivatives of $f$ on $[a, b]$, then
$$
\int_a^b {f(x)}dx = F(b) - F(a)
$$

#### Proof
Let $f$ be continuous on $[a,b]$, and let $A$ be the area function for $f$ with left endpoint $a$. The first step is to prove $A'(x) = f(x)$, which is Part 1 of the Fundamental Theorem. The proof of Part 2 then follows

**Step 1.** We use the definition of the derivative
$$
A'(x) = \lim_{h \to 0}{\frac{A(x+h) - A(x)}{h}}
$$
First assume that $h>0$. Using Figure 5.48 and Property 5 of Table 5.4, we have
$$
A(x+h) - A(x) = \int_a^{x+h} {f(t)}dt - \int_a^{x} {f(t)}dt = \int_x^{x+h} {f(t)}dt
$$
That is, $A(x+h) - A(x)$ is the net area of the region bounded by the curve on the interval $[x, x+h]$.
Let $m$ and $M$ be the minumum and maximum values of $f$ on $[x, x+h]$, respectively, which exist by the continuity of $f$. In the case that $0 \les m \les M$, $A(x+h) - A(x)$ is greater than or equal to the area of a rectangle with height $m$ and withd $h$ and it is less than or equal to the area of the rectangle with height $M$ and width $h$; that is
$$
mh \les A(x+h) - A(x) \les Mh
$$
Dividing these inequalities by $h$, we have
$$
m \les \frac{A(x+h) - A(x)}{h} \les M
$$
The case $h<0$ is handled similarly and leads to the same conclusion.
We now take the limit as $h \To 0$ accross these inequalities. As $h \To 0$, $m$ and $M$ squeeze together towards the value of $f(x)$, because $f$ is continuous at $x$. At the same time, as $h \To$, the quotient that is sandwiched between $m$ and $M$ approaches $A'(x)$:
$$
\lim_{h \to 0}{m} = \lim_{h \to 0}{\frac{A(x+h) - A(x)}{h}} = \lim_{h \to 0}{M}
$$
By the Squeeze Theorem, we conclude that $A'(x) = f(x)$.

**Step 2.** Having established that the area function $A$ is an antiderivatives of $f$, we know that $F(x) = A(x) + C$, where $F$ is any antiderivative of $f$ and $C$ is a constant. Noting that $A(a) = 0$, it follows that
$$
F(b)- F(a) = (A(b) + C) - (A(a) + C) = A(b)
$$
Writing $A(b)$ in terms of a definite integral, we have
$$
A(b) = \int_a^b f(x)dx = F(b) - F(a)
$$
which is Part 2 of the Fundamental Theorem.
