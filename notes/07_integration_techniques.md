### Integration Techniques

+ Integration By Parts
+ Trigonometric Integrals
+ Trigonometric Substitutions
+ Partial Fractions
+ Nuerical Integration
+ Improper Integrals

#### Integration By Parts
Interation by parts is idealy suited for evaluating integrals of _products_ of functions.
$$
\begin{aligned}
\frac{d}{dx}u(x) v(x) &= u'(x)v(x) + u(x)v'(x) &\text{(1)}\\
u(x) v(x) &= \int (u'(x)v(x) + u(x)v'(x))dx &\text{(2)}\\
\int u(x) \color{#039be5}{\underbrace{v'(x)dx}_{dv}}  &=  u(x) v(x) - \int v(x)\color{#039be5}{\underbrace{u'(x)dx}_{du}} &\text{(3)}\\
\int udv &= uv - \int vdu &\text{(4)}
\end{aligned}
$$
(1) Taking derivative by the Product Rule
(2) Integrating both sides
(3) Rearranging the express
(4) Suppressing independent variable $x$.

##### EXAMPLES
1\. Interation by Parts $\dint xe^x dx$
2\. Repeated use of integration by parts $\dint x^2 e^x dx$
3\. **Integrals of $\ln x$**

#### Trigonometric Integrals

#### 7.7 Numerical Integration

#### Midpoint Rule
>Definition Midpoint Rule
Suppose $f$ is defined and integrable on $[a, b]$ The **Midpoint Rule** approximation to $\dint f(x)dx$ using $n$ equally spaced subintervals on $[a, b]$ is
$$
\begin{aligned}
M(n) &= f(m_1)\Delta x + f(m_2)\Delta x + \cdots + f(m_n)\Delta x\\
&= \sum_{k=1}^n f(\frac{x_{k-1} + x_k}{2})\Delta x
\end{aligned}
$$
where $\Delta x = \dfrac{b-a}{n}$, $x_k=a+k\Delta x$, and $m_k$ is the midpoint of $[x_{k-1}, x_k]$, for $k=1,\cdots, n$.

#### Trapezoid Rule
>Definition Trapezoid Rule
Suppose $f$ is defined and integrable on $[a, b]$ The **Trapezoid Rule** approximation to $\dint f(x)dx$ using $n$ equally spaced subintervals on $[a, b]$ is
$$
T(n) = \lb \frac{1}{2}f(x_0) + \sum_{k=1}^{n-1}f(x_k) + \frac{1}{2}f(x_n)\rb \Delta x
$$
where $\Delta x = \dfrac{b-a}{n}$, and $x_k=a+k\Delta x$, for $k=0, 1,\cdots, n$.

#### Simpson's Rule

>Definition Simpson's Rule
Suppose $f$ is defined and integrable on $[a, b]$. The **Simpson’s Rule** approximation to $\dint f(x)dx$ using n equally spaced subintervals on $[a, b]$ is
$$
S(n) = \lb f(x_0) + 4f(x_1) + 2f(x_2) + \cdots + 4f(x_{n-1} + f(x_n)\rb \frac{\Delta x}{3}
$$
where n is an even integer, $\Delta x = \dfrac{b-a}{n}$, and $x_k=a+k\Delta x$, for $k = 0, 1, \cdots, n$. Alternatively, if the Trapezoid Rule approximations $T(2n)$ and $T(n)$ are known, then
$$
S(n) = \frac{4T(2n) - T(n)}{3}
$$
