### 3.6 The Chain Rule

#### Chain Rule Formulas
>Theorem 3.14 The Chain Rule
Suppose $y=f(u)$ is differentiable at $u=g(x)$ and $u=g(x)$ is > differentiable at $x$. The composite function $y=f(g(x))$ is differentiable at $x$, and its derivative can be expressedin two equivalent ways:
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{dy}{du} \cdot \frac{du}{dx} &{\text{Version 1}} \\
\frac{d}{dx}(f(g(x))) &= f'(g(x)) \cdot g'(x) &{\text{Version 2}}
\end{aligned}
$$

**Example 1** Version 1 of the Chain Rule
For each of the following composite functions, find the inner function $u=g(x)$ and the out function $y = f(u)$. Use Version 1 of the Chain Rule.
a. $y = (5x + 4)^3$ &emsp; b. $y = \sin^{3}x$ &emsp; c. $y = \sin x^3$
>Solution
a. Inner function $u=5x+4$. Outter function $y=u^3$
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{dy}{du} \cdot \frac{du}{dx} \\
&= 3u^2 \cdot 5 \\
&= 3(5x+4)^2 \cdot 5 \\
&= 15(5x+4)^2
\end{aligned}
$$
b. Inner function $u=\sin x$. Outter function $y=u^3$
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{dy}{du} \cdot \frac{du}{dx} \\
&= 3u^2 \cdot \cos x \\
&= 3(\sin x)^2 \cdot \cos x \\
&= 3{\sin^2 x}\cos x
\end{aligned}
$$
c. Inner function $u=x^3$. Outter function $y=\sin x$
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{dy}{du} \cdot \frac{du}{dx} \\
&= \cos u \cdot 3x^2 \\
&= \cos x^3 \cdot 3x^2\\
&= 3x^2{\cos x^3}
\end{aligned}
$$

**Example 2** Version 2 of the Chain Rule
Use Version 2 of the Chain Rule to calculate the derivatives of the following functions.
a. $(6x^3 + 3x + 1)^{10}$  &emsp; b. $\sqrt {5x^2 + 1}$ &emsp;c. $\displaystyle(\frac{5t^2}{3t^2 + 2})^3$
>Solution
$$
\begin{aligned}
a. \frac{dy}{dx} &= \frac{d}{dx}((6x^3 + 3x + 1)^{10}) \\
&= 10(6x^3 + 3x + 1)^9 \cdot (18x^2 + 3) \\
&= 30(6x^2 + 1)(6x^3 + 3x + 1)^9 \\
\\
b. \frac{dy}{dx} &= \frac{d}{dx}(\sqrt {5x^2 + 1}) \\
&= \frac{1}{2{\sqrt {5x^2 + 1}}} \cdot 10x \\
&= \frac{5x}{\sqrt {5x^2 + 1}} \\
\\
c. \frac{dy}{dt} &= \frac{d}{dt}((\frac{5t^2}{3t^2 + 2})^3) \\
&= 3(\frac{5t^2}{3t^2 + 2})^2 \cdot \frac{(3t^2 + 2) \cdot 10t - 5t^2(6t)}{(3t^2 + 2)^2} \\
&= \frac{1500t^5}{(3t^2 + 2)^4}
\end{aligned}
$$

**Example 3** Calculating derivatives at a Point <br>
>Solution
Todo

#### Chain Rule For Powers

>Theorem 3.15 **Chain Rule For Powers**
If $g$ is differentiable for all $x$ in its domain and i is an integer, then
$$
\frac{d}{dx}[(g(x))^n] = n(g(x))^{n-1}g'(x)
$$

**Example 4** Chain Rule For Powers <br>
Find $\displaystyle\frac{d}{dx}(\tan x + 10)^{21}$.
>Solution
With $g(x) = \tan x + 10$, the Chain Rule gives
$$
\begin{aligned}
\frac{d}{dx}(\tan x + 10)^{21} &= 21(\tan x + 10)^{20} \cdot \frac{d}{dx}(\tan x + 10) \\
& = 21(\tan x + 10)^{20}{\sec^2 x}
\end{aligned}
$$

#### The Composition of Three or More Functions

**Example 5** Composition of three functions
Calculate the derivative of $\sin e^{\cos x}$.
>Solution
$-\sin x \cdot e^{\cos x} \cdot \cos (e^{\cos x})$

**Example 6** Combining Rules
Find $\displaystyle\frac{d}{dx}{(x^2 \sqrt {x^2 + 1})}$
>Solution
$\dfrac{3x^3 + 2x}{\sqrt {x^2 + 1}}$

#### Proof of the Chain Rule
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
