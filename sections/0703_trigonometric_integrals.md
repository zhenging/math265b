### Section 7.3 Trigonometric Integrals

+ Integrating Products of Powers of $\sin x$ and $\cos x$
$$
\int \sin^m x \cos^n x dx
$$
+ Integrating Products of Powers of $\tan x$ and $\sec x$
$$
\int \tan^m x \sec^n x dx
$$

#### Homework
p521: 1, 2, 9–21 odd, 25, 26, 31–37odd, **35**, 41, 50, 62

1\. State the half-angle identities used to integrate $\sin^2 x$ and $\cos^2 x$.
>Solution
$\sin^2 x = \dfrac{1-\cos 2x}{2}, \cos^2 x = \dfrac{1+\cos 2x}{2}$

2\. State the three Pythagorean identities.
>Solution
$\sin^2 x + \cos^2 x = 1, \tan^2 x + 1 = \sec^2 x, \cot^2 x + 1 = \csc^2 x$

9–14\. **Integrals of $\sin x$ or $\cos x$** Evaluate the following integrals.
9\. $\int \sin^2 x dx$
>Solution
$\dint \sin^2 x dx = \frac{1}{2}\int (1-\cos  2x) dx =\frac{1}{2} x - \frac{1}{4} \sin 2x + C$

11\. $\int \cos^3 x dx$
>Solution
$$
\begin{aligned}
\int \cos^3 x dx &= \int (1-\sin^2 x) \cos x dx\\
&= \int (1-u^2) du & u = \sin x, du = \cos x dx\\
&= u-\frac{u^3}{3} = \sin x - \frac{\sin^3 x}{3} + C
\end{aligned}
$$

13\. $\int \sin^5 x dx$
>Solution
$$
\begin{aligned}
\int \sin^5 x dx &= \int (1-\cos^2 x)^2 \sin x dx\\
&= -\int (u^4-2u^2 + 1) du & u = \cos x, du = -\sin x dx\\
&= -\frac{1}{5}u^5 + \frac{2}{3}u^3 -u= -\frac{1}{5}\cos^5 x + \frac{2}{3}\cos^3 x -\cos x + C
\end{aligned}
$$

<!-- pagebreak -->
15–24\. **Integrals of $\sin x$ and $\cos x$** Evaluate the following integrals.
15\. $\int \sin^2 x\cos^2 x dx$
>Solution
$$
\begin{aligned}
\int \sin^2 x\cos^2 x dx &= \frac{1}{4}\int (1-\cos 2x)(1+\cos 2x)dx\\
&= \frac{1}{4}\int (1-\cos^2 2x)dx\\
&= \frac{1}{4} x - \frac{1}{8}\int (1- \cos 4x)dx\\
&= \frac{1}{4} x - \frac{1}{8} x - \frac{1}{8}\int \cos 4xdx\\
&= \frac{1}{8} x - \frac{1}{32}\sin 4x + C\\
\end{aligned}
$$

17\. $\int \sin^3 x\cos^2 x dx$
>Solution
$$
\begin{aligned}
\int \sin^3 x\cos^2 x dx &= \int (1-\cos^2 x) \cos ^2 x \sin x dx\\
&= \int (\cos^2 x-\cos^4 x) \sin x dx\\
&= \int (u^4-u^2)du & u=\cos x, du=-\sin x dx\\
&= \frac{1}{5}u^5 - \frac{1}{3}u^3 = \frac{1}{5}\cos^5 x- \frac{1}{3}\cos^3 x + C
\end{aligned}
$$

19\. $\int \cos^3 x \sqrt{\sin x}$
>Solution
$$
\begin{aligned}
\int \cos^3 x \sqrt{\sin x} &= \int (1-\sin^2 x)\sqrt{\sin x} \cos x dx \\
&=\int (u^{\frac{1}{2}}-u^{\frac{5}{2}})du & u=\sin x, du = \cos x dx\\
&= \frac{2}{3}u^{\frac{3}{2}} - \frac{2}{7}u^{\frac{7}{2}} = \frac{2}{3}\sin^{\frac{3}{2}} x- \frac{2}{7}\sin^{\frac{7}{2}} x + C
\end{aligned}
$$

21\. $\int \sin^5 x \cos^{-2} x dx$
>Solution
$$
\begin{aligned}
\int \sin^5 x \cos^{-2} x dx &= \int (1-\cos^2 x)^2 \cos^{-2} x \sin xdx\\
&= \int (\cos^2 x - 2 + \cos^{-2} x) \sin xdx\\
&= -\int (u^2 - 2 + u^{-2})du & u=\cos x, du=-\sin x dx\\
&= -\frac{1}{3}u^3 + 2u + \frac{1}{u}\\
&= -\frac{1}{3}\cos^3 x+ 2\cos x +\frac{1}{\cos x} + C
\end{aligned}
$$

<!-- pagebreak -->
25–30\. **Integrals of $\tan x$ or $\cot x$** Evaluate the following integrals.
25\. $\int \tan^2 x dx$
>Solution
$$
\begin{aligned}
\int \tan^2 x dx &= \int (\sec^2 x - 1) dx\\
&= \tan x - x + C
\end{aligned}
$$

26\. $\int 6 \sec^4 x dx$
>Solution
$$
\begin{aligned}
\int 6 \sec^4 x dx &= 6\int (1+\tan^2 x) \sec^2 x dx\\
&= 6\int (1+u^2 ) du &u=\tan x, du=\sec^2 x dx\\
&= 6u + 2u^3 = 6\tan x + 2\tan^3 x + C
\end{aligned}
$$

31–44\. **Integrals involving $\tan x$ and $\sec x$** Evaluate the following integrals.
31\. $\int 10\tan^9 x \sec^2 x$
>Solution
$$
\begin{aligned}
\int 10\tan^9 x \sec^2 x &= 10\int u^9 du & u=\tan x, du=\sec^2 x dx\\
&= u^{10} = \tan^{10} x + C
\end{aligned}
$$

33\. $\int \tan x \sec^3 x dx$
>Solution
$$
\begin{aligned}
\int \tan x \sec^3 x dx &= \int u^2 du & u=\sec x, du=\sec x \tan x dx\\
&= \frac{1}{3}u^3 = \frac{1}{3}\sec^3 x + C
\end{aligned}
$$

35\. $\int \tan^3 4x dx$
>Solution
$$
\begin{aligned}
\int \tan^3 4x dx &= \int (\sec^2 4x - 1)\tan 4x dx \\
&= \int \tan 4x \sec^2 4x dx - \int \tan 4x dx\\
&= \frac{1}{8}\tan^2 4x -\int \tan 4x dx\\
&= \frac{1}{8}\tan^ 4x -\frac{1}{4}\ln |\sec 4x | + C\\
\end{aligned}
$$

<!-- pagebreak -->
37\. $\int \sec^2 x \tan^{\frac{1}{2}} x dx$
>Solution
$$
\begin{aligned}
\int \sec^2 x \tan^{\frac{1}{2}} x dx &= \int u^{\frac{1}{2}} du &u=\tan x, du=\sec^2 x dx\\
&= \frac{2}{3}u^{\frac{3}{2}} =\frac{2}{3} \tan^{\frac{3}{2}} x + C
\end{aligned}
$$

41\. $\int_0^{\frac{\pi}{4}} \sec^4 \theta d\theta$
>Solution
$$
\begin{aligned}
\int_0^{\frac{\pi}{4}} \sec^4 \theta d\theta &= \int_0^{\frac{\pi}{4}} (1+\tan^2 \theta)\sec^2 \theta d\theta\\
&= \int_0^1 (1+u^2)du &u=\tan \theta, du=\sec^2 \theta\\
&=(u+\frac{1}{3}u^3)\mid_0^1 = \frac{4}{3}
\end{aligned}
$$

50–57\. **Additional integrals** Evaluate the following integrals.
50\. $\int_0^{\sqrt {\frac{\pi}{2}}} x\sin^3(x^2)dx$
>Solution
$$
\begin{aligned}
\int_0^{\sqrt {\frac{\pi}{2}}} x\sin^3(x^2)dx &= \frac{1}{2}\int_0^{\frac{\pi}{2}} \sin^3 udu &u=x^2, du=2xdx\\
&= \frac{1}{2}\int_0^{\frac{\pi}{2}}(1-\cos^2 u)\sin udu\\
&= \frac{1}{2}\int_1^0 (v^2 - 1) dv & v=\cos u, dv=-\sin u du\\
&= \frac{1}{2}(\frac{1}{3}v^3-v)\mid_1^0 = \frac{1}{3}
\end{aligned}
$$

62\. **Sine football** Find the volume of the solid generated when the region bounded by the graph of $y = \sin x$ and the x-axis on the interval $[0, \pi]$ is revolved about the x-axis.
>Solution
$$
\begin{aligned}
V &= \int_0^{\pi} \pi \sin^2 x dx\\
&= \frac{\pi}{2} \int_0^{\pi} (1-\cos 2x) dx\\
&= \frac{\pi}{2} (x-\frac{1}{2}\sin 2x)\mid_0^{\pi} dx= \frac{\pi^2}{2}
\end{aligned}
$$
