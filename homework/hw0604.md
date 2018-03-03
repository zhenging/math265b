### Section 6.4 Volume By Shells
p432: 2, 3, 5, 6, 9, 13, 15 (do 15 with shells and then again with disk),  17 (do 17 with both shells and washers), 21 (Show adiagram with a representative slice or rectangle and evaluate integrals completely), 33–**45** odd, **48**, 53, 55, 58, **59**, 60, 65 (You may just set up the integral and not evaluate (if desired) on the following. Show a diagram with a representative slice or rectangle.)

2\. Fill in the blanks: A region R is revolved about the **y-axis**. The volume of the resulting solid could (in principle) be found by using the disk/washer method and integrating with respect to **y** or using the shell method and integrating with respect to **x**.

3\. Fill in the blanks: A region R is revolved about the **x-axis**. The volume of the resulting solid could (in principle) be found by using the disk/washer method and integrating with respect to **x** or using the shell method and integrating with respect to **y**.

5–14\. Shell method Let R be the region bounded by the following curves. Use the shell method to find the volume of the solid generated when R is revolved about the y-axis.
5\. $y=x-x^2, y=0$. Graph (5).
>Solution
$$
\begin{aligned}
V &= \int_0^1 2\pi x(x-x^2) dx\\
&= 2\pi(\frac{1}{3}x^3 - \frac{1}{4}x^4) \mid_0^1 = \frac{\pi}{6}
\end{aligned}
$$

6\. $y=-x^2+4x+2, y=x^2-6x+10$. Graph (6).
>Solution
$$
\begin{aligned}
V &= \int_1^4 2\pi x (-x^2+4x+2 - (x^2-6x+10)) dx\\
&= 4\pi \int_1^4 (-x^3+5x^2-4x) dx\\
&= 4\pi (-\frac{1}{4} x^4 + \frac{5}{3}x^3 - 2x^2)\mid_1^4 = 45\pi
\end{aligned}
$$

9\. $y=3x, y=3, x=0$. Graph (9).
>Solution
$$
\begin{aligned}
V &= \int_0^1 2\pi x(3-3x) dx\\
&=2\pi \int_0^1 (3x-3x^2) dx\\
&=2\pi(\frac{3}{2} x^2 - x^3) \mid_0^1 = \pi
\end{aligned}
$$

13\. $y=\cos x^2, y=0, 0 \les x \les \sqrt{\pi / 2}$. Graph (13).
>Solution
$$
\begin{aligned}
V &= \int_0^{\sqrt {\pi/2}} 2\pi x \cos x^2 dx\\
&= \pi \int_0^{\pi/2} \cos u du & u=x^2\\
&= \pi \sin u \mid_0^{\pi/2} = \pi
\end{aligned}
$$

15–26\. **Shell method** Let R be the region bounded by the following curves. Use the shell method to find the volume of the solid generated when R is revolved about the x-axis.
15\. $y=\sqrt x, y=0, x=4$. Graph (15).
>Solution
$$
\begin{aligned}
V_{shell} &= \int_0^2 2\pi y (4-y^2) dy\\
&= 2\pi(2y^2-\frac{y^4}{4})\mid_0^2 = 8\pi\\
V_{disk} &= \int_0^4 \pi (\sqrt x)^2 dx\\
&= \frac{\pi}{2} x^2 \mid_0^4 = 8\pi
\end{aligned}
$$

17\. $y=4-x, y=2, x=0$. Graph (17).
>Solution
$$
\begin{aligned}
V_{shell} &= \int_2^4 2\pi y(4-y) dy\\
&= 2\pi(2y^2-\frac{y^3}{3}) \mid_2^4 = \frac{32 \pi}{3}\\
V_{washer} &= \int_0^4 \pi \lb (4-x)^2-2^2 \rb dx \\
&= \pi (\frac{1}{3}x^3 - 4x^2 + 12x) \mid_0^2 = \frac{32 \pi}{3}
\end{aligned}
$$

21\. $x=y^2, x=0, y=3$. Graph (21).
>Solution
$$
\begin{aligned}
V &= \int_0^3 2\pi y \cdot y^2 dy\\
&= \frac{\pi}{2} y^4 \mid_0^3 = \frac{81\pi}{2}
\end{aligned}
$$

33–36\. **Shell method about other lines** Let R be the region bounded by $y = x^2 , x = 1$, and $y = 0$. Use the shell method to find the volume of the solid generated when R is revolved about the following lines.
33\. $x=-2$. Graph (33).
>Solution
$V = \dint_0^1 2\pi(x+2) x^2 dx$

35\. $y=-2$. Graph (35).
>Solution
$V = \dint_0^1 2\pi(y+2)) (1-\sqrt y) dy$

37–40\. **Different axes of revolution** Use either the washer or shell method to find the volume of the solid that is generated when the region in the first quadrant bounded by $y = x^2 , y = 4$, and $x = 0$ is revolved about the following lines.
37\. $y=-2$. Graph (37).
>Solution
$$
\begin{aligned}
V &= \int_0^2 \pi \lb (4+2)^2 - (x^2+2)^2 \rb dx
\end{aligned}
$$

39\. $y=6$. Graph (39).
>Solution
$$
\begin{aligned}
V &= \int_0^2 \pi \lb (6-x^2)^2 - (6-4)^2 \rb dx
\end{aligned}
$$

41–48\. **Washers vs. shells** Let R be the region bounded by the following curves. Let S be the solid generated when R is revolved about the given axis. If possible, find the volume of S by both the disk/washer and shell methods. Check that your results agree and state which method is easiest to apply.
41\. $y=x. y=x^{\frac{1}{3}}$, in the first quadrant; revolved about x-axis. Graph (41).
>Solution
$$
\begin{aligned}
V_{washer} &= \int_0^1 \pi \lb (x^{\frac{1}{3}})^2 - x^2\rb dx\\
V_{shell} &= \int_0^1 2\pi y(y-y^3) dy
\end{aligned}
$$

43\. $y=\frac{1}{x+1}, y=1-\dfrac{x}{3}$, revolved about x-axis. Graph (43).
>Solution
$$
\begin{aligned}
V_{washer} &= \int_0^2 \pi [(1-\frac{x}{3})^2 - (\frac{1}{1+x})^2] dx\\
V_{shell} &= \int_{1/3}^1 2\pi y \lb (3-3y) - (\frac{1}{y} -1)\rb dy
\end{aligned}
$$

45\. $y=\sqrt{\ln x}, y=\sqrt{\ln x^2}$, and $y=1$; revovled about the x-axis. Graph (43).
>Solution
$$
\begin{aligned}
V_{washer} &= \int_1^{\sqrt e} \pi (\ln x^2 - \ln x) dx + \int_{\sqrt e}^e \pi (1 - \ln 2)dx\\
V_{shell} &= \int_0^1 2\pi y (e^{y^2} - e^{\frac{y^2}{2}}) dy
\end{aligned}
$$

48\. $y=x-x^4, y = 0$; revolved around the y-axis. Graph (48).
>Solution
$$
\begin{aligned}
y' &= 1-4x^3\\
y' &=0 \To x = (\frac{1}{4})^{1/3} &\text{local maximum}\\
V_{shell} &= \int_0^1 2\pi x(x-x^4) dx &\text{ washer method does not apply.}
\end{aligned}
$$

50–54\. **Solids of revolution** Find the volume of the following solids of revolution. Sketch the region in question.
53\. The region bounded by $y = \dfrac{e^x}{x}, y = 0, x = 1$ and $x = 2$ revolved about the y-axis. Graph (53).
>Solution
$V = \int_1^2 2\pi x (\frac{e^x}{x}) dx$

55–62\. **Choose your method** Find the volume of the following solids using the method of your choice.
55\. The solid formed when the region bounded by $y = x^2$ and $y = 2 - x^2$ is revolved about the x-axis. Graph (55).
>Solution
$V = \int_{-1}^1 \pi \lb (2-x^2)^2 - x^4 \rb dx$

58\. The solid formed when the region bounded by $y = x^3$, the x-axis, and $x = 2$ is revolved about the x-axis. Graph (58).
>Solution
$V = \dint_0^2 \pi (x^3)^2 dx$

59\. The solid whose base is the region bounded by $y = x^2$ and the line $y = 1$ and whose cross sections perpendicular to the base and parallel to the x-axis are semicircles. Graph (59).
>Solution
$V = \dint_0^1 \frac{1}{2} \pi (\sqrt y)^2 dy$

60\. The solid formed when the region bounded by $y = 2, y = 2x + 2$, and $x = 6$ is revolved about the y-axis. Graph (60).
>Solution
$V = \dint_0^6 2\pi x (2x+2-2)dx$

65\. **A cone by two methods** Verify that the volume of a right circular cone with a base radius of $r$ and a height of $h$ is $\dfrac{\pi r^2 h}{3}$. Use the region bounded by the line $y = \dfrac{rx}{h}$, the x-axis, and the line $x = h$, where the region is rotated around the x-axis. Then (a) use the disk method and integrate with respect to $x$, and (b) use the shell method and integrate with respect to $y$. Graph (65).
>Solution
$$
\begin{aligned}
V_{disk} &= \int_0^h \pi (\frac{rx}{h})^2 dx\\
 &= \frac{\pi r^2}{h^2} (\frac{1}{3} x^3) \mid_0^h = \frac{\pi r^2 h}{3}\\
V_{shell} &= \int_0^r 2\pi y (h - \frac{hy}{r}) dy\\
&= 2\pi h \int_0^r (y-\frac{y^2}{r}) dy\\
&= 2\pi h (\frac{y^2}{2} - \frac{y^3}{3r})\mid_0^r = \frac{\pi r^2 h}{3}
\end{aligned}
$$
