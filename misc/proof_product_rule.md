---
tags: [derivative, product rule]
---

### Product Rule

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
&= \lim_{h \to 0}{\frac{f(x+h)g(x+h){\bf{-f(x)g(x+h)+f(x)g(x+h)}}-f(x)g(x)}{h}} \\
&= \lim_{h \to 0}{\frac{f(x+h)g(x+h){\bf{-f(x)g(x+h)}}}{h}} + \lim_{h \to 0}{\frac{{\bf{f(x)g(x+h)}}-f(x)g(x)}{h}} \\
&= \lim_{h \to 0}{\lb\frac{f(x+h) - f(x)}{h} \cdot g(x+h)\rb} + \lim_{h \to 0}{\lb f(x) \cdot \frac{g(x+h)-g(x)}{h}\rb} \\
&= \lim_{h \to 0}{\frac{f(x+h) - f(x)}{h}} \cdot \lim_{h \to 0}{g(x+h)} + \lim_{h \to 0}{\frac{g(x+h) - g(x)}{h}} \cdot \lim_{h \to 0}{f(x)} \\
&= f'(x)g(x)+g'(x)f(x)
\end{aligned}
$$
