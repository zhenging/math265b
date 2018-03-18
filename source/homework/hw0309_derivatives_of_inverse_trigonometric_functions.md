### Section 3.9 Derivatives of Inverse Trigonometric Functions
pg216: 5, 7, 11, 15, 19, 20, 23, 27, **33**, 39, 42, 45, 47, **53**, 59, 65

5\. Suppose $f$ is a one-to one function with $f(2)=8$ and $f'(2)=4$, what is the value of $(f^{-1})'(8)$?
>Solution
$(f^{-1})'(8) = \frac{1}{f'(2)} = \frac{1}{4}$

7-12\. **Derivatives of inverse sine** Evaluate the derivative of the following functions.
7\. $f(x)={\sin^{-1} 2x}$
>Solution
$f'(x) = \dfrac{1}{\sqrt{1-4x^2}} \cdot 2 = \dfrac{2}{\sqrt{1-4x^2}}$

11\. $f(x)={\sin^{-1} (e^{-2x})}$
>Solution
$$
\begin{aligned}
f'(x) &= \frac{1}{\sqrt{1-(e^{-2x})^2}} \cdot \frac{d}{dx}(e^{-2x}) \\
&= \frac{-2e^{-2x}}{\sqrt{1-e^{-4x}}}\\
&= \frac{-2}{\sqrt{e^{4x}-1}}
\end{aligned}
$$

13-30\. **Derivatives** Evaluate the derivative of the following functions.
15\. $f(y)={\tan^{-1} (2y^2-4)}$
>Solution
$$
\begin{aligned}
f'(y) &= \frac{1}{1 + (2y^2-4)^2} \cdot \frac{d}{dy}(2y^2-4)\\
&= \frac{4y}{1+(2y^2-4)^2}
\end{aligned}
$$

19\. $f(x)={\cos^{-1} (1/x)}$
>Solution
$$
\begin{aligned}
f'(x) &= -\frac{1}{\sqrt {1-(1/x)^2}} \cdot \frac{d}{dx}(\frac{1}{x})\\
&= -\frac{-\frac{1}{x^2}}{\sqrt {1-(1/x)^2}}\\
&= \frac{1}{\sqrt{x^4-x^2}}
\end{aligned}
$$

20\. $f(t)=(\cos^{-1} t)^2$
>Solution
$$
\begin{aligned}
f'(t) &= 2(\cos^{-1} t) \cdot \frac{-1}{\sqrt{1-t^2}}\\
&= -\frac{2\cos^{-1} t}{\sqrt{1-t^2}}
\end{aligned}
$$

23\. $f(y)={\cot^{-1} (\frac{1}{y^2+1})}$
>Solution
$$
\begin{aligned}
f'(y) &= \frac{-1}{1 + (\frac{1}{y^2+1})^2} \cdot \frac{d}{dy}(\frac{1}{y^2+1})\\
&= \frac{-1}{1 + (\frac{1}{y^2+1})^2} \cdot \frac{-2y}{(y^2+1)^2}\\
&= \frac{2y}{y^4+2y^2 + 2}
\end{aligned}
$$

27\. $f(x) = {\csc^{-1} ({\tan e^x})}$
>Solution
$$
\begin{aligned}
f'(x) &= -\frac{1}{|\tan e^x|\sqrt{(\tan e^x)^2-1}} \cdot \frac{d}{dx}({\tan e^x})\\
&= \frac{-\sec^2 e^x \cdot e^x}{|\tan e^x|\sqrt{(\tan e^x)^2-1}}
\end{aligned}
$$

31-34\. **Tangent Line** Find an equation of the line tangent to the graph of $f$ at the give point.
33\. $f(x) = {\cos^{-1} x^2}; (1/\sqrt 2, \pi/3)$
>Solution
$$
\begin{aligned}
f'(x) &= -\frac{1}{\sqrt {1-x^4}} \cdot 2x = -\frac{2x}{\sqrt {1-x^4}}\\
m_{tan} &= f'(1/\sqrt 2) = -\frac{2 \cdot (1/\sqrt 2)}{\sqrt {1-(1/\sqrt 2)^4}} = -\frac{2\sqrt {2}}{\sqrt 3}\\
f(1/\sqrt 2) &= {\cos^{-1} (1/\sqrt 2)^2} = \frac{\pi}{3}
\\
&\text{The equation is}\\
y-\frac{\pi}{3} &= -\frac{2\sqrt {2}}{\sqrt 3}(x-1/\sqrt 2) \text{ or } y= -\frac{2\sqrt {2}}{\sqrt 3}x+\frac{2}{\sqrt 3} + \frac{\pi}{3}
\end{aligned}
$$

37-42\. **Derivatives of inverse functions at a point.** Find the derivative of the inverse of the following functions at the specified point on the graph of the inverse function. You do not need to find $f^{-1}$.
39\. $f(x) = -5x+4; (-1, 1)$
>Solution
$$
\begin{aligned}
f'(x) &= -5\\
(f^{-1})'(-1) & = \frac{1}{f'(1)} = -\frac{1}{5}
\end{aligned}
$$

42\. $f(x) = x^2-2x-3; \text{ for } x \les 1; (12, -3)$
>Solution
$$
\begin{aligned}
f'(x) &= 2x-2\\
(f^{-1})'(12) & = \frac{1}{f'(-3)} = -\frac{1}{8}
\end{aligned}
$$

43-46\. **Slope of the tangent lines** Given the function $f$, find the slope of line tangent to the graph of $f^{-1}$ at the specified point on the graph of $f^{-1}$.
45\. $f(x) = (x+2)^2; (36, 4)$
>Solution
$$
\begin{aligned}
f'(x) &= 2x+4 \\
(f^{-1})'(36) & = \frac{1}{f'(4)} = \frac{1}{12}
\end{aligned}
$$

47-50\. **Derivatives and inverse functions.**
47\. Find $(f^{-1})'(3) \text{ if } f(x) = x^3+x+1$
>Solution
$$
\begin{aligned}
f(x) &= x^3+x+1 = 3 \To x=1\\
f'(x) &= 3x^2+1\\
(f^{-1})'(3) &=\frac{1}{f'(1)} = \frac{1}{4}
\end{aligned}
$$

52-55\. **Graphing $f$ and $f'$**
a. Graph $f$ with a graphing utility.
b. Compute and graph $f'$
c. Verify that the zeros of $f'$ correspond to points at which $f$ has a horizontal line.
53\. $f(x) = (x^2-1){\sin^{-1} x} \text{ on } [-1, 1]$
>Solution
a. Graph (53a).
b. Graph (53b). $f'(x) = 2x{\sin^{-1} x} + \dfrac{x^2-1}{\sqrt{1-x^2}}$
c. $f'(x) = 2x{\sin^{-1} x} + \dfrac{x^2-1}{\sqrt{1-x^2}} = 0 \To x \approx \pm 0.61$

57-64\. **Derivatives of inverse function.** Consider the following function (on the given interval, if specified). Find the inverse function, express it as a function of $x$, and find the derivative of the inverse function.
59\. $f(x) = x^2-4, \text{for }x>0$.
>Solution
Let $y=f(x)$, it follows that $x=\pm \sqrt{y+4}$. As $x>0$, $x=\sqrt{y+4}$. Thus $f^{-1}(x) = \sqrt{x+4}$.
$$
\begin{aligned}
(f^{-1})'(x) &= \frac{1}{2\sqrt {x+4}} \cdot 1 = \frac{1}{2\sqrt {x+4}}
\end{aligned}
$$

65\. **Towing a boat.** A boad is towed toward a dock by a cable attached to a winch that stands 10 feet above the water level. (See figure). Let $\th$ by the angle of elevation of the winch and let $\ell$ be the length of the cable as the boat is towed toward the dock.
a. Show that the rate of change of $\th$ with respect to $\ell$ is $\dfrac{d\th}{d\ell} = \dfrac{-10}{\ell\sqrt{\ell^2-100}}$
>Solution
From the figure, we have $\sin \th = \frac{10}{\ell}, \cos \th = \frac{\sqrt {\ell^2-100}}{\ell}$ and $\th \in (0, \frac{\pi}{2})$.
$$
\begin{aligned}
\sin \th &= \frac{10}{\ell} \\
\frac{d\th}{d\ell}(\sin \th) &= (\frac{d\th}{d\ell}\frac{10}{\ell})\\
\cos \th \cdot \frac{d\th}{d\ell} &= -\frac{10}{\ell^2}\\
\frac{d\th}{d\ell} &= -\frac{10}{\ell^2 \cos \th}\\
\frac{d\th}{d\ell} &= \frac{-10}{\ell\sqrt{\ell^2-100}}
\end{aligned}
$$

b. Compute $\dfrac{d\th}{d\ell}$ when $\ell=50, 20, 11ft$.
>Solution
$$
\begin{aligned}
\frac{d\th}{d\ell} \lvert_{50} = \frac{-10}{50 \cdot \sqrt{50^2-100}} \approx -0.004\\
\frac{d\th}{d\ell} \lvert_{20} = \frac{-10}{20 \cdot \sqrt{20^2-100}} \approx -0.029\\
\frac{d\th}{d\ell} \lvert_{11} = \frac{-10}{11 \cdot \sqrt{11^2-100}} \approx -0.198
\end{aligned}
$$

c. Find $\dlim_{\ell \to 10^+}{\dfrac{d\th}{d\ell}}$, and explain what is happening as the last foot of cable is reeled in (note that the boat is at the dock when $\ell = 10$).
>Solution
$$
\begin{gathered}
\lim_{\ell \to 10^+}{\dfrac{d\th}{d\ell}} = \lim_{\ell \to 10^+}(\frac{\overbrace{-10}^{\text{negative constant}}}{\underbrace{\ell\sqrt{\ell^2-100}}_{\text{positive and approaches 0}}}) = -\infty\\
\text{The angle changed very quickly as we approach the dock}.
\end{gathered}
$$

d. It is evident from the figure that $\th$ increases as the boat is towed toward the docker. Why, then, is $\dfrac{d\th}{d\ell}$ negative?
>Solution
$\dfrac{d\th}{d\ell}$ is measuring the change in $\th$ as $\ell$ increases. When the boat is approaching the dock, $\ell$ is decreases and $\th$ is increaseing.
