### Section 3.3 The Product and Quotient Rule
pg158: 2, 7, 9, 14, 17, 19, 21, 25, 31, 33, 41, 43, 47, 55, 59, 63, 69, 82, 88

2\. How do you find the derivative of the quotient of two functions that are differentiable at a point?
>Solution
$\dfrac{d}{dx}(\frac{f(x)}{g(x)}) = \dfrac{f'(x)g(x)-f(x)g'(x)}{g^2(x)}$

7-14\. **Derivatives of products** Find the derivative of the following functions.
7\. $f(x) = 3x^4(2x^2-1)$
>Solution
$$
\begin{aligned}
f'(x) &= 12x^3(2x^2-1) + 3x^4 \times 4x \\
&= 24x^5-12x^3+12x^5 \\
&= 36x^5-12x^3
\end{aligned}
$$

9\. $f(t) = t^5e^t$
>Solution
$f'(t) = 5t^4e^t + t^5e^t$

14\. $s(t) = 4e^t{\sqrt {t}}$
>Solution
$$
\begin{aligned}
s'(t) &= 4e^t{\sqrt {t}} + 4e^t \times \frac{1}{2\sqrt{t}} \\
&= 4e^t{\sqrt {t}} + \dfrac{2e^t}{\sqrt{t}}
\end{aligned}
$$

17\. $g(y) = (3y^4-y^2)(y^2-4)$
>Solution
$$
\begin{aligned}
g(y) &= 3y^6 - 12y^4 -y^4+4y^2\\
&= 3y^6 - 13y^4+4y^2 \\
g'(y) &= 18y^5-52y^3 + 8y  &\text{(1)}\\
\\
g'(y) &= (12y^3 - 2y)(y^2-4)  + (3y^4-y^2)(2y-0) \\
&= 12y^5 - 48y^3-2y^3+8y + 6y^5-4y^2\\
&= 18y^5-52y^3 + 8y & \text{(2)}
\end{aligned}
$$

19\. $f(x) =  \dfrac{x}{x+1}$
>Solution
$$
f'(x) = \frac{(x+1) \times 1- (1+0) \times x}{(x+1)^2} = \frac{1}{(x+1)^2}
$$

21\. $f(x) = \dfrac{e^x}{e^x+1}$
>Solution
$$
\begin{aligned}
f'(x) &= \frac{e^x(e^x+1)- e^x(e^x + 0) \times x}{(e^x+1)^2} \\
&=  \frac{e^{2x}+e^x- e^{2x}}{(e^x+1)^2} \\
&= \frac{e^x}{(e^x+1)^2}
\end{aligned}
$$

25\. $y = (3t-1)(2t-2)^{-1}$
>Solution
$$
\begin{aligned}
y' &= \frac{d}{dx}(\frac{3t-1}{2t-2}) \\
&= \frac{(3-0)(2t-2) - (3t-1)(2-0)}{(2t-2)^2} \\
&= \frac{6t-6-6t+2}{(2t-2)^2} \\
&= \frac{-1}{(t-1)^2}
\end{aligned}
$$

29-32\. **Derivatives by two difference methods**
a. Use the Quotient Rule to find the derivative of given function, Simplify your result.
b. Find the derivative by first simplifying the function. Verify that your answer agrees with part(a).
31\. $y = \dfrac{x^2-a^2}{x-a}$;  $a$ is a constant.
>Solution
$$
\begin{aligned}
y' &= \frac{(2x-0)(x-a) - (x^2-a^2)(1-0)}{(x-a)^2}\\
&= \frac{2x^2-2xa - x^2 +a^2}{(x-a)^2)} \\
&= \frac{(x-a)^2}{(x-a)^2} \\
&= 1 & x \ne a \quad \text{(1)}\\
y'&= \frac{d}{dx}\frac{(x-a)(x+a)}{x-a}\\
&= \frac{d}{dx}(x+a) \\
&= 1 & x \ne a \quad \text{(2)}\\
\end{aligned}
$$

33-36\. **Equations of tangent lines**
a. Find the equation of the line tangent to the give curve at $a$.
b. Use a graphing utility to graph the curve and the tangent line on the same set of axes.
33\. $\dfrac{x+5}{x-1}, a=3$
>Solution
a.
$$
\begin{aligned}
y' &= \frac{(1+0)(x-1) - (x+5)(1-0)}{(x-1)^2} = -\frac{6}{(x-1)^2}\\
m_{tan} &= y'(3) = -\frac{6}{(3-1)^2} = -\frac{3}{2}\\
y(3)& = \frac{3+5}{3-1} = 4
\end{aligned}
$$
The equation of the tangent line is $y-4 = -\frac{3}{2}(x-3)$ or $y= -\frac{3}{2}x + \frac{17}{2}$.
b. Graph (33).

37-42\. **Extended Power Rule** Find the derivative of the following functions.
41\. $g(t) = \dfrac{t^3+3t^2+t}{t^3}$
>Solution
$$
\begin{aligned}
g'(t) &= \frac{d}{dx}(1 + 3t^{-1} + t^{-2}) \\
&= 0 - 3t^{-2} -2t^{-3}\\
& = \frac{-3t-2}{t^3}
\end{aligned}
$$

43-50\. **Derivatives with exponentials** Compute the derivative of the following functions.
43\. $f(x) = xe^{7x}$
>Solution
$$
\begin{aligned}
f'(x) &= (1)\cdot e^{7x} + x \cdot (7e^{7x})\\
&= e^{7x}(7x+1)
\end{aligned}
$$

47\. $g(x)=\dfrac{x}{e^{3x}}$
>Solution
$$
\begin{aligned}
g'(x) &= \frac{1 \cdot e^{3x} - x \cdot (3e^{3x})}{(e^{3x})^2}\\
&= \frac{1-3x}{e^{3x}}
\end{aligned}
$$

55\. **Finding slope locations** Let $f(x) = xe^{2x}$
a. Find the values of $x$ for which the slope of the curve $y=f(x)$ is $0$.
b. Explain the meaning of your answer to part (a) in terms of graph of $f$.
>Solution
a.
$$
\begin{aligned}
f'(x) = 1 \cdot e^{2x} + x \cdot (2e^{2x}) = e^{2x}(2x+1)\\
f'(x) = 0 = e^{2x}(2x+1) \\
\because e^{2x} > 0\\
\therefore 2x+1=0 \To x=-\frac{1}{2}
\end{aligned}
$$
b. When $x = -\dfrac{1}{2}$, the graph of $f$ has a horizontal tangent line.

57-60\. **Combining rules** Compute the derivative of the following functions.
59\. $h(x) = \dfrac{xe^x}{x+1}$
>Solution
$$
\begin{aligned}
h'(x) &= \frac{(e^x + xe^x) \cdot (x+1) - xe^x(1 + 0)}{(x+1)^2} \\
&= \frac{xe^x +e^x + x^2e^x + xe^x - xe^x}{(x+1)^2} \\
&= \frac{e^x(x^2+x+1)}{(x+1)^2}
\end{aligned}
$$

62-65\. Higer-order derivatives Find $f'(x), f''(x), f'''(x)$
63\. $f(x) = x^2e^{3x}$
>Solution
$$
\begin{aligned}
f'(x) &= 2x(e^{3x}) + x^2(3e^{3x}) \\
&= e^{3x}(3x^2+2x)\\
f''(x) &= 3e^{3x}(3x^2+2x) + e^{3x}(6x+2) \\
&= e^{3x}(9x^2+12x+2)\\
f'''(x) &= 3e^{3x}(9x^2+12x+2) + e^{3x}(18x+12) \\
&= e^{3x}(27x^2 + 54x + 18) \\
&= 9e^{3x}(3x^2+6x+2)
\end{aligned}
$$

66-71\. **Choose your method** Use any method to evaluate the derivative of the following function.
69\. $h(r) = \dfrac{2-r-\sqrt r}{r+1}$
>Solution
$$
\begin{aligned}
h'(r) &= \frac{(0-1-\frac{1}{2\sqrt r})(r+1) - (2-r-\sqrt r) \cdot (1+0)}{(r+1)^2} \\
&= \frac{-r-1- \frac{\sqrt r}{2} - \frac{1}{2\sqrt r} - 2+r+\sqrt r}{(r+1)^2} \\
&= \frac{-3+\frac{\sqrt r}{2} -\frac{1}{2\sqrt r}}{(r+1)^2} \cdot \frac{2\sqrt r}{2\sqrt r}\\
&= \frac{r-1-6{\sqrt {r}}}{2\sqrt{r}(r+1)^2}
\end{aligned}
$$

82\. **Gravitational force** The magnitude of the gravitational force between two object of mass $M$ and $m$ is give by $F(x) = -\dfrac{GMm}{x^2}$, where $x$ is the distance between the center of mass of the objects and $G=6.7\times 10^{-11}N\cdot m^2/kg^2$ is the gravitational constance ($N$ stands for newton, the unit of force; the negative sign indicated an attractive force).
a. Find the instantaneous rate of change of the force with respect to the distance between the objects.
b. For two identical objects of mass $M=m=0.1kg$, what is the instantaneous rate of change of the force at a speration of $x=0.01m$?
c. Does the instantaneous rate of change of the force increase or decrease with the seperation? Explain.
>Solution
a. $F'(x) = \dfrac{2GMm}{x^3} N\cdot m^2\cdot kg$
b. $F'(0.01) = \dfrac{2 \times 6.7\times 10^{-11} \times 0.1 \times 0.1}{0.01^3} = 1.34 \times 10^{-6} N\cdot m^2\cdot kg$
c. The instantaneous rate of change of the force decreases as the distance increases.

88\. **Proof by induction: derivative of $e^{kx}$ for positive integers $k$.** Proof by induction is a method in which one begins by showing that a statement, which involves positive integers, is true for a particular value (usually $k=1$). In the second step, the statement is assumed to be true for $k=n$, and the statement is proved for $k=n+1$, which concludes the proof.
a. Show that $\dfrac{d}{dx}(e^{kx}) = ke^{kx} \text{ for } k=1$.
b. Assume the rule is true for $k=n$ (that is, assume $\dfrac{d}{dx}(e^{nx}) = ne^{nx}$), and show this implies that the rule is true for $k=n+1$. (Hint: Write $e^{(n+1)x}$ as the product of two functions, and use the Product Rule.)
>Solution
a. When $k=1$
$$
\begin{aligned}
\frac{d}{dx}(e^{kx}) &= \frac{d}{dx}(e^x)\\
&= \lim_{h \to 0}\frac{e^{x+h} - e^x}{h} \\
&= \lim_{h \to 0}\frac{e^x(e^h-1)}{h} \\
&= e^x \lim_{h \to 0}\frac{e^h-1}{h} \\
&= e^x \times 1 = e^x
\end{aligned}
$$
b. Assume $\dfrac{d}{dx}(e^{nx}) = ne^{nx}$, when $k=n+1$
$$
\begin{aligned}
\frac{d}{dx}(e^{kx}) &= \frac{d}{dx}(e^{(n+1)x}) \\
&= \frac{d}{dx}(e^{nx} \cdot e^x) \\
&= ne^{nx} \cdot e^x + e^{nx} \cdot e^x \\
&= ne^{nx+x} + e^{nx+x} \\
&= (n+1)e^{nx+x}\\
&= (n+1)e^{(n+1)x} \\
&= ke^{kx}
\end{aligned}
$$
