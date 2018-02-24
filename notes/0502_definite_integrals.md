### 5.2 Definite Integrals

#### Net Area

**Exmaple 1** Interpreting Riemann sums
>Solution
Todo

>**Definition Net Area**
Consider the region $R$ bounded by the graph of a continuous function $f$ and the x-axis between $x=a$ and $x=b$. The net area of $R$ is the sum of the areas of the parts of $R$ that lie above the x-axis minus the sum of the areas of the parts of $R$ that lie below the x-axis on $[a,b]$.

#### The Definite Integral

>**Definition General Riemann Sum**
Suppose $[x_0, x_1], [x_0, x_1], \cdots, [x_{n-1}, x_n]$ are subintervals of $[a, b]$ with
$$
a = x_0 < x_1 < x_2 \cdots < x_{n-1} < x_n = b.
$$
Let $\Delta x_k$ be the length of the subinterval $[x_{k-1}, x_k]$ and let $x^*_k$ be any point in $[x_{k-1}, x_k]$, for $k = 1, 2, \cdots,n$
$$Figure$$
If $f$ is defined on [a, b], the sum
$$
{\sum_{k=1}^n}f(x_k^*){\Delta x_k} = f(x_1^*){\Delta x_1} + f(x_2^*){\Delta x_2} + \cdots + f(x_n^*){\Delta x_n}
$$
is called a general Riemann sum for $f$ on $[a, b]$.

>**Definition Definite Integral**
A function $f$ is integrable on $[a, b]$ if $displaystyle\lim_{{\Delta} \to 0}{\sum_{k=1}^n} = f(x_k^*){\Delta x_k}$ exists and is unique over all partitions of [a, b] and all choices of $x_k^*$ on a partition. This limit is the **definite integral of $f$ from $[a, b]$**, which we write
$$
\int_a^b{f(x)dx}=\lim_{\Delta \to 0}{\sum_{k=1}^n}f(x_k^*){\Delta x_k}
$$

#### Evaluating Definite Integral

>**Theorem 5.2 Integrable Functions**
If $f$ is continuous on $[a, b]$ or bounded on $[a, b]$ with a finite number of discoutinuities, then $f$ is integrable on $[a, b]$.

**Example 2 Identifying the limits of a sum**
Assume that
$$
\lim_{{\Delta} \to 0}{\sum_{k=1}^n}(3x_k^{*2} + 2x_k^* + 1){\Delta x_k}
$$
is the limit of a Riemann sum for a function $f$ on $[1, 3]$. Identify the function $f$ and express the limit as a definite integral. What does the definite integral represent geometrically?
>Solution
By comparing the sum $\displaystyle {\sum_{k=1}^n}f(x_k^*){\Delta x_k}$ , we see that $f(x) = 3x^2 + 2x + 1$. Because $f$ is polynomial, it is continuous on $[1, 3]$ and is, therefore, integrable on $[1, 3]$. It follows that
$$
\lim_{{\Delta} \to 0}{\sum_{k=1}^n}(3x_k^{*2} + 2x_k^* + 1){\Delta x_k} = \int_1^3 {(3x^2 + 2x + 1)}dx.
$$
Because $f$ is positive on $[1,3]$, the definite integral $\dint_1^3 {(3x^2 + 2x + 1)}dx$ is the area of the region bounded by the curve $y = 3x^2 + 2x + 1$ and the x-axis on $[1, 3]$.

**Example 3 Evaluating definite integrals using geometry**
Using familiar area formulas to evaluate the following definite integrals
a. $\dint_2^4 {(2x+3)}dx$
b. $\dint_1^6 {(2x-3)}dx$
c. $\dint_3^4 {\sqrt {1-(x-3)^2}}dx$ <br>
>Solution
a. $18$ b.$5$ c.$\frac{\pi}{4}$

**Example 4** Definite integrals from graphs
>Solution
Todo

#### Properties of Definite Integrals
>**Definition Reversing Limits and Identical Limits**
Suppose $f$ is integrable on $[a, b]$.
$$
\eqalign{
\int_b^a f(x)dx &= -\int_a^b f(x)dx \qquad
\int_a^a f(x)dx &= 0
}
$$

* Integral of a Sum
* Constants in integrals
* Integrals over subintervals
* Integrals of Absolute Values

Let $f$ and $g$ be integrable functions on an interval that contains $a$, $b$, and $c$.
1. $\dint_b^a {f(x)}dx = -\int_a^b {f(x)}dx$

2. $\dint_a^a {f(x)}dx = 0$

3. $\dint_a^b {(f(x) + g(x))}dx = \int_a^b {f(x)}dx + \int_a^b {g(x)}dx$

4. $\dint_a^a {cf(x)}dx = c\int_a^a {f(x)}dx$

5. $\dint_a^b {f(x)}dx = \int_a^c {f(x)}dx + \int_c^b {f(x)}dx$

6. The function $|f|$ is integrable on $[a, b]$ and $\int_a^b {|f(x)|}dx$ is the sum of the areas of the regions bounded by the graph of $f$ and the x-axis on $[a, b]$.

**Example 5** Properties of integrals
Assume that $\dint_0^5 {f(x)}dx = 3$ and $\dint_0^7 {f(x)}dx = -10$. Evaluate the following integrals, if possible
a. $\dint_0^7 {2f(x)}dx$ &emsp; b. $\dint_5^7 {f(x)}dx$ &emsp; c. $\dint_5^0 {f(x)}dx$ &emsp; d. $\dint_7^0 {6f(x)}dx$ &emsp; e. $\dint_0^7 {|f(x)|}dx$

>Solution
a. -20 b. -13 c. -3 d. 60 e. This integral can not be evaluated.

#### Evaluating Definite Integral Using Limits

We know that if $f$ is integrable on $[a, b]$, then $\dint_a^b {f(x)}dx = \lim_{\Delta \to 0}{\sum_{k=1}^n}f(x_k^*){\Delta x_k}$, for any portion of [a, b] and any point $x_k^*$. To simplify these calculations, we use equally spaced grid points and right Riemann sums. That is, for each value of $n$ we let $\displaystyle {\Delta x_k} = {\Delta x} = \frac{b-a}{n}$ and $x_k^* = a +k{\Delta x}$, for $k = 1, 2, \cdots n$. Then , as $n \To \infty$ and $\Delta \To 0$.
$$
\int_a^b {f(x)}dx = \lim_{\Delta \to 0}{\sum_{k=1}^n}f(x_k^*){\Delta x_k} = \lim_{n \to \infty}{\sum_{k=1}^n}f(a+k{\Delta x}){\Delta x}
$$

**Example 6** Evaluating definite integrals
Find the value of $\dint_0^2 {(x^3 + 1)}dx$ by evaluating a right Riemann sum and letting $n \To \infty$.
>Solution
The interval $[a, b] = [0, 2]$ is divided into $n$ subintervals of length $\displaystyle {\Delta x} = \frac{b-a}{n} = \frac{2}{n}$, which produces the grid points
$$
x_k^* = a + k{\Delta x} = 0 + k \cdot \frac{2}{n}, \text{for }k = 1, 2, \cdots, n
$$
Letting $f(x) = x^3 + 1$, the right Riemann sum is
$$
\eqalign{
{\sum_{k=1}^n}f(x_k^*){\Delta x} &= {\sum_{k=1}^n}\lb(\frac{2k}{n})^3 + 1\rb\frac{2}{n} \\
&= \frac{2}{n}{\sum_{k=1}^n}(\frac{8k^3}{n^3} + 1) \\
&= \frac{2}{n}(\frac{8}{n^3}{\sum_{k=1}^n}k^3 + {\sum_{k=1}^n}1) \\
&= \frac{2}{n}\lb\frac{8}{n^3}(\frac{n^2(n+1)^2}{4}) + n \rb \\
&= \frac{4(n^2 + 2n + 1)}{n^2} + 2
}
$$
Now we evaluate $\int_0^2 {x^3 + 1}dx$ by letting $n \To$ in the Riemann sum:
$$
\eqalign{
\int_0^2 {(x^3 + 1)}dx &= \lim_{n \to \infty}{\sum_{k=1}^n}f(x_k^*){\Delta x} \\
&= \lim_{n \to \infty}{\lb {\frac{4(n^2 + 2n + 1)}{n^2} + 2} \rb} \\
&= 4\lim_{n \to \infty}{(\frac{n^2 + 2n + 1}{n^2})} + \lim_{n \to \infty}{2} \\
& = 4(1) + 2 = 6
}
$$
Therefore, $\dint_0^2 (x^3 + 1)dx = 6$
