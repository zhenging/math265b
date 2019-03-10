### Section 7.5 Partical Fractions

+ Simple Linear Factors
$$
\begin{aligned}
\frac{A}{x-r}
\end{aligned}
$$
+ Repeated Linear Factors
$$
\begin{aligned}
\frac{A_1}{(x-r)} + \frac{A_2}{(x-r)^2} + \frac{A_3}{(x-r)^3} + \cdots + \frac{A_m}{(x-r)^m}
\end{aligned}
$$
+ Irreducible Quadratic Factors
$$
\begin{aligned}
\frac{Ax + B}{ax^2 + bx + c}
\end{aligned}
$$

#### Homework
p540: 01, 5, 15, 17, 19, 29, 33, 39, 43, 46, 49, 51b, 59, 65, 71 Mixed practice in review p572: 41, 45, 51, 59

1\. What kind of functions can be integrated using partical functions decomposition?
>Solution
Proper rational function.

5\.  $\dfrac{2}{x^2-2x-8}$
>Solution
$$
\begin{aligned}
\frac{2}{x^2-2x-8} &= \frac{A}{x-4} + \frac{B}{x+2}  = \frac{(A+B)x +(2A-4B)}{x^2-2x-8}\\
\begin{gathered}
A+B=0\\
2A-4B=2
\end{gathered} &\To
\begin{cases}
A=\frac{1}{3}\\
B=-\frac{1}{3}
\end{cases}\\
\frac{2}{x^2-2x-8} &= \frac{1}{3(x-4)} - \frac{1}{3(x+2)}
\end{aligned}
$$

13–26\. **Simple linear factors** Evaluate the following integrals.
15\. $\dint \frac{6}{x^2-1}dx$
>Solution
$$
\begin{aligned}
\frac{6}{x^2-1} &= \frac{A}{x-1} + \frac{B}{x+1}  = \frac{(A+B)x +(A-B)}{x^2-1}\\
\begin{gathered}
A+B=0\\
A-B=6
\end{gathered} &\To
\begin{gathered}
A=3\\
B=-3
\end{gathered}\\
\int \frac{6}{x^2-1}dx& = \int \frac{3}{x-1}dx - \int \frac{3}{x+1}dx\\
&= 3\ln|x-1| -3\ln|x+1| + C
\end{aligned}
$$

17\. $\dint \frac{5x}{x^2-x-6}dx$
>Solution
$$
\begin{aligned}
\frac{5x}{x^2-x-6} &= \frac{A}{x-3} + \frac{B}{x+2}  = \frac{(A+B)x +(2A-3B)}{x^2-x-6}\\
\begin{gathered}
A+B=5\\
2A-3B=0
\end{gathered} &\To
\begin{gathered}
A=3\\
B=2
\end{gathered}\\
\int \frac{5x}{x^2-x-6}dx& = \int \frac{3}{x-3}dx + \int \frac{2}{x+2}dx\\
&= 3\ln|x-3|+2\ln|x+2| + C
\end{aligned}
$$

19\. $\dint \frac{10x}{x^2-2x-24}dx$
>Solution
$$
\begin{aligned}
\frac{10x}{x^2-2x-24} &= \frac{A}{x-6} + \frac{B}{x+4}  = \frac{(A+B)x +(4A-6B)}{x^2-2x-24}\\
\begin{gathered}
A+B=10\\
4A-6B=0
\end{gathered} &\To
\begin{gathered}
A=6\\
B=4
\end{gathered}\\
\int \frac{10x}{x^2-2x-24}dx& = \int \frac{6}{x-6}dx + \int \frac{4}{x+4}dx\\
&= 6\ln|x-6|+4\ln|x+4| + C
\end{aligned}
$$

27–37\. **Repeated linear factors** Evaluate the following integrals.
29\. $\int \frac{x}{(x+3)^2}dx$
>Solution
$$
\begin{aligned}
\frac{x}{(x+3)^2} &= \frac{A}{x+3} + \frac{B}{(x+3)^2}  = \frac{Ax +(3A+B)}{(x+3)^2}\\
\begin{gathered}
A=1\\
3A+B=0
\end{gathered} &\To
\begin{gathered}
A=1\\
B=-3
\end{gathered}\\
\int \frac{x}{(x+3)^2}dx& = \int \frac{1}{x+3}dx - \int \frac{3}{(x+3)^2}dx\\
&= \ln|x+3|+\frac{3}{x+3} + C
\end{aligned}
$$

33\. $\dint \frac{x-5}{x^2(x+1)}dx$
>Solution
$$
\begin{aligned}
\frac{x-5}{x^2(x+1)} &= \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x+1} = \frac{(A+C)x^2 +(A+B)x + B}{x^2(x+1)}\\
\begin{gathered}
A+C=0\\
A+B=1\\
B=-5
\end{gathered} &\To
\begin{gathered}
A=6\\
B=-5\\
C=-6
\end{gathered}\\
\int \frac{x-5}{x^2(x+1)}dx& = \int \frac{6}{x}dx - \int \frac{5}{x^2}dx -\int \frac{6}{x+1}dx\\
&= 6\ln|x|+\frac{5}{x} -6\ln|x+1| + C
\end{aligned}
$$

38–41\. **Setting up partial fraction decompositions** Give the appropriate form of the partial fraction decomposition for the following functions.
39\. $\dfrac{20x}{(x-1)^2(x^2+1)}$
>Solution
$$
\begin{aligned}
\frac{20x}{(x-1)^2(x^2+1)} &= \frac{A}{x-1} + \frac{B}{(x-1)^2} + \frac{Cx+D}{x^2+1}
\end{aligned}
$$

42–50\. **Simple irreducible quadratic factors** Evaluate the following integrals.
43\. $\dint \frac{x^2+x+2}{(x+1)(x^2+1)} dx$
>Solution
$$
\begin{aligned}
\frac{x^2+x+2}{(x+1)(x^2+1)}  &= \frac{A}{x+1} + \frac{Bx+C}{x^2 + 1}  = \frac{(A+B)x^2 +(B+C)x + (A+C)}{(x+1)(x^2+1)}\\
\begin{gathered}
A+B=1\\ B+C=1\\ A+C=2
\end{gathered} &\To
\begin{gathered}
A=1\\ B=0\\ C=1
\end{gathered}\\
\int \frac{x^2+x+2}{(x+1)(x^2+1)} dx& = \int \frac{1}{x+1}dx + \int \frac{1}{x^2+1}dx\\
&= \ln|x+1|+\arctan x + C
\end{aligned}
$$

46\. $\dint \frac{z+1}{z(z^2+4)} dz$
>Solution
$$
\begin{aligned}
\frac{z+1}{z(z^2+4)}  &= \frac{A}{z} + \frac{Bz+C}{z^2 + 4}  = \frac{(A+B)z^2 +Cz + 4A}{z(z^2+4)}\\
\begin{gathered}
A+B=0\\ C=1\\ 4A=1
\end{gathered} &\To
\begin{gathered}
A=\frac{1}{4}\\ B=-\frac{1}{4}\\ C=1
\end{gathered}\\
\int \frac{z+1}{z(z^2+4)}dz& = \int \frac{1}{4z}dz -\frac{1}{4} \int \frac{z}{z^2+4}dz + \int \frac{4}{z^2+4} dz\\
&= \frac{1}{4}\ln|z|-\frac{1}{8}\ln(z^2+4)+2\arctan (\frac{z}{2}) + C
\end{aligned}
$$

49\.  $\dint \frac{x^2}{x^3-x^2+4x-4} dx$
>Solution
$$
\begin{aligned}
\frac{x^2}{x^3-x^2+4x-4} &= \frac{x^2}{(x-1)(x^2+4))}\\
&=\frac{A}{x-1} + \frac{Bx+C}{x^2 + 4}  = \frac{(A+B)x^2 +(C-B)x + (4A-C)}{(x-1)(x^2+4)}\\
\begin{gathered}
A+B=1\\ C-B=0\\ 4A-C=0
\end{gathered} &\To
\begin{gathered}
A=\frac{1}{5}\\ B=\frac{4}{5}\\ C=\frac{4}{5}
\end{gathered}\\
\int \frac{x^2}{x^3-x^2+4x-4} dx& =\frac{1}{5} \int \frac{1}{x-1}dx + \int \frac{\frac{4}{5}x + \frac{4}{5}}{x^2+4}dx\\
&= \frac{1}{5}\ln|x-1|+ \frac{4}{5}\int \frac{x}{x^2+4}dx + \frac{4}{5}\int \frac{1}{x^2+4}dx + C\\
&= \frac{1}{5}\ln|x-1| + \frac{2}{5}\ln|x^2+4| + \frac{2}{5}\arctan \frac{x}{2} + C
\end{aligned}
$$

51\. **Explain why or why not** Determine whether the following state ments are true and give an explanation or counterexample.
b. The easiest way to evaluate $\dint \frac{6x+1}{ 3x^2+x} dx$ is with a partial fraction decomposition of the integrand.
>Solution
False. Let $u = 3x^2 + x, du = (6x+1)dx$.
$$
\begin{aligned}
\int \frac{6x+1}{ 3x^2+x} dx &= \int \frac{1}{u} du\\
&= \ln |u| + C = \ln|3x^2+x| + C
\end{aligned}
$$

59\. The region bounded by $y=\frac{1}{\sqrt{x(3-x)}}, y=0, x=1$, and $x=2$ is revolved about the x-axis.
>Solution
$$
\begin{aligned}
V &= \pi \int_1^2 (\frac{1}{\sqrt{x(3-x)}})^2 dx\\
&= \pi \int_1^2 (\frac{1}{x(3-x)}) dx\\
&= \pi \int_1^2 \frac{1}{3}(\frac{1}{x} - \frac{1}{3-x}) dx\\
&=\frac{\pi}{3}(\ln x + \ln|x-3|) \mid_1^2\\
&= \frac{2\pi}{3} \ln 2
\end{aligned}
$$

63–73\. **Preliminary steps** The following integrals require a preliminary step such as long division or a change of variables before using partial fractions. Evaluate these integrals.
65\. $\dint \frac{3x^2+4x-6}{x^2-3x+2} dx$
>Solution
$$
\begin{aligned}
\frac{3x^2+4x-6}{x^2-3x+2}  &= 3 + \frac{13x-12}{(x-1)(x-2)}\\
\frac{13x-12}{(x-1)(x-2)} &=\frac{A}{x-1} + \frac{B}{x-2}  = \frac{(A+B)x -(2A+B)}{(x-1)(x-2)}\\
\begin{gathered}
A+B=13\\ 2A+B=12
\end{gathered} &\To
\begin{gathered}
A=-1\\ B=14
\end{gathered}\\
\int \frac{3x^2+4x-6}{x^2-3x+2}  &= \int 3 dx-\int \frac{1}{x-1}dx + 14\int \frac{1}{x-2} dx\\
&= 3x-\ln|x-1| + 14\ln|x-2| + C
\end{aligned}
$$

71\. $\dint \frac{e^x}{(e^x-1)(e^x+2)} dx$
>Solution
Let $u=e^x, du = e^x dx$
$$
\begin{aligned}
\int \frac{e^x}{(e^x-1)(e^x+2)} dx &= \int \frac{1}{(u-1)(u+2)} du\\
\frac{1}{(u-1)(u+2)} &=\frac{A}{u-1} + \frac{B}{u+2}  = \frac{(A+B)u +(2A-B)}{(u-1)(u+2)}\\
\begin{gathered}
A+B=0\\ 2A-B=1
\end{gathered} &\To
\begin{gathered}
A=\frac{1}{3}\\ B=-\frac{1}{3}
\end{gathered}\\
\int \frac{e^x}{(e^x-1)(e^x+2)} dx &= \int \frac{1}{(u-1)(u+2)} du\\
&= \frac{1}{3}\int \frac{1}{u-1} du - \frac{1}{3} \frac{1}{u+2} du\\
&= \frac{1}{3} \ln|u-1|-\frac{1}{3} \ln |u+2| + C\\
&= \frac{1}{3} \ln|e^x-1|-\frac{1}{3} \ln |e^x+2| + C\\
\end{aligned}
$$
