### Section 7.8 Improper Integrals
p567: 1, 2, 3, 5, 7, 9, 13, 18, **19**, 21, 25, 33, 34, 35, 38, 39, **41**, 43, 45, 49, 51, 58, 59, 62, **67**, 85

1\. What are the two general ways in which an improper integral may occur?
>Solution
The interval of integration is infinite or the integrand is unbounded on the interval of integration.

2\. Explain how to evaluate $\dint_a^{\infty} f(x)dx$.
>Solution
$\dint_a^{\infty} f(x)dx = \lim_{t \to \infty} \int_a^t f(x)dx$

3\. Explain how to evaluate $\dint_0^1 x^{-\frac{1}{2}} dx$.
>Solution
$\dint_0^1 x^{-\frac{1}{2}} dx=\lim_{t \to 0^+} \int_t^1 x^{-\frac{1}{2}}dx$

5–28\. **Infinite intervals of integration** Evaluate the following integrals or state that they diverge.
5\. $\dint_1^{\infty} x^{-2}dx$
>Solution
$$
\begin{aligned}
\int_1^{\infty} x^{-2}dx &= \lim_{t \to \infty} \int_1^t x^{-2}dx\\
&= \lim_{t \to \infty} (-\frac{1}{x})\mid_1^t\\
&= \lim_{t \to \infty}(-\frac{1}{t} + 1) = 1
\end{aligned}
$$

7\. $\dint_1^{\infty} e^{-x}dx$
>Solution
$$
\begin{aligned}
\int_1^{\infty} e^{-x}dx &= \lim_{t \to \infty} \int_1^t e^{-x}dx\\
&= \lim_{t \to \infty} (-e^{-x})\mid_1^t\\
&= \lim_{t \to \infty}(-\frac{1}{e^t} + e^{-1}) = \frac{1}{e}
\end{aligned}
$$

9\. $\dint_2^{\infty} x^{-\frac{1}{2}}dx$
>Solution
$$
\begin{aligned}
\int_2^{\infty} x^{-\frac{1}{2}}dx &= \lim_{t \to \infty} \int_2^t x^{-\frac{1}{2}}dx\\
&= \lim_{t \to \infty} (2\sqrt x)\mid_2^t\\
&= \lim_{t \to \infty}(2\sqrt t - 2\sqrt 2) = \infty
\end{aligned}
$$

13\. $\dint_0^{\infty} e^{-ax}dx, a>0$
>Solution
$$
\begin{aligned}
\int_0^{\infty} e^{-ax}dx &= \lim_{t \to \infty} \int_0^te^{-ax}dx\\
&= \lim_{t \to \infty} (-\frac{1}{a}e^{-ax})\mid_0^t\\
&= -\frac{1}{a}\lim_{t \to \infty} (\frac{1}{e^{ax}} + \frac{1}{1} )\mid_0^t = -\frac{1}{a}
\end{aligned}
$$

18\. $\dint_0^{\infty} \cos x dx$
>Solution
$$
\begin{aligned}
\dint_0^{\infty} \cos x dx & = \lim_{t \to \infty} \int_0^t \cos x dx\\
& = \lim_{t \to \infty} (\sin x)\mid_0^t\\
& = \lim_{t \to \infty} (\sin t) &\text{D.N.E}
\end{aligned}
$$

19\. $\dint_2^{\infty}\frac{\cos {\frac{\pi}{x}}}{x^2} dx$
>Solution
$$
\begin{aligned}
\int_2^{\infty}\frac{\cos {\frac{\pi}{x}}}{x^2} dx &= \lim_{t \to \infty} \int_2^t \frac{\cos {\frac{\pi}{x}}}{x^2} dx\\
&= \lim_{t \to \infty} (-\frac{1}{\pi}\sin (\frac{\pi}{x})) \mid_2^t\\
&= \lim_{t \to \infty}\lb -\frac{1}{\pi}(\sin {\frac{\pi}{t}} - \sin \frac{\pi}{2})\rb = -\frac{1}{\pi}(0-1) = \frac{1}{\pi}
\end{aligned}
$$

21\. $\dint_0^{\infty} \frac{e^x}{e^{2x} + 1}dx$
>Solution
$$
\begin{aligned}
\dint_0^{\infty} \frac{e^x}{e^{2x} + 1}dx &= \dint_{u(0)}^{u(\infty)} \frac{1}{u^2 + 1}du &u=e^x\\
&= (\arctan u)\mid_{1}^{\infty} =\frac{\pi}{2}-\frac{\pi}{4} = \frac{\pi}{4}
\end{aligned}
$$

25\. $\dint_1^{\infty} \frac{3x^2+1}{x^3+x} dx$
>Solution
$$
\begin{aligned}
\int_1^{\infty} \frac{3x^2+1}{x^3+x} dx &= \lim_{t \to \infty}\int_1^t \frac{3x^2+1}{x^3+x}dx\\
&= \lim_{t \to \infty}\lb\ln(x^3+x)\rb\mid_1^t\\
&= \lim_{t \to \infty}\lb\ln(t^3+t) - \ln(2)\rb = \infty
\end{aligned}
$$

33\. The region bounded by $f(x) = \dfrac{1}{\sqrt x \ln x}$ and the x-axis on the interval $[2, \infty)$ is revolved about x-axis.
>Solution
$$
\begin{aligned}
V &= \int_2^{\infty} \pi(\frac{1}{\sqrt x \ln x})^2 dx = \pi\lim_{t \to \infty} \int_2^t \frac{1}{x \ln^2 x} dx\\
&=\pi\lim_{t \to \infty} \int_{\ln 2}^{\ln t} \frac{1}{u^2} du\\
&=\pi\lim_{t \to \infty} (-\frac{1}{u})\mid_{\ln 2}^{\ln t}\\
&=\pi \lim_{t \to \infty}(-\frac{1}{\ln t} + \frac{1}{\ln 2})=\pi(0 + \frac{1}{\ln 2}) = \frac{\pi}{\ln 2}\\
\end{aligned}
$$

34\. The region bounded by $f(x) = \dfrac{\sqrt x}{\sqrt[3] {x^2+1}}$ and the x-axis on the interval $[0, \infty)$ is revolved about x-axis.
>Solution
$$
\begin{aligned}
V &= \int_0^{\infty} \pi(\frac{\sqrt x}{\sqrt[3] {x^2+1}})^2 dx = \pi\lim_{t \to \infty}\int_0^t \frac{x}{(x^2+1)^{\frac{2}{3}}} dx\\
&= \pi \lim_{t \to \infty} \frac{1}{2}\int_{u(0)}^{u(t)} u^{-\frac{2}{3}}du &u=x^2+1\\
&= \frac{\pi}{2} \lim_{t \to \infty} (3u^{\frac{1}{3}})\mid_1^{t^2+1}\\
&=\frac{3\pi}{2} \lim_{t \to \infty}(\sqrt[3] {t^2+1} - \sqrt[3] 1) = \infty
\end{aligned}
$$

35–50\. **Integrals with unbounded integrands** Evaluate the following integrals or state that they diverge.
35\. $\dint_0^8 \frac{dx}{\sqrt[3] x}$
>Solution
$$
\begin{aligned}
\int_0^8 \frac{dx}{\sqrt[3] x} &= \lim_{t\to 0^+} \int_t^8 \frac{dx}{\sqrt[3] x}\\
&= \lim_{t\to 0^+} \frac{3}{2}x^{\frac{2}{3}}\mid_t^8\\
&= \frac{3}{2} \lim_{t\to 0^+} (8^{\frac{2}{3}} - t^{\frac{2}{3}}) = \frac{3}{2}(4-0) = 6\\
\end{aligned}
$$

38\. $\dint_{-3}^1 \frac{1}{(2x+6)^{\frac{2}{3}}} dx$
>Solution
$$
\begin{aligned}
\int \frac{1}{(2x+6)^{\frac{2}{3}}} dx &= \frac{1}{2}\int u^{-\frac{3}{2}} du & u=2x+6\\
&= \frac{3}{2}u^{\frac{1}{3}} = \frac{3}{2}\sqrt[3]{2x+6}\\
\int_{-3}^1 \frac{1}{(2x+6)^{\frac{2}{3}}} dx &= \lim_{t \to -3^+}(\frac{3}{2}\sqrt[3]{2x+6})\mid_t^1\\
&= \frac{3}{2}\lim_{t \to -3^+}(\sqrt[3] 8 - \sqrt[3]{2t+6}) = \frac{3}{2}(2-0) = 3
\end{aligned}
$$

39\. $\dint_0^{\frac{\pi}{2}} \sec x \tan x dx$
>Solution
$$
\begin{aligned}
\int_0^{\frac{\pi}{2}} \sec x \tan x dx &= \lim_{t \to \frac{\pi}{2}^-}\int_0^t \sec x \tan x dx\\
&=\lim_{t \to \frac{\pi}{2}^-}(\sec x)\mid_0^t\\
&=\lim_{t \to \frac{\pi}{2}^-}(\sec t - \sec 0) = \infty
\end{aligned}
$$

41\. $\dint_0^1 \frac{e^{\sqrt x}}{\sqrt x} dx$
>Solution
$$
\begin{aligned}
\dint \frac{e^{\sqrt x}}{\sqrt x} dx &= \int 2 du = 2e^{\sqrt x} + C&u=e^{\sqrt x}, du = \frac{e^{\sqrt x}}{2\sqrt x}dx\\
\int_0^1 \frac{e^{\sqrt x}}{\sqrt x} dx &= \lim_{t \to 0^+} (2e^{\sqrt x})\mid_t^1\\
&=\lim_{t \to 0^+} (2e - 2e^{\sqrt t}) = 2e-2
\end{aligned}
$$

43\. $\dint_0^1 \frac{x^3}{x^4-1}dx$
>Solution
$$
\begin{aligned}
\int \frac{x^3}{x^4-1}dx &= \int \frac{1}{4u}du & u=x^4-1, du = 3x^3 dx\\
&= \frac{1}{4} \ln|u| + C = \frac{1}{4} \ln|x^4-1| + C\\
\int_0^1 \frac{x^3}{x^4-1}dx &=\lim_{t \to 1^-} (\frac{1}{4} \ln|x^4-1|)\mid_0^t\\
&=\frac{1}{4}\lim_{t \to 1^-}(\ln|t^4-1| - \ln 1) = -\infty
\end{aligned}
$$

45\. $\dint_0^{10} \frac{dx}{\sqrt[4]{10-x}} dx$
>Solution
$$
\begin{aligned}
\int \frac{dx}{\sqrt[4]{10-x}} dx &=\int(-u^{-\frac{1}{4}})du & u=10-x, du = -dx\\
&= -\frac{4}{3}u^{\frac{3}{4}} + C = -\frac{4}{3}(10-x)^{\frac{3}{4}} + C\\
\dint_0^{10} \frac{dx}{\sqrt[4]{10-x}} dx &= \lim_{t \to 10^-} \lb-\frac{4}{3}(10-x)^{\frac{3}{4}}\rb\mid_0^t\\
&= -\frac{4}{3}\lim_{t \to 10^-} \lb(10-t)^{\frac{3}{4}} - (10-0)^{\frac{3}{4}}\rb\\
&= -\frac{4}{3}(0 - 10^{\frac{3}{4}}) = \frac{4}{3}10^{\frac{3}{4}}
\end{aligned}
$$

49\. $\dint_{-2}^2 \frac{dx}{\sqrt{4-x^2}}$
>Solution
$$
\begin{aligned}
\int \frac{dx}{\sqrt{4-x^2}} &= \arcsin {\frac{x}{2}} + C\\
\int_{-2}^2 \frac{dx}{\sqrt{4-x^2}} &= 2\int_0^2 \frac{dx}{\sqrt{4-x^2}} \\
&=2\lim_{t \to 2^-} (\arcsin \frac{x}{2})\mid_0^t\\
&=2\lim_{t \to 2^-} (\arcsin \frac{t}{2} - \arcsin 0)\\
&=2(\frac{\pi}{2} - 0) = \pi
\end{aligned}
$$

51\. The region bounded by $f(x) = (x-1)^{-\frac{1}{4}}$ and the x-axis on the interval $(1, 2]$ is revolved about the x-axis.
>Solution
$$
\begin{aligned}
V &= \lim_{t \to 1^+} \int_t^2 \pi((x-1)^{-\frac{1}{4}})^2 dx = \pi\lim_{t \to 1^+} \int_t^2 (x-1)^{-\frac{1}{2}}dx\\
&= \pi\lim_{t \to 1^+} (2\sqrt{x-1})\mid_t^2\\
&= \pi\lim_{t \to 1^+} (2 - 2\sqrt{t-1}) = 2\pi
\end{aligned}
$$

58\. Draining a pool Water is drained from a swimming pool at a rate given by $R(t) = 100e^{-0.05t}gal/hr$. If the drain is left open indefinitely, how much water is drained from the pool?
>Solution
$$
\begin{aligned}
\int R(t)dt &= \int 100e^{-0.05t} dt = -2000e^{-0.05t} + C\\
V &=\int_0^{\infty} R(t) dt\\
&= \lim_{t \to \infty} (-2000e^{-0.05t})\mid_0^t\\
&= -2000\lim_{t \to \infty}(\frac{1}{e^{0.05t}} - e^0) = -2000(0-1) = 2000 gal
\end{aligned}
$$

59\. **Maximum distance** An object moves on a line with velocity $v(t)=\frac{10}{(t+1)^2}mi/hr$, for $t\ges 0$. What is the maximum distance the object can travel?
>Solution
$$
\begin{aligned}
\int v(t)dt &= \int \frac{10}{(t+1)^2}dt = -\frac{10}{x+1} +C\\
S &= \int_0^{\infty} v(t)dt\\
&= \lim_{t\to \infty} \lb-\frac{10}{x+1}\rb\mid_0^t\\
&= -10\lim_{t\to \infty}(\frac{1}{t+1} - \frac{1}{0+1}) = -10(0-1) = 10mi
\end{aligned}
$$

62\. **Incorrect calculation** What is wrong with this calculation?
$\dint_{-1}^1 \frac{dx}{x} = \ln|x|\mid_{-1}^1 = \ln 1 - \ln 1 = 0$
>Solution
When $x$ approach $0$ from both side $\frac{1}{x}$ becomes arbitrarily large in magnitude.
$$
\begin{aligned}
\dint_{-1}^1 \frac{dx}{x} = \dint_{-1}^0 \frac{dx}{x} + \dint_0^1 \frac{dx}{x}
\end{aligned}
$$

66–68\. **Integration by parts** Use integration by parts to evaluate the following integrals.
67\. $\dint_0^1 x\ln x dx$
>Solution
$$
\begin{aligned}
u = \ln x, du &= \frac{dx}{x} \quad dv = x dx, v = \frac{x^2}{2}\\
\int x\ln x dx &=\frac{x^2\ln x}{2} - \int \frac{x^2}{2} \cdot \frac{1}{x} dx\\
&= \frac{x^2\ln x}{2} - \frac{x^2}{4}\\
\int_0^1 x\ln x dx &= \lim_{t \to 0+} (\frac{x^2\ln x}{2} - \frac{x^2}{4})\mid_t^1\\
&= \lim_{t \to 0+} (\frac{1^2\ln 1}{2} - \frac{1^2}{4} - \frac{t^2\ln t}{2} + \frac{t^2}{4})\\
&= -\frac{1}{4} - \frac{1}{2}\lim_{t \to 0+} (t^2\ln t)\\
&= -\frac{1}{4} - \frac{1}{2}\lim_{t \to 0+} (\frac{\frac{1}{t}}{\frac{-2}{t^3}}) &\text{L'Hopital's Rule}\\
&= -\frac{1}{4} + \frac{1}{4}\lim_{t \to 0+} (t^2) = -\frac{1}{4}
\end{aligned}
$$

85\. **Average lifetime** The average time until a computer chip fails (see Exercise 84) is $a\dint_0^{\infty} te^{-at} dt, a=0.00005$. Find this value.
>Solution
$$
\begin{aligned}
u=t, du &= dt \quad dv = e^{-at}dt, v = -\frac{1}{a}e^{-at}\\
a\int te^{-at} dt &= -\frac{t}{a}e^{-at} +\int \frac{1}{a}e^{-at}dt\\
&=-\frac{t}{a}e^{-at} - \frac{1}{a^2}e^{-at}\\
&= -\frac{at+1}{a^2e^{at}} + C\\
a\int_0^{\infty} te^{-at} dt &= a\lim_{x \to \infty} (-\frac{at+1}{a^2e^{at}})\mid_0^x\\
&= a\lim_{x \to \infty} (-\frac{ax+1}{a^2 e^{ax}} + \frac{0 + 1}{a^2e^0})\\
&= \frac{1}{a} = \frac{1}{0.00005} = 20000hrs\\
\end{aligned}
$$
