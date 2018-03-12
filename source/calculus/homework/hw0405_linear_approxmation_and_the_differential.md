### Section 4.5 Linear Approxmation and the Differential
pg282: 1, 2, 6, 7, 11, 13, 16, 19, 23, 30, 31, 35, 39, 44, 51, 57

1\. Sketch the graph of a smooth function $f$ and label a point $P(a, f(a))$ on the curve. Draw the line that represent the linear approximation of $f$ at $P$.
>Solution
Graph (1).

2\. Suppose you find the linear approximation to a differentiable function at a local maximum of that function. Describe the graph of the linear approximation.
>Solution
This linear approximation is a horizontal line.

6\. Does the differential $dy$ represent the change in $f$ or the change in the linear approximation to $f$? Explain.
>Solution
$dy$ represents the change in the linear approximation to $f$. Let the change in $x$ be $dx$, the change in the $f$ be $\Delta y$, $\Delta y = f(x+dx) -f(x) \approx dy = f'(x)dx$. $\Delta y \approx dy$ improves as $dx$ approaches $0$.

7\. **Estimating speed** Use the linear approximation given in Example 1 to answer the following questions. If you trave one mile in $59$ seconds, what is your approximate average speed? What is your exact speed?
>Solution
$$
\begin{aligned}
s(x) &= \frac{3600}{60+x} = 3600(60+x)^{-1}\\
s'(x) &= -3600(60+x)^{-2}\\
s(0) &= 60 \quad s'(0) = -1\\
s(x) & \approx L(x) = s(0) + s'(0)(x-0) = 60-x
\end{aligned}
$$
When you trave one mile in 59s, $x = -1$, the approximate speed is $L(-1) = 61 mi/hr$. The exact speed is $\frac{3600}{59} mi/hr$.

9-12\. **Estimating time** Suppose you want to travel $D$ miles at a constant speed of $(60+x)$ mi/hr, where $x$ could be positive or negative. The time in minutes required to trave $D$ miles is $T(x) = 60D(60+x)^{-1}$.
9\. Show that the linear approximation to T at point $x=0$ is $T(x) \approx L(x) = D(1-\frac{x}{60})$.
>Solution
$$
\begin{aligned}
T'(x) &= -60D(60+x)^{-2}\\
T'(0) &= -\frac{D}{60} \quad T(0) = D\\
T(x) &\approx L(x)= T(0) + T'(0)(x-0) \\
&= D -\frac{D}{60} x = D(1-\frac{x}{60})
\end{aligned}
$$

<!-- pagebreak -->
11\. Use the result of Exercise 9 to approximate the amount of time it takes to drive $80$ miles at $57$ mi/hr. What is the exact time required?
>Solution
When you drive $80$ miles at $57$ mi/hr,
$$
\begin{aligned}
D&=80, x=-3\\
L(3) &= 80(1-\frac{-3}{60}) = 84minutes &\text{approximate time}\\
T(3) &= 60 \times 80 (60-3)^{-1} = \frac{4800}{57} \approx 84.21 minutes &\text{exact time}
\end{aligned}
$$

13-20\. **Linear Approxmiation**
a. Write the equation of the line that represent the linear approximation to the following functions at the given point $a$.
b. Graph the function and the linear approximation at $a$.
c. Use the linear approximation to estimte the given function value.
d. Compute the pecent error in you approximation, $100\cdot |approx-exact|/|exact|$, where the exact value is given by a calculator.
13\. $f(x) = 12-x^2; a=2; f(2.1)$
>Solution
Graph (13).
$$
\begin{aligned}
f'(x) &= -2x\\
f'(2) &= -4 \quad f(2) = 8\\
f(x) & \approx L(x) = f(2) + f'(2)(x-2)\\
&=8+(-4)(x-2)\\
&=-4x+16\\
f(2.1) &= 12-(2.1)^2 = 7.59\\
L(2.1) &= -4 \times 2.1 + 16 = 7.6\\
percent \: error &= 100 \cdot \frac{7.6-7.59}{7.59} \approx 0.13
\end{aligned}
$$

<!-- pagebreak -->
16\. $f(x)=\dfrac{x}{x+1};a=1; f(1.1)$
>Solution
Graph (16).
$$
\begin{aligned}
f'(x) &= \frac{1}{(x+1)^2}\\
f'(1) &= \frac{1}{2} \quad f(1) = \frac{1}{2}\\
f(x) & \approx L(x) = f(1) + f'(1)(x-1)\\
&=\frac{1}{2} + \frac{1}{2}(x-1)\\
&=\frac{1}{2}x \\
f(1.1) &= \frac{1.1}{1+1.1} \approx 0.52\\
L(1.1) &= \frac{1}{2} \times 1.1 = 0.55\\
percent \: error &= 100 \cdot \frac{0.55-0.52}{0.52} \approx 5.77
\end{aligned}
$$

19\. $f(x) = (8+x)^{-1/3};a=0;f(-0.1)$
>Solution
Graph (19).
$$
\begin{aligned}
f'(x) &= -\frac{1}{3}(x+8)^{-\frac{4}{3}}\\
f'(0) &= -\frac{1}{3}(0+8)^{-\frac{4}{3}} = -\frac{1}{48} \quad f(0) = (8+0)^{-1/3} = \frac{1}{2}\\
f(x) & \approx L(x) = f(0) + f'(0)(x-0)\\
&= - \frac{1}{48}x + \frac{1}{2}\\
f(-0.1) &= (8-0.1)^{-1/3} \approx 0.502\\
L(-0.1) &= - \frac{1\times (-0.1)}{48} + \frac{1}{2} \approx 0.502 \\
percent \: error &= 100 \cdot \frac{0.502-0.502}{0.502} \approx 0
\end{aligned}
$$

<!-- pagebreak -->
21-30\. **Estimate with linear approximation** Use linear approximations to estimate the following quantities. Choose a value of a to produce small error.
23\. $\sqrt {146}$
>Solution
Let $f(x) = \sqrt x; a=144$
$$
\begin{aligned}
f'(x) &= \frac{1}{2\sqrt x}\\
f'(144) &= \frac{1}{24} \quad f(144) = 12\\
f(x) & \approx L(x) = f(144) + f'(144)(x-144)\\
&= 12 + \frac{1}{24}(x-144)\\
&= \frac{1}{24}x +6\\
L(146) &= \frac{1}{24} \times 146 +6 = \frac{145}{12}
\end{aligned}
$$

30\. $\cos 31^{\circ}$
>Solution
Let $f(x) = \cos x; a=\frac{\pi}{6}$
$$
\begin{aligned}
31^{\circ} &= \frac{31\pi}{180} rad\\
f'(x) &= -\sin x\\
f'(\frac{\pi}{6}) &= -\frac{1}{2} \quad f(\frac{\pi}{6}) = \frac{\sqrt 3}{2}\\
f(x) & \approx L(x) = f(\frac{\pi}{6}) + f'(\frac{\pi}{6})(x-\frac{\pi}{6})\\
&= \frac{\sqrt 3}{2} + (-\frac{1}{2})(x-\frac{\pi}{6})\\
&= -\frac{1}{2}x + \frac{\sqrt 3}{2} + \frac{\pi}{12}\\
L(\frac{31\pi}{180}) &= -\frac{1}{2} \times \frac{31\pi}{180} + \frac{\sqrt 3}{2} + \frac{\pi}{12} = \frac{\sqrt 3}{2} - \frac{\pi}{360}
\end{aligned}
$$

<!-- pagebreak -->
31-36\. **Approximating changes**
31\. Approximate the change in volume of a sphere when its radius changed from $r=5ft$ to $r=5.1ft \quad (V(r) = \frac{4}{3}\pi r^3)$.
>Solution
$$
\begin{aligned}
a &= 5 \quad \Delta r = 0.1\\
V'(r) &= 4\pi r^2\\
V'(5) &= 100\pi\\
\Delta V &\approx V'(a)\Delta r = V'(5) \cdot 0.1 = 10\pi ft^3
\end{aligned}
$$

35\. Approximate the change in the lateral surface area (excluding the area of the base) of a right circular cone of fixed height of $h=6m$ when its radius from $r=10m$ to $r=9.9m$ ($S=\pi r\sqrt{r^2+h^2}$).
>Solution
$$
\begin{aligned}
a&= 10 \quad \Delta r = -0.1\\
S'(r) &= \pi(\sqrt{r^2+36} + r\cdot \frac{2r}{2\sqrt{r^2 + 36}})\\
&= \pi\sqrt{r^2+36} + \frac{\pi r^2}{\sqrt{r^2+36}}\\
&= \frac{2\pi r^2 + 36\pi}{\sqrt{r^2+36}}\\
S'(10) & = \frac{236\pi}{\sqrt{136}}\\
\Delta S & \approx S'(a) \Delta r = S'(10) \cdot (-0.1) = -\frac{23.6 \pi}{\sqrt {136}} \approx -6.36 m^2
\end{aligned}
$$

37-46\. **Differientials** Consider the following functions and express the relationship between a small change in $x$ and the corresponding in $y$ in the form $dy=f'(x)dx$
39\. $f(x) = 1/x^3$
>Solution
$f'(x) = -3x^{-4}=\dfrac{-3}{x^4} \quad dy = \dfrac{-3}{x^4}dx$

44\. $f(x) = \sin^{-1} x$
>Solution
$f'(x) = \dfrac{1}{\sqrt {1-x^2}} \quad dy = \dfrac{1}{\sqrt {1-x^2}} dx$


50-53\. **Linear Approxmiation**
a. Write the equation of the line that represent the linear approximation to the following functions at the given point $a$.
b. Graph the function and the linear approximation at $a$.
c. Use the linear approximation to estimte the given function value.
d. Compute the pecent error in you approximation.
51\. $f(x)=1/(x+1); a=0; 1/1.1$
>Solution
Graph (51).
$$
\begin{aligned}
f'(x) &= -\frac{1}{(x+1)^2}\\
f'(0) &= -1 \quad f(0) = 1\\
f(x) & \approx L(x) = f(0) + f'(0)(x-0) =1-x\\
L(0.1) &= 1- 0.1=0.9\\
percent \: error &= 100 \cdot \frac{|0.9-\frac{1}{1.1}|}{\frac{1}{1.1}} \approx 1
\end{aligned}
$$

57\. **Errors in approximations** Suppose $f(x) = \sqrt[3]{x}$ is to be approximate near $x=8$. Find the linear approximation to $f$ at 8. Then complete the following table, showing the errors in various approximations. Use a calculator to obtain the exact values. The percent error is $100 \cdot |approximation-exact|/|exact|$. Comment on the behavior of the errors as $x$ approaches $8$.
>Solution
$$
\begin{aligned}
f'(x) &= \frac{1}{3\sqrt[3]{x^2}}\\
f'(8) &= \frac{1}{3\sqrt[3]{8^2}} = \frac{1}{12} \quad f(8) = 2\\
f(x) &\approx L(x) = f(8) + f'(8)(x-8) = \frac{x}{12} + \frac{4}{3}
\end{aligned}
$$

| x   | Linear approx | Exact Value | Percent Error |
|:----|---------------|------------ |---------------|
|8.1    | 2.00833 |2.00830 | $1.717 \times 10^{-3}$ |
|8.01   | 2.00083 |2.00083 | $1.734 \times 10^{-5}$ |
|8.001  | 2.00008 |2.00008 | $1.736 \times 10^{-7}$ |
|8.0001 | 2.00000 |2.00000 | $1.736 \times 10^{-9}$ |
|7.9999 | 1.99999 |1.99999 | $1.738 \times 10^{-9}$ |
|7.999  | 1.99992 |1.99992 | $1.738 \times 10^{-7}$ |
|7.99   | 1.99917 |1.99917 | $1.736 \times 10^{-5}$ |
|7.9    | 1.99167 |1.99163 | $1.736 \times 10^{-3}$ |
