---
tags: [derivative, chain rule, proof]
page: 182
section: 3.6 The Chain Rule
---

### The Chain Rule

>Theorem 3.14 The Chain Rule
Suppose $y=f(u)$ is differentiable at $u=g(x)$ and $u=g(x)$ is > differentiable at $x$. The composite function $y=f(g(x))$ is differentiable at $x$, and its derivative can be expressedin two equivalent ways:
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{dy}{du} \cdot \frac{du}{dx} &{\text{Version 1}} \\
\frac{d}{dx}(f(g(x))) &= f'(g(x)) \cdot g'(x) &{\text{Version 2}}
\end{aligned}
$$

>Theorem 3.15 Chain Rule For Powers
If $g$ is differentiable for all $x$ in its domain and i is an integer, then
$$
\frac{d}{dx}[(g(x))^n] = n(g(x))^{n-1}g'(x)
$$

#### Proof
Suppose $f$ is differentiable at $u=g(a)$, $g$ is differentiable at $a$, and $h(x) = f(g(x))$.
$$
\begin{aligned}
h'(a) &= \lim_{x \to a}{\frac{h(x) - h(a)}{x - a}} &\text{(1)}\\
&= \lim_{x \to a}{\frac{f(g(x)) - f(g(a))}{x - a}} \\
&= \lim_{x \to a}{\frac{f(g(x)) - f(g(a))}{x - a} \cdot } \frac{g(x) - g(a)}{g(x) - g(a)} &\text{(2)}\\
&= \lim_{x \to a}{\frac{f(g(x)) - f(g(a))}{g(x) - g(a)} \cdot } \frac{g(x) - g(a)}{x - a} \\
&= \lim_{x \to a}{\frac{f(v) - f(u)}{v - u} \cdot } \frac{g(x) - g(a)}{x - a} &\text{(3)}\\
&= \lim_{v \to u}{\frac{f(v) - f(u)}{v - u}} \cdot \lim_{x \to a}{\frac{g(x) - g(a)}{x - a}} &\text{(4)}\\
&= f'(u)g'(a) &\text{(5)}
\end{aligned}
$$
(1). Definition of the derivative
(2). We multiply the right side of the equation(1) by $\frac{g(x) - g(a)}{g(x) - g(a)}$, which equals 1.
(3). Let $v = g(x)$ and $u = g(a)$.
(4). By assumption, $g$ is differentiable at $a$; therefore, it is continuous at $a$. This means that $\dlim_{x \to a}{g(x)}$, so $v \to u$ as $x \to a$.
(5). Because $f$ and $g$ are differentiable at $u$ and $a$, respectively, the two limits in this expression exist; therefore $h'(a)$ exists. Noting that $u=g(a)$ , we have $h'(a) = f'(g(a))g'(a)$. Replacing $a$ with the variable $x$ gives the Chain Rule: $h'(x) = f'(g(x))g'(x)$.

#### Examples
Find derivatives of the following functions.
a. $(\tan x + 10)^{21}$
b. $\sin (e^{\cos x})$
c. $(x^2 \sqrt {x^2 + 1})$
>Solution
a. $21(\tan x + 10)^{20}{\sec^2 x}$
b. $-\sin x \cdot e^{\cos x} \cdot \cos (e^{\cos x})$
c. $\dfrac{3x^3 + 2x}{\sqrt {x^2 + 1}}$
