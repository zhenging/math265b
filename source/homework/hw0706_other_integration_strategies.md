### Section 7.6 Other Integration Strategies
p546: 6, 13, 17, 31, 47, 49

5–22\. **Table lookup integrals** Use a table of integrals to determine the following indefinite integrals.
6\. $\dint \sin 3x \cos 2x dx$  &emsp; Hint: 48. $\dint \sin mx \cos nx dx = -\frac{\cos (m+n)x}{2(m+n)} - \frac{\cos (m-n)x}{2(m-n)} + C; m^2 \ne n^2$)
>Solution
$\dint \sin 3x \cos 2x dx = -\dfrac{\cos 5x}{10} - \dfrac{\cos x}{2} + C$

13\. $\dint \dfrac{xdx}{\sqrt {4x+1}}$ &emsp; Hint: 94. $\dint \frac{x}{\sqrt {ax+b}}dx = \frac{2}{3a^2}(ax-2b)\sqrt {ax+b} + C$
>Solution
$\dint \dfrac{xdx}{\sqrt {4x+1}} = \frac{1}{24}(4x-2)\sqrt {4x+1} + C$

17\. $\dint \dfrac{dx}{(16+9x^2)^{\frac{3}{2}}}$ &emsp; Hint: 84. $\dint \frac{dx}{(a^2 + x^2)^{\frac{3}{2}}}= \frac{x}{a^2\sqrt{a^2+x^2}} + C$
>Solution
$$
\begin{aligned}
\int \dfrac{dx}{(16+9x^2)^{\frac{3}{2}}} &= \frac{1}{3} \int \dfrac{du}{(16+u^2)^{\frac{3}{2}}} & u=3x, du = 3dx\\
&= \frac{1}{3} \cdot \frac{3x}{16\sqrt{16+9x^2}} + C
\end{aligned}
$$

23–38\. **Preliminary work** Use a table of integrals to determine the following indefinite integrals. These integrals require preliminary work, such as completing the square or changing variables, before they can be found in a table.
31\. $\dint \dfrac{e^x dx}{\sqrt {e^{2x}+4}}$
>Solution
$$
\begin{aligned}
\int \frac{e^x dx}{\sqrt {e^{2x}+4}} &= \int \frac{du}{\sqrt {u^2+4}} & u = e^x\\
&= \ln(u+\sqrt{u^2+4}) + C = \ln(e^x+\sqrt{e^{2x}+4}) + C\\
\end{aligned}
$$

47–54\. **Indefinite integrals** Use a computer algebra system to evaluate the following indefinite integrals. Assume that a is a positive real number.
47\. $\dint \dfrac{xdx}{\sqrt {2x+3}}$
>Solution
$\dint \dfrac{xdx}{\sqrt {2x+3}} = \frac{1}{3}(x-3)\sqrt {2x+3} + C$

49\. $\int \tan^2 3x dx$
>Solution
$\int \tan^2 3x dx = \frac{1}{3}\tan 3x - x + C$
