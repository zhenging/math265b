### 3.9 Derivatives of Inverse Trigonometric Functions

#### Inverse Sine Its Derivative
The derivative of $y={\sin^{-1} x}$ follows by differentiating both side of $x={\sin y}$ with respect to $x$, simplifying, and solving for $dy/dx$:
$$
\begin{aligned}
x&={\sin y} \\
\frac{d}{dx}(x) &= \frac{d}{dx}({\sin y}) \\
1 &= {\cos y} \cdot \frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{1}{\cos y}
\end{aligned}
$$
The identity $\sin^2 y + {\cos^2 y} = 1$ is used to express this derivative in terms of $x$. Solveing for ${\cos y}$ yields
$$
\begin{aligned}
{\cos y} &= \pm {\sqrt {1-{\sin^2 y}}}\\
&= \pm {\sqrt {1-x^2}}
\end{aligned}
$$
Because $y$ is restricted to the interval $-\pi/2 \les y \les \pi/2$. We have ${\cos y} \ges 0$. Therefore, we choose the positive branch of the square root, and it follows that
$$
\frac{dy}{dx} = \frac{d}{dx}({\sin^{-1} x}) = \frac{1}{{\sqrt {1-x^2}}}
$$

>Theorem 3.21 **Derivative of Inverse Sine**
$$
\frac{d}{dx}({\sin^{-1} x}) = \frac{1}{{\sqrt {1-x^2}}}, \text{for } -1 \les x \les 1
$$

**Example 1** Derivatives involving the inverse sine
Compute the following derivatives
a. $\dfrac{d}{dx}({\sin^{-1} (x^2-1)})$ &emsp; b. $\dfrac{d}{dx}({\cos ({\sin^{-1} x})})$
>Solution
a. $\dfrac{d}{dx}({\sin^{-1} (x^2-1)}) = \frac{2x}{{\sqrt {2x^2 - x^4}}}$
b. $\dfrac{d}{dx}({\cos ({\sin^{-1} x})}) = -\frac{x}{\sqrt {1-x^2}}$

#### Derivatives of Inverse Tangent and Secant

##### Inverse Tangent
Recall from Section 1.4 that $y = {\tan^{-1} x}$ is the value of $y$ such that $x={\tan y}$, where $-\pi/2 \les y \les \pi/2$. To find $\frac{dy}{dx}$, we differentiate both sides of $x = {\tan y}$ with respoect to $x$ and simplify
$$
\begin{aligned}
x &= {\tan y} \\
\frac{d}{dx}(x) &= \frac{d}{dx}({\tan y}) \\
1 &= {\sec^2 y} \cdot \frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{1}{{\sec^2 y}}
\end{aligned}
$$
To express this derivative in terms of $x$, we combine the trigonometric identity ${\sec^2 y} = 1 + {\tan^2 y}$ with $x = {\tan y}$ to obtain ${\sec^2 y} = 1 + x^2$. Subsituting this result into the expression for $dy/dx$, it follows that
$$
\frac{dy}{dx} = \frac{d}{dx}({\tan^{-1} x}) = \frac{1}{1 + x^2}
$$

##### Inverse Secant
Recall from Section 1.4 that $y = {\sec^{-1} x}$ is the value of $y$ such that $x = {\sec y}$, where $0 \les y \les \pi$, with $y \ne \pi/2$. The domain of $y = {\sec^{-1} x}$ us ${x: |x| \ges 1}$.
The derivative of the inverse secant presents a new twist. Let $y = {\sec^{-1} x}$, or $x = {\sec y}$, and then differentiate both sides of $x = {\sec y}$ with respect ti $x$:
$$
\begin{aligned}
1 &= {\sec y}{\tan y}\frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{1}{{\sec y}{{\tan y}}}
\end{aligned}
$$
The final step is to express $y$ in terms of $x$ by using the identity ${\sec^2 y} = 1 + {\tan^2 y}$. Solving this eqaution for ${\tan y}$, we have
$$
{\tan y} = \pm {\sqrt {{\sec^2 y -1}}} = \pm {\sqrt {{x^2 -1}}}
$$
Two case muse be examined to resolve the sign on the square root:
1. By the definition of $y = {\sec^{-1} x}$, if $x \ges 1$, then $0 \les y \les \pi/2$ and $y > 0$. In this case we choose the positive branch and take $y = {\sqrt {x^2 - 1}}$.
2. However, if $x \les -1$, then $\pi/2 \lt y \les \pi$. Now we choose the negative branch.
This argument accounts for the ${\tan y}$ factor in the derivative. For the ${\sec y}$ factor, we have ${\sec y} = x$. Therefore, the derivative of the inverse secant is
$$
\frac{d}{dx}({\sec^{-1} x}) = \begin{cases}{\dfrac{1}{x {\sqrt {x^2-1}} }\quad \text{if } x >1}\\{-\dfrac{1}{x {\sqrt {x^2-1}} }\quad \text{if } x <-1}\end{cases}
$$
which is an awkward result. The absolute value helps here: Recall that $|x| = x$, if $x>0$ and $|x| = -x$, if $x<0$. It follows that
$$
\frac{d}{dx}({\sec^{-1} x}) = \frac{1}{|x| {\sqrt {x^2-1}} }\quad \text{for } |x| >1
$$

#### Derivatives of Other Inverse Trigonometric Functions
The hard work is complete. The derivative of the inverse cosine results from identity
$$
{\cos^{-1} x} + {\sin^{-1} x} = \frac{\pi}{2}
$$
Differentiating both sides of this equation with respect to $x$, we find that
$$
\frac{d}{dx}{\cos^{-1} x} + \frac{d}{dx}{\sin^{-1} x} = \frac{d}{dx}(\frac{\pi}{2})
$$
Solving for $\frac{d}{dx}{\cos^{-1} x}$, the required derivative is
$$
\frac{d}{dx}{\cos^{-1} x} = -\frac{1}{\sqrt {1-x^2}}
$$
In a similar manner, the analogous identities
$$
{\cot^{-1} x} + {\tan^{-1} x} = \frac{d}{dx}(\frac{\pi}{2}) \quad \text{and} \quad {\csc^{-1} x} + {\sec^{-1} x} = \frac{d}{dx}(\frac{\pi}{2})
$$
are used to show that the derivative of ${\cot^{-1} x}$ and ${\csc^{-1} x}$ are the negative of the derivatives of ${\tan^{-1} x}$ and ${\sec^{-1} x}$, respectively.

**Example 2** Derivatives of inverse trigonometric functions
a. Evaluate $f'(2 {\sqrt {3}})$, where $f(x) = x {\tan^{-1} (x/2)}$
b. Find an equation of the line tangent of the graph of $g(x) = {\sec^{-1} (2x)}$ at the point $(1, \pi/3)$.
>Solution
$$
\begin{aligned}
\text{a.} \quad f'(x) &= 1 \cdot {\tan^{-1} \frac{x}{2}} + x \cdot \frac{1}{1+(x/2)^2} \cdot \frac{1}{2} \\
&= {\tan^{-1} \frac{x}{2}} + \frac{2x}{4 + x^2} \\
\\
f'(2 {\sqrt {3}}) &= {\tan^{-1} ({\sqrt {3}})} + \frac{2(2{\sqrt {3}})}{4 + (2{\sqrt {3}})^2} = \frac{\pi}{3} + \frac{\sqrt {3}}{4}
\end{aligned}
$$
b. The slope of the tangent line at $(1, \pi/3)$ is $g'(x)$. Using the Chain Rule, we have
$$
\begin{aligned}
g'(x) = \frac{d}{dx}{\sec^{-1} {2x}} = \frac{2}{|2x|{\sqrt {4x^2 - 1}}} = \frac{1}{|x|{\sqrt {4x^2 - 1}}}
\end{aligned}
$$
It follows that $g'(1) = 1/{\sqrt {3}}$. An equation of the tangent line is
$$
y - \frac{\pi}{3} = \frac{1}{\sqrt {3}} (x-1) \quad \text{or} \quad y = \frac{1}{\sqrt {3}} x + \frac{\pi}{3} - \frac{1}{{\sqrt {3}}}
$$

**Example 3** Shadows in a ballpart.
>Solution
Todo

#### Derivatives of Inverse Functions in General

**Example 4** Linear functions, inverse, and derivatives
Consider the general linear function $y = f(x) = mx + b$, where $m \ne  0$ and $b$ are constants.
a. Write the inverse of $f$ in the form $y = f^{-1}(x)$.
b. Find the derivative of the inverse $\dfrac{d}{dx}(f^{-1}(x))$.
c. Consider the specific case $f(x) = 2x - 6$. Graph $f$ and $f^{-1}$, and find the slope of each line.

>Solution
a. Solving $y = mx + b$ for $x$, we find that $mx = y - b$, or
$$
x = \frac{y}{m} - \frac{b}{m}
$$
Writing this function in the form $y = f^{-1}(x)$(by reversing the roles of $x$ and $y$), we have
$$
y = f^{-1}(x) = \frac{x}{m} - \frac{b}{m}
$$
b. The derivative of $f^{-1}$ is
$$
(f^{-1})(x) = \frac{1}{m} = \frac{1}{f'(x)}
$$
Notice that $f'(x) = m$ , so the derivative of $f^{-1}$ is the reciprocal of $f'$.
c. In the case that $f(x) = 2x-6$, we have $f^{-1}(x) = x/2 + 3$. The graphs of these two lines are symmetric about the line $y = x$. Furthermore, the slope of the line $y = f(x)$ is $2$ and the slop of the line $y = f^{-1}(x)$ is $1/2$, that is, the slopes (and, therefore, the derivatives) are reciprocals of each other.

>Theorem 3.23 **Derivative of the Inverse Function**
Let $f$ be differentiable and have an inverse function on an interval $I$. If $x_0$ is a point of $I$ at which $f(x_0) \ne 0$, then $f^{-1}$ is differentiable at $y_0 = f(x_0)$ and
$$
(f^{-1})(y_0) = \frac{1}{f'(x_0)}\text{, where } y_0
= f(x_0)$$

**Proof**
Before doing a short calculation, we note two facts:
* At a point $x_0$ where $f$ is diffable, $y_0 = f(x_0)$ and $x_0 = f^{-1}(y_0)$.
* As a differentiable function $f$ is continuous at $x_0$, which implies $f^{-1}$ is continuous at $y_0$ . Therefore, as $y \to y_0,\: x \to x_0$
Using the definition of the derivative, we have
$$
\begin{aligned}
(f^{-1})'(y_0) &= \lim_{y \to y_0}{\frac{f^{-1}(y) - f^{-1}(y_0)}{y-y_0}} \\
&= \lim_{x \to x_0}{\frac{x - x_0}{f(x)-f(x_0)}} \\
&= \lim_{x \to x_0}{\frac{1}{\frac{f(x)-f(x_0)}{x-x_0}}} \\
&= \frac{1}{f'(x_0)}
\end{aligned}
$$
We have shown that $(f^{-1})'(y_0)$ exists ($f^{-1}$ is differentiable at $y_0$) and it equals the reciprocal of $f'(x_0)$

**Example 5** Derivative of an inverse function
$f(x) = {\sqrt {x}} + x^2 + 1$ is one-to-one, for $x \ges 0$, and has an inverse on that interval. Find the slope of the curve $y = f^{-1}(x)$ at point $(3, 1)$.
>Solution
The point $(1, 3)$ is on the graph of $f$; therefore $(3, 1)$ is on the graph of $f^{-1}$. In this case, the slope of the curve $y = f^{-1}(x)$ at point $(3, 1)$ is the reciprocal of the slope of the curve $y = f(x)$ at point $(1, 3)$. Note that $\displaystyle f(x) = \frac{1}{2 {\sqrt {x}}} + 2x$, which means that $f'(1) = \frac{1}{2} + 2 = \frac{5}{2}$. Therefore,
$$
(f^{-1})(3) = \frac{1}{f'(1)} = \frac{1}{5/2} = \frac{2}{5}
$$
Observe that it is not necessary to find the formula of $f^{-1}$ in order to evaluate its derivative at a point.
