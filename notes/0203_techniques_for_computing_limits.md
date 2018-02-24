### 2.3 Techniques for Computing Limits
Graphical and numerical techniques for estimating limits, like those presented in the previous sections, provide intuition about limits. These techniques, however, occasionally lead to incorrect results. Therefore, we turn our attention to analytical methods for evaluating limits precisely.

#### Limits of Linear Functions
The graph of $f(x) = mx + b$ is a line with slope of $m$ and y-intercept $b$. From Figure 2.15, we see that $f(x)$ approaches $f(a)$ as $x$ approaches $a$. Therefore, if $f$ is a linear function, we have $\dlim_{x \to a}f(x) = f(a)$. It follows that for linear functions, $\dlim_{x \to a}f(x)$ is found by direct substitution for $x=a$ into $f(x)$. This observation leads to the following theorem, which is proved in Exercise 28 of section 2.7.

>**Theorem 2.2 Limits of Linear Functions**
Let $a, b$ and $m$ be real numbers. For linear function $f(x) = mx + b$,
$$
\lim_{x \to a}f(x) = f(a)
$$

**Example 1 Limits of Linear function** Evaluating the following limits.
a. $\dlim_{x \to a}f(x)$, where $f(x) = \frac{1}{2}x - 7$ &emsp; b. $\dlim_{x \to 2}g(x)$, where $g(x) = 6$
>Solution
a. $-\dfrac{11}{2}$ &emsp; b. $6$

#### Limit Laws
The following limit laws greatly simplify the evaluation of many limits.
Theorem 2.3 Limit Laws
Assume $\dlim_{x \to a}f(x)$ and $\dlim_{x \to a}g(x)$ exist. The following properties hold, where $c$ is a real number, and $m > 0$ and $n > 0$ are integers.
1. **Sum** &emsp; $\dlim_{x \to a}[f(x) + g(x)] = \dlim_{x \to a}f(x) + \dlim_{x \to a}g(x)$
2. **Difference** &emsp; $\dlim_{x \to a}[f(x) - g(x)] = \dlim_{x \to a}f(x) - \dlim_{x \to a}g(x)$
3. **Constant multiple** &emsp; $\dlim_{x \to a}[cf(x)] = c\dlim_{x \to a}f(x)$
4. **Product** &emsp; $\dlim_{x \to a}[f(x)g(x)] = \lb \dlim_{x \to a}f(x)\rb\lb \dlim_{x \to a}g(x) \rb$
5. **Quotient** &emsp; $\dlim_{x \to a} \lb\frac{f(x)}{g(x)}\rb = \frac{\dlim_{x \to a}f(x)}{\dlim_{x \to a}g(x)}$, provided $\dlim_{x \to a}g(x) \ne 0$
6. **Power** &emsp; $\dlim_{x \to a}[f(x)]^n = \lb\lim_{x \to a}f(x)\rb^n$
7. **Fractional Power** &emsp; $\dlim_{x \to a}[f(x)]^{n/m} = \lb\dlim_{x \to a}f(x)\rb^{n/m}$, provided $f(x) \ges 0$, for $x$ near $a$, if $m$ is even and $n/m$ is reduced to lowest terms.

A proof of Law 1 is outlined in Section 2.7, Laws 2-5 are proved in Appendix B. Law 6 is proved from Law 4 as follows.
$$
\eqalign{
\lim_{x \to a}[f(x)]^n &= \lim_{x \to a}[\underbrace{f(x)f(x)\cdots f(x)}_{n \text{ factors of } f(x)}] \\
&= \underbrace{\lb{\lim_{x \to a}f(x)}\rb\lb{\lim_{x \to a}f(x)}\rb \cdots \lb{\lim_{x \to a}f(x)}\rb}_{n \text{factors of } \dlim_{x \to a}f(x)}  \quad \text{Repeated use of Law 4}\\
&= \lb\lim_{x \to a}f(x)\rb^n
}
$$

In Law 7, the limit of $[f(x)]^{n/m}$ involves the $m$th root of $f(x)$ where $x$ is near $a$. If the fraction $n/m$ is in lowest terms and $m$ is even, this root is undefined unless $f(x)$ is non-negative for all $x$ near $a$, which explains the restrictions shown.

**Example 2 Evaluation Limits**
Suppose $\dlim_{x \to 2}f(x) = 4$, $\dlim_{x \to 2}g(x) = 5$, and $\dlim_{x \to 2}h(x) = 8$. Use the limit laws in Theorem 2.3 to compute each limit.
a. $\dlim_{x \to 2}{\frac{f(x)-g(x)}{h(x)}}$ &emsp; b. $\dlim_{x \to 2}[6f(x)g(x) + h(x)]$ &emsp; c. $\dlim_{x \to 2}[g(x)]^{13}$
>Solution
a. $-\frac{1}{8}$ &emsp; b. $128$ &emsp; c. $125$

#### Limits Of Polynomial and Rational Functions
As in the case of linear functions, the limit of a polynomial is found by direct substitution; that is, $\dlim_{x \to a}p(x) = p(a)$.
It is now a short step to evaluating limits of rational functions of the form $f(x) = p(x)/q(x)$, where p and q are polynomials. Applying Law 5, we have
$$
\lim_{x \to a} \frac{p(x)}{q(x)} = \frac{\dlim_{x \to a}p(x)}{\dlim_{x \to a}q(x)} = \frac{p(a)}{q(a)} \text{, provided } q(a) \ne 0 ,
$$
which shows that limits of rational function are also evaluated by direct substitution.

Theorem 2.4 Limits of Polynomial and Rational Functions
Assume $p$ and $q$ are polynomials and $a$ is a constant.
a. Polynomial functions:  $\dlim_{x \to a}p(x) = p(a)$.
b. Rational functions: $\dlim_{x \to a} \frac{p(x)}{q(x)} = \frac{\dlim_{x \to a}p(x)}{\dlim_{x \to a}q(x)} = \frac{p(a)}{q(a)} \text{, provided } q(a) \ne 0$

**Example 3 Limits of a rational function**
Evaluate $\dlim_{x \to 2}{\frac{3x^2 - 4x}{5x^3 - 36}}$
>Solution
$1$

**Example 4 An algebraic function**
Evaluate $\dlim_{x \to 2}{\dfrac{\sqrt{2x^3 + 9} + 3x -1}{4x + 1}}$
>Solution
$\dfrac{10}{9}$

#### One-sided Limits
Theorem 2.2 Limit Laws 1-6, and Theorem 2.4 also hold for left-sided and right-sided limits. In other words, these laws remain valid of we replace $\dlim_{x \to a}$ with $\dlim_{x \to a^+}$ or $\dlim_{x \to a^-}$. Law 7 must be modified slightly for one-sided limits, as shown below.

Theorem 2.3 (Continued) Limit Laws for One-Sided Limits
Laws 1-6 hold with $\dlim_{x \to a}$ replaced by $\dlim_{x \to a^+}$ or $\dlim_{x \to a^-}$, Law 7 is modified as follows. Assume $m > 0$ and $n > 0$ are integers.
7\. **Fractional power**
a. $\dlim_{x \to a^+}[f(x)]^{n/m} = \lb\dlim_{x \to a^+}f(x)\rb^{n/m}$, provided $f(x) \ges 0$, for $x$ near $a$ with $x > a$, if $m$ is even and $n/m$ is reduced to lowest terms.
b. $\dlim_{x \to a^-}[f(x)]^{n/m} = \lb\dlim_{x \to a^-}f(x)\rb^{n/m}$, provided $f(x) \ges 0$, for $x$ near $a$ with $x < a$, if $m$ is even and $n/m$ is reduced to lowest terms.

**Example 5 Calculating left- and right-sided limits**
Let $f(x) = \cases{-2x + 4 &\text{if  } x \les 1\\
\sqrt{x-1}  &\text{if  } x \ges 1}$. Find the values of $\dlim_{x \to 1^-}f(x)$, $\dlim_{x \to 1^+}f(x)$, and $\dlim_{x \to 1}f(x)$, or state that they do not exist.
>Solution
$\dlim_{x \to 1^-}f(x) = 2$
$\dlim_{x \to 1^+}f(x) = 0$
$\dlim_{x \to 1}f(x)$ does not exist.

#### Other Techniques
So far, we have evaluated limits by direct substitution. A more challenging problem is finding $\dlim_{x \to a}f(x)$ when the limit exists, but $f(x) \ne f(a)$. Tow typical cases are show in Figure 2.17. In the first case, $f(a)$ is defined, but it is not equal to $\dlim_{x \to a}f(x)$; in the second cases, $f(a)$ is not defined at all.

**Example 6 Other Techniques Evaluate the following limits.**
a. $\dlim_{x \to 2}{\dfrac{x^2 -6x + 8}{x^2-4}}$ &emsp; b. $\dlim_{x \to 1}{\dfrac{\sqrt{x} - 1}{x-1}}$
>Solution
a. $-\dfrac{1}{2}$ &emsp; b. $\dfrac{1}{2}$

#### An Important Limit
Despite our success in evaluating limits using direct substitution, algebraic manipulation and the limits laws, there are import limits for which these techniques do not work, such limit arises when investigating the slope of a line tangent to the graph of an exponential function.

**Example 7 Slope of the line tangent to $f(x) = 2^x$** Estimate the slope of the line tangent to the graph of $f(x) = 2^x$ at the point $P(0, 1)$.
>Solution
In section 2.1, the slope of a tangent line was obtained by finding the limits of slopes of secant lines; the same strategy is employed here. We begin by selecting a point $Q$ and $P$ on the graph of $f$ with coordinates $(x, 2^x)$. The secant line joining $P(0, 1)$ and $Q(x, 2^x)$ is approximation to the tangent line. To compute the slope of the tangent line (denoted by $m_{tan}$) at $x=0$, we look at the slope of the secant line $m_{tan} = (2^x - 1)/x$ and the limit as $x$ approaches $0$.
The limit $\dlim_{x \to }{\frac{2^x - 1}{x}}$ exists only if it has the same values as $x \to a^+$ and as $x \to a^-$. Because it is not an elementary limits, it cannot be evaluated using the limit laws of this section. Instead, we investigate the limit using numerical evidence. Choosing positive values of $x$ near $0$ in Table 2.5.

Table 2.5
| x | 1.0     | 0.1    | 0.01   | 0.001  | 0.0001 |
|---| --------|--------|--------|--------|--------|
| $m_{tan}$ | 1.00000 | 0.7177 | 0.6956 | 0.6934 | 0.6932 |
We see that as $x$ approaches $0$ from the right, the slopes of the tangent line approach the slope of the tangent line, which is approximately $0.693$. A similar calculation gives the same approximation for the limits as $x$ approaches $0$ for the left.
Because the left-sided and right-sided limits are the same, we conclude that $\dlim_{x \to 0}{\frac{2^x-1}{x}} \approx 0.693$. Therefore, the slope of the line tangent to $f(x) = 2^x$ at $x=0$ is approximately 0.693.

Example 7 shows that $\dlim_{x \to 0}{\dfrac{2^x-1}{x}} \approx 0.693$, which is approximately $\ln 2$. The connection between the natural logarithm and the slopes of lines tangent to exponential curves is made clear in Chapter 3 and 6.

#### The Squeeze Theorem
The *Squeeze Theorem* provides another useful method for calculating limits. Suppose functions $f$ and $h$ have the same limit $L$ at a and assume the function $g$ is trapped between $f$ and $h$. The *Squeeze Theorem* says that g must also have the limit $L$ at $a$. A proof of this theorem is outlined in Exercise 54 of Section 2.7.

>**Theorem 2.5 The Squeeze Theorem**
Assume the functions $f$, $g$, and $h$ satisfy $f(x) \les g(x) \les h(x)$ for all values of $x$ near $a$, except possibly at $a$. If $\dlim_{x \to a}f(x) = \lim_{x \to a}h(x) = L$, then $\dlim_{x \to a}g(x) = L$.

**Example 8 Sine and cosine limits.** A geometric argument may be used to show that $-\pi/2 < x < \pi/2$,
$$
-|x| \les \sin{x} \les |x| \text{ and } 0 \les 1-\cos{x} \les |x|
$$
Use the Squeeze Theorem to confirm the following limits.
a. $\dlim_{x \to 0}\sin{x} = 0$ &emsp; b. $\dlim_{x \to 0}\cos{x} = 1$
>Solution
Todo

**Example 9 Applying the Squeeze Theorem.** Use the Squeeze Theorem to verify that $\dlim_{x \to 0}{x^2\sin(1/x)} = 0$.
>Solution
Todo
