### 2.1 The Idea of Limits

#### Average Velocity

**Example 1 Average Velocity**
A rock is lauched vertically upward from the ground with a speed of $96ft/s$. Neglecting air resistance, a well-known formula from physics states that position of the rock after $t$ seconds is give by the function $s(t) = -16t^2 + 96t$. The position $s$ is measured in feet with $s=0$ corresponding to the ground. Find the average velocity of the rock between each pair of times.
a. $t=1s$ and $t=3s$
b. $t=1s$ and $t=2s$
>**Solution**
a. $32ft/s$ &emsp; b. $48ft/s$

#### Instantaneous Velocity

**Example 2 Instantaneous Velocity**
Estimate the *instantaneous velocity* of the rock in Example 1 at the single point $t = 1s$.
>**Solution**
$$
\eqalign{
v_{av} &= \frac{s(t) - s(1)}{t - 1} \\
v_{inst} & = \lim_{t \to 1}{v_{av}} \\
&= \lim_{t \to 1}{\frac{s(t) - s(1)}{t - 1}} \\
& = 64ft/s \\
}
$$

#### Slope of the Tangent Line
Several import conclusion follow from Example 1 and 2. Specifically, as $t$ approaches 1, two things happen:
1. The secant line approach a unique line called the **tangent line**.
2. The slopes of the secant lines $m_{sec}$ approach the slope of the tangent line $m_{tan}$. Thus, the slope of the tangent line is also expressed as a limit:
$$
m_{tan} = \lim_{t \to 1}{m_{sec}} = \lim_{t \to 1}{\frac{s(t) - s(1)}{t - 1}} = 64
$$

This limit is the same limit that defines the instantaneous velocity. Therefore, the instantaneous velocity at $t=1$ is the slope of the line tangent to the position curve at $t=1$.
