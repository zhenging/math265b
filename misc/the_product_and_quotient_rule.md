---
tags: [derivative, product rule, quotient rule, proof]
page: 152
sectiin: 3.3 The Product and Quotient Rule
---

### The Product and Quotient Rule

>Theorem 3.7 Product Rule
If $f$ and $g$ are differentiable at $x$, then
$$
\frac{d}{dx}{(f(x)g(x))} = f'(x)g(x) + f(x)g(x)
$$

#### Proof
We apply the definition of derivative to the function $fg$:
$$
\begin{aligned}
\frac{d}{dx}{(f(x)g(x))}
&= \lim_{h \to 0}{\frac{f(x+h)g(x+h)-f(x)g(x)}{h}} \\
&= \lim_{h \to 0}{\frac{f(x+h)g(x+h){\color{#38accd}{-f(x)g(x+h)+f(x)g(x+h)}}-f(x)g(x)}{h}} \\
&= \lim_{h \to 0}{\frac{f(x+h)g(x+h){\color{#38accd}{-f(x)g(x+h)}}}{h}} + \lim_{h \to 0}{\frac{{\color{#38accd}{f(x)g(x+h)}}-f(x)g(x)}{h}} \\
&= \lim_{h \to 0}\lb{\frac{f(x+h) - f(x)}{h} \cdot g(x+h)} \rb + \lim_{h \to 0}{\lb f(x) \cdot\frac{g(x+h)-g(x)}{h}\rb} \\
&= \overbrace{\lim_{h \to 0}{\frac{f(x+h) - f(x)}{h}}}^{\color{#38accd}\text{definition of }f'(x)} \cdot \overbrace{\lim_{h \to 0}{g(x+h)}}^{\color{#38accd}\text{equal to }g(x)} + \underbrace{\lim_{h \to 0}{f(x)}}_{\color{#38accd}\text{equal to }g(x)} \cdot \underbrace{\lim_{h \to 0}{\frac{g(x+h) - g(x)}{h}}}_{\color{#38accd}\text{definition of }g'(x)}\\
&= f'(x)g(x)+f(x)g'(x)
\end{aligned}
$$

>Theorem 3.8 Quotient Rule
If $f$ and $g$ are differentiable at $x$, then the derivative of $f/g$ at $x$ exists, provided $g(x) \ne 0$, and
$$
\frac{d}{dx}\lb\frac{f(x)}{g(x)}\rb = \frac{f'(x)g(x) - f(x)g'(x)}{(g(x))^2}
$$
