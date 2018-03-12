### Section 6.2 Regions Between Curves
p408: 1-4, 5-17odd, 25, 27, **29**, 31, **39**, 53, 57, 61ade (on e just 2).

1\. Draw the graphs of two functions $f$ and $g$ that are continuous and intersect exactly twice on $(-\infty, \infty)$. Explain how to use integration to find the area of the region bounded by the two curves.
>Solution
Graph (1). If $f$ and $g$ intersect at $x=a$ and $x=b$ with $a<b$ and if $f(x) \ges g(x)$ on $[a, b]$, then the area between these curves is given by $\dint_a^b (f(x)-g(x))dx$.

2\. Draw the graphs of two functions $f$ and $g$ that are continuous and intersect exactly three on $(-\infty, \infty)$. Explain how to use integration to find the area of the region bounded by the two curves.
>Solution
Graph (2). $f(x)$ and $g(x)$ intersect at $x=a, b, c$. $f(x) \ges g(x)$ on interval $[a, b]$ and $f(x) \les g(x)$ on interval $[b, c]$. The area can be given by $\dint_a^b (f(x)-g(x))dx + \dint_b^c (g(x)-f(x))dx$.

3\. Make a sketch to show a case in which the area bounded by two curves is most easily found by integrating with respect to $x$.
>Solution
Graph (3).

4\. Make a sketch to show a case in which the area bounded by two curves is most easily found by integrating with respect to $y$.
>Solution
Graph (4).

5–8\. **Finding area** Determine the area of the shaded region in the following figures.
5\. Graph (5). $y=x$ and $y=x^2-2$.
>Solution
$x=x^2-2 \To x=-1, 2$. The area can be given by
$$
\begin{aligned}
\int_{-1}^2 [x-(x^2-2)]dx &= (\frac{1}{2}x^2-\frac{1}{3}x^3 + 2x)\mid_{-1}^2\\
&= \frac{9}{2}
\end{aligned}
$$

<!-- pagebreak -->
7\. Graph (7). $y=2^x$ and $y=3-x$.
>Solution
$2^x=3-x \To x=1$. The area can be given by
$$
\begin{aligned}
\int_0^1 (3-x-2^x)dx &= (3x-\frac{1}{2}x^2-\frac{2^x}{\ln 2})\mid_0^1\\
&= \frac{5}{2} - \frac{1}{\ln 2}
\end{aligned}
$$

9-14\. **Regions between curves** Sketch the region and find its area.
9\. The region bounded by $y=2(x+1), y=3(x+1)$, and $x=4$.
>Solution
Graph (9). The area can be given by
$$
\begin{aligned}
\int_{-1}^4 [3(x+1)-2(x+1)]dx &= \int_{-1}^4 (x+1)dx\\
&= (\frac{1}{2}x^2+x)\mid_{-1}^4 = \frac{25}{2}
\end{aligned}
$$

11\. The region bounded by $y=e^x, y=e^{-2x}$, and $x=\ln4$.
>Solution
Graph (11). The area can be given by
$$
\begin{aligned}
\int_0^{\ln 4} (e^x-e^{-2x})dx &= (e^x + \frac{1}{2}e^{-2x})\mid_0^{\ln 4}\\
&= \frac{81}{32}
\end{aligned}
$$

13\. The region bounded by $y=\dfrac{2}{1+x^2}$, and $y=1$.
>Solution
Graph (13). $\dfrac{2}{1+y^2} = 1 \To x=\pm 1$. The area can be given by
$$
\begin{aligned}
\int_{-1}^1 (\dfrac{2}{1+x^2} - 1)dx &= (2\arctan x -x)\mid_{-1}^1\\
&= \pi -2
\end{aligned}
$$

<!-- pagebreak -->
15–22\. **Compound regions** Sketch the following regions (if a figure is not given) and then find the area.
15\. The region bounded by $y=\sin x, y=\cos x$, and the x-axis between $x=0$ and $x=\pi/2$. Graph (15).
>Solution
$y=\sin x$ and $y=\cos x$ intersect at $x=\pi/4$. The area can be given by
$$
\begin{aligned}
\int_0^{\pi/4} (\sin x)dx + \int_{\pi/4}^{\pi/2} (\cos x)dx &= (-\cos x)\mid_0^{\pi/4} + (\sin x)\mid_{\pi/4}^{\pi/2}\\
&=2-\sqrt 2
\end{aligned}
$$

17\. The region bounded by $y=x, y=\frac{1}{x}, y=0$, and $x=2$.
>Solution
Graph (17). $y=x$ and $y=\frac{1}{x}$ intersect at $x=1$. The area can be given by
$$
\begin{aligned}
\int_0^1 xdx + \int_1^2 \frac{1}{x} dx &= (\frac{1}{2} x^2)\mid_0^1 + (\ln x)\mid_1^2\\
&= \frac{1}{2} + \ln 2
\end{aligned}
$$

23–26\. **Integrating with respect to y** Sketch the following regions (if a figure is not given) and find the area.
25\. The region bounded by $y=x$ and $x=y^2$.
>Solution
Graph (25). $y=x$ and $x=y^2$ intersect at $(x, y)=(1, 1)$. The area can be given by
$$
\begin{aligned}
\int_0^1 (y-y^2)dy &= (\frac{1}{2}y^2 - \frac{1}{3}y^3)\mid_0^1 = \frac{1} 6
\end{aligned}
$$

27–30\. **Two approaches** Express the area of the following shaded regions in terms of (a) one or more integrals with respect to $x$, and (b) one or more integrals with respect to $y$. You do not need to evaluate the integrals.
27\. Graph (27). $y=x$ and $y=x^2-2$.
>Solution
a. $x=x^2-2 \To x=-1, 2$. The area can be given by $\dint_{-\sqrt 2}^{-1} [0-(x^2-2)]dx + \dint_{-1}^0 (-x)dx$.
b. $y=x \To x=y, y=x^2-2 \To x= -\sqrt{y+2}$. The are can also be given by $\dint_{-1}^0 (y+\sqrt{y+2})dy$.

29\. Graph (29). $x=2y$ and $x=y^2-3$.
>Solution
(1) $2y=y^2-3 \To y=-1, 3$. $x=2y$ and $x=y^2-3$ intersect at points $(-2, -1)$ and $(6, 3)$.
(2) $x=y^2-3 \To y=\pm \sqrt{x+3}$. The x-intercept of $x=y^2-3$ is $x=-3$.
a. With respect to $x$, the area can be given by $2\dint_{-3}^{-1} \sqrt{x+3} dx + \dint_{-2}^6 (\sqrt {x+3} - \frac{1}{2}x) dx$.
b. With respect to $y$, the area can be given by $\dint_{-1}^3 [2y-(y^2-3)]dy$.

31–32\. **Two approaches** Find the area of the following regions by (a) integrating with respect to $x$, and (b) integrating with respect to $y$. Be sure your results agree. Sketch the bounding curves and the region in question.
31\. The region bounded by $y=2x-1$ and $x=y^2$.
>Solution
Graph (31).
$x=(2x-1)^2 \To x=\frac{1}{4}, 1$, $y=2x-1$ and $x=y^2$ intersect at points $(\frac{1}{4}, -\frac{1}{2})$ and $(1, 1)$.
a. With respect to $x$, the area can be given by
$$
\begin{aligned}
&\int_0^{1/4} [\sqrt x- (-\sqrt x)]dx + \int_{1/4}^1 [\sqrt x-(2x-1)]dx \\
&= \frac{4}{3}x^{3/2} \mid_0^{1/4} + (\frac{2}{3}x^{3/2} - x^2 + x)\mid_{1/4}^1\\
&= \frac{9}{16}
\end{aligned}
$$
b. With respect to $y$, the area can be given by
$$
\begin{aligned}
\int_{-1/2}^1 (\frac{y+1}{2} - y^2)dy &= (\frac{1}{4}y^2+\frac{1}{2}y -\frac{1}{3}y^3) \mid_{-1/2}^1 = \frac{9}{16}
\end{aligned}
$$

39\.**Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
a. The area of the region bounded by $y = x$ and $x = y^2$ can be found only by integrating with respect to $x$.
>Solution
False. The area can also found by integrating with respect to $y$, $\dint_0^1(y^2-y)dy$.

b. The area of the region between $y = \sin x$ and $y = \cos x$ on the interval $[0, \pi/2]$ is $\dint_0^{\pi/2} (\cos x-\sin x)dx$.
>Solution
False. The area betweeen these two functions is $\dint_{0}^{\pi/4}\sin xdx + \dint_{\pi/4}^{\pi/2}\cos xdx$.

<!-- pagebreak -->
c. $\dint_0^1 (x-x^2)dx = \dint_0^1 (\sqrt y-y)dy$
>Solution
True. They both represent the area of the region bounded by $y=x$ and $y=x^2$.

52–55\. **Complicated regions** Find the area of the regions shown in the following figures.
53\. Graph (53). $y=2x, y=1-x^2, y=\frac{1}{2}x$.
>Solution
In the first quadrant,  $y=2x$ and $y=1-x^2$ intersect at $x=\sqrt 2 -1$; $y=\frac{1}{2}x$ and $y=1-x^2$ intersect at $x=\frac{\sqrt 17 -1}{4}$. The area can be given by
$$
\begin{aligned}
&\int_0^{\sqrt 2 -1} (2x-\frac{1}{2}x)dx + \int_{\sqrt 2 -1}^{\frac{\sqrt 17 -1}{4}} (1-x^2-\frac{1}{2}x)dx\\
&= (\frac{3}{4}x^2) \mid_0^{\sqrt 2 -1} + (x-\frac{1}{3}x^3 - \frac{1}{4}x^2)\mid_{\sqrt 2 -1}^{\frac{\sqrt 17 -1}{4}}\\
&= \frac{1}{96}(135-128\sqrt 2 + 17 \sqrt {17})
\end{aligned}
$$

56–59\. **Roots and powers** Find the area of the following regions, expressing your results in terms of the positive integer $n\ges 2$.
57\. The region bounded by $f(x)=x$ and $g(x) = x^{1/n}$, for $x\ges 0$.
>Solution
$$
\begin{aligned}
\int_0^1 (g(x)-f(x))dx &= \int_0^1 (x^{1/n}-x)dx\\
&= (\frac{n}{n+1}x^{1+\frac{1}{n}} -\frac{1}{2}x) \mid_0^1\\
&= \frac{n}{n+1} - \frac{1}{2} = \frac{n-1}{2n+2}
\end{aligned}
$$

61\. **Lorenz curves and the Gini index** A Lorenz curve is given by $y = L(x)$, where $0 \les x \les 1$ represents the lowest fraction of the population of a society in terms of wealth and $0 \les y \les 1$ represents the fraction of the total wealth that is owned by that fraction of the society. For example, the Lorenz curve in the figure shows that $L(0.5) = 0.2$, which means that the lowest $0.5 (50\%)$ of the society owns $0.2 (20\%)$ of the wealth. (See the Guided Project Distribution of Wealth for more on Lorenz curves.) Graph (61).
a. A Lorenz curve $y = L(x)$ is accompanied by the line $y = x$, called the line of perfect equality. Explain why this line is given this name.
>Solution
With the line $y=x$, the value of the lower fraction of households is the same with the value of the wealth they owe.

d. The information in the Lorenz curve is often summarized in a single measure called the Gini index, which is defined as follows. Let A be the area of the region between $y = x$ and $y = L(x)$ (see figure) and let B be the area of the region between $y = L(x)$ and the x-axis. Then the Gini index is $G=\frac{A}{A+B}$. Show that $G=2A=1-2\dint_0^1 L(x)dx$.
>Solution
$$
\begin{aligned}
A &= \int_0^1 (x-L(x)) dx\\
&= (\frac{1}{2}x^2)\mid_0^1 - \int_0^1 L(x) dx\\
&= \frac{1}{2} - \int_0^1 L(x) dx\\
A+B &= \int_0^1 x dx = (\frac{1}{2}x^2)\mid_0^1 = \frac{1}{2}\\
G &= \frac{A}{A+B} =\frac{A}{\frac{1}{2}} = 2A\\
&= 1-2\dint_0^1 L(x)dx
\end{aligned}
$$

e. Compute the Gini index for the cases $L(x) = x^p$ and $p=2$.
>Solution
$$
\begin{aligned}
G &= 1-2\int_0^1 x^2 dx\\
&= 1-2(\frac{1}{3}x^3)\mid_0^1 = \frac{1} {3}
\end{aligned}
$$
