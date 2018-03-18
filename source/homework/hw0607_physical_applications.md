### Section 6.7 Physical Applications
p458: You may just set up the integrals and not evaluate.  Show a diagram with a coordinate system and representative slice.  Show a Riemann sum on one problem. 5, 6, 27, 28a, 29, 31, 34, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46, 58, 61
$$
\begin{aligned}
\rho & = 1000kg/m^3  &\text{water density}\\
g &= 9.8m/s^2 &\text{gravitational acceleration}
\end{aligned}
$$

5\. Why must integration be used to find the work required to pump water out of a tank?
>Solution
Different volume of water are moved different distance.

6\. Why must integration be used to find the total force on the face of a dam?
>Solution
Water of different depth has different force.

27\. **Emptying a swimming pool** A swimming pool has the shape of a box with a base that measures $25 m$ by $15 m$ and a uniform depth of $2.5 m$. How much work is required to pump the water out of the pool when it is full?
>Solution
$$
\begin{aligned}
A(y)&= 25\cdot 15 = 375,  D(y) = 2.5-y\\
W &= \int_0^{2.5} \rho g A(y) D(y)dy\\
&= 375\rho g \int_0^{2.5} (2.5-y) dy\\
&= 11484375 J
\end{aligned}
$$

28\. **Emptying a cylindrical** tank A cylindrical water tank has height 8 m and radius $2 m$. Graph (28).
a. If the tank is full of water, how much work is required to pump the water to the level of the top of the tank and out of the tank?
>Solution
$$
\begin{aligned}
A(y)&= 4\pi, D(y) = 8-y\\
W &= \int_0^8 \rho g A(y) D(y)dy\\
&= 4\pi \rho g\int_0^8 (8-y) dy\\
&\approx 3940814 J
\end{aligned}
$$

29\. **Emptying a half-full cylinderical tank** Suppose the water tank in Exercise 28 is half-full of water. Determine the work required to empty the tank by pumping the water to a level $2 m$ above the top of the tank.
>Solution
$$
\begin{aligned}
A(y)&= 4\pi, D(y) = 10-y\\
W &= \int_0^4 \rho g A(y) D(y)dy\\
&= 4\pi \rho g \int_0^4 (10-y) dy\\
&\approx 3940814 J
\end{aligned}
$$

31\. **Emptying a conical tank** A water tank is shaped like an inverted cone with height 6 m and base radius $1.5 m$. Graph (31).
a. If the tank is full, how much work is required to pump the water to the level of the top of the tank and out of the tank?
>Solution
$$
\begin{aligned}
A(y)&= \pi(\frac{y}{4})^2,  D(y) = 6-y \\
W &= \int_0^6 \rho g A(y) D(y)dy\\
&= \frac{\pi}{16} \rho g \int_0^6 y^2(6-y) dy\\
&= 66150\pi J
\end{aligned}
$$

b. Is it true that it takes half as much work to pump the water out of the tank when it is filled to half its depth as when it is full? Explain.
>Solution
False. $\dint_0^3 \rho g \pi \frac{y^2}{16} (6-y)dy = \frac{135\rho g \pi}{64}$ and $\dint_3^6 \rho g \pi \frac{y^2}{16} (6-y)dy = \frac{297\rho g \pi}{64}$.

34\. Emptying a water trough A water trough has a semicircular cross section with a radius of $0.25 m$ and a length of $3 m$ (see figure).
a. How much work is required to pump the water out of the trough when it is full?
b. If the length is doubled, is the required work doubled? Explain.
c. If the radius is doubled, is the required work doubled? Explain.
>Solution
$$
\begin{aligned}
A(y)&= 3\cdot 2 \sqrt{0.25^2-(0.25-y)^2}, D(y) = 0.25-y \\
W &= \int_0^{0.25} \rho g A(y) D(y)dy\\
&= 6\rho g\int_0^{0.25} \sqrt{0.25^2-(0.25-y)^2}(0.25-y) dy\\
&= 306.25
\end{aligned}
$$
b. Yes
c. No.

36\. **Pumping water** Suppose the tank in Example 4 is full of water (rather than half-full of gas). Determine the work required to pump all the water to an outlet pipe $15 m$ above the bottom of the tank. Graph (36).
>Solution
$$
\begin{aligned}
A(y)&= 20 \sqrt{25-y^2}, D(y) = 10-y\\
W &= \int_{-5}^5 \rho g A(y) D(y)dy\\
&= 20\rho g \int_{-5}^5 \sqrt{25-y^2}(10-y) dy\\
&\approx 7.70\cdot 10^7 J
\end{aligned}
$$

37\. **Emptying a conical tank** An inverted cone is $2 m$ high and has a base radius of $\frac{1}{2} m$. If the tank is full, how much work is required to pump the water to a level $1 m$ above the top of the tank? Graph (37).
>Solution
$$
\begin{aligned}
A(y)&= \frac{y^2}{16} \pi, D(y) = 3-y\\
W &= \int_0^2 \rho g A(y) D(y)dy\\
&= \frac{\pi}{16}\rho g \int_0^2 y^2(3-y) dy\\
&\approx 7696.9
\end{aligned}
$$

38–41\. **Force on dams** The following figures show the shape and dimensions of small dams. Assuming the water level is at the top of the dam, find the total force on the face of the dam.
38\. Graph (38).
>Solution
$$
\begin{aligned}
w(y) &= 40\\
F &= \int_0^{10} \rho g (10-y) w(y)dy\\
&= 40\rho g \int_0^{10} (10-y)dy
= 1.96 \times 10^7 N
\end{aligned}
$$

40\. Graph (40).
>Solution
$$
\begin{aligned}
w(y) &= 2\sqrt{20^2 - y^2}\\
F &= \int_{-20}^0 \rho g (0-y) w(y) dy\\
&= -2\rho g \int_{-20}^0 y\sqrt{20^2 - y^2} dy
= 5.2267 \times 10^7 N
\end{aligned}
$$

41\. Graph (41).
>Solution
$$
\begin{aligned}
w(y) &= \frac{2}{3}y\\
F &= \int_0^{30} \rho g (30-y) w(y) dy\\
&= \frac{2}{3}\rho g \int_0^{30} y(30-y) dy
= 2.94 \times 10^7 N
\end{aligned}
$$

42\. **Parabolic dam** The lower edge of a dam is defined by the parabola $y = x^2/16$ (see figure). Use a coordinate system with $y = 0$ at the bottom of the dam to determine the total force on the dam. Lengths are measured in meters. Assume the water level is at the top of the dam. Graph (42).
>Solution
$$
\begin{aligned}
w(y) &= 8\sqrt y \\
F &= \int_0^{25} \rho g (25-y) w(y) dy\\
&= 8 \rho g \int_0^{25} \sqrt y(25-y) dy
= 6.53 \times 10^7 N
\end{aligned}
$$

43\. **Force on a building** A large building shaped like a box is $50 m$ high with a face that is $80 m$ wide. A strong wind blows directly at the face of the building, exerting a pressure of $150 N/m^2$ at the ground and increasing with height according to $P(y) = 150 + 2y$, where $y$ is the height above the ground. Calculate the total force on the building, which is a measure of the resistance that must be included in the design of the building. Graph (43).
>Solution
$$
\begin{aligned}
F &= \int_0^{50} P(y) \cdot 80 dy\\
&= 80 \int_0^{50} (2y+150)dy
= 8 \times 10^5
\end{aligned}
$$

44–46\. **Force on a window** A diving pool that is $4 m$ deep and full of water has a viewing window on one of its vertical walls. Find the force on the following windows.
44\. The window is a square, $0.5 m$ on a side, with the lower edge of the window on the bottom of the pool.
>Solution
$$
\begin{aligned}
w(y) &= 0.5 \\
F &= \int_0^{0.5} \rho g (4-y) w(y) dy\\
&= 0.5 \rho g \int_0^{0.5} (4-y) dy
= 9187.5 N
\end{aligned}
$$

45\. The window is a square, $0.5 m$ on a side, with the lower edge of the window 1 m from the bottom of the pool.
>Solution
$$
\begin{aligned}
w(y) &= 0.5 \\
F &= \int_1^{1.5} \rho g (4-y) w(y) dy\\
&= 0.5 \rho g \int_1^{1.5} (4-y) dy
= 6737.5 N
\end{aligned}
$$

46\. The window is a circle, with a radius of $0.5 m$, tangent to the bottom of the pool.
>Solution
$$
\begin{aligned}
w(y) &= 2\sqrt{0.5^2 - (y-0.5)^2} \\
F &= \int_0^1 \rho g (4-y) w(y) dy\\
&= 2 \rho g \int_0^1 (4-y) \sqrt{0.5^2 - (y-0.5)^2} dy
\approx 26939.2 N
\end{aligned}
$$

58\. **Orientation and force** A plate shaped like an equilateral triangle $1 m$ on a side is placed on a vertical wall 1 m below the surface of a pool filled with water. On which plate in the figure is the force greater? Try to anticipate the answer and then compute the force on each plate. Graph (58).
>Solution
$$
\begin{aligned}
\text{case 1:} \quad w_1(y) &= 1-\frac{2y}{\sqrt 3}, h_1= 1 + \frac{\sqrt 3}{2}\\
F_1 &= \int_0^{\frac{\sqrt 3}{2}} \rho g (h_1-y)w_1(y) dy\\
&= \rho g \int_0^{\frac{\sqrt 3}{2}} (1 + \frac{\sqrt 3}{2}-y)(1-\frac{2y}{\sqrt 3}) dy
\approx 6693.5 N\\
\text{case 2:} \quad w_2(y) &= \frac{2y}{\sqrt 3}, h_2= 1 + \frac{\sqrt 3}{2}\\
F_2 &= \int_0^{\frac{\sqrt 3}{2}} \rho g (h_2-y) w_2(y)) dy\\
&= \rho g \int_0^{\frac{\sqrt 3}{2}} (1 + \frac{\sqrt 3}{2}-y) \frac{2y}{\sqrt 3} dy
\approx 5468.5 N\\
\text{Result: } &F_1 \gt F_2
\end{aligned}
$$

61\. **Critical depth** A large tank has a plastic window on one wall that is designed to withstand a force of $90,000 N$. The square window is $2 m$ on a side, and its lower edge is 1 m from the bottom of the tank.
a. If the tank is filled to a depth of 4 m, will the window withstand the resulting force?
b. What is the maximum depth to which the tank can be filled without the window failing?
>Solution
$$
\begin{aligned}
w(y) &= 2\\
F &= \int_1^3 2\rho g (h-y)dy \\
&= 2\rho g (hy-\frac{y^2}{2}) \mid_1^3
\end{aligned}
$$
a. When $h = 4, F = 78400 N$, the windown can withstand the force.
b. To find the maximum depth, we need to solve for $h$.
$$
\begin{aligned}
2\rho g (hy-\frac{y^2}{2}) \mid_1^3 &= 90000 \\
4\times 9800 (h-2) &= 90000\\
h &\approx 4.30m
\end{aligned}
$$
