---
tags: [power rule, general power rule, derivative, proof]
page: 142
section: 3.2 Rules of Differentiation
---

### Power Rule
>Theorem 3.3 Power Rule
If $n$ is a positive integer, then
$$
\frac{d}{dx}(x^n) = nx^{n-1}
$$

#### Proof
We use the definition of the derivative in the form
$$
f'(x) = \lim_{x \to a}{\frac{f(x) - f(a)}{x - a}}
$$
If $f(x) = x^n$, then $f(x)-f(a) = x^n - a^n$. A factoring formula gives
$$
x^n - a^n = (x-a)(x^{n-1} + x^{n-2}a + \cdots + xa^{n-2} + a^{n-1})
$$
Therefore,
$$
\begin{aligned}
f'(x) &= \lim_{x \to a}{\frac{x^n - a^n}{x - a}} &\text{Definition of f'(a)} \\
&= \lim_{x \to a}{\frac{(x-a)(x^{n-1} + x^{n-2}a + \cdots + xa^{n-2} + a^{n-1})}{x-a}} &\text{Factor $x^n-a^n$} \\
&= \lim_{x \to a}{(x^{n-1} + x^{n-2}a + \cdots + xa^{n-2} + a^{n-1})} &\text{Cancel comment factors} \\
&= a^{n-1} + a^{n-2}\cdot a + \cdots + a\cdot a^{n-2} + a^{n-1} &\text{Evaluate limits} \\
&= na^{n-1}
\end{aligned}
$$
Replacing $a$ by the variable $x$ in $f'(a) = na^{n-1}$, we obtain the following result knowns as the *Power Rule*.

### The General Power Rule
>Theorem 3.19 General Power Rule
For real numbers $p$ and $x > 0$,
$$
\frac{d}{dx}(x^p) = px^{n-1}
$$
Furthermore, if $u$ is a positive differentiable function on its domain, then
$$
\frac{d}{dx}(u(x)^p) = p(u(x)^{p-1}) \cdot u'(x)
$$

#### Proof
For $x>0$ and real number $p$, we have $x^p = e^{p\ln x}$ by inverse property (3). Therefore, the derivative of $x^p$ is computed as follows:
$$
\begin{aligned}
\frac{d}{dx}(x^p) &= \frac{d}{dx}(e^{p\ln x}) \\
&= e^{p \ln x} \cdot \frac{p}{x} \\
&= x^p \cdot \frac{p}{x} \\
&= px^{p-1}
\end{aligned}
$$

#### Examples
Find the derivatives of the following functions.
a. $y=x^{\pi}$ &emsp; b. $y={\pi}^x$ &emsp; c. $y=(x^2 + 4)^e$ &emsp; d. $y=x^{\sin x}$ &emsp; e. $y=x^x$
>Solution
a. $y'(x) = {\pi}x^{\pi -1}$
b. $y'(x) = {\pi}^x {\ln \pi}$
c. $y'(x) = 2ex(x^2 + 4)^{e-1}$
d. $y'(x) = x^{\sin x}(\frac{\sin x}{x} +{\ln x}\cos x)$
e. $y'(x) = x^x({\ln x} + 1)$
