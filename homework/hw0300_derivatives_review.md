### Section 3.0 Derivatives Review
p229: 21, 23, 27, 31, 44
15–36\. **Evaluating derivatives** Evaluate and simplify the following derivatives.
21\. $\dfrac{d}{du}(\dfrac{4u^2+u}{8u+1})$
>Solution
$$
\begin{aligned}
\frac{d}{du}(\frac{4u^2+u}{8u+1}) &= \frac{(8u+1)\cdot \frac{d}{du}(4u^2+u) - (4u^2+u)\cdot \frac{d}{du}(8u+1)}{(8u+1)^2}\\
&=\frac{(8u+1)(8u+1)-8(4u^2+u)}{(8u+1)^2}\\
&=\frac{32u^2+8u+1}{(8u+1)^2}\\
\end{aligned}
$$

23\. $\dfrac{d}{d\th}(\tan (\sin \th))$
>Solution
$\dfrac{d}{d\th}(\tan (\sin \th)) = \sec^2 (\sin \th) \cdot \cos \th$

27\. $\dfrac{d}{dx}(x\ln^2 x)$
>Solution
$$
\begin{aligned}
\frac{d}{dx}(x\ln^2 x) &= \frac{d}{dx}(x)\cdot \ln^2 x + x\cdot \frac{d}{dx}(\ln^2 x)\\
&=\ln^2 x + x\cdot 2\ln x \cdot \frac{d}{dx}(\ln x)\\
&=\ln^2 x + 2\ln x
\end{aligned}
$$

31\. $\dfrac{d}{dx}\lb\sin^{-1} \dfrac{1}{x}\rb$
>Solution
$$
\begin{aligned}
\frac{d}{dx}\lb\sin^{-1} \frac{1}{x}\rb &= \frac{1}{\sqrt {1-\frac{1}{x^2}}} \cdot \frac{d}{dx}(\frac{1}{x})\\
&= \frac{1}{\sqrt {1-\frac{1}{x^2}}} \cdot (-\frac{1}{x^2})\\
&=- \frac{1}{\sqrt{x^4-x^2}}
\end{aligned}
$$

41–44\. **Tangent lines** Find an equation of the line tangent to the following curves at the given point.
44\. $x^2y+y^3=75; (x, y)=(4, 3)$
>Solution
$$
\begin{aligned}
\frac{d}{dx}(x^2y+y^3) &= \frac{d}{dx}(75) \\
2xy + x^2 y' + 3y^2 y' &=0 \To y' = -\frac{2xy}{x^2+3y^2}\\
y' \mid_{x=4, y=3} &= -\frac{2\cdot 4\cdot 3}{4^2+3\cdot 3^2} = -\frac{24}{43}
\end{aligned}
$$
The equation of the tangent line is $y-3=-\frac{24}{43}(x-4) \text{ or } y= -\frac{24}{43}x + \frac{225}{43}$
