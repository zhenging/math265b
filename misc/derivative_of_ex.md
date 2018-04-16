---
tags: [e^x, derivative, proof]
page: 199
sectiin: 3.8 Derivatives of Logarithmic and Exponential Functions
---

### The Derivative of $e^x$

>Theorem 3.6 The Derivative of $e^x$
The function $f(x) = e^x$ is differentiable, for all real numbers $x$, and
$$
\frac{d}{dx}(e^x) = e^x
$$

#### Proof
>Definition The Number e
The number e=2.718281828459... satisfies
$$
\lim_{h \to 0}{\frac{e^h-1}{h}} = 1
$$
It is the base of the natural exponential function $f(x) = e^x$.

With the preceding facts in mind, the derivatives of $f(x) = e^x$ is computed as follows:
$$
\begin{aligned}
\frac{d}{dx}(e^x) &= \lim_{h \to 0}{\frac{e^{x + h} - e^x}{h}} \\
&= \lim_{h \to 0}{\frac{e^x \cdot e^h - e^x}{h}} \\
&= \lim_{h \to 0}{\frac{e^x(e^h - 1)}{h}} \\
&= e^x\lim_{h \to 0}{\frac{e^h - 1}{h}} \\
&= e^x \cdot 1 \\
&= e^x
\end{aligned}
$$

We have proved a remarkable fact: The derivative of the exponential function is itself; it is the only function (other then constant multiplies of $e^x$ and $f(x) = 0$) with this property.

#### Examples
Todo

