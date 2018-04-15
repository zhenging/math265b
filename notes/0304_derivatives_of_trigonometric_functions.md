
#### Derivatives of Sine and Cosine Functions
>Theorem 3.12 Derivatives of Sine and Cosine
$\dfrac{d}{dx}(\sin x) = \cos x$ &emsp; $\dfrac{d}{dx}(\cos x) = -\sin x$

**Proof**
We start with the definition of the derivative.
$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}{\frac{\sin(x+h) - \sin x}{h}} &\text{Definition of the derivative.}\\
&= \lim_{h \to 0}{\frac{\sin x\cos h + \cos x\sin h - \sin x}{h}} &\text{Sine addition identity.} \\
&= \lim_{h \to 0}{\frac{\sin x(\cos h - 1) + \cos x\sin h}{h}} \\
&= \lim_{h \to 0}{\frac{\sin x(\cos h - 1)}{h}} + \lim_{h \to 0}{\frac{\cos x\sin h}{h}} &\text{Theorm 2.3.}\\
&= \sin x \lb\bf{\lim_{h \to 0}{\frac{\cos h - 1}{h}}}\rb + \cos x\lb\bf{\lim_{h \to 0}{\frac{\sin h}{h}}}\rb &\text{Both sinx and cosx are independent of h.}\\
&= (\sin x)(0) + (\cos x)(1) &\text{Theorm 3.11.}\\
&= \cos x
\end{aligned}
$$
We have proved the import result that $\dfrac{d}{dx}(\sin x) = \cos x$.
The fact that $\dfrac{d}{dx}(\cos x) = -\sin x$ is proved in a similar way using a cosine addition identity.

>Example 2
**Derivatives involving trigonometric functions**
a. $y=e^{2x}\cos x$ &emsp; b. $y=\sin x - x\cos x$ &emsp; c. $y = \dfrac{1 + \sin x}{1 - \sin x}$

>Solution
a. $y' = e^{2x}(2\cos x - \sin x)$
b. $y' = x\sin x$
c. $y' = \dfrac{2\cos x}{(1-\sin x)^2}$

#### Derivatives of Other Trigonometric Functions

>Example 3
**Derivatives of the tangent function.** Calculate $\dfrac{d}{dx}(\tan x)$.

>Solution
$$
\begin{aligned}
\frac{d}{dx}(\tan x) &= \frac{d}{dx}(\frac{\sin x}{\ cos x}) \\
&= \frac{\cos x\cos x - \sin x(-\sin x)}{{\cos^2}x} \\
&= \frac{{\cos^2}x + {\sin^2}x}{{\cos^2}x} \\
&= \frac{1}{{\cos^2}x} \\
&= {\sec^2}x
\end{aligned}
$$

>Theorem 3.13 Derivatives of the Trigonometric Functions
$$
\begin{aligned}
\frac{d}{dx}(\sin x)&= \cos x \qquad
&\frac{d}{dx}(\cos x)&= -\sin x \\
\frac{d}{dx}(\tan x)&= \sec^2 x \qquad
&\frac{d}{dx}(\cot x)&= -\csc^2 x \\
\frac{d}{dx}(\sec x)&= \sec x\tan x \qquad
&\frac{d}{dx}(\csc x)&= -\csc x\cot x
\end{aligned}
$$

>Example 4
**Derivatives involving $\sec x$ and $\csc x$.** Find the derivative of $y = \sec x\csc x$.

>Solution
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{d}{dx}(\sec x\csc x) \\
&= \frac{d}{dx}(\sec x)\cdot\csc x + \sec x\frac{d}{dx}(\csc x) &\text{Product Rule} \\
&= \sec x\tan x\csc x + \sec x(-\csc x\cot x) \\
&= \frac{1\cdot\sin x\cdot 1}{\cos x\cdot\cos x\cdot\sin x} - \frac{1\cdot\cos x\cdot 1}{\cos x\cdot\sin x\cdot\sin x} &\text{Write functions in terms of sinx and cosx}\\
&= \frac{1}{{\cos^2} x} - \frac{1}{{\sin^2} x} \\
&= {\sec^2} x - {\csc^2} x
\end{aligned}
$$
