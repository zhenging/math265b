### 3.3 The Product and Quotient Rules

#### Product Rule
>Theorem 3.7 Product Rule
If $f$ and $g$ are differentiable at $x$, then
$$
\frac{d}{dx}{(f(x)g(x))} = f'(x)g(x) + f(x)g(x)
$$

**Proof**: We apply the definition of derivative to the function $fg$:
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

**Example 1** Using the Product Rule
Find and simplify the following derivatives.
a. $\dfrac{d}{dv}(v^2(2\sqrt{v}+ 1))$ &emsp; b. $\dfrac{d}{dx}(x^2e^x))$

#### Quotient Rule

>Theorem 3.8 Quotient Rule
If $f$ and $g$ are differentiable at $x$, then the derivatives of $f/g$ exists, provided $g(x) \neq 0$, and
$$
\frac{d}{dx}\lb\frac{f(x)}{g(x)}\rb = \frac{g(x)f'(x) - f(x)g'(x)}{g^2(x)}
$$

**Example 2 Using the Quotient Rule**
Find and simplify the following derivatives.
a. $\dfrac{d}{dx}{\lb\frac{x^2+3x+4}{x^2-1}\rb}$ &emsp; b. $\dfrac{d}{dx}{(e^{-x})}$
>Solution
a. $\dfrac{-3x^2-10x-3}{(x^2-1)^2}$ &emsp; b. $-e^{-x}$

**Example 3** Finding tangent line
Find the equation of the line tangent to the graph of $f(x) = \dfrac{x^2+1}{x^2-4}$ at the point $(3, 2)$. Plot the curve and the tangent line.
>Solution
To find the slope of the tangent line, we compute $f'$ using the Quotient Rule:
$$
f'(x) = \frac{d}{dx}{(\frac{x^2+1}{x^2-4})} = \frac{-10x}{(x^2-4)^2}
$$
The slope of the tangent line at point $(3, 2)$ is
$$
m_{sec} = f'(3) = \frac{-10 \times 3}{(3^2-4)^2} = -\frac{6}{5}
$$
The equation is
$$
\frac{y-2}{x-3} = -\frac{6}{5} \To y = -\frac{6}{5}x + \frac{28}{5}
$$

#### Extending the Power Rule to Negative Integers

>**Theorem 3.9 Extended Power Rule**
If $n$ is any integer, then $\dfrac{d}{dx}(x^n) = nx^{n-1}$.

**Example 4 Using the Extended Power Rule**
a. $\dfrac{d}{dx}(\dfrac{9}{x^5})$ &emsp; b. $\dfrac{d}{dt}(\dfrac{3t^{16} -4}{t^6})$
>Solution
a. $-45x^{-6}$ &emsp; b. $30t^9 + 24t^{-7}$

#### The Derivative of $e^{kx}$
>**Theorem 3.10 The Derivative of $e^{kx}$**
For real number $k$, $\dfrac{d}{dx}(e^{kx}) = ke^{kx}$.

**Example 5** Exponential derivatives
a. $y = xe^{5x}$ &emsp; b. $y = 1000e^{0.07x}$
>Solution
a. $y' = (1+5x)e^{5x}$ &emsp; b. $y' = 70e^{0.07x}$

#### Rates of Change
The derivative provides information about the instantaneous rate of change of a function.

**Example 6** Population growth rates
Todo

#### Combining Derivative Rules

**Example 7** Combining derivative Rules
$y = \dfrac{4xe^x}{x^2 + 1}$

>Solution
$y' = \dfrac{4e^x(x^3-x^2+x+1)}{(x^2+1)^2}$
