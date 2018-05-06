### 5.3 Fundamental Theorem of Calculus

#### The Inverse Relationship between Differentition and Integration
It is worth pausing to observe that two parts of the Fundamental Theorem express the inverse relationship between differentiation and integration. Part 1 of the Fundamental Theorem says
$$
\frac{d}{dx}{\int_a^x {f(t)}dt} = f(x),
$$
or the derivative of the integral of $f$ is $f$ itself.
Noting that $f$ is antiderivative of $f'$, Part 2 of the Fundamental Theorem says
$$
\int_a^b {f'(x)}dx = f(b) - f(a)
$$
or the definite integral of the derivative of $f$ is give in terms of $f$ evaluated at two points. In other words, the integral "undoes" the derivative.


**Example 3** Evaluating definite integrals
Evaluating the following definite integrals using the Fundamental Theorem of Calculus, Part 2. Interpret each result geometrically.
a. $\dint_0^{10} {(60x-x^2)}dx$ &emsp; b. $\dint_0^{2\pi} {3{\sin x}}dx$ &emsp; c. $\dint_{1/16}^{1/4} {\frac{{\sqrt {t} -1}}{t}}dx$
>Solution
a. $1000$ b. $0$ c. $\frac{1}{2} - \ln 4$

**Example 4** Net areas and definite integrals
The graph of $f(x) = 6x(x+1)(x-2)$ is shown in Figure 5.44. The region $R_1$ is bounded by the curve and the x-axis on the inteval $[-1, 0]$, and $R_2$ is bounded by the curve and the x-axis on the interval $[0, 2]$.
a. Find the *net area* of the region between the curve and the x-axis on $[-1, 2]$
b. Find the *area* of the region between the curve and the x-axis on $[-1, 2]$.
>Solution
a. $-\dfrac{27}{2}$ &emsp; b.$-\dfrac{37}{2}$

**Example 5** Derivatives of integrals
Use Part 1 of the Fundamental Theorem to simplify the following expressions.
a. $\dfrac{d}{dx}{\dint_1^x {\sin^2 t}dt}$ &emsp; b. $\dfrac{d}{dx}{\dint_x^5 {\sqrt {t^2 + 1}}dt}$ &emsp; c. $\dfrac{d}{dx}{\dint_0^{x^2} {\cos t^2}dt}$
>Solution
a.
$$
\frac{d}{dx}{\int_1^x {\sin^2 t}dt} = {\sin^2 x}
$$
b. To apply Part 1 of the Fundamental Theorem, the variable must appear in the upper limit. Therefore, we use the fact that $\dint_a^b {f(x)}dx = -\int_b^a {f(x)}dx$ and then apply the Fundamental Theorem:
$$
\frac{d}{dx}{\int_x^5 {\sqrt {t^2 + 1}}dt} = - \frac{d}{dx}{\int_5^x {\sqrt {t^2 + 1}}dt} = -{\sqrt {x^2 + 1}}
$$
c. The upper limit of the integral is not $x$, but a function of $x$. Therefore, the function to be differentiated is a composite function, which requires the Chain Rule. We let $u = x^2$ to produce
$$
y = g(u) = \int_0^u {{\cos t^2}}dt,
$$
By the Chain Rule,
$$
\begin{aligned}
\frac{d}{dx}{\int_0^{x^2} {\cos t^2}}dt &= \frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx} \\+
&= \lb{\frac{d}{du}{\int_0^u \cos t^2}dt}\rb(2x) \\
&= ({\cos u^2})(2x) \\
&= 2x{\cos x^4}
\end{aligned}
$$

**Example 7** The sine integral function
Let $g(t) = \begin{cases}\frac{{\sin t}}{t} &\text{if } t>0\\ 1 &\text{if } t = 1\end{cases}$. Graph the sine integral function $S(x) = \int_0^x {g(t)}dt$
>Solution
Todo
