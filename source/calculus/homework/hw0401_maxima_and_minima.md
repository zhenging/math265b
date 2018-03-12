### Section 4.1 Maxima and Minima
pg237: 5, 13, 16, 21, 27, 29, 35, 39, 42, 45, 53, 59, 65, 77, 79

 5\. Sketch the graph of a function $f$ that has an absolute maximum, a local minimum, but no absolute minimum on $[0, 3]$.
 >Solution
Graph (5).

11-14\. **Absolute maximum/minimum values from graphs** Use the following graphs to identify the points (if any) on the interval $[a, b]$ at which the function has an absolute maximum value or an absolute minimum value.
13\. Graph (13).
 >Solution
 The graph has an absolute minimum value at point $x=a$, and had no absolute maximum value.

15-18\. **Local and absolute extreme values** Use the following graphs to identify the points on the interval $[a, b]$ at which the local and absolute extreme value occur.
16\. Graph (16).
>Solution
The local maxima occurs at points $x=p, r$.
The local minima occurs at points $x=q, s$.
The absolute maximum occurs at points $x=p$.
The absolute minimum occurs at points $x=a$.

19-22\. **Designing a function**  Sketch the graph of a continuous function $f$ on $[0, 4]$ satisfying the given properties.
21\. $f'(1)$ and $f'(3)$ are undefined; $f'(2) = 0$; $f$ has a local maximum at $x=1$;  $f$ has a local minimum at $x=2$;  $f$ has an absolute maximum at $x=3$; and  $f$ has an absolute  minimum at $x=4$;
 >Solution
 Graph (21).

23-36\. **Locating critical points**
a. Find the critical points of the following functions on the domain or on the given interval.
b. Use a graphing utility to determine whether each critical point corresponds to a local maximum, local minimum, or neither.
27\. $f(x) = 3x^3 + \dfrac{3x^2}{2}- 2x$ on $[-1, 1]$
>Solution
$$
\begin{aligned}
f'(x) &= 9x^2+3x-2\\
&= (3x+2)(3x-1)\\
f'(x) &= 0 \To x=-\frac{2}{3}, \frac{1}{3}
\end{aligned}
$$
a. The critical points are $x=-\frac{2}{3}, \frac{1}{3}$.
b. According to graphing utility, there is a local maximum at $x=-\frac{2}{3}$, and there is a local minimum at $x=\frac{1}{3}$.

<!-- pagebreak -->
29\. $f(x) = \dfrac{x}{x^2+1}$
>Solution
$$
\begin{aligned}
f'(x) &= \frac{1\cdot (x^2+1) - x\cdot(2x)}{(x^2+1)^2}\\
&= \frac{1-x^2}{(x^2+1)^2}\\
f'(x) &= 0 \To 1-x^2=0 \To x=\pm 1
\end{aligned}
$$
a. The critical points are $x=\pm 1$.
b. According to graphing utility, there is a local maximum at $x=1$, and there is a local minimum at $x=-1$.

35\. $f(x) = x^2\sqrt{x+1}$ on $[-1, 1]$
>Solution
$$
\begin{aligned}
f'(x) &= 2x\cdot \sqrt{x+1} + x^2 \cdot \frac{1}{2\sqrt{x+1}}\\
&= \frac{4x(x+1) + x^2}{2\sqrt {x+1}}\\
&= \frac{x(5x+4)}{2\sqrt{x+1}}\\
f'(x) &= 0 \To x(5x+4) \To x=0, -\frac{4}{5}
\end{aligned}
$$
a. The critical points are $x=0, -\frac{4}{5}$.
b. According to graphing utility, there is a local maximum at $x=-\frac{4}{5}$, and there is a local minimum  at $x=0$.

37-50\. **Absolute maxima and minima**
a. Find the critical points of $f$ on the given interval.
b. Determine the absolute extreme values of $f$ on the given interval when they exist.
c. Use a graphing utility to confirm your conclusions.
39\. $f(x) = \cos^2 x$ on $[0, \pi]$
>Solution
$$
\begin{aligned}
f'(x) &= 2\cos x \cdot (-\sin x) = -\sin {2x}\\
f'(x) &= 0 \To 2x=k\pi \To x=\frac{\pi}{2} &\text{where k is an integer.}\\
f(\frac{\pi}{2}) &= \cos^2 (\frac{\pi}{2}) = 0\\
f(0) &= \cos^2 (0) = 1^2=1\\
f(\pi) &= \cos^2 (\pi) = (-1)^2=1
\end{aligned}
$$
a. The critical point is $x=\dfrac{\pi}{2}$.
b. The absolute maximum occurs at $x=0, \pi$ and $f(x) = 1$; the absolute minimum occurs at $x=\dfrac{\pi}{2}$ and $f(x) = 0$.
c. Graph (39c).

42\. $f(x) =  x^{\frac{2}{3}}$ on $[-8, 8]$
>Solution
$f'(x) = \dfrac{2}{3} \cdot x^{-\frac{1}{3}}= \dfrac{2}{3\sqrt[3]{x}}$
a. $f'(x)$ does not have a horizontal line. However, it is undefined when $x=0$. The critical point is $x=0$.
b. $f(0) = 0, f(-8) = 4, f(8) = 4$. The absolute maximum occurs at $x=\pm 8$ and $f(x) = 4$; the absolute minimum occurs at $x=0$ and $f(x) = 0$.
c. Graph (42c).

45\. $f(x) =  x^2 + \cos^{-1} x$ on $[-1, 1]$
>Solution
$$
\begin{aligned}
f'(x) &=2x-\frac{1}{\sqrt{1-x^2}} \\
f'(x) &=0 \\
2x&=\frac{1}{\sqrt{1-x^2}}\\
4x^2&=\frac{1}{1-x^2} &\text{x>0}\\
4x^2(1-x^2) &= 1\\
4x^4-4x^2+1&=0\\
(2x^2-1)^2&=0 \To x= \pm \frac{\sqrt 2}{2}\\
&\because x>0\\
&\therefore x=\frac{\sqrt 2}{2}\\
\end{aligned}
$$
a. The critical points is $x=\frac{\sqrt 2}{2}$.
b. $f(\frac{\sqrt 2}{2}) = \frac{1}{2} + \frac{\pi}{4},  \; f(-1) = 1 + \pi, \; f(1) = 1$. The absolute maximum occurs at $x=-1$ and $f(-1) = 1+\pi$; the absolute minimum occurs at $x=1$ and $f(1) = 1$.
c. Graph (45c).

53\. **Maximizing profit** Suppose a tour guide has a bus that holds a maximum of 100 people. Assume his profit (in dollars) for taking $n$ people on a city tour is $P(n)=n(50-0.5n) - 100$. (Although $P$ is defined only for positive integers, treat it as c continuous function).
a. How many people should the guide take on a tour to maximize the profit?
>Solution
We want to determine the absolute maximum of function $P(n)=n(50-0.5n) - 100 = -0.5n^2 + 50n-100$, where $n \in [0, 100]$.
$$
\begin{aligned}
P'(n) = -n+50 \\
P'(n) = 0 \To n=50\\
P(0) = -100 \quad P(45) = 1137.5 \quad P(50) = 1150 \quad P(100) = -100
\end{aligned}
$$
To make a maximum profit, the tour guide should take $50$ people.

b. Suppose the bus holds a maximum of 45 people. How many people should be taken on a tour to maximize the profit?
>Solution
To make a maximum profit, the tour guide should take $45$ people.

56-63\. **Absolute maximum and minima**
a. Find the critical points of $f$ on the given interval
b. Determine the absolute extreme values of $f$ on the given interval.
c. Use a graphing utility to confirm your conclusions.
59\. $f(x) = \sec x$; $[-\pi/4, \pi/4]$
>Solution
$$
\begin{aligned}
f'(x) &= \sec x \tan x=0 \To \tan x = 0 \To x= 0\\
f(-\pi/4) &= \sqrt 2 \quad f(\pi/4) = \sqrt 2 \quad f(0) = 1\\
\end{aligned}
$$
a. The critical point is $x=0$.
b. The absolute maximum occurs at point $x=\pm \frac{\pi}{4}$ and $f(x) = \sqrt 2$; the absolute minimum occurs at point $x=0$ and $f(x) = 1$.
c. Graph (59c).

64-67\. **Critical points of functions with unknown parameters** Find the critical points of $f$. Assume $a$ is a constant.
65\. $f(x) = x\sqrt{x-a}$
>Solution
$$
\begin{aligned}
f'(x) &= \sqrt{x-a} + x\cdot \frac{1}{2\sqrt{x-a}} = \frac{3x-2a}{2\sqrt{x-a}}\\
f'(x) &= 0 \To 3x-2a=0 \To x = \frac{2a}{3}
\end{aligned}
$$
The domain of $f(x)$ is $x\mid x > a$.
case #1: If $a < 0$, $\frac{2a}{3} > a$, then $x=\frac{2a}{3}$ is in its domain. Thus the critical point is $x=\frac{2a}{3}$.
case #2: If $a > 0$, $\frac{2a}{3} < a$, then $x=\frac{2a}{3}$ is not in its domain.

<!-- pagebreak -->
77\. **Every second counts** You must get from a point P on the straight shore of a lake to a stranded swimmer who is $50m$ from a point $Q$ on the short that is $50m$ from you (see figure). If you can swim at a speed of $2m/s$ and run at a speed of $4m/s$, at what point along the shore, $x$ meters from $Q$, should you stop running and star swimming if you want to reach the swimmer in the minimum time?
a. Find the function $T$ that gives the travel time as a function of $x$, where $0 \les x \les 50$.
>Solution
Let the point, at which you start to swim, be $O$,  and the point of the swimmer be the point $A$, it follows that
$$
\begin{aligned}
OP = 50-x &\To t_{run} = \frac{50-x}{4} &\text{Running time}\\
AO = \sqrt{50^2 + x^2} &\To t_{swim} = \frac{\sqrt{2500 + x^2}}{2} &\text{Swimming time}\\
T &=  t_{run} + t_{swim}\\
&= \frac{50-x}{4} + \frac{\sqrt{2500 + x^2}}{2}
\end{aligned}
$$

b. Find the critical point of $T$ on $(0, 50)$.
>Solution
$$
\begin{aligned}
T' &= -\frac{1}{4} + \frac{1}{2\cdot 2\sqrt{2500 + x^2}} \cdot 2x\\
&= \frac{x}{\sqrt{4x^2+10000}} - \frac{1}{4} = 0\\
&\frac{x}{\sqrt{4x^2+10000}} = \frac{1}{4}\\
&16x^2 = 4x^2+10000\\
&x^2=\frac{2500}{3}\\
&\because 0 \les x \les 50\\
&\therefore x=\frac{50\sqrt 3}{3}
\end{aligned}
$$
The critical point is $x=\frac{50\sqrt 3}{3}$.

c. Evaluate $T$ at the critical point and the endpoints ($x=0$ and $x=50$) to verify that the critical point corresponds to an absolute minimum. What is the minimum travel time?
>Solution
$$
\begin{aligned}
T(0) &= \frac{50-0}{4} + \frac{\sqrt {2500+0}}{2} = \frac{75}{2} = 37.5\\
T(50) &= \frac{50-50}{4} + \frac{\sqrt {2500+50^2}}{2} = 25\sqrt 2 \approx 35.6\\
T(\frac{50\sqrt 3}{3}) &= \frac{50-\frac{50\sqrt 3}{3}}{4} + \frac{\sqrt {2500+(\frac{50\sqrt 3}{3})^2}}{2} = \frac{25}{2} + \frac{25}{2}\sqrt 3 \approx 34.2
\end{aligned}
$$
The minimum travel time is approximately $34.2s$ and occurs at point $x=\frac{50\sqrt 3}{3}$.

d. Graph the function $T$ to check your work.
>Solution
Graph(77d).

79\. **Values of related functions** Suppose $f$ is differentiable on $(-\infty, \infty)$ and assume it has a local extreme value at the point $x=2$, where $f(2)=0$. Let $g(x) = xf(x) + 1$ and let $h(x) = xf(x) + x + 1$, for all values of $x$.
a. Evaluate $g(2), h(2), g'(2)$ and $h'(2)$.
>Solution
As $f$ is differentiable everywhere and has a local extrema at point $x=2$, it follows that $f'(2) = 0$.
$$
\begin{aligned}
g(2) &= 2 \cdot 0 + 1 = 1\\
h(2) &= 2 \cdot 0 + 2 + 1 = 3\\
g'(x) &= f(x) + xf'(x) &\To g'(2)=0+2\cdot 0 = 0\\
h'(x) &= f(x) + xf'(x) + 1 &\To h'(2)= 0+2\cdot 0 + 1 = 1
\end{aligned}
$$

b. Does either $g$ or $h$ have a local extreme value at $x=2$? Explain.
>Solution
$h$ does not have a local extrema at point $x=2$, since $h'(2) \ne 0$. $g$ might have a local extrema at point $x=2$, since $g'(2)=0$.
