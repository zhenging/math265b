### 2.6 Continuity

Informally, we say that a functionn $f$ is continuous at $a$ if the graph of $f$ contains no holes or breaks at $a$ (that is, if the graph near $a$ can be drawn without lifting the pencil). If $a$ function is not continuous at $a$ , then $a$ is point of discontinuity.

#### Continuity at a Point

>**Definition Continuity at a Point**
A function $f$ is continuous at $a$ if $\lim_{x \to a}{f(x)} = f(a)$. If $f$ is not continuous at $a$, then $a$ is a point of discontinuity.

>**Continuity Checklist**
In order for $f$ to be continuous at $a$, the following three conditions must hold:
1. $f(a)$ is defined ($a$ is in the domain of $f$).
2. $\dlim_{x \to a}{f(x)}$ exists.
3. $\dlim_{x \to a}{f(x)} = f(a)$ (the value of $f$ equals the limit of $f$ at $a$).

If $f$ is continuous at $a$, then $\dlim_{x \to a}f(x) = f(a)$, and direct substitution may be used to evaluate $\dlim_{x \to a}f(x)$

**Example 1 Points of discontinuity**
Figure 2.45
>**Solution**
Todo

**Example 2** Identifying discontinuities
Determine whether the following functions are continuous at $a$. Justify each answer using the continuity checklist.
a. $f(x) = \dfrac{3x^2 + 2x + 1}{x-1}; a = 1$
b. $g(x) = \dfrac{3x^2 + 2x + 1}{x+1}; a = 2$
c. $h(x) = \cases{ x{\sin \dfrac{1}{x}} & \text{if }x \ne 0 \\ 0 & \text{if } x = 0} ; a = 0$
>**Solution**
a. The function $f$ is not continuous at $1$ because $f(1)$ is undefined.
b. Because $g$ is a rational function and the denominator is nonzero at $2$, it follows by Theorem 2.3 that $\dlim_{x \to 2}g(x) = g(2) = 17$. Therefore $g$ is continuous at $2$.
c. By definition, $h(0) = 0$. In Exercise 55 of Section 2.3, we used the Squeeze Theorem to show that $\dlim_{x \to 0}{x\sin{\frac{1}{x}}} = 0$. Therefore, $\dlim_{x \to 0}h(x) = h(0)$, which implies that $h$ is continuous at $0$.

>**Theorem 2.9 Continuity Rules**
If $f$ and $g$ are continuous at $a$, then the following functions are also continuous at $a$. Assume $c$ is constant and $n>0$ is an integer.
a. $f+g$ &emsp; b. $f-g$
c. $cf$ &emsp; d. $fg$
e. $f/g, \text{ provided } g(a) \ne 0$ &emsp; f. $(f(x))^n$

>**Theorem 2.10 Polynomial and Rational Functions**
a. A polynomial function is continuous for all $x$.
b. A rational function(a function of the form $\dfrac{p}{q}$, where $p$ and $q$ are polynomials) is continuous for all $x$ for which $q(x) \ne 0$.

**Example 3 Applying the continuity theorems**
For what values of x is the function $f(x) = \dfrac{x}{x^2-7x +12}$ continuous?
>**Solution**
a. Because f is rational. Theorem 2.10b implies it is continuous form all x at which the denominator is nonzero. The denominator factors at $(x-3)(x-4)$. so it is zero at $x=3$ and $x=4$. Therefore, $f$ is continuous for all $x$ except at $x=3$ and $x=4$.

>**Theorem 2.11 Continuity of Composite Function at a Point**
If $g$ is continuous at $a$, and $f$ is continuous at $g(a)$, then the composite function $f \circ g$ is continuous.

**Example 4 Limit of a composition**
Evaluate $\dlim_{x \to 0}(\dfrac{x^4-2x+2}{x^6+2x^4 + 1})^{10}$.
>**Solution**
The rational function $\dfrac{x^4-2x+2}{x^6+2x^4 + 1}$ is continuous for all $x$ because its denominator is always positive (Theorem 2.10b). Therefore, $(\dfrac{x^4-2x+2}{x^6+2x^4 + 1})^{10}$, which is the composition of the continuous function $f(x) = x^{10}$ and a continuous rational function, is continuous for all $x$ by Theorem 2.11. By direct substitution,
$$
\lim_{x \to 0}(\frac{x^4-2x+2}{x^6+2x^4 + 1})^{10} = (\frac{0^4-2 \cdot 0 + 2}{0^6+2 \cdot 4 + 1})^{10} = 2^{10} = 1024
$$

#### Continuity on an Interval
>**Definition Continuity at Endpoints**
A function $f$ is continuous from the left (or left-continuous) at $a$ if $\lim_{x \to a^-}f(x) = f(a)$ and $f$ is continuous from the right(or right-continuous) at $a$ if $\lim_{x \to a^+}f(x) = f(a)$.

>**Definition Continuity on an Interval**
A function $f$ is continuous on an an interval $I$ if it is continuous at all points of $I$. If $I$ contains its endpoints, continuity on $I$ means continuous from the right or left at the endpoints.

**Example 5 Intervals of continuity**
Determine the intervals of continuity for $f(x) = \cases{
x^2+1 &\text{ if } x \les 0 \\ 3x + 5 &\text{ if } x \gt0}$
>**Solution**
$f$ is continuous on $(-\infty, 0]$ and on $(0, \infty)$.

#### Function Involving Roots

>**Theorem 2.12 Continuity of Functions with Roots**
Assume that m and n are positive integers with no common factors. if m is an odd integer, then $[f(x)]^{n/m}$ is continuous at all points which $f$ is continuous. If $m$ is even, then $[f(x)]^{n/m}$ is continuous at all points $a$ at which $f$ is continuous and $f(a) > 0$

**Example 6 Continuity with roots**
For what values of $x$ are the following functions continuious?
a. $g(x) = \sqrt{9-x^2}$ &emsp; b. $f(x) = (x^2-2x+4)^{2/3}$
>**Solution**
a. Note that $g$ involves an even root ($m=2$, $n=1$ in Theorem 2.12). If $-3 < x <3$, then $9-x^2>0$ and by Theorem 2.12, $g$ is continuous on $(-3, 3)$.
At the right endpoint, $\dlim_{x \to 3^-}{\sqrt{9-x^2}}=0 = g(3)$ by Limit Law 7, which implies that $g$ is left-continuous at $3$. Similarly, $g$ is right-continuous at $-3$ because $\dlim_{x \to -3^+}{\sqrt{9-x^2}}=0 = g(-3)$. Therefore, $g$ is continuous on $[-3, 3]$.
b. The polynomial $x^2-2x+4$ is continuous for all $x$ by Theorem 2.10a. Because $f$ involves an odd root ($m=3$, $n=2$ in Theorem 2.12), $f$ is continuous for all $x$.

#### Continuity of Transcendental Functions
##### Trigonometric Functions
##### Exponential Functions
##### Inverse Functions
>**Theorem 2.13 Continuity of Inverse Functions**
If a continuous function $f$ has an inverse on an interval $I$, then its inverse $f^{-1}$ also continuous (on the interval consisting of the points of $f(x)$, where $x$ is in $I$).

>**Theorem 2.14 Continuity of Transcendental Functions**
The following function are continuous at all point of their domains.
**Trigonometric**
$\sin x$ &emsp; $\cos x$
$\tan x$ &emsp; $\cot x$
$\sec x$ &emsp; $\csc x$
**Inverse Trigonometric**
$\sin^{-1} x$ &emsp; $\cos^{-1} x$
$\tan^{-1} x$ &emsp; $\cot^{-1} x$
$\sec^{-1} x$ &emsp; $\csc^{-1} x$
**Exponential**
$b^x$ &emsp; $e^x$
**Logarithmic**
$\log_b x$ &emsp; $\ln x$

For each function listed in Theorem 2.14, we have $\dlim_{x \to a}f(x) = f(a)$, provided $a$ is in the domain of the function. This means that limits these functions may be evaluated by direct substitution at points in the domain.

**Example 7 Limits involving transcendental functions**
Evaluating the following limits after determining the continuity of the function involved.
a. $\dlim_{x \to 0}{\dfrac{\cos^2 x - 1}{\cos x -1}}$ &emsp; b. $\dlim_{x \to 1}{ (\sqrt[4]{\ln x} + \tan^{-1} x)}$
>**Solution**
a. $\dlim_{x \to 0}{\frac{\cos^2 x - 1}{\cos x -1}} = 2$
b. By Theorem 2.14, $\ln x$ is continuous on its domain $(0, \infty)$. However, $\ln x > 0$ only when $x >1$, so Theorem 2.12 implies $\sqrt[4]{\ln x}$ is continuous on $(1, \infty)$. At $x=1$, $\sqrt[4]{\ln x}$ is right-continuous. The domain of $\tan^{-1} x$ is all real numbers, so it is continuous on $(-\infty), \infty$. Therefore $\dlim_{x \to 1}{ (\sqrt[4]{\ln x} + \tan^{-1} x)}$ is continuous on $[1, \infty)$. Because the domain of $f$ does not include point with $x<1$,  $\dlim_{x \to 1^-}{ (\sqrt[4]{\ln x} + \tan^{-1} x)}$ does not exist, which implies that $\dlim_{x \to 1}{ (\sqrt[4]{\ln x} + \tan^{-1} x)}$ does not exist.

#### The Intermediate Value Theorem
>**Theorem 2.15 The Intermediate Value Theorem**
Suppose f is continuous on the interval $[a, b]$ and $L$ is a number between $f(a)$ and $f(b)$. Then there is at least one number $c$ in $(a, b)$ satisfying $f(c) = L$.

**Example 8 Finding an interest rate**
>**Solution**
Todo
