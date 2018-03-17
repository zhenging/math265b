### Section 2.1 The Idea of Limits
pg59: 3, 4, 7, 11,14, 17, 19, 23, 31

1\. Suppose $s(t)$ is the position of an object moving along a line at time $t \ges 0$. What is the average velocity between the times $t = a$ and $t = b$?
>Solution
$v_{av} = \dfrac{s(b)-s(a)}{b-a}$

3\. What is the slope of the secant line between the points $(a, f(a))$ and $(b, f(b))$
>Solution
Let $m_{sec}$ be the slope of the secant line, $m_{sec} = \dfrac{f(b) - f(a)}{b-a}$.

4\. Describe a process for finding the slope of the line tangent to the graph of $f$ at $(a, f(a))$
>Solution
The slope of the tangent line at point $(a, f(a))$ is determined by computing the slopes of secant lines passing through $(x, f(x))$ and $(a), f(a)$. As $x$ approaches $a$, the slope of the secant line typically approaches a unique number, which is the slope of the tangent line at point $(a, f(a))$.

5\. Describe the parallels between finding the instantaneous velocity of an object at a point in time and finding the slope of the line tangent to the graph of a function at a point on the graph.
>Solution
Both problems involves the same mathematics, namely finding the limits as $t\to a$ of a quotient of differences of the form $\dfrac{f(b)-f(a)}{b-a}$.

7\. **Average velocity** The function $s(t)$ represents the position of an object at time $t$ moving along a line. Suppose $s(2) = 136$  and $s(3) = 156$. Find the average velocity of the object over the interval of time $[2, 3]$.
>Solution
Let $v_{avg}$ be the average velocity, $v_{avg} = \frac{s(3) - s(2)}{3-2} = \frac{156 - 136}{1} = 20$.

9\. **Average velocity** The position of an object moving along a line is given by the function $s(t) = -16t^2 + 128t$. Find the average velocity of the object over the following intervals.
a. [1, 4] &emsp; b. [1, 3]
c. [1, 2] &emsp; d. [1, 1+h], where $h\ge 0$ is a real number.
>Solution
a. $v_{av} = \dfrac{s(4)-s(1)}{4-1} = 48$
a. $v_{av} = \dfrac{s(3)-s(1)}{3-1} = 64$
a. $v_{av} = \dfrac{s(2)-s(1)}{2-1} = 80$
a. $v_{av} = \dfrac{s(1+h)-s(1)}{h+1-1} = TODO$

11\. **Average velocity** The table gives the position $s(t)$ of an object moving along a line  at time $t$, over a two-second interval. Find the average velocity of the object over the following intervals.
a. $[0, 2]$ &emsp; b. $[0, 1.5]$ &emsp; c. $[0, 1]$ &emsp; d. $[0, 0.5]$
| t    | 0 | 0.5 |  1 | 1.5 | 2  |
|------|---|-----|----|-----|----|
| s(t) | 0 | 30  | 52 | 66  | 72 |
>Solution
a. $\displaystyle v_{avg} = \frac{s(2) - s(0)}{2-0} = \frac{72 - 0}{2} = 36$
b. $\displaystyle v_{avg} = \frac{s(1.5) - s(0)}{1.5-0} = \frac{66 - 0}{1.5} = 44$
c. $\displaystyle v_{avg} = \frac{s(1) - s(0)}{1-0} = \frac{52 - 0}{1} = 52$
d. $\displaystyle v_{avg} = \frac{s(0.5) - s(0)}{0.5-0} = \frac{30 - 0}{0.5} = 60$

13\. Average velocity Consider the position function $s(t) = -16t^2 + 100t$ representing the position of an object moving along a line. Sketch a graph of s with the secant line passing through $(0.5, s(0.5))$ and $(2, s(2))$. Determine the slope of the secant line and explain its relationship to the moving object.
>Solution
Graph (13). The slope of the secant line representsthe average velocity of the object over the time interval $[0.5, 2]$.
$m_{sec} = \dfrac{s(2)-s(0.5)}{2-0.5} = 60$

14\. **Average velocity** Consider the position function $s(t) = \sin \pi t$ representing the position of an object moving along a line. Sketch a graph of s with the secant line passing through $(0, s(0))$ and $(0.5, s(0.5))$. Determine the slope of the secant line and explain its relationship to the moving object.
>Solution
Let $m_{sec}$ be the slope of the secant line passing through $(0.5, s(0.5))$ and $(2, s(2))$
$$
\begin{aligned}
m_{sec} &= \frac{s(0.5) - s(0)}{0.5 - 0} \\
& = \frac{\sin 0.5\pi - \sin 0}{0.5} \\
& = (1-0)\cdot 2 = 2
\end{aligned}
$$

17\. **Instantaneous velocity** The following table gives the position $s(t)$ of an object moving along a line at time $t$. Determine the average velocity over the time intervals $[1, 1.01]$, $[1, 1.001]$, and $[1, 1.0001]$. Then make a conjecture about the value of the instantaneous velocity at $t=1$.
| t    | 1  | 1.0001      |  1.001    | 1.01    |
|------|----|-------------|-----------|---------|
| s(t) | 64 | 64.00479984 | 64.047984 | 64.4784 |
>Solution
1. average velocity over $[1, 1.01]$,  $\displaystyle v_{avg1.01} = \frac{s(1.01) - s(1)}{1.01-1} = \frac{64.4784 - 64}{0.01} = 47.84 $
2. average velocity over $[1, 1.001]$, $\displaystyle v_{avg1.001} = \frac{s(1.001) - s(1)}{1.001-1} = \frac{64.047984 - 64}{0.001} = 47.984$
3. average velocity over $[1, 1.0001]$, $\displaystyle v_{avg1.0001} = \frac{s(1.0001) - s(1)}{1.0001-1} = \frac{64.00479984 - 64}{0.0001} = 47.9984$
4. The instantaneous velocity at $t=1$ is approximately $48$.

19\. **Instantaneous velocity** Consider the position function $s(t) = -16t^2 + 100t$. Complete the following table with the appropriate average velocity. Then make a conjecture about the value of the instantaneous velocity at $t=3$.
| Time Interval | Average velocity |
|---------------|------------------|
| [2, 3]        |  20              |
| [2.9, 3]      |  5.6             |
| [2.99, 3]     |  4.16            |
| [2.999, 3]    |  4.016           |
| [2.9999, 3]   |  4.0016          |
>Solution
$$
\begin{aligned}
s(2) &= -16 \cdot 4 + 100 \cdot 2 &= 136 \\
s(2.9) &= -16 \cdot (2.9)^2 + 100 \cdot 2.9 &= 155.44 \\
s(2.99) &= -16 \cdot (2.99)^2 + 100 \cdot 2.99 &= 155.9584 \\
s(2.999) &= -16 \cdot (2.999)^2 + 100 \cdot 2.999 &= 155.995984 \\
s(2.9999) &= -16 \cdot (2.9999)^2 + 100 \cdot 2.9999 &= 155.99959984 \\
s(3) &= -16 \cdot 9 + 100 \cdot 3 &= 156
\end{aligned}
$$
The instantaneous velocity at $t=3$ is approximately 4.

23\. **Instantaneous velocity** For the following position functions, make a table of average velocities similar to those in Exercise *19-20* and make a conjecture about the instantaneous velocity at the indicated time.
$s(t) = 40\sin 2t$ at $t=0$
>Solution
| Time Interval | Average velocity |
|---------------|------------------|
| [0, 1]        | 36.37            |
| [0, 0.1]      | 79.4677          |
| [0, 0.01]     | 79.9947          |
| [0, 0.001]    | 79.9999          |
 The instantaneous velocity at $t=0$ is approximately 80.

31\. **Zero velocity** A projectile is fired vertically upward and has a position given by $s(t) = -16t^2 + 128t + 192$, for $0 \les t \les  9$.
a. Graph the position function for $0 \les t \les  9$
b. From the graph of the position function, identify the time at which the projectile has an intantaneous velocity of zero; call this time $t=a$
c. Confirm your answer to a part (b) by making a table of average velocities to approximate at the instantaneous velocity at $t=a$
d. For what values of t on the interval [0,9] is the instantaneous velocity positive (the projectile moves upward)?
e. For what values of t on the interval [0,9] is the instantaneous velocity negative(the projectile moves downward)?
>Solution
a. Graph (31a).
b. The graph of the function has a horizontal tangent line at point $(4, 448)$, so $a = 4$
c.
$$
\begin{aligned}
s(4) &= -16 \cdot (4)^2 + 128 \cdot 4 + 192 = 448 \\
s(4.1) &= -16 \cdot (4.1)^2 + 128 \cdot 4.1 + 192 = 447.84 \\
s(4.01) &= -16 \cdot (4.01)^2 + 128 \cdot 4.01 + 192 = 447.9984 \\
s(4.001) &= -16 \cdot (4.001)^2 + 128 \cdot 4.001 + 192 = 447.999984 \\
s(4.0001) &= -16 \cdot (4.0001)^2 + 128 \cdot 4.0001 + 192 = 447.99999984 \\
\end{aligned}
$$
| Time Interval | Average velocity |
|---------------|------------------|
| [4, 4.1]      | -1.6             |
| [4, 4.01]     | -0.16            |
| [4, 4.001]    | -0.016           |
| [4, 4.0001]   | -0.0016          |
d. On the interval $[0, 4)$, the instantaneous velocity is positive.
e. On the interval $(4, 9]$, the instantaneous velocity is negative.
