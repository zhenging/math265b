### 3.2 Rules of Differentiation

#### The Constant and Power Rules for Derivatives

The graph of the constant function $f(x) = c$ is a horizontal line with a slope of $0$ at every point. It follows that $f'(x) = 0$, equivalently, $\frac{d}{dx}(c) = 0$.

>**Theorem 3.2 Constant Rule**
If $c$ is a real number, then $\frac{d}{dx}(c) = 0$.

Next, we consider power
We use the definition of the derivative in the form
$$
f'(x) = \lim_{x \to a}{\frac{f(x) - f(a)}{x - a}}
$$
if $f(x = x^n$, then $f(x)-f(a) = x^n - a^n$. A factoring formula gives
$$
x^n - a^n = (x-a)(x^{n-1} + x^{n-2}a + \cdots + xa^{n-2} + a^{n-1})
$$
Therefore,
$$
\eqalign{
f'(x) &= \lim_{x \to a}{\frac{x^n - a^n}{x - a}} \text{Definition of f'(a)} \\
&= \lim_{x \to a}{\frac{(x-a)(x^{n-1} + x^{n-2}a + \cdots + xa^{n-2} + a^{n-1})}{x-a}} \text{Factor x^n-a^n} \\
&= \lim_{x \to a}{(x^{n-1} + x^{n-2}a + \cdots + xa^{n-2} + a^{n-1})} \text{Cancel comment factors} \\
&= a^{n-1} + a^{n-2}\cdot a + \cdots + a\cdot a^{n-2} + a^{n-1} \text{Evaluate limits} \\
&= na^{n-1}
}
$$
Replacing $a$ by the variable $x$ in $f'(a) = na^{n-1}$, we obtain the following result knowns as the *Power Rule*.

>**Theorem 3.3 Power Rule**
If $n$ is a positive integer, then $\frac{d}{dx}(x^n) = nx^{n-1}$.

**Example 1** Derivatives of power and constant functions<br>
a. $\dfrac{d}{dx}(x^9)$ &emsp; b. $\dfrac{d}{dx}(x)$ &emsp; c. $\dfrac{d}{dx}(2^8)$

>**Solution**
a. $\dfrac{d}{dx}(x^9) = 9x^8$ &emsp; b. $\dfrac{d}{dx}(x) = 1$ &emsp; c. $\dfrac{d}{dx}(2^8) = 0$

#### Constant Multiple Rule
> **Theorem 3.4 Constant Multiple Rule**
If $f$ is differentiable at $x$ and c is a constant, then $\frac{d}{dx}{cf(x)} = cf'(x)$.

**Proof**
We apply the definition of the derivative in the form
$$
f'(x) = \lim_{h \to 0}{\frac{f(x + h) - f(x)}{h}}
$$
to the function $cf$:
$$
\eqalign{
\frac{d}{dx}[cf(x)] &= \lim_{h \to 0}{\frac{cf(x + h) - cf(x)}{h}} &\text{Definition of the derivative} \\
&= \lim_{h \to 0}{\frac{c(f(x + h) - f(x))}{h}} &\text{Factor out c} \\
&= c\cdot \lim_{h \to 0}{\frac{f(x + h) - f(x)}{h}} &\text{Theorem 2.3} \\
&= cf'(x)
}
$$

**Example 2 Derivatives of constant multiples of functions**
a. $\dfrac{d}{dx}(-\dfrac{7x^{11}}{8})$ &emsp; b. $\dfrac{d}{dt}(\dfrac{3}{8}\cdot \sqrt t)$
>**Solution**
a. $\dfrac{d}{dx}(-\dfrac{7x^{11}}{8}) = -\dfrac{77}{8}x^{10}$ &emsp; b. $\dfrac{d}{dt}(\dfrac{3}{8}\cdot \sqrt t) = \dfrac{3}{16 \sqrt t}$

#### Sum Rule
>**Theorem 3.5 Sum Rule**
If $f$ and $g$ are differentiable at $x$, then
$$
\frac{d}{dx}(f(x) + g(x)) = f'(x) + g'(x)
$$

The **Sum Rule**

**Example 3** The derivatives of a polynomial
Determine $\dfrac{d}{dw}{(2w^3 + 9w^2 - 6w + 4)}$
>**Solution**
$$
\eqalign{
\frac{d}{dw}{(2w^3 + 9w^2 - 6w + 4)}
&= \frac{d}{dw}{(2w^3)} + \frac{d}{dw}{(9w^2)} - \frac{d}{dw}{(6w)} + \frac{d}{dw}{(4)} \\
&= 6w^2 + 18w - 6
}
$$

#### The Derivative of the Natural Exponential Function

>**Definition The Number e**
The number e=2.718281828459... satisfies
$$
\lim_{h \to 0}{\frac{e^h-1}{h}} = 1
$$
It is the base of the natural exponential function $f(x) = e^x$.

With the preceding facts in mind, the derivatives of $f(x) = e^x$ is computed as follows:
$$
\eqalign{
\frac{d}{dx}(e^x) &= \lim_{h \to 0}{\frac{e^{x + h} - e^x}{h}} \\
&= \lim_{h \to 0}{\frac{e^x \cdot e^h - e^x}{h}} \\
&= \lim_{h \to 0}{\frac{e^x(e^h - 1)}{h}} \\
&= e^x\lim_{h \to 0}{\frac{e^h - 1}{h}} \\
&= e^x \cdot 1 \\
&= e^x
}
$$

We have proved a remarkable fact: The derivative of the exponential function is itself; it is the only function (other then constant multiplies of $e^x$ and $f(x) = 0$) with this property.

>**Theorem 3.6 The Derivative of $e^x$**
The function $f(x) = e^x$ is differentiable, for all real numbers $x$, and
$$
\frac{d}{dx}(e^x) = e^x
$$

#### Slope of Tangent Lines

**Example 4 Finding tangent lines**
a. Wirte an equation of the line tangent to the graph of $f(x) = 2x - \frac{e^x}{2}$ at the point $(0, \frac{1}{2})$.
b. Find the points on the graph of $f$ at which the tangent line is horizontal.
>**Solution**
a. $f'(0) = \dfrac{3}{2}$ &emsp; b. $(\ln 4, f(\ln 4))$

**Example 5 Slope of a tangent line**
Let $f(x) = 2x^3 -15x^2 + 24x$. For what values of $x$ does the line tangent to the graph of $f$ have a slope of $6$?
>**Solution**
$x = \dfrac{5 \pm \sqrt 13}{2}$

#### High-Order Derivatives

>**Definition Higher-Order Derivatives**
Assuming $f$ can be differentiated as often as necessary, the **second derivative** of $f$ is
$$
f''(x) = f^{(2)}(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}(f'(x))
$$
For integers $n \ges 1$, the **nth derivative** is
$$
f^{(n)}(x) = \frac{d^n}{dx^n} = \frac{d}{dx}(f^{(n-1)}(x))
$$

**Example 6 Finding high-order derivatives**
Find the third derivative of the following functions.
a. $f(x) = 3x^3 - 5x + 12$ &emsp; b. $y = 3t + 2e^t$
>**Solution**
a. $f'''(x) = 18$ &emsp; b. $\dfrac{d^3y}{dx^3} = 2e^t$
