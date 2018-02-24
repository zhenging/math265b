### 3.8 Derivatives of Logarithmic and Exponential Functions

#### The Derivative of $y=\ln x$
> Inverse Properties for $e^x$ and \ln x
1\. $e^{\ln x} = x$, for $x > 0$, and $\ln (e^x) = x$, for all $x$.
2\. $y = \ln x$ if only if $x = e^y$.
3\. For real numbers $x$ and $b > 0$, $b^x = e^{\ln b^x} = e^{x\ln b}$.

To find the derivative of $y=e^x$, we begin with the **inverse property 2** and write $x=e^y$, where $x > 0$. The key step is to compute $dy/dx$ using implicit differentiation. Using the Chain Rule to differentiation both sides of $x=e^y$ with respect to $x$, we have
$$
\eqalign {
x &= e^y \\
1 &= e^y \cdot \frac{dy}{dx}\\
\frac{dy}{dx} &= \frac{1}{e^y} = \frac{1}{x} = \frac{d}{dx}(\ln x)
}
$$
Because the domain of the natural logarithm is $(0, \infty)$, the rule is limited to positive use of $x$.
An important extension is obtained by considering the function $\ln{|x|}$, which is defined for all $x \ne 0$. By the defintion of the absolute value,
$$
\ln{|x|} = \cases{
\ln x & \text{if }x>0 \\
\ln (-x) & \text{if }x<0
}
$$
For $x>0$, if follows immediately that
$$
\frac{d}{dx}{\ln |x|} = \frac{d}{dx}{\ln x} = \frac{1}{x}
$$
When $x<0$, a similar calculation using the Chain Rule reveals that
$$
\frac{d}{dx}{\ln |x|} = \frac{d}{dx}{\ln -x} = \frac{1}{(-x)} \cdot (-1) = \frac{1}{x}
$$

>**Theorem 3.17 Derivative of $\ln x$**
$$
\frac{d}{dx}(\ln x) = \frac{1}{x}, \text{for } x > 0 \qquad
\frac{d}{dx}(\ln |x|) = \frac{1}{x}, \text{for } x \ne 0
$$
If $u$ is differentiable at $x$ and $u(x) \ne 0$, then
$$
\frac{d}{dx}(\ln {|u(x)|}) = \frac{u'(x)}{u(x)}
$$

**Example 1** Derivative involving $\ln x$
Find $\displaystyle\frac{dy}{dx}$ for the following functions.
a. $y=\ln{4x}$ &emsp; b. $y=x\ln{x}$ &emsp; c. $y=\ln{|\sec x|}$ &emsp; d. $y=\dfrac{\ln{x^2}}{x^2}$
>Solution
$$
\eqalign{
a. \frac{dy}{dx} &= \frac{d}{dx}(\ln{4x}) = \frac{d}{dx}(\ln{4} + \ln{x}) \\
&= 0 + \frac{1}{x} = \frac{1}{x} \\
\\
b. \frac{dy}{dx} &= \frac{d}{dx}(x\ln{x}) = 1 \cdot {\ln x} + \frac{1}{x} \cdot x \\
&= \ln x + 1 \\
\\
c. \frac{dy}{dx} &= \frac{d}{dx}(\ln{|\sec x|}) = \frac{1}{\sec x} \cdot \frac{d}{dx}(\sec x) \\
&= \frac{1}{\sec x}(\sec x \tan x) \\
&= \tan x \\
\\
d. \frac{dy}{dx} &= \frac{\ln{x^2}}{x^2} = \frac{x^2(\frac{1}{x^2} \cdot 2x) - (\ln x^2)\cdot 2x}{(x^2)^2} \\
&= \frac{2x - {4x \ln x}}{x^4} \\
&= \frac{2 - {4 \ln x}}{x^3} \\
}
$$

#### The Derivative of $b^x$
A rule similar to $\dfrac{d}{dx}(e^x)$ exists for computing the derivative of $b^x$, where $b>0$. Because $b^x = e^{x\ln b}$ by **inverse property 3**, its derivative is
$$
\frac{d}{dx}(b^x) = \frac{d}{dx}(e^{x\ln b}) = e^{x\ln b} \cdot {\ln b}
$$
Noting that $e^{x\ln b} = b^x$ results in the following theorem

>Theorem 3.18 **Derivative of $b^x$**
If $b > 0$ and $b \ne 1$, then for all $x$, $\dfrac{d}{dx}(b^x) = b^x{\ln b}$.

**Example 2** Derivatives with $b^x$
Find the derivative of the following functions.
a. $f(x) = 3^x$ &emsp; b. $g(t) = 108 \cdot 2^{t/12}$
>Solution
a. $f'(x) = 3^x{\ln 3}$
b. $f'(x) = 9{\ln 2}\cdot 2^{t/12}$

**Example 3** An exponential model
>Solution
Todo

#### The General Power Rule

>Theorem 3.19 **General Power Rule**
For real numbers $p$ and $x > 0$, $\dfrac{d}{dx}(x^p) = px^{n-1}$.
Furthermore, if $u$ is a positive differentiable function on its domain, then $\dfrac{d}{dx}(u(x)^p) = p(u(x)^{p-1}) \cdot u'(x)$

**Proof**: For $x>0$ and real number $p$, we have $x^p = e^{p\ln x}$ by inverse property (3). Therefore, the derivative of $x^p$ is computed as follows:
$$
\eqalignno{
\frac{d}{dx}(x^p) &= \frac{d}{dx}(e^{p\ln x}) \\
&= e^{p \ln x} \cdot \frac{p}{x} \\
&= x^p \cdot \frac{p}{x} \\
&= px^{p-1} \\
}
$$

**Example 4** Comuting derivatives
Find the derivatives of the following functions.
a. $y=x^{\pi}$ &emsp; b. $y={\pi}^x$ &emsp; c. $y=(x^2 + 4)^e$
>Solution
a. $y'(x) = {\pi}x^{\pi -1}$
b. $y'(x) = {\pi}^x {\ln \pi}$
c. $y'(x) = 2ex(x^2 + 4)^{e-1}$

**Example 5** General exponential functions
Let $f(x) = x^{\sin x}$
a. Find $f'(x)$ &emsp; b. Evaluate $f'(\frac{\pi}{2})$
>Solution
a.
$$
\eqalign{
f(x) &= x^{\sin x} = e^{{\ln x}{\sin x}} \\
f'(x) &= e^{{\ln x}{\sin x}} \cdot (\frac{1}{x}{\sin x} + {\ln x}\cos x) \\
&= x^{\sin x}(\frac{\sin x}{x} +{\ln x}\cos x)
}
$$
b. $f'(\frac{\pi}{2}) = 1$

**Example 6** Finding a horizontal tangent line
Determine whether the graph of $f(x) = x^x$, for $x>0$, has any horizontal tangent line.
>Solution
A horizontal tangent occurs when $f'(x) = 0$. In order to find the derivative, we first write $f(x) = x^x = e^{x {\ln x}}$:
$$
\eqalign{
\frac{d}{dx}(x^x) &= \frac{d}{dx}(e^{x {\ln x}}) \\
&= e^{x {\ln x}}(1 \cdot {\ln x} + x \cdot \frac{1}{x}) \\
&= x^x({\ln x} + 1)
}
$$
The equation $f'(x) = 0$ implies that $x^x = 0$ or ${\ln x} + 1 = 0$. The first equation has no solution because $x^x = e^{x {\ln x}} > 0$, for all $x>0$. We solve the second equation, as follows:
$$
\eqalign{
{\ln x} &= -1 \\
e^{\ln x} &= e^{-1} \\
x &= \frac{1}{e}
}
$$
Therefore, the graph of $f(x) = x^x$ has a single horizontal tanglent at $(e^{-1}, f(e^{-1})) \thickapprox (0.368, 0.692)$.

#### Derivatives of the General Logarithmic Functions
The general exponential function $f(x) = b^x$ is one-to-one when $b>0$ with $b \ne 0$. The inverse function$f^{-1}(x) = {\log_b}x$ is the logarithmic function with base $b$. The technique used to differentiate the natural logarithm applies to the general logarithmic function. We begin with the inverse relationship
$$
y = \log_{b}x \leftrightarrow x = b^y
$$
Differentiating both sides of $x = b^y$, we obtain
$$
\eqalign{
1 &= b^y \cdot {\ln}b \cdot \frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{1}{{b^y}{\ln}b} \\
\frac{dy}{dx} &= \frac{1}{x{\ln}b}
}
$$

> Theorem 3.20 **Derivative of $\log_{b}x$**
If $b>0$ with $b \ne 1$, then
$$
\frac{d}{dx}(\log_{b}x) = \frac{1}{x{\ln}b}, \text{for } x>0 \text{  and } \frac{d}{dx}(\log_{b}|x|) = \frac{1}{x{\ln}b}, \text{for } x \ne 0.
$$

**Example 7** Derivatives with general logarithms
Compute the derivativec of the following functions <br>
a. $f(x) = \log_{5}(2x+1)$
b. $T(n) = n{\log_{2}n}$
>Solution
$$
\eqalign{
a. f'(x) &= \frac{1}{(2x + 1){\ln 5}} \cdot 2 = \frac{2}{\ln 5} \cdot \frac{1}{(2x+ 1)} \\
b. T'(n) &= {\log_2 n} + n \cdot \frac{1}{n{\ln 2}} = {\log_2 n} + \frac{1}{\ln 2}
}
$$

#### Logarithmic Differentiation

**Example 8** Logarithmic Differentiation <br>
Let $\displaystyle f(x) = \frac{(x^3 - 1)^4 {\sqrt {3x-1}}}{x^2 + 4}$ and compute $f'(x)$
>Solution
We begin by taking the natural logarithm of both sides and simplifying the result:
$$
\eqalign{
\ln (f(x)) &= {\ln [\frac{(x^3 - 1)^4 {\sqrt {3x-1}}}{x^2 + 4}]} \\
&= {\ln (x^3 - 1)^4} + {\ln {\sqrt {3x-1}}} - {\ln (x^2 + 4)} \\
&= 4{\ln (x^3 -1)} + \frac{1}{2}{\ln (3x-1)} - {\ln (x^2 + 4)}\\
}
$$
We now differentiate both side using the Chain Rule; specifically the derivative of the left side is $\displaystyle\frac{d}{dx}({\ln x}) = \frac{f'(x)}{f(x)}$. Therefore,
$$
\eqalign{
\frac{f'(x)}{f(x)} &= 4 \cdot \frac{1}{x^3 - 1} \cdot 3x^2 + \frac{1}{2} \cdot \frac{1}{3x - 1} \cdot 3 - \frac{1}{x^2 + 4} \cdot 2x
}
$$
Solving for $f'(x)$, we have
$$
f'(x) = f(x)[\frac{12x^2}{x^3-1} + \frac{3}{2(3x-1)} - \frac{2x}{x^2 + 4}]
$$
Finally, we replace $f(x)$ with the original function:
$$
f'(x) = {\frac{(x^3 - 1)^4 {\sqrt {3x-1}}}{x^2 + 4}}[\frac{12x^2}{x^3-1} + \frac{3}{2(3x-1)} - \frac{2x}{x^2 + 4}]
$$

Logarithmic differentiaion also provides an alternative method for finding derivative of function of the form $g(x)^{h(x)}$. The derivative of $f(x) = x^x$ (Example 6) is computed as follows, assuming $x>0$:
$$
\eqalign{
f(x) &= x^x \\
{\ln (f(x))} &= {\ln x^x} = x {\ln x} \\
\frac{f'(x)}{f(x)} &= {\ln x} + x \cdot \frac{1}{x} \\
f'(x) &= f(x)({\ln x} + 1) \\
f'(x) &= {x^x}({\ln x} + 1) \\
}
$$
