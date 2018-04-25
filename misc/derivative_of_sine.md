---
tags: [sin, trigonometric function, derivative, proof]
page: 161
section: 3.4 Derivatives of Trigonometric Functions
---

### Derivative of Sine and Cosine Functions
>Theorem 3.12 Derivatives of Sine and Cosine
$\dfrac{d}{dx}(\sin x) = \cos x$ &emsp; $\dfrac{d}{dx}(\cos x) = -\sin x$

#### Proof
We start with the definition of the derivative.
$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}{\frac{\sin(x+h) - \sin x}{h}} &\text{Definition of the derivative}\\
&= \lim_{h \to 0}{\frac{\sin x\cos h + \cos x\sin h - \sin x}{h}} &\text{Sine addition identity} \\
&= \lim_{h \to 0}{\frac{\sin x(\cos h - 1) + \cos x\sin h}{h}} \\
&= \lim_{h \to 0}{\frac{\sin x(\cos h - 1)}{h}} + \lim_{h \to 0}{\frac{\cos x\sin h}{h}} \\
&= \sin x \lb\bf{\lim_{h \to 0}{\frac{\cos h - 1}{h}}}\rb + \cos x\lb\bf{\lim_{h \to 0}{\frac{\sin h}{h}}}\rb &\text{Both sinx and cosx are independent of h.}\\
&= (\sin x)(0) + (\cos x)(1) &\text{Theorm 3.11.}\\
&= \cos x
\end{aligned}
$$

The fact that $\dfrac{d}{dx}(\cos x) = -\sin x$ is proved in a similar way using a cosine addition identity.

#### Examples
a. $y=e^{2x}\cos x$ &emsp; b. $y=\sin x - x\cos x$ &emsp; c. $y = \dfrac{1 + \sin x}{1 - \sin x}$
>Solution
a. $y' = e^{2x}(2\cos x - \sin x)$
b. $y' = x\sin x$
c. $y' = \dfrac{2\cos x}{(1-\sin x)^2}$
