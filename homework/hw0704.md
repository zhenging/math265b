### Section 7.4 Trigonometric Substituions
p529: 2, 3, 4, 5, 7, 11, 13, 16, 19, 20, 27, 29, 36, 39, 41, 53, 69b, 69c, 81a

2\. What change of variables is suggested by an integral containing $\sqrt {x^2 + 36}$?
>Solution
$x=6\tan \th$

3\. What change of variables is suggested by an integral containing $\sqrt {100 - x^2}$?
>Solution
$x=10\sin \th, |\th| \les \frac{\pi}{2}$

4\. If $x = 4 \tan \th$, express $\sin \th$ in terms of $x$.
>Solution
$\sin \th = \dfrac{x}{\sqrt{16 + x^2}}$

5\. If $x = 2 \sin \th$, express $\cot \th$ in terms of $x$.
>Solution
$\cot \th = \dfrac{\sqrt{4 - x^2}}{x}, |\th| \les \frac{\pi}{2}$


7–16\. **Sine substitution** Evaluate the following integrals.
7\. $\int_0^{\frac{5}{2}} \frac{dx}{\sqrt{25-x^2}}$
>Solution
$$
\begin{aligned}
x = 5\sin \th, & dx = 5\cos \th d\th\\
\int_0^{\frac{\pi}{6}} \frac{dx}{\sqrt{25-x^2}} &= \int_0^{\frac{\pi}{6}} \frac{5\cos \th d\th}{5\cos \th}\\
&=\int_0^{\frac{\pi}{6}} d\th = \th \mid_0^{\frac{\pi}{6}} =  \frac{\pi}{6}
\end{aligned}
$$

11\. $\int_0^{\frac{1}{2}} \frac{x^2}{\sqrt{1-x^2}} dx$
>Solution
$$
\begin{aligned}
x = \sin \th, & dx = \cos \th d\th\\
\int_0^{\frac{1}{2}} \frac{x^2}{\sqrt{1-x^2}}  dx &= \int_0^{\frac{\pi}{6}} \frac{\sin^2 \th \cos \th}{\cos \th} d\th \\
&=\frac{1}{2} \int_0^{\frac{\pi}{6}} (1-\cos 2\th)d\th\\
&=\frac{1}{2} (\th-\frac{1}{2}\sin 2\th) \mid_0^{\frac{\pi}{6}} = \frac{\pi}{12} - \frac{\sqrt 3}{8}\\
\end{aligned}
$$

<!-- pagebreak -->
13\. $\int \frac{dx}{\sqrt{16-x^2}}$
>Solution
$$
\begin{aligned}
x = 4\sin \th, & dx = 4\cos \th d\th\\
\int \frac{dx}{\sqrt{16-x^2}} &= \int \frac{4\cos \th}{4\cos \th} d\th\\
&= \th + C = \arcsin{\frac{x}{4}} + C
\end{aligned}
$$

16\. $\int (36-9x^2)^{-\frac{3}{2}}dx$
>Solution
$$
\begin{aligned}
x=2 \sin \th, & dx =2\cos \th\\
\int (36-9x^2)^{-\frac{3}{2}}dx &= 2\int (36\cos^2 \th)^{-\frac{3}{2}} \cos \th d\th\\
&= 2\int \frac{\cos \th}{(6\cos \th)^3}d\th\\
&= \frac{1}{108}\int \sec^2 \th d\th \\
&= \frac{1}{108}\tan \th + C = \frac{x}{108\sqrt{4-x^2}} + C
\end{aligned}
$$

17–46\. **Trigonometric substitutions** Evaluate the following integrals.
19\. $\int \frac{1}{(1-x^2)^{\frac{3}{2}}}dx$
>Solution
$$
\begin{aligned}
x = \sin \th, & dx = \cos \th d\th\\
\int \frac{1}{(1-x^2)^{\frac{3}{2}}}dx &= \int \frac{\cos \th}{\cos^3 \th} d\th\\
&= \int \sec^2 \th d\th\\
&= \tan \th + C = \frac{x}{\sqrt{1-x^2}} + C
\end{aligned}
$$

20\. $\int \frac{1}{(1+x^2)^{\frac{3}{2}}}dx$
>Solution
$$
\begin{aligned}
x = \tan \th, & dx = \sec^2 \th d\th\\
\int \frac{1}{(1+x^2)^{\frac{3}{2}}}dx &= \int \frac{\sec^2 \th}{\sec^3 \th} d\th\\
&=\int \cos \th d\th\\
&= \sin \th + C = \frac{x}{\sqrt{1+x^2}} + C
\end{aligned}
$$

<!-- pagebreak -->
27\. $\int \frac{1}{(1+4x^2)^{\frac{3}{2}}}dx$
>Solution
$$
\begin{aligned}
x = \frac{1}{2}\tan \th, & dx = \frac{1}{2}\sec^2 \th d\th\\
\int \frac{1}{(1+4x^2)^{\frac{3}{2}}}dx &= \frac{1}{2}\int \frac{\sec^2 \th}{\sec^3 \th} d\th\\
&=\frac{1}{2}\int \cos \th d\th\\
&= \frac{1}{2}\sin \th + C = \frac{x}{\sqrt{1+4x^2}} + C
\end{aligned}
$$

29\. $\int \frac{x^2}{\sqrt{16-x^2}} dx$
>Solution
$$
\begin{aligned}
x = 4\sin \th, & dx = 4\cos \th d\th\\
\int \frac{x^2}{\sqrt{16-x^2}} dx &= \int \frac{16\sin^2 \th}{4\cos \th} 4\cos \th d\th\\
&=8\int (1-\cos 2\th)d\th\\
&=8\th - 4\sin 2\th = 8\arcsin {\frac{x}{4}} - \frac{x\sqrt{16-x^2}}{2} + C
\end{aligned}
$$

36\. $\int \frac{x^4}{1+x^2} dx$
>Solution
$$
\begin{aligned}
x = \tan \th, & dx = \sec^2 \th d\th\\
\int \frac{x^4}{1+x^2} dx &= \int \frac{\tan^4 \th}{\sec^2 \th} \sec^2 \th d\th\\
&= \int \tan^4 \th d\th\\
&= \int (\sec^2 \th -1)\tan^2 \th d\th\\
&= \int \tan^2 \th \sec^2 \th d\th - \int \tan^2 \th d\th\\
&= \int \tan^2 \th \sec^2 \th d\th - \int (\sec^2 \th-1) d\th\\
&= \frac{1}{3}\tan^3 \th - \tan \th + \th + C =\frac{1}{3}x^3 - x + \arctan x + C
\end{aligned}
$$

<!-- pagebreak -->
39\. $\int \frac{x^2}{(25+x^2)^2} dx$
>Solution
$$
\begin{aligned}
x = 5\tan \th, & dx = 5\sec^2 \th d\th\\
\int \frac{x^2}{(25+x^2)^2} dx &= \int \frac{25\tan^2 \th}{625\sec^4 \th} 5\sec^2 \th d\th\\
&= \frac{1}{5}\int \sin^2 \th d\th\\
&= \frac{1}{10}\int (1-\cos 2\th) d\th\\
&= \frac{1}{10} \th - \frac{1}{20}\sin 2\th + C = \frac{1}{10}\arctan {\frac{x}{5}} - \frac{x}{50+x^2} + C
\end{aligned}
$$

41\. $\int \frac{x^2}{(100-x^2)^{\frac{3}{2}}}dx$
>Solution
$$
\begin{aligned}
x = 10\sin \th, & dx = 10\cos \th d\th\\
\int \frac{x^2}{(100-x^2)^{\frac{3}{2}}}dx &= \int \frac{100\sin^2 \th}{1000 \cos^3 \th} 10\cos \th d\th\\
&= \int \tan^2 \th d\th\\
&= \int (\sec^2 -1) \th d\th\\
&= \tan \th - \th + C = \frac{x}{\sqrt{100-x^2}} - \arcsin {\frac{x}{10}} + C
\end{aligned}
$$

47–56\. **Evaluating definite integrals** Evaluate the following definite integrals.
53\. $\dint_0^{\frac{1}{3}} \frac{1}{(9x^2+1)^{\frac{3}{2}}} dx$
>Solution
$$
\begin{aligned}
x = \frac{1}{3}\tan \th, & dx = \frac{1}{3}\sec^2 \th d\th\\
\dint_0^{\frac{1}{3}} \frac{1}{(9x^2+1)^{\frac{3}{2}}} dx &= \int_0^{\frac{\pi}{4}} \frac{\frac{1}{3}\sec^2 \th}{\sec^3 \th} d\th\\
&=\frac{1}{3} \int_0^{\frac{\pi}{4}} \cos \th d\th\\
&=\frac{1}{3} \sin \th \mid_0^{\frac{\pi}{4}} = \frac{\sqrt 2}{6}
\end{aligned}
$$

<!-- pagebreak -->
69\. **Area and volume** Consider the function $f(x) = (9 + x^2 )^{-\frac{1}{2}}$ and the region R on the interval $[0, 4]$ (see figure). Graph (69).
b. Find the volume of the solid generated when R is revolved about the x-axis.
>Solution
$$
\begin{aligned}
A(x) &= \int \pi f(x)^2dx = \pi\int \frac{dx}{9+x^2}\\
x &= 3\tan \th, dx = 3\sec^2 \th d\th\\
A(x) &= \pi \int \frac{3\sec^2 \th}{9\sec^2 \th} d\th\\
&=\frac{\pi}{3}\th + C = \frac{\pi}{3}\arctan \frac{x}{3} + C\\
A\mid_0^4 &= \frac{\pi}{3}\arctan \frac{4}{3}
\end{aligned}
$$

c. Find the volume of the solid generated when R is revolved  about the y-axis.
>Solution
$$
\begin{aligned}
A(x) &= \int 2\pi x \frac{1}{\sqrt{9+x^2}} dx\\
x &= 3\tan \th, dx = 3\sec^2 \th d\th\\
A(x) &= 2\pi \int \frac{3\tan \th}{3\sec \th} 3\sec^2 \th d\th\\
&=6\pi \int \tan \th \sec \th d\th\\
&=6\pi\sec\th + C = 2\pi\sqrt{9+x^2} + C\\
A\mid_0^4 &= 4\pi
\end{aligned}
$$

81\. **Electric field due to a line of charge** A total charge of $Q$ is distributed uniformly on a line segment of length $2L$ along the y-axis (see figure). The x-component of the electric field at a point $(a, 0)$ on the x-axis is given by $E_x(a) = \dfrac{kQa}{2L}\dint_{-L}^L \frac{dy}{(a^2+y^2)^{\frac{3}{2}}}$, where $k$ is a physical constant and $a>0$.
a. Confirm that $E_x(a) = \dfrac{kQ}{a\sqrt{a^2+L^2}}$.
>Solution
$$
\begin{aligned}
y = a\tan \th, & dy = a\sec^2 \th d\th\\
E_x(a) &= \dfrac{kQa}{2L}\dint \frac{a\sec^2 \th d\th}{a^3\sec^3 \th}\\
&= \frac{kQ}{2aL} \int \cos \th d\th\\
&= \frac{kQ}{2aL} \sin \th + C = \frac{kQ}{2aL} \frac{y}{\sqrt{a^2+y^2}} + C\\
E_x(a)\mid_{-L}^L &= \frac{kQ}{2aL} \frac{L}{\sqrt{a^2+L^2}} - \frac{kQ}{2aL} \frac{-L}{\sqrt{a^2+L^2}}\\
&=\frac{kQ}{a\sqrt{a^2+L^2}}
\end{aligned}
$$
