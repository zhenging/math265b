---
tags: [derivative, trigonometric limits, proof]
page: 161
sectiin: 3.4 Derivatives of Trigonometric Functions
---

### Two Special Limits

>Theorem 3.11 Trigonometric Limits
$\dlim_{x \to 0}{\dfrac{\sin x}{x}} = 1$ &emsp; $\dlim_{x \to 0}{\dfrac{\cos x -1}{x}} = 0$

#### Proof of $\dlim_{x \to 0}{\frac{\sin x}{x}} = 1$
![Graph 1](../assets/theorem0311.png)
Consider Figure, in which $\triangle OAD, \triangle OBC$ and the sector $\overgroup{OAC}$ of unit circle (with central angle $x$) are shown. Observe that $0 \le x \le \pi/2$
$$
\begin{aligned}
\textsf{area of } \triangle OAD &< \textsf{area of } \overgroup{OAC} < \textsf{area of } \triangle OBC \\
\frac{1}{2} OD \cdot AD&< \frac{1}{2} OC^2 \cdot x < \frac{1}{2}OC \cdot BC \\
\cos x \cdot \sin x &< 1^2 \cdot x< 1 \cdot \tan x \\
\cos x &< \frac{x}{\sin x} < \frac{1}{\cos x} \\
\frac{1}{\cos x} &>  \frac{\sin x}{x} > \cos x
\end{aligned}
$$
Because $\dlim_{x \to 0}\cos x = 1 = \dlim_{x \to 0}\dfrac{1}{\cos x}$,  according to the Squeeze Theorem, $\dlim_{x \to 0}{\dfrac{\sin x}{x}} = 1$.

#### Proof of $\dlim_{x \to 0}{\frac{\cos x -1}{x}} = 0$.
$$
\begin{aligned}
\lim_{x \to 0}{\frac{\cos x -1}{x}} &= \lim_{x \to 0}({\frac{\cos x -1}{x}} \cdot \frac{\cos x + 1}{\cos x +1}) \\
&= \lim_{x \to 0}\frac{\cos^2 x - 1}{x(\cos x +1)} \\
&= \lim_{x \to 0}\frac{\sin^2}{x(\cos x + 1)} \\
&= \lim_{x \to 0}\frac{\sin x}{x} \cdot \lim_{x \to 0}\frac{\sin x}{\cos x + 1} \\
&= 1 \times \frac{0}{1+1} = 0
\end{aligned}
$$

#### Examples
a. $\dlim_{x \to 0}{\frac{\sin 4x}{x}}$
>Solution
To use the fact that $\dlim_{x \to 0}{\frac{\sin x}{x}} = 1$, the argument of the sine function in the numerator must bethe same as the denominator. Multiplying and dividing $\dfrac{\sin 4x}{x}$ by 4, we evaluate the limit as follows:
$$
\begin{aligned}
\lim_{x \to 0}{\frac{\sin 4x}{x}}
&= \lim_{x \to 0}{\frac{4\sin 4x}{4x}} &\text{Multiply and divide by 4.} \\
&= 4\lim_{x \to 0}{\frac{\sin 4x}{4x}} &\text{Factor out 4.} \\
&= 4\lim_{t \to 0}{\frac{\sin t}{t}} &\text{Let t=4x; t->0 as x->0.} \\
&= 4(1) = 4 &\text{Theorem 3.11}
\end{aligned}
$$

b. $\dlim_{x \to 0}{\frac{\sin 3x}{\sin 5x}}$
>Solution
The first step is to divide the numerator and denominator of $\dfrac{\sin 3x}{\sin 5x}$ by $x$:
$$
\frac{\sin 3x}{\sin 5x} = \frac{(\sin 3x)/x}{(\sin 5x)/x}
$$
As in part (a), we now divide and multiply $\frac{\sin 3x}{x}$ by $3$, and divide and multiply $\frac{\sin 3x}{x}$ by $5$. in the numerator, we let $t=3x$ and in the denominator, we let $u=5x$. In each case, $t \to 0$ and $u \to 0$ as $x \to 0$. Therefore,
$$
\begin{aligned}
\lim_{x \to 0}{\frac{\sin 3x}{\sin 5x}}
&= \lim_{x \to 0}{\frac{\frac{3\sin 3x}{3x}}{\frac{5\sin 5x}{5x}}} \\
&= \frac{3}{5} \cdot {\frac{\dlim_{t \to 0}{\frac{\sin t}{t}}}{\dlim_{u \to 0}{{\frac{\sin u}{u}}}}} &\text{t=3x in numerator and u=5x in denominator.} \\
& = \frac{3}{5}\cdot\frac{1}{1} =\frac{3}{5}
\end{aligned}
$$
