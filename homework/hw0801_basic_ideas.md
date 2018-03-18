### Section 8.1 Basic Ideas
p580: 1, 4, 5, 6, 9, 11, 13, 15, 19, 25, 28, 29, 35a, 47, 51abc, 53abcd, 55abc

1\. What is the order of $y''(t) + 9y(t) = 10$?
>Solution
The order of $y''(t) + 9y(t) = 10$ is 2.

4\. If the general solution of a differential equation is $y(t) = Ce^{-3t} + 10$, what is the solution that satisfies the initial condition $y(0) = 5$?
>Solution
$y(t) = -5e^{-3t} + 10$

5\. Does the function $y(t) = 2t$ satisfy the differential equation $y'''(t) + y'(t) = 2$?
>Solution
$y'(t) = 2, y''(t) = 0, y'''(t) = 0 \To y'''(t) + y'(t) = 0 + 2 = 2$

6\. Does the function $y(t) = 6e^{-3t}$ satisfy the initial value problem $y'(t) -3y(t) = 0, y(0) = 6$?
>Solution
The function does not satisfy the initial value problem.
$$
\begin{aligned}
y'(t) &= -18e^{-3t}\\
y'(t) -3y(t) &= -18e^{-3t} - 3 \cdot 6e^{-3t} = -36e^{-3t}
\end{aligned}
$$

7–10\. **Verifying general solutions** Verify that the given function y is a solution of the differential equation that follows it. Assume that $C$ is an arbitrary constant.
9\. $y(t)= C_1 \sin 4t + C_2 \cos 4t; y''(t) + 16y(t) = 0$
>Solution
$$
\begin{aligned}
y'(t) &= 4C_1 \cos 4t - 4C_2 \sin 4t\\
y''(t) &= -16C_1 \sin 4t - 16C_2 \cos 4t\\
y''(t) + 16y(t) &= -16C_1 \sin 4t - 16C_2 \cos 4t + 16(C_1 \sin 4t + C_2 \cos 4t)\\
&=0
\end{aligned}
$$

11–14\. **Verifying solutions of initial value problems** Verify that the given function y is a solution of the initial value problem that follows it.
11\. $y(t) =  16e^{2t}-10; y'(t) - 2y(t) = 20, y(0) = 6$
>Solution
$$
\begin{aligned}
y'(t) &= 32e^{2t}\\
y'(t) - 2y(t) &= 32e^{2t} - 2(16e^{2t}-10) = 20\\
y(0) &= 16e^{0}-10 = 6
\end{aligned}
$$

13\. $y(t) = -3 \cos 3t; y''(t) + 9y(t) = 0, y(0) =-3, y'(0) = 0$
>Solution
$$
\begin{aligned}
y'(t) &= 9\sin 3t\\
y''(t) &= 27\cos 3t\\
y''(t) + 9y(t) &= 27\cos 3t +9\cdot (-3 \cos 3t) = 0\\
y(0) &= -3 \cos 0 = -3\\
y'(0) &= 9\sin 0 = 0
\end{aligned}
$$

15–22\. **Finding general solutions** Find the general solution of each differential equation. Use $C, C_1, C_2 \cdot$ to denote arbitrary constants.
15\. $y'(t) = 3 + e^{-2t}$
>Solution
$y=\dint y'(t)dt = -\dfrac{1}{2}e^{-2t} + 3t + C$

19\. $y''(t) = 60t^4 - 4 + 12t^{-3}$
>Solution
$$
\begin{aligned}
y'(t) &= \int y''(t)dt = 12t^5 - 4t -6t^{-2} + C_1\\
y(t) &= \int y(t)dt = 2t^6 - 2t^2 + 6t^{-1} + C_1 t + C_2
\end{aligned}
$$

23–28\. **Solving initial value problems** Solve the following initial value problems.
25\. $y'(x) = 3x^2 - 3x^{-4}, y(1)= 0$
>Solution
$$
\begin{aligned}
y(x) &= \int y'(x)dx = x^3 + x^{-3} + C\\
y(1) &= 1^3 + 1^{-3} + C = 0 \To C = 0
\end{aligned}
$$

28\. $u''(x) = 4e^{2x} - 8e^{-2x}, u(0) = 1, u'(0) = 3$
>Solution
$$
\begin{aligned}
u'(x) &= \int u''(x)dx = 2e^{2x} + 4e^{-2x} + C_1\\
u(x) &= \int u'(x)dx = e^{2x} - 2e^{-2x} + C_1 x + C_2\\
&\begin{gathered}
u'(0) = 2e^0 + 4e^0 + C_1 = 3\\
u(0) = e^0 - 2e^0 + 0 + C_2 = 1
\end{gathered} \To
\begin{cases}
C_1 = -3\\
C_2 = 2
\end{cases}
\end{aligned}
$$

29-30\. **Motion in a gravitational field** An object is fired vertically upward with an initial velocity $v(0) = v_0$ from an initial position $s(0) = s_0$.
a. For the following values of $v_0$ and $s_0$, find the position and velocity functions for all times at which the object is above the ground.
b. Find the time at which the highest point of the trajectory is reached
and the height of the object at that time.
29\. $v_0 = 29.4m/s, s_0 = 30m$
>Solution
$$
\begin{aligned}
a &= -9.8m/s^2\\
v(t) &= \int_0^t a dt + v_0 = at + v_0\\
&= -9.8t + 29.4\\
s(t) &= \int_0^t v dt + s_0 = \frac{1}{2}at^2 + v_0 t + s_0\\
&= -4.9t^2 + 29.4t + 30
\end{aligned}
$$

35\. **Explain why or why not** Determine whether the following statements are true and give an explanation or counterexample.
a. The general solution of the differential equation $y'(t) = 1$ is
$y(t) = t$.
>Solution
The general solution is $y(t) = t + C$, where $C$ is a constant.

44–49\. **Verifying general solutions** Verify that the given function is a solution of the differential equation that follows it.
47\. $u(t) = C_1 t^2 + C_2 t^3; t^2u''(t)-4t u'(t) + 6u(t) = 0$
>Solution
$$
\begin{aligned}
u'(t) = 2C_1 t + 3C_2 t^2 &\qquad u''(t) = 2C_1 + 6C_2 t\\
t^2u''(t)-4t u'(t) + 6u(t) &= t^2(2C_1 + 6C_2 t) - 4t(2C_1 t + 3C_2 t^2) + 6(C_1 t^2 + C_2 t^3)\\
&= 2C_1t^2 - 8C_1t^2 + 6C_1t^2 + 6C_2t^3 + 6C_2t^3 - 12C_2t^3\\
&=0
\end{aligned}
$$

51\. **Another second-order equation** Consider the differential equa tion $y''(t) + k^2y(t) = 0$, where $k$ is a positive real number.
a. Verify by substitution that when $k = 1$, a solution of the equation is $y(t) = C_1 \sin t + C_2 \cos t$. You may assume that this function is the general solution.
>Solution
$$
\begin{aligned}
y'(t) & = C_1 \cos t - C_2 \sin t\\
y''(t) & = -C_1 \sin t - C_2 \cos t\\
y''(t) + k^2y(t) &= -C_1 \sin t - C_2 \cos t + 1^2 (C_1 \sin t + C_2 \cos t) = 0
\end{aligned}
$$

b. Verify by substitution that when $k = 2$, the general solution of the equation is $y(t) = C_1 \sin 2t + C_2 \cos 2t$.
>Solution
$$
\begin{aligned}
y'(t) & = 2C_1 \cos 2t - 2C_2 \sin 2t\\
y''(t) & = -4C_1 \sin 2t - 4C_2 \cos 2t\\
y''(t) + k^2y(t) &= -4C_1 \sin 2t - 4C_2 \cos 2t + 2^2 (C_1 \sin 2t + C_2 \cos 2t) = 0
\end{aligned}
$$

c. Give the general solution of the equation for arbitrary $k > 0$ and verify your conjecture.
>Solution
The general solution appears to be $y(t) = C_1 \sin kt + C_2 \cos kt$.
$$
\begin{aligned}
y'(t) & = kC_1 \cos kt - kC_2 \sin kt\\
y''(t) & = -k^2C_1 \sin kt - k^2C_2 \cos kt\\
y''(t) + k^2y(t) &= -k^2C_1 \sin kt - k^2C_2 \cos kt + k^2 (C_1 \sin kt + C_2 \cos kt) = 0
\end{aligned}
$$

53\. **Logistic population growth** Widely used models for population growth involve the logistic equation $P'(t) = rP(1-\frac{P}{K})$, where $P(t)$ is the population, for $t\ges 0$, and $r>0$ and $K>0$ are given constants.
a. Verify by substitution that the general solution of the equationis $P(t) = \dfrac{K}{1+Ce^{-rt}}$, where $C$ is an arbitrary constant.
>Solution
$$
\begin{aligned}
P'(t) & = \frac{-K}{(1+Ce^{-rt})^2} \cdot \frac{d}{dt} (1 +Ce^{-rt})\\
&= \frac{-K \cdot (-rCe^{-rt})}{(1+Ce^{-rt})^2}\\
&= \frac{rCKe^{-rt}}{(1+Ce^{-rt})^2}\\
rP(1-\frac{P}{K}) &= r\cdot \frac{K}{1+Ce^{-rt}} \cdot (1-\frac{K}{K(1+Ce^{-rt})})\\
&= \frac{rK}{1+Ce^{-rt}} \cdot \frac{Ce^{-rt}}{1+Ce^{-rt}}\\
&= \frac{rCKe^{-rt}}{(1+Ce^{-rt})^2} = P'(t)
\end{aligned}
$$

b. Find that value of $C$ that corresponds to the initial condition $P(0) = 50$.
>Solution
$$
\begin{aligned}
P(0) &= \frac{K}{1+Ce^0} = \frac{K}{1 + C} = 50 \To C = \frac{K}{50} -1
\end{aligned}
$$

c. Graph the solution for $P(0) = 50, r=0.1$, and $K = 300$.
>Solution
>Graph (53c).

d. Find $\dlim_{t\to \infty} P(t)$ and check that the result is consistent with the graph in part c.
>Solution
$$
\begin{aligned}
\lim_{t \to \infty} \frac{K}{1+Ce^{-rt}} &= \lim_{t \to \infty} \frac{300}{1+Ce^{-0.1t}}\\
& = 300 \lim_{t \to \infty} \frac{1}{1+Ce^{-0.1t}}\\
& = 300 \cdot \frac{1}{1+0} = 300
\end{aligned}
$$

55\. **Chemical rate equations** The reaction of certain chemical compounds can be modeled using a differential equation of the form $y'(t) = -ky^n(t)$, where $y(t)$ is the concentration of the compound for $t\ges 0, k>0$ is a constant that determines the speed of the reaction, and $n$ is a positive integer called the order of the reaction. Assume that the initial concentration of the compound is $y(0) = y_0 > 0$.
a. Consider a first-order reaction $(n = 1)$ and show that the solution of the initial value problem is $y(t) = y_0 e^{-kt}$.
>Solution
$$
\begin{aligned}
y'(t) &= -ky_0 e^{-kt} \quad y(0) = y_0 e^0 = y_0
\end{aligned}
$$

b. Consider a second-order reaction $(n = 2)$ and show that the solution of the initial value problem is $y(t) = \dfrac{y_0}{y_0 kt + 1}$.
>Solution
$$
\begin{aligned}
y'(t) &= \frac{-y_0}{(y_0 kt +1)^2} \cdot \frac{d}{dx}(y_0 kt +1)\\
&= \frac{-y_0^2k}{(y_0 kt +1)^2}\\
-ky^n(t) &= -k y^2(t) = \frac{-k \cdot y_0^2}{(y_0 kt +1)^2} = y'(t)\\
y(0) &= \frac{y_0}{y_0 \cdot 0 + 1} = y_0
\end{aligned}
$$

c. Let $y_0 = 1, k = 0.1$. Graph the first-order and second-order solutions found in parts (a) and (b). Compare the two reactions.
>Solution
>Graph (55c).
