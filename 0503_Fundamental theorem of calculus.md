### 5.3 Fundamental Theorem of Calculus

#### Area Function
The concept of an area function is crucial to the discussion abou the connection between dervatives and integrals. We start with a continuous function $y=f(t)$ defined for $t \ges a$, where $a$ is a fixed number. The *area function* for $f$ with left endpint $a$ is denoted $A(x)$; it gives the net area of the region bounded by the graph of $f$ and the $t$-axis between $t=a$ and $t=x$. The area of this region is also give by the definite integral
$$
A(x) = \int_a^x {f(t)}dt
$$
Notice that $x$ is the upper limit of the integral and the independent variable of the area function: As $x$ changes, so does the net area under the curve. Because the symbol $x$ is already in use as the independent variables for $A$, we must choose another symbol for the variable of integration. Any symbol-except $x$ can be used because it is a *dummy variable*; we have choose $t$ as the integration variable.

Definition **Area Function**
Let $f$ be a continuous function, for $t \ges a$. The area function for f with left endpoint a is
$$
A(x) = \int_a^x {f(t)}dt
$$
where $x \ges t$. The area function gives the net area of the region bounded by the graph of $f$ and the $t$-axis on the interval $[a, x]$.

**Example 1** Area regions
>**Solution**
Todo

**Example 2** Area of a trapezoid
>**Solution**
Todo

#### Fundamental Theorem of Calculus

>**Theorem 5.3 (Part 1) Fundamental Theorem of Calculus**
If $f$ is continuous on $[a,b]$ then the area function
$$
A(x) = \int_a^x {f(t)}dt, \text{ for } a \les x \les b
$$
is continous on $[a, b]$ and differentiable on $(a,b)$. The area function satisfies $A'(x) = f(x)$; or equivalently,
$$
A'(x) = \frac{d}{dx}{\int_a^x {f(t)}d(t)} = f(x),
$$
which means that the area function of $f$ is an antiderivative of $f$ on $[a, b]$.

>**Theorem 5.3 (Part 2) Fundamental Theorem of Calculus**
If $f$ is continuous on $[a,b]$ and $F$ is any antiderivatives of $f$ on $[a, b]$, then
$$
\int_a^b {f(x)}dx = F(b) - F(a)
$$

It is customary and convenient to denote the difference $F(b) - F(a)$ by $F(x)|_a^b$. Using this shorthand, the Fundamental Theorem is summarized as follows
$$
\int_a^b {f(x)}dx = F(b) - F(a) = F(x)|_a^b
$$

##### The Inverse Relationship between Differentition and Integration
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
>**Solution**
a. $1000$ b. $0$ c. $\frac{1}{2} - \ln 4$

**Example 4** Net areas and definite integrals
The graph of $f(x) = 6x(x+1)(x-2)$ is shown in Figure 5.44. The region $R_1$ is bounded by the curve and the x-axis on the inteval $[-1, 0]$, and $R_2$ is bounded by the curve and the x-axis on the interval $[0, 2]$.
a. Find the *net area* of the region between the curve and the x-axis on $[-1, 2]$
b. Find the *area* of the region between the curve and the x-axis on $[-1, 2]$.
>**Solution**
a. $-\dfrac{27}{2}$ &emsp; b.$-\dfrac{37}{2}$

**Example 5** Derivatives of integrals
Use Part 1 of the Fundamental Theorem to simplify the following expressions.
a. $\dfrac{d}{dx}{\dint_1^x {\sin^2 t}dt}$ &emsp; b. $\dfrac{d}{dx}{\dint_x^5 {\sqrt {t^2 + 1}}dt}$ &emsp; c. $\dfrac{d}{dx}{\dint_0^{x^2} {\cos t^2}dt}$
>**Solution**
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
\eqalign{
\frac{d}{dx}{\int_0^{x^2} {\cos t^2}}dt &= \frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx} \\+
&= \lb{\frac{d}{du}{\int_0^u \cos t^2}dt}\rb(2x) \\
&= ({\cos u^2})(2x) \\
&= 2x{\cos x^4}
}
$$

**Example 6** Working with area functions
>**Solution**
Todo

**Example 7** The sine integral function
Let $g(t) = \cases{\frac{{\sin t}}{t} &if t>0\\ 1 &\text{if } t = 1}$. Graph the sine integral function $S(x) = \int_0^x {g(t)}dt$
>**Solution**
Todo

**Proof of the Fundamental Theorem**
Let $f$ be continuous on $[a,b]$, and let $A$ be the area function for $f$ with left endpoint $a$. The first step is to prove $A'(x) = f(x)$, which is Part 1 of the Fundamental Theorem. The proof of Part 2 then follows

**Step 1.** We use the definition of the derivative
$$
A'(x) = \lim_{h \to 0}{\frac{A(x+h) - A(x)}{h}}
$$
First assume that $h>0$. Using Figure 5.48 and Property 5 of Table 5.4, we have
$$
A(x+h) - A(x) = \int_a^{x+h} {f(t)}dt - \int_a^{x} {f(t)}dt = \int_x^{x+h} {f(t)}dt
$$
That is, $A(x+h) - A(x)$ is the net area of the region bounded by the curve on the interval $[x, x+h]$.
Let $m$ and $M$ be the minumum and maximum values of $f$ on $[x, x+h]$, respectively, which exist by the continuity of $f$. In the case that $0 \les m \les M$, $A(x+h) - A(x)$ is greater than or equal to the area of a rectangle with height $m$ and withd $h$ and it is less than or equal to the area of the rectangle with height $M$ and width $h$; that is
$$
mh \les A(x+h) - A(x) \les Mh
$$
Dividing these inequalities by $h$, we have
$$
m \les \frac{A(x+h) - A(x)}{h} \les M
$$
The case $h<0$ is handled similarly and leads to the same conclusion.
We now take the limit as $h \To 0$ accross these inequalities. As $h \To 0$, $m$ and $M$ squeeze together towards the value of $f(x)$, because $f$ is continuous at $x$. At the same time, as $h \To$, the quotient that is sandwiched between $m$ and $M$ approaches $A'(x)$:
$$
\lim_{h \to 0}{m} = \lim_{h \to 0}{\frac{A(x+h) - A(x)}{h}} = \lim_{h \to 0}{M}
$$
By the Squeeze Theorem, we conclude that $A'(x) = f(x)$.

**Step 2.** Having established that the area function $A$ is an antiderivatives of $f$, we know that $F(x) = A(x) + C$, where $F$ is any antiderivative of $f$ and $C$ is a constant. Noting that $A(a) = 0$, it follows that
$$
F(b)- F(a) = (A(b) + C) - (A(a) + C) = A(b)
$$
Writing $A(b)$ in terms of a definite integral, we have
$$
A(b) = \int_a^b f(x)dx = F(b) - F(a)
$$
which is Part 2 of the Fundamental Theorem.
