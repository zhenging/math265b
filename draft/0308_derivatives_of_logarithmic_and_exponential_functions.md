### 3.8 Derivatives of Logarithmic and Exponential Functions

#### The Derivative of $y=\ln x$
> Inverse Properties for $e^x$ and $\ln x$
1\. $e^{\ln x} = x$, for $x > 0$, and $\ln (e^x) = x$, for all $x$.
2\. $y = \ln x$ if only if $x = e^y$.
3\. For real numbers $x$ and $b > 0$, $b^x = e^{\ln b^x} = e^{x\ln b}$.

To find the derivative of $y=e^x$, we begin with the **inverse property 2** and write $x=e^y$, where $x > 0$. The key step is to compute $dy/dx$ using implicit differentiation. Using the Chain Rule to differentiation both sides of $x=e^y$ with respect to $x$, we have
$$
\begin{aligned}
x &= e^y \\
1 &= e^y \cdot \frac{dy}{dx}\\
\frac{dy}{dx} &= \frac{1}{e^y} = \frac{1}{x} = \frac{d}{dx}(\ln x)
\end{aligned}
$$
Because the domain of the natural logarithm is $(0, \infty)$, the rule is limited to positive use of $x$.
An important extension is obtained by considering the function $\ln{|x|}$, which is defined for all $x \ne 0$. By the defintion of the absolute value,
$$
\ln{|x|} = \begin{cases}
\ln x & \text{if }x>0 \\
\ln (-x) & \text{if }x<0
\end{cases}
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
\begin{aligned}
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
\end{aligned}
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



#### Derivatives of the General Logarithmic Functions
The general exponential function $f(x) = b^x$ is one-to-one when $b>0$ with $b \ne 0$. The inverse function$f^{-1}(x) = {\log_b}x$ is the logarithmic function with base $b$. The technique used to differentiate the natural logarithm applies to the general logarithmic function. We begin with the inverse relationship
$$
y = \log_{b}x \leftrightarrow x = b^y
$$
Differentiating both sides of $x = b^y$, we obtain
$$
\begin{aligned}
1 &= b^y \cdot {\ln}b \cdot \frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{1}{{b^y}{\ln}b} \\
\frac{dy}{dx} &= \frac{1}{x{\ln}b}
\end{aligned}
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
\begin{aligned}
a. f'(x) &= \frac{1}{(2x + 1){\ln 5}} \cdot 2 = \frac{2}{\ln 5} \cdot \frac{1}{(2x+ 1)} \\
b. T'(n) &= {\log_2 n} + n \cdot \frac{1}{n{\ln 2}} = {\log_2 n} + \frac{1}{\ln 2}
\end{aligned}
$$

#### Logarithmic Differentiation

**Example 8** Logarithmic Differentiation <br>
Let $\displaystyle f(x) = \frac{(x^3 - 1)^4 {\sqrt {3x-1}}}{x^2 + 4}$ and compute $f'(x)$
>Solution
We begin by taking the natural logarithm of both sides and simplifying the result:
$$
\begin{aligned}
\ln (f(x)) &= {\ln [\frac{(x^3 - 1)^4 {\sqrt {3x-1}}}{x^2 + 4}]} \\
&= {\ln (x^3 - 1)^4} + {\ln {\sqrt {3x-1}}} - {\ln (x^2 + 4)} \\
&= 4{\ln (x^3 -1)} + \frac{1}{2}{\ln (3x-1)} - {\ln (x^2 + 4)}\\
\end{aligned}
$$
We now differentiate both side using the Chain Rule; specifically the derivative of the left side is $\displaystyle\frac{d}{dx}({\ln x}) = \frac{f'(x)}{f(x)}$. Therefore,
$$
\begin{aligned}
\frac{f'(x)}{f(x)} &= 4 \cdot \frac{1}{x^3 - 1} \cdot 3x^2 + \frac{1}{2} \cdot \frac{1}{3x - 1} \cdot 3 - \frac{1}{x^2 + 4} \cdot 2x
\end{aligned}
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
\begin{aligned}
f(x) &= x^x \\
{\ln (f(x))} &= {\ln x^x} = x {\ln x} \\
\frac{f'(x)}{f(x)} &= {\ln x} + x \cdot \frac{1}{x} \\
f'(x) &= f(x)({\ln x} + 1) \\
f'(x) &= {x^x}({\ln x} + 1) \\
\end{aligned}
$$
