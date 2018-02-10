### 3.1 Introducing the Derivatives
This concept is important for several reasons.
* We identify the slope of the tangent line with the *instantaneous rate of change* of a function.
* The slopes of the tangent lines as they change along a curve are the values of a new function called *derivative*.
* If a curve represents the trajectory of a moving object, the line tangent to the curve at a point gives the directive of motive at that point.

#### Tangent Lines and Rates of Change

Definition - **Rates of Change and the Tangent Line**
The **average rate of change** in $f$ on the interval $[a, x]$ is the slope of the corresponding secant line:
$$
m_{sec} = \frac{f(x) - f(a)}{x-a}
$$
The **instantaneous rate of change** in $f$ at $x = a$ is
$$
m_{tan} = \lim_{x \to a}\frac{f(x) - f(a)}{x-a}
$$
which is also the slope of the tangent line at $(a, f(a))$, provided this limit exists. This tangent line is the unique line through $(a, f(a))$ with slope $m_{tan}$. Its equations is
$$
y-f(a) = m_{tan}(x-a)
$$

**Examples 1 Equation of a tangent line**
>**Solution**
Todo

Alternative Definition - **Rates of Change and the Tangent Line**
The **average rate of change** in $f$ on the interval $[a, a + h]$ is the slope of the corresponing secant line:
$$
m_{sec} = \dfrac{f(a + h) - f(a)}{h}
$$
The **instantaneous rate of change** in $f$ at $x = a$ is
$$
m_{tan} = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}
$$
which is also the slope of the tangent line at $(a, f(a))$, provided this limit exists. This tangent line is the unique line through $(a, f(a))$ with slope $m_{tan}$. Its equations is
$$
y-f(a) = m_{tan}(x-a)
$$

**Examples 2** Equation of a tangent line
Find an equation of the line tangent to the graph of $f(x) = x^3 + 4x$ at $x=1$.
>**Solution**
$y=7x-2$

#### The Derivative Function
Definition **The Derivative**
The **derivative** of $f$ is the function
$$
f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}
$$
provided the limit exists and $x$ is the domain of $f$. If $f'(x)$ exists, we say $f$ is **differentiable** at $x$. If $f$ is  differentiable at every point of an open interval $I$, we say that $f$ is differentiable on $I$.

**Examples 3 The slope of a curve**
Consider once again the function $f(x) = -16x^2 + 96x$ of Example 1 and find its derivative.
>**Solution**
$f'(x) = -32x + 96$

#### Derivative Notation
$$
\frac{f(x + \Delta{x}) - f(x)}{\Delta{x}} = \frac{\Delta{y}}{\Delta{x}}
$$

In addition to the notation $f'(x)$ and $\frac{\Delta{y}}{\Delta{x}}$, other common ways of writing the derivative include:
$\dfrac{df}{dx}$ &emsp; $\dfrac{d}{dx}(f(x))$ &emsp; $D_x(f(x)$ &emsp; and &emsp; $y'(x)$.

**Examples 4** A derivative calculation
Todo
**Examples 5** Another derivative calculation
Todo

#### Graphs of Derivatives
**Examples 6** Graphs of Derivatives
Todo
**Examples 7** Graphs of Derivatives
Todo

#### Continuity

>**Theorem 3.1 Differentiable Implies Continuous**
If $f$ is differentiable at a point $a$, then $f$ is continuous at $a$.

>**Theorem 3.1(Alternative Version) Not Continuous Implies Not Differentiable**
If $f$ is not continuous at a point $a$, then $f$ is not differentiable at $a$.

**Examples 8** Continuous and Differentiable
Todo
