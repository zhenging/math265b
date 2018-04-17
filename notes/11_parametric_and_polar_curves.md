### 11 Parametric and Polar Curves

### 11.3 Calculus In Polar Coordinates
p752

#### Slope of Tangent Lines
The slope of a tangent line-in any coordinate system-is the rate of change of the vertical coordinate $y$ with respect to the horizontal coordinate $x$, which is $dy/dx$.
**First**, writing the polar equation $r=f(\th)$ in parametric form with $\th$ as a parameter.
$$
\begin{aligned}
x = r\cos \th = f(\th)\cos \th \qquad
y = r\sin \th = f(\th)\sin \th
\end{aligned}
$$

**Second**, using the Product Rule to compute $y'(\th)$ and $x'(\th)$, as the derivative $\dfrac{dy}{dx} = \dfrac{y'(\th)}{x'(\th)}$.
$$
\begin{aligned}
\frac{dy}{dx} = \frac{f'(\th)\sin \th + f(\th) \cos \th}{f'(\th)\cos \th - f(\th) \sin \th}
\end{aligned}
$$

>Theorem 11.2 Slope of a Tangent Line
Let f be a differentiable function at $\th_0$. The slope of the line to the curve $r=f(\th)$ at the point $(f(\th_0), \th_0)$ is
$$
\begin{aligned}
\frac{dy}{dx} = \frac{f'(\th_0)\sin \th_0 + f(\th_0) \cos \th_0}{f'(\th_0)\cos \th_0 - f(\th_0) \sin \th_0}
\end{aligned}
$$
provided the denominator is nonzero at the point. At angles $\th_0$ for which $\th_0$ and $f'(\th_0) \ne 0$, the tangent line is $\th = \th_0$ with slope $\tan \th_0$.

Example 1 **Slopes on a Circle**
Find the slopes of the lines tangent to the circle $r=f(\th) = 10$.
>Solution
In this case, $f(\th)$ is constant. Therefore, $f'(\th) = 0, f(\th) \ne 0$, and the slope formula becomes
$$
\begin{aligned}
\frac{dy}{dx} = \frac{f'(\th)\sin \th + f(\th) \cos \th}{f'(\th)\cos \th - f(\th) \sin \th} = -\frac{\cos \th}{\sin \th} = -\cot \th
\end{aligned}
$$

Example 2 **Vertical and horizontal tangent line**
Find the points on the interval $-\pi \les \th \les \pi$ at which the cardioid $r=f(\th) = 1-\cos \th$ has a vertical or horizontal
tangent line.
>Solution
Applything Theorem 11.2, we find that
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{f'(\th)\sin \th + f(\th) \cos \th}{f'(\th)\cos \th - f(\th) \sin \th} \\
&= \frac{\sin \th \sin \th + (1-\cos \th)\cos \th}{\sin\th \cos\th-(1-\cos\th)\sin \th}\\
&= -\frac{(2\cos \th + 1)(\cos \th -1)}{\sin \th(2\cos \th -1)}
\end{aligned}
$$
1\. The points with a horizontal line satify $dy/dx = 0$ and occur where the numerator is zero and the denominator is nonzero. The numerator is zero when $\th = 0, \pm \dfrac{2\pi}{3}$. Because the denominator is not zero when $\th = \pm \dfrac{2\pi}{3}$, horizontal lines occur at $\th = \pm \dfrac{2\pi}{3}$.
2\. Vertical tangent line occurs where the numberator of $dy/dx$ is nonzero, and the denominator is zero.The denominator is zero when $\th = 0, \pm \pi, \pm \dfrac{\pi}{3}$ and the numberator is not zero when $\th = \pm \pi, \pm \dfrac{\pi}{3}$. Therefore. vertical tangent line occur at $\th = \pi, \pm \dfrac{\pi}{3}$.
3\. The point $(0, 0)$ on the curve must be handled carefully because both the numberator and the denominator of $dy/dx$ equals $0$ at $\th = 0$. Notice that with $f(\th) = 1-\cos \th$, we have $f(0) = f'(0) = 0$. Therefore, $dy/dx$ may be computed as a limit using l'Hopital's Rule. As $\th \to 0^+$, we find that
$$
\begin{aligned}
\frac{dy}{dx} &= \lim_{\th \to 0^+}\lb-\frac{(2\cos \th + 1)(\cos \th -1)}{\sin \th(2\cos \th -1)}\rb\\
&= \lim_{\th \to 0^+}\frac{4\cos \th \sin \th - \sin \th}{-2\sin^2 \th + 2\cos^2 \th -\cos \th}\\
&= \frac{0}{1} = 0
\end{aligned}
$$
4\. A similar calculation using l'Hopital's Rule shows that as $\th \to 0^-$, $dy/dx \to 0$. Therefore, the curve has a slope of $0$ at $(0, 0)$.

#### Area of Regions Bounded by Polar Curves

EXAMPLE 3 **Area of a polar region**
Find the area of the four-leaf rose $r = f(\th) = 2 \cos 2\th$.
>Solution
Todo
