### Chapter 7 Integration Techniques Review
p572: 41, 45, 51, 59
38–61\. **Miscellaneous Integrals** Evaluate the following integrals analytically.
41\. $\dint e^x \sin x dx$
>Solution
$$
\begin{aligned}
u = \sin x, & du = \cos x dx\quad dv = e^x dx, v = e^x\\
\int e^x \sin x dx &= e^x\sin x - \int e^x \cos xdx\\
(u = \cos x, & du = -\sin x dx\quad dv = e^x dx, v = e^x)\\
&= e^x\sin x - (e^x\cos x + \int e^x \sin x dx)\\
2\int e^x \sin x dx &= e^x\sin x - e^x\cos x\\
\int e^x \sin x dx &= \frac{e^x\sin x - e^x\cos x}{2} + C
\end{aligned}
$$

45\. $\dint \sec^5 z tan z dz$
>Solution
$$
\begin{aligned}
\int \sec^5 z tan z dz &= \int (\sec^4 z) \sec z\tan z dz\\
&= \int u^4 du & u= \sec z\\
&= \frac{1}{5} u^5 + C = \frac{1}{5} \sec^5 z + C
\end{aligned}
$$

51\. $\dint \frac{1}{y^2\sqrt{9-y^2}} dy$
>Solution
$$
\begin{aligned}
y=3\sin \th, &dy = 3\cos \th d\th\\
\int \frac{1}{y^2\sqrt{9-y^2}} dy &= \int \frac{3\cos \th d\th}{9\sin^2 \th \cdot 3\cos \th}\\
&= \frac{1}{9}\int \csc^2 \th d\th\\
&= -\frac{1}{9}\cot \th + C = -\frac{\sqrt{9-y^2}}{9y} + C
\end{aligned}
$$

59\. $\dint \frac{dx}{x^2-2x-15} dx$
>Solution
$$
\begin{aligned}
\frac{1}{x^2-2x-15} &= \frac{A}{x-5} + \frac{B}{x+3}  = \frac{(A+B)x +(3A-5B)}{x^2-2x-15}\\
\begin{gathered}
A+B=0\\
3A-5B=1
\end{gathered} &\To
\begin{cases}
A=\frac{1}{8}\\
B=-\frac{1}{8}
\end{cases}\\
\int \frac{dx}{x^2-2x-15} dx& = \frac{1}{8}(\int \frac{1}{x-5}dx - \int \frac{1}{x+3}dx)\\
&= \frac{1}{8}(\ln|x-5| - \ln |x+3|) + C
\end{aligned}
$$
