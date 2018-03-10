### 4.9 Antiderivatives

>Definition Antiderivative
A function $F$ is an **antiderivative** if $f$ on an interval $I$ provided $F'(x)=f(x)$, fo all $x$ in $I$.

#### Thinking backward

>Theorem 4.16 The Family of Antiderivatives
Let $F$ be any antiderivative of $f$ on the interval $I$. Then **all** the antiderivatives of $f$ on $I$ have the form $F + C$, where $C$ is an arbitrary constant.

**Example 1** Finding Antiderivatives Use what you know about derivatives to find all antiderivatives of the following functions.
a. $f(x)=3x^2$ &emsp; b. $f(x)=\dfrac{1}{1+x^2}$ &emsp; c. $f(x) = \sin x$
>Solution
a. $F(x) = x^3 + C$
b. $F(x) = \tan^{-1} x + C$
c. $F(x) = -\cos x + C$

#### Indefinite Integrals
The notation $\dfrac{d}{dx}(f)$ means *take the derivative of* $f$. The notations means *find the antiderivative* of $f$ is **the indefinite integral** $\int f(x)d(x)$. Every time an indefinite integral sing $\int$ appears, it is followed by a function called the **integrand**, which in turn is followed by the differential $dx$.
Using this new notation, the three results of Example 1 are written as
$$
\begin{aligned}
\int 3x^2 dx = x^3 + C \\
\int \frac{1}{1+x^2} dx = \tan^{-1} x + C \\
\int \sin x dx = -\cos x + C
\end{aligned}
$$

>**Theorem 4.17 Power Rule for Indefinite Integrals**
$\int x^p dx = \dfrac{x^{p+1}}{p+1} + C$, where $p \ne -1$ is a real number and C is an arbitrary constant.

>**Theorem 4.18 Constant Multiple and Sum Rules**
**Constant Multiple Rule**: $\int cf(x)dx = c\int f(x)dx$
**Sum Rule**: $\int (f(x)+g(x))dx = \int f(x)dx + \int g(x)dx$

**Example 2** **Indefinite integrals** Determine the following indefinite integrals.
a. $\int (3x^2 + 2 -5x^{-\frac{3}{2}})dx$
b. $\int (\frac{4x^{19} - 5x^{-8}}{x^2})dx$
c. $\int (x^2+1)(2x-5)dx$

#### Indefinite Integrals of Trigonometric Functions

Table 4.9 Indefinite Integrals of Trigonometric Functions
$$
\begin{aligned}
&\frac{d}{dx}\sin ax = a\cos ax &\to \int (\cos ax) dx = \frac{1}{a}\sin ax + C\\
&\frac{d}{dx}\cos ax = -a\sin ax &\to \int (\sin ax) dx = -\frac{1}{a}\cos ax + C\\
&\frac{d}{dx}\tan ax = a\sec^2 ax &\to \int (\sec^2 ax) dx = \frac{1}{a}\tan ax + C\\
&\frac{d}{dx}\cot ax = -a\csc^2 ax &\to \int (\csc^2 ax) dx = -\frac{1}{a}\cot ax + C\\
&\frac{d}{dx}\sec ax = a\sec ax \tan ax&\to \int (\sec ax \tan ax) dx = \frac{1}{a}\sec ax + C\\
&\frac{d}{dx}\csc ax = -a\csc ax \cot ax&\to \int (\csc ax \cot ax) dx = -\frac{1}{a}\csc ax + C\\
\end{aligned}
$$

**Example 3 Indefinite integrals of trigonometric functions** Determine the following indefinite integrals.
a. $\int \sec^2 3xdx$ &emsp; b. $\int \cos \frac{x}{2}dx$
>Solution
a. $\dint \sec^2 3xdx = \frac{1}{3}\tan 3x + C$
b. $\dint \cos \frac{x}{2}dx = 2\sin \frac{x}{2} + C$

#### Other Indefinite Integrals

Table 4.10 Other Definite Integrals
$$
\begin{aligned}
&\frac{d}{dx}(e^{ax}) = ae^{ax} &\to \int e^{ax}dx = \frac{1}{a}e^{ax} + C\\
&\frac{d}{dx}(b^x) = b^{x}\ln b &\to \int b^xdx = \frac{1}{\ln b}b^x + C, b>0, b \ne 1\\
&\frac{d}{dx}\ln |x| = \frac{1}{x} &\to \int \frac{dx}{x} = \ln |x| + C\\
&\frac{d}{dx}[\sin^{-1} \frac{x}{a}] = \frac{1}{\sqrt{a^2-x^2}} &\to \int \frac{dx}{\sqrt{a^2-x^2}} = \sin^{-1} \frac{x}{a} + C\\
&\frac{d}{dx}[\tan^{-1} \frac{x}{a}] = \frac{a}{a^2+x^2} &\to \int \frac{dx}{a^2+x^2} = \frac{1}{a}\tan^{-1} \frac{x}{a} + C\\
&\frac{d}{dx}(\sec^{-1}  |\frac{x}{a}|) = \frac{a}{x\sqrt{x^2-a^2}} &\to \int \frac{dx}{x\sqrt{x^2-a^2}} = \frac{1}{a}\sec^{-1} |\frac{x}{a}| + C\\
\end{aligned}
$$

**Example 4 Indefinite integrals** Determine the following indefinite integrals
a. $\int e^{-10x}dx$ &emsp; b. $\int \frac{4}{\sqrt{9-x^2}} dx$ &emsp; c. $\int \frac{dx}{16x^2+1}$
>Solution
a. $\int e^{-10x}dx = -\frac{1}{10}e^{-10x} + C$
b. $\int \dfrac{4}{\sqrt{9-x^2}} dx = 4\int \dfrac{dx}{\sqrt{3^2-x^2}} = 4\sin^{-1} \dfrac{x}{3} + C$
c. $\int \dfrac{dx}{16x^2+1} = \dfrac{1}{16} \int \dfrac{dx}{x^2 + (\frac{1}{4})^2} = \dfrac{1}{16} \cdot 4\tan^{-1} 4x + C$

#### Introduction to Differential Equations
*Initial Condition*

**Example 5 An initial value problem** Solve the initial value problem. $f'(x) = x^2-2x$ with $f(1) = \frac{1}{3}$

#### Motion Problems Revisited
>**Initial Value Problems for Velocity and Position**
Suppose an object moves along a line with a (known) velocity $v(t)$, for $t \ge 0$. Then its position is found by solving the initial value problem
$s'(t) = v(t), s(0) = s_0$ , where $s_0$ is the initial position.
If the acceleration of the object $a(t)$ is given, then its velocity is found by solving the initial value problem
$v'(t) = a(t), v(0) = v_0$,  where v 0 is the initial velocity.
