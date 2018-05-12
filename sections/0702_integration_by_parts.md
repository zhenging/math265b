### Section 7.2 Integration By Parts

$$
\begin{aligned}
\int u dv = uv - \int v du
\end{aligned}
$$

+ Integration by parts
+ Repeated use of integration by parts
+ Integration by parts for definite integrals
+ Integral of $\ln x$

#### Homework
p512: 1, 7, 9, 11, 13, 15, 17, 19, 23, 25, 27, 31, 33, 35,37, **40**, 47, 51, 56, 60a

1\. On which derivative rule is integration by parts based?
>Solution
Product rule.

7-22\. **Integration by parts** Evaluate the following integrals.
7\. $\int x\cos x dx$
>Solution
$$
\begin{aligned}
u = x, &du = dx\quad dv = \cos x dx, v = \sin x\\
\int x\cos x dx &= x\sin x - \int \sin x dx\\
&= x\sin x + \cos x + C
\end{aligned}
$$

9\. $\int t e^t dt$
>Solution
$$
\begin{aligned}
u = t, &du = dt\quad dv = e^t dt, v = e^t\\
\int t e^t dt &= t e^t - \int e^t dt\\
&= t e^t - e^t + C
\end{aligned}
$$

11\. $\int \frac{x}{\sqrt {x+1}} dx$
>Solution
$$
\begin{aligned}
u = x, & du = dx\quad dv = \frac{1}{\sqrt {x+1}} dx, v= 2\sqrt{x+1}\\
\int \frac{x}{\sqrt {x+1}} dx &= 2x\sqrt{x+1} - \int 2\sqrt{x+1} dx\\
&= 2x\sqrt{x+1} - -\frac{4}{3} (x+1)^{\frac{3}{2}} + C
\end{aligned}
$$

13\. $\int x^2\ln x dx$
>Solution
$$
\begin{aligned}
u = \ln x^3, & du = \frac{3}{x} dx\quad dv = x^2 dx, v = \frac{1}{3}x^3\\
\int x^2\ln x^3dx &= \frac{1}{3}x^3 \ln x^3 - \int \frac{1}{3}x^3 \cdot \frac{3}{x} dx\\
&= x^3\ln x-\frac{1}{3}x^3 + C
\end{aligned}
$$

<!-- pagebreak -->
15\. $\int x^2\ln x dx$
>Solution
$$
\begin{aligned}
u = \ln x, & du = \frac{dx}{x}\quad dv = x^2 dx, v = \frac{1}{3}x^3\\
\int x^2\ln x dx &= \frac{1}{3}x^3 \ln x - \int \frac{1}{3}x^3 \cdot \frac{1}{x} dx\\
&= \frac{1}{3}x^3\ln x-\frac{1}{9}x^3 + C
\end{aligned}
$$

17\. $\int \frac{\ln x}{x^{10}} dx$
>Solution
$$
\begin{aligned}
u = \ln x, & du = \frac{dx}{x}\quad dv = {x^{-10}} dx, v = -\frac{1}{9} x^{-9}\\
\int \frac{\ln x}{x^{10}} dx &= -\frac{1}{9}x^{-9} \ln x - \int -\frac{1}{9} x^{-9} \frac{dx}{x}\\
&= -\frac{\ln x}{9x^9} - \frac{1}{81x^9} + C
\end{aligned}
$$

19\. $\int \arctan x dx$
>Solution
$$
\begin{aligned}
u = \arctan x, & du = \frac{dx}{1+x^2}\quad dv = dx,v = x\\
\int \arctan x dx &= x\arctan x - \int x \cdot \frac{dx}{1+x^2}\\
&= x\arctan x - \frac{1}{2} \int \frac{1}{w} dw &( w=1+x^2, dw = 2xdx)\\
&= x\arctan x - \frac{1}{2}\ln (x^2+1) + C
\end{aligned}
$$

23\. $\int t^2 e^{-t} dt$
>Solution
$$
\begin{aligned}
u=t^2, & du = 2tdt\quad  dv = e^{-t} dt, v = -e^{-t}\\
\int t^2 e^{-t} dt &= -t^2 e^{-t} - \int -2t e^{-t} dt\\
&= -t^2 e^{-t} + 2\int t e^{-t} dt\\
&= -t^2 e^{-t} + 2(-t e^{-t} - \int -e^{-t} dt)\\
&= -t^2 e^{-t} - 2t e^{-t} - 2e^{-t} + C
\end{aligned}
$$

<!-- pagebreak -->
25\. $\int e^{-x} \sin 4x dx$
>Solution
$$
\begin{aligned}
u = \sin 4x, & du = 4\cos 4x dx\quad dv = e^{-x} dx, v = -e^{-x}\\
\int e^{-x} \sin 4x dx &= -e^{-x}\sin 4x - \int -4 e^{-x} \cos 4x  dx\\
&= -e^{-x}\sin 4x + 4\int e^{-x} \cos 4x dx\\
(u = \cos 4x, & du = -4\sin 4x dx\quad dv = e^{-x} dx, v = -e^{-x})\\
&= -e^{-x}\sin 4x + 4(-e^{-x} \cos 4x - \int 4e^{-x} \sin 4x dx)\\
&= -e^{-x}\sin 4x - 4e^{-x} \cos 4x - 16 \int e^{-x} \sin 4x dx\\
17 \int e^{-x} \sin 4x dx &= -e^{-x}\sin 4x - 4e^{-x} \cos 4x\\
\int e^{-x} \sin 4x dx &= -\frac{1}{17} e^{-x}(\sin 4x + 4\cos 4x) + C
\end{aligned}
$$

27\. $\int e^x \cos x dx$
>Solution
$$
\begin{aligned}
u = \cos x, & du = -\sin x dx \quad dv = e^x dx, v = e^x\\
\int e^x \cos x dx &=  e^x\cos x + \int e^x\sin x dx\\
(u = \sin x, & du = \cos x dx\quad dv = e^x dx, v = e^x)\\
&= e^x\cos x + e^x\sin x - \int e^x \cos x dx\\
2\int e^x \cos x dx &= e^x\cos x + e^x\sin x\\
\int e^x \cos x dx &= \frac{e^x\cos x + e^x\sin x}{2} + C
\end{aligned}
$$

31\. $\int_0^\pi x\sin x dx$
>Solution
$$
\begin{aligned}
u = x, & du = dx \quad dv = \sin x dx, v = -\cos x\\
\int_0^\pi x\sin x dx &= (-x\cos x) \mid_0^\pi + \int_0^\pi \cos x dx\\
&= (-x\cos x + \sin x) \mid_0^\pi = \pi
\end{aligned}
$$

33\. $\int_0^{\frac{\pi}{2}} x\cos 2x dx$
>Solution
$$
\begin{aligned}
u = x, & du = dx \quad dv = \cos 2x dx, v = \frac{1}{2}\sin x\\
\int_0^{\frac{\pi}{2}} x\cos 2x dx &= (\frac{1}{2}x\sin 2x) \mid_0^{\frac{\pi}{2}} - \int_0^{\frac{\pi}{2}} \frac{1}{2}\sin 2x dx\\
&= (\frac{1}{2}x\sin 2x + \frac{1}{4}\cos 2x) \mid_0^{\frac{\pi}{2}} = -\frac{1}{2}
\end{aligned}
$$

35\. $\int_1^{e^2} x^2\ln x dx$
>Solution
$$
\begin{aligned}
u = \ln x, & du = \frac{dx}{x} \quad dv = x^2 dx,  v = \frac{x^3}{3}\\
\int_0^\pi x\sin x dx &= (-x\cos x) \mid_0^\pi + \int_0^\pi \cos x dx\\
&= (-x\cos x + \sin x) \mid_0^\pi = \pi
\end{aligned}
$$

37\. $\int_{1/2}^{{\sqrt 3}/2} \arcsin y dy$
>Solution
$$
\begin{aligned}
u = \arcsin y, & du = \frac{dy}{\sqrt{1-y^2}} \quad dv = dy, v = x\\ \int_{1/2}^{{\sqrt 3}/2} \arcsin y dy &= (y\arcsin y)\mid_{1/2}^{{\sqrt 3}/2} - \int_{1/2}^{{\sqrt 3}/2} \frac{y}{\sqrt{1-y^2}} dy\\
&= (y\arcsin y + \sqrt{1-y^2})\mid_{1/2}^{{\sqrt 3}/2}= \frac{\pi}{6}(\sqrt 3 - \frac{1}{2}) + \frac{1}{2}(1-\sqrt 3)
\end{aligned}
$$

39-42\. **Volumes of solids** Find the volume of the solid that is generated when the given region is revolved as described.
40\. The region bounded by $f(x) = \sin x$ and the x-axis on $[0,\pi]$ is revolved about the y-axis.
>Solution
$$
\begin{aligned}
V_{shell} &= \int_0^{\pi} 2\pi x\sin x dx\\
(u = x, & du = dx \quad dv = \sin x dx, v = -\cos x)\\
&= 2\pi \lb (-x\cos x)\mid_0^{\pi} + \int_0^{\pi} \cos x dx \rb \\
&= 2\pi \lb (-x\cos x + \sin x)\mid_0^{\pi} \rb = 2\pi^2
\end{aligned}
$$

44–47\. **Reduction formulas** Use integration by parts to derive the following reduction formulas.
47\. $\int \ln^n x dx = x \ln^n - n \int \ln^{n-1} x dx$
>Solution
$$
\begin{aligned}
u = \ln^n x, & du = \frac{n\ln^{n-1} x}{x}dx \quad dv = dx, v = x\\
\int \ln^n x dx &= x \ln^n x - \int x\cdot \frac{n\ln^{n-1} x}{x}dx\\
&= x \ln^n x - n \int \ln^{n-1} x dx
\end{aligned}
$$

<!-- pagebreak -->
48–51\. **Applying reduction formulas** Use the reduction formulas in Exercises 44–47 to evaluate the following integrals.
51\. $\int \ln^4 x dx$
>Solution
$$
\begin{aligned}
\int \ln^4 x dx &= x\ln^4 x - 4\int \ln^3 x dx\\
&= x\ln^4 x - 4(x\ln^3 x - 3\int \ln^2 x dx)\\
&= x\ln^4 x - 4x\ln^3 x + 12(x\ln^2 x - 2\int \ln x dx)\\
&= x\ln^4 x - 4x\ln^3 x + 12 x\ln^2 x - 24(x\ln x - x) + C\\
\end{aligned}
$$

56\. **Two integration methods** Evaluate $\int \sin x \cos x dx$ using integration by parts. Then evaluate the integral using a substitution. Reconcile your answers.
>Solution
$$
\begin{aligned}
u = \sin x, & du = \cos x dx \quad dv = \cos x dx, v = \sin x\\
\int \sin x \cos x dx &= \sin^2 x - \int \sin x\cos x dx\\
2\int \sin x \cos x dx &= \sin^2 x\\
\int \sin x \cos x dx &= \frac{\sin^2 x}{2} &\text{Method 1}\\
u = \sin x, & du = \cos x dx\\
\int \sin x \cos x dx &= \int u du\\
&=\frac{u^2}{2} = \frac{\sin^2 x}{2} &\text{Method 2}
\end{aligned}
$$

60\. **A family of exponentials** The curves $y = xe^{-ax}$ are shown in the figure for $a = 1, 2, 3$. Graph (60).
a. Find the area of the region bounded by $y = xe^{-x}$ and the x-axis on the interval $[0, 4]$.
>Solution
$$
\begin{aligned}
A &= \int_0^4 xe^{-x} dx\\
(u = x, & du = dx \quad dv= e^{-x} dx, v = -e^{-x})\\
&= (-xe^{-x})\mid_0^4 + \int_0^4 e^{-x} dx\\
&= (-xe^{-x} - e^{-x})\mid_0^4 = 1-\frac{5}{e^4}
\end{aligned}
$$
