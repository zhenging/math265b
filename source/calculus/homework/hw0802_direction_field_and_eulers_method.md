### Section 8.2 Direction Field and Eulers Method
p585: **Part 1**: In general, when it asks for direction field/slope field, you can use technology and you do not need to copy entire slope fields on paper. However, do include any specific solution curves requested. 2, 5, 7 (give a justification for each choice on #7), 11, 13, 15 (on #13 and 15 do three mini “slopes” by hand -- then use technology to finish. On paper show the three mini tangents and the requested solution curve), 17, 21, 23, 41, 42, 46, 48. **Part 2**: 3, 4, By hand: 25, 27, 28 Technology: 31, 33

2\. Consider the differential equation $y'(t) = t^2 - 3y^2$ and the solution curve that passes through the point $(3, 1)$. What is the slope of the curve at $(3, 1)$?
>Solution
The slope is $y'(3) = 3^2 - 3\cdot 1^2 = 6$.

3\. Consider the differential equation $y'(t) = t^2 - 3y^2, y(3) = 1$. What is the approximation to $y(3.1)$ given by Eulers method with a time step of $\Delta t=0.1$.
>Solution
$$
\begin{aligned}
y(3.1) &\approx y(3) + y'(3) \cdot \Delta t \\
&= 1 + (3^2-3) \cdot 0.1 = 1.6
\end{aligned}
$$

4\. Give a geometrical explanation of how Euler's method works.
>Solution
$$
\begin{aligned}
\end{aligned}
$$

5–6\. **Direction fields** A differential equation and its direction field are shown in the following figures. Sketch a graph of the solution curve that passes through the given initial conditions.
5\. $y'(t) = \dfrac{t^2}{y^2 + 1}, y(0) = -2, y(-2) = 0$.
>Solution
>Graph (5).

7\. **Matching direction fields** Match equations a–d with direction fields A–D.
a. $y'(t) = \dfrac{t}{2}$ &emsp; b. $y'(t) = \dfrac{y}{2}$ &emsp; c. $y'(t) = \dfrac{t^2 + y^2}{2}$ &emsp; d. $y'(t) = \dfrac{y}{t}$
>Graph (7)
>Solution

9–11\. **Direction fields with technology** Plot a direction field for the following differential equation with a graphing utility. Then find the solutions that are constant and determine which initial conditions $y(0) = A$ lead to solutions that are increasing in time.
11\. $y'(t) =t(y-1), 0 \les t \les 2, 0 \les y \les 2$

12–16\. **Sketching direction fields** Use the window $[-2, 2] \times [-2, 2]$ to sketch a direction field for the following equations. Then sketch the solution curve that corresponds to the given initial condition. A detailed direction field is not needed.
13\. $y'(t) = 4-y, y(0) = -1$
>Solution

15\. $y'(x) = \sin x, y(-2) =2$
>Solution

17–20\. **Increasing and decreasing solutions** Consider the following differential equations. A detailed direction field is not needed.
a. Find the solutions that are constant, for all $t\ges 0$ (the equilibrium solutions).
b. In what regions are solutions increasing? Decreasing?
c. Which initial conditions $y(0) = A$ lead to solutions that are increasing in time? Decreasing?
d. Sketch the direction field and verify that it is consistent with parts (a)–(c).
17\. $y'(t) = (y - 1)(1 + y)$

21–24\. **Logistic equations** Consider the following logistic equations, for $t\ges 0$. In each case, sketch the direction field, draw the solution curve for each initial condition, and find the equilibrium solutions. A detailed direction field is not needed. Assume $t\ges 0$ and $P\ges 0$.
21\. $P'(t) = 0.05P(1-\dfrac{P}{500}); P(0)=100, 400, 700$

23\. $P'(t) = 0.02P(4-\dfrac{P}{800}); P(0)=1600, 2400, 4000$

25–28\. **Two steps of Euler's method** For the following initial value problems, compute the first two approximations $u_1$ and $u_2$ given by Euler's method using the given time step.
25\. $y'(t)=2y, y(0) = 2; \Delta t = 0.5$

27\. $y'(t)=2-y, y(0) = 1; \Delta t = 0.1$

28\. $y'(t)=t+y, y(0) = 4; \Delta t = 0.5$

29–32\. **Errors in Euler's method** Consider the following initial value problems.
a. Find the approximations to $y(0.2)$ and $y(0.4)$ using Euler's method with time steps of $\Delta t = 0.2, 0.1, 0.05$, and $0.025$.
b. Using the exact solution given, compute the errors in the Euler approximations at $t = 0.2$ and $t = 0.4$.
c. Which time step results in the more accurate approximation? Explain your observations.
d. In general, how does halving the time step affect the error at $t = 0.2$ and $t = 0.4$
31\. $y'(t) = 4-y, y(0)=3; y(t) = 4-e^{-t}$


38–43\. **Equilibrium solutions** A differential equation of the form $y'(t) = f(y)'$ is said to be autonomous (the function f depends only on y). The constant function $y = y_0$ is an equilibrium solution of the equation provided $f(y_0) = 0$ (because then $y'(t) = 0$ and the solution remains constant for all $t$). Note that equilibrium solutions correspond to horizontal lines in the direction field. Note also that for autonomous equations, the direction field is independent of $t$. Carry out the following analysis on the given equations.
a. Find the equilibrium solutions.
b. Sketch the direction field, for $t\ges 0$.
c. Sketch the solution curve that corresponds to the initial condition $y(0) = 1$.
41\. $y'(t) = y(y-3)$

42\. $y'(t) = \sin y$

46\. **Drug infusion** The delivery of a drug (such as an antibiotic) through an intravenous line may be modeled by the differential equation $m'(t) + km(t) = I$, where $m(t)$ is the mass of the drug in the blood at time $t\ges 0$, $k$ is a constant that describes the rate at which the drug is absorbed, and $I$ is the infusion rate. Let $I = 10 mg/hr$ and $k = 0.05 hr^{-1}$.
a. Draw the direction field, for $0 \les t \les 100, 0 \les y \les 600$.
b. What is the equilibrium solution?
c. For what initial values $m(0) = A$ are solutions increasing? Decreasing?

48\. **Chemical rate equations** Consider the chemical rate equations $y'(t) = -ky(t)$ and $y'(t) = -ky^2 (t)$, where $y(t)$ is the concentration of the compound for $t\ges 0, k>0$ is a constant that determines the speed of the reaction. Assume that the initial concentration of the compound is $y(0) = y_0 > 0$.
a. Let $k = 0.3$ and make a sketch of the direction fields for both equations. What is the equilibrium solution in both cases?
b. According to the direction fields, which reaction approaches its equilibrium solution faster?
