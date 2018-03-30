---
date: 03/21/2018
---

### Math 265A Quiz 7 (Sec 4.2)
Given the function $f(x) = 1+x^2\ln(x^2)$:
a. State its domain.
b. Find its derivative.
c. Determine what the critical numbers are, if any.
d. Create the $1^{st}$ derivative sign diagram.
>Solution
a. The domain is $(-\infty, 0) \cup (0, \infty)$.
b.
$$
\begin{aligned}
f'(x) &= \frac{d}{dx} (x^2) \cdot \ln (x^2) + x^2 \cdot \frac{d}{dx} [\ln (x^2)]\\
&= 2x \ln(x^2) + x^2 \cdot \frac{1}{x^2} \cdot \frac{d}{dx}(x^2)\\
&= 2x \ln(x^2) + 2x\\
&= 2x (\ln(x^2) + 1)
\end{aligned}
$$
c. The critical points occur where $f'(x) = 0$ or $f'(0)$ does not exist. Within the domain of $f(x)$, $f'(0)$ is defined everywhere. Thus, we only consider the case $f'(x) = 0$.
$$
\begin{aligned}
f'(x) &= 2x (\ln(x^2) + 1) = 0\\
&\To \begin{cases}
x = 0 &\text{Not in the domain}\\
\ln(x^2) + 1 = 0 \To x = \pm \sqrt{\dfrac{1}{e}}
\end{cases}
\end{aligned}
$$
The critical number are $x=\pm \sqrt{\dfrac{1}{e}}$.
d. Sign Chart of $f'(x)$
$$
\begin{aligned}
(-\infty, -\sqrt{\frac{1}{e}}) \quad f'(x) <0\\
(-\sqrt{\frac{1}{e}}, 0) \quad f'(x) >0\\
(0, \sqrt{\frac{1}{e}}) \quad f'(x) <0\\
(\sqrt{\frac{1}{e}}, \infty) \quad f'(x) >0\\
\end{aligned}
$$
![Graph](../assets/quiz07_sign_chart.png)
