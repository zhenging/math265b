### Math 265A Quiz 4 (Sec 3.6)
1\. Use *Version 1* of the Chain Rule to find $\frac{dy}{dx}$ if $y=\sin^5 x$.
>Solution
$$
\begin{aligned}
u &= \sin x, y=u^5\\
y' &= \frac{dy}{du}  \cdot \frac{du}{dx} \\
&= 5u^4 \cdot \cos x\\
&= 5\sin^4 x \cos x
\end{aligned}
$$

2\. Use *Version 2* of the Chain Rule to find the derivatives but *do not simplify*.
a. $y=\sqrt{10x+1}$
>Solution
$$
\begin{aligned}
y' &= \frac{d}{dx}(10x+1)^{\frac{1}{2}}\\
&= \frac{1}{2}(10x+1)^{-\frac{1}{2}} \cdot \frac{d}{dx}(10x+1)\\
&= \frac{5}{\sqrt{10x+1}}
\end{aligned}
$$

b. $y=(1+2\tan x)^{15}$
>Solution
$$
\begin{aligned}
y' &= 15(1+2\tan x)^{14} \cdot \frac{d}{dx} (1+2\tan x)\\
&= 15(1+2\tan x)^{14} \cdot 2\sec^2 x\\
\end{aligned}
$$

c. $y=\sqrt {x^4+\cos 2x}$
>Solution
$$
\begin{aligned}
y' &= \frac{d}{dx}(x^4+\cos 2x)^{\frac{1}{2}}\\
&= \frac{1}{2}(x^4+\cos 2x)^{-\frac{1}{2}}\cdot \frac{d}{dx}(x^4+\cos 2x)\\
&= \frac{1}{2\sqrt{x^4+\cos 2x}} \cdot (4x^3 -2\sin 2x)
\end{aligned}
$$
