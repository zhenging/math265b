### 04 Applications of the Derivative

#### 4.1 Maxima and Minima
+ Absolute Maxima and Minima
+ **Theorem 4.1** Extreme Value Theorem
+ Local Maximum and Minimum Values
+ **Theorem 4.2** Local Extreme Point Theorem
  >If $f$ has a local maximum or minimum value at $c$ and $f'(c)$ exists, then $f'(c) = 0$.
+ Crtical Point: $f'(c)=0$ or $f'(c)$ fails to exist.
+ Procedures of Locating Absolute Maximum and Minimum Values
  1. Locate the critical points $c$ in $(a, b)$, where $f'(c)$ does not exist. These points are candidates for absolute maxima and minima.
  2. Evaluate $f$ at the critical points and at the endpoints of $[a, b]$.
  3. Choose the largest and smallest values of $f$ from step 2 for the absolute maximum and minimum values, respectively.

#### 4.2 What Derivative Tell Us
+ Increasing and Decreasing Functions
+ **Theorem 4.3** Test for Intervals of Increase and Decrease: $f'(x)>0$ or $f'(x)<0$.
+ Idenfitying Local Maxima and Minima
+ **Theorem 4.4** First Derivative Test
  + If $f'$ changes from positive to negative, $f$ has a local maximum at $c$.
  + If $f'$ changes from negative to positive, $f$ has a local minimum at $c$.
  + If $f'$ does not change sign, then $f$ has no local extreme value at $c$.
+ **Theorem 4.5** One Local Extremum Implies Absolute Extremum
+ Concavity and Inflection point
+ **Theorem 4.6** Test for Concavity
  + $f''>0 \To f \text{ is concave up}$
  + $f''<0 \To f \text{ is concave down}$
  + $f''$ changes sign at $c$, then $f$ has an inflection point at $c$.
+ **Theorem 4.7** Second Derivative Test for Local Extrema
  > Suppose that $f''$ is continuous on an open interval containing $c$ with $f'(c) = 0$.
  >+ If $f''(c)>0$, $f$ has a local minimum at $c$.
  >+ If $f''(c)<0$, $f$ has a local maximum at $c$.
  >+ If $f''(c)=0$, the test is inconclusive and $f$ may have a local maximum, local minimum, or neither at $c$.

#### 4.3 Graphing functions
+ Graphing  Guidelines
  1. Identify domain or interval of interest.
  2. Exploit symmetry
  3. Find the first and second derivatives.
  4. Find critical points and possible inflection points.
  5. Find intervals on which the function is increasing/decreasing and concave up/down.
  6. Identify extreme values and inflection points.
  7. Locate vertical/horizontal asymptotes and determine end behavior.
  8. Find the intercepts.
  9. Choose an appropriate graphing window and make a graph.

#### 4.4 Optimization Problems
+ Guidelines for Optimization Problems
  1. Read the problem carefully, identify the variables, and organize the given information with a picture.
  2. Identify the objective function (the function to be optimized). Write it in terms of the variables of the problem.
  3. Identify the constraint(s). Write them in terms of the variables of the problem.
  4. Use the constraint(s) to eliminate all but one independent variable of the objective function.
  5. With the objective function expressed in terms of a single variable, find the interval of interest for that variable.
  6. Use methods of calculus to find the absolute maximum or minimum value of the objective function on the interval of interest. If necessary, check the endpoints.

#### 4.5 Linear Approximation and Differentials
+ Linear Approximation of $f$ at $a$: $L(x) = f(a) + f'(a)(x-a)$
+ Relationship Between $\Delta x$ and $\Delta y$: $\Delta y \approx f'(a)\Delta x$
+ Differentials: $\Delta y = f(x+dx)-f(x) \approx dy=f'(x)dx$

#### 4.6 Mean Value Theorem
+ **Theorem 4.8** Rolle's Theorem. (_Proof_)
+ **Theorem 4.9** Mean Value Theorem: $\dfrac{f(b)-f(a)}{b-a} = f'(c)$. (_Proof_)
+ **Theorem 4.10** Zero Derivative Implies Constant Function
+ **Theorem 4.11** Functions with Equal Derivatives Differ by a Constant
+ **Theorem 4.12** Intervals of Increase and Decrease. (_Proof_)

#### 4.7 L'Hopital's Rules
+ **Theorem 4.13** L'Hopital's Rule ($0/0$)
+ **Theorem 4.14** L'Hopital's Rule ($\infty /\infty$)
+ Related Indeterminated Forms: $0\cdot \infty$ and $\infty - \infty$
+ _Procedure_ Indeterminated Forms $1^{\infty}, 0^0$ and $\infty^0$
  1. Evaluate $L = \dlim_{x\to a}g(x)\ln f(x)$. This limit can be put in the form $0/0$ or $\infty/ \infty$, both of which are handled by L'Hopital's Rule.
  2. Then $\dlim_{x \to a}f(x)^{g(x)} = e^L$
+ Growth Rates of Functions
+ **Theorem 4.15** Ranking Growth Rates as $x \to \infty$
$$
\ln^q x \ll x^p \ll x^p\ln^r x \ll x^{p+s} \ll b^x \ll x^x
$$
+ Pitfalls in Using L'Hopital's Rule
  1. $\dlim_{x\to 0}\dfrac{1 - \sin x}{\cos x}$
  2. $\dlim_{x\to 0}\dfrac{\sqrt {ax+b}}{\sqrt {cx+d}}$

#### 4.8 Newton's Method
PROCEDURE Newton’s Method for Approximating Roots of $f(x)=0$
1. Choose an initial approxmiation $x_0$ close to a root as possible.
2. For $n=0, 1, 2, \cdots$, $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$

#### 4.9 Antiderivatives
+ Antiderivative
+ **Theorem 4.16** The Family of Antiderivatives
+ **Theorem 4.17** Power Rule for Indefinite Intergrals

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
