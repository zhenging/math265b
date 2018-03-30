---
date: 03/14/2018
---

### Math265B Group 4

1\. A model that describes the free fall of an object subject to resistance uses the euqation $v'(t) = g-bv$ where $v(t)$ is the velocity of the object for $t\ges 0, g=9.8m/s^2$, and $b>0$ is a constance that involves the mas of the object the air resistance. Let $b=0.1s^{-1}$.
a. What is the equilibrium solution?
>Solution
The equilibrium solution happens at $v'(t) = 0$.
$$
\begin{aligned}
v'(t) &= g-bv=0 \\
\To &v = \frac{g}{b} = \frac{9.8}{0.1}=98m/s
\end{aligned}
$$

b. Use a calculator or web application to look at a slope field for $0 \les t \les 60, 0 \les v \les 150$ to help determine for what initial values $v(0)$ the solutions are decreasing and for what initial values $v(0)$ the solution are increasing.
>Solution
[Graph (1b)](https://www.geogebra.org/graphing/cVQHAjjf).
When $v(0) \in [0, 98)$, the solutions are increasing; when $v(0) \in (98, 150]$, the solutions are decreasing.

2\. The Gompertz growth equation is often used to mode the growth of tumors. Let $M(t)$ be the mass of a tumer at $t\ges 0$. The relevant initial value problem is $\dfrac{dM}{dt} = -rM\ln(\dfrac{M}{K})$, $M(0) = M_0$ where $r$ and $K$ are positive constants, $0 < M_0 < K$. Solve this initial value differential equation analytically for $r=1, K=4, M_0 = 1$. What is the limiting size of the tumer in this case.
>Solution
$$
\begin{aligned}
\frac{dM}{dt} &= -rM\ln(\frac{M}{K})\\
\frac{dM}{dt} \cdot \frac{1}{M\ln(\frac{M}{K})} & = -r\\
\int \frac{1}{M\ln(\frac{M}{K})} dM& = \int (-r)dt\\
\int \frac{1}{u} du& = \int (-r)dt & u= \ln(\frac{M}{K}), du = \frac{1}{M}dM\\
\ln|u| &= -rt + C &\text{C is a constant.}\\
u &= \pm e^{-rt + C}\\
\ln(\frac{M}{K}) &= \pm e^{-rt + C}\\
\ln(\frac{M}{K}) &= \pm e^C \cdot e^{-rt}\\
\ln(\frac{M}{K}) &= C \cdot e^{-rt} & \pm e^C \text{is a constant too.}\\
\frac{M}{K} &= e^{Ce^{-rt}}\\
M &= K\cdot (e^{C})^{e^{-rt}}\\
M &= K(C)^{e^{-rt}} & e^C \text{is a constant too.}\\
M &= 4(C)^{e^{-t}} & K=4, r=1
\end{aligned}
$$
When $t=0, M(0) = M_0 = 1$, we have $M(0) = 4(C)^{e^0} = 4C^1 = 1 \To C = \frac{1}{4}$. Thus $M = 4(\frac{1}{4})^{e^{-t}} = 4^{1-\frac{1}{e^t}}$.
$$
\begin{aligned}
\lim_{t \to \infty} M &= \lim_{t \to \infty} 4^{1-\frac{1}{e^t}}\\
\lim_{t \to \infty}(1-\frac{1}{e^t}) &= 1-0 = 1\\
\lim_{t \to \infty} M &= 4^1 = 4
\end{aligned}
$$
