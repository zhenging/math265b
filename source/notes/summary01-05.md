#### 1 Functions
##### 1.1 Review of Functions
##### 1.2 Representing Functions
##### 1.3 Inverse, Exponential, and Logarithmic Functions
##### 1.4 Trigonometric Functions and Their Inverses

#### 2 Limits
##### 2.1 The Idea of Limits
+ Average Velocity: $v_{av} = \frac{s(t_1) - s(t_0)}{t_1-t_0}$
+ Instantaneous Velocity: $v_{inst} = \dlim_{t \to t_0}v_{av}$
+ Slope of the Tangent Line: $m_{tan} = \dlim_{t \to t_0}m_{sec}$

##### 2.2 Definitions of Limits
+ Limit of a Function (Arbitrarrily large and sufficiently close)
+ The value of $L$ (limit) depends upon the value of $f$ near $a$, but it does not depend on the value of $f(a)$.
+ Find limits from a graph and a table (_Ex1, 2_)
+ One-Sided Limits: $\dlim_{x \to a^+}f(x) = L, \dlim_{x \to a^-}f(x) = L$
+ **Theorem 2.1** Relationship Between _One-sided_ and _Two-sided_ Limits
+ Function with jumps and some strange behavior ($\dlim_{x\to 0+}\cos \frac{1}{x}$ does not exist).

##### 2.3 Techniques for Computing Limits
+ **Theorem 2.2** Limits of Linear Functions
+ **Theorem 2.3** Limits Raws, Sum, Difference, Constant Multiple, Product, Quotient, Power, Fractional Power
+ **Theorem 2.4** Limits of Polynomial and Rational Functions
+ One-sided Limits (Fractional Power)
+ Techniques other then direct substitution (**Algebriac manipulation**)
+ An Important Limits - the slope of tangent line to the graphs of$f(x)=2^x$ at the point $P(0, 1)$. _($\ln 2$)_
+ **Theorem 2.4** The **Squeeze** Theorem: $\dlim_{x \to 0}\sin x = 0, \dlim_{x \to 0}\cos x = 1$ (_Ex8, 9_)

##### 2.4 Infinite Limits
+ Infinite Limits: $\dlim_{x \to a}f(x) = \pm \infty$. The limit does not exist.
+ One-sided Infinite Limits
+ Vertical Asymptote: $\dlim_{x \to a}f(x) = \pm \infty$, or $\dlim_{x \to a^+}f(x) = \pm \infty$, or $\dlim_{x \to a^-}f(x) = \pm \infty$.
+ Finding Infinite Limits Graphically and Analytically (_Ex2, 3_)
+ Location of vertical asymptote (_Ex5_)

##### 2.5 Limits at Infinity
hw 41, 47
+ Limits at Infinity and Horizontal Asymptote: $\dlim_{x \to \pm \infty} f(x)=L$
+ Infinite Limites at Infinity: $\dlim_{x \to \pm \infty} f(x)=\pm \infty$
+ **Theorem 2.6** Limits at Infinity of Powers and Polynomials
+ End behavior (_Ex3_)
+ Slant Asymptote
+ **Theorem 2.7** End behavior and Asymptote of Rational Functions ($f(x) = \frac{p(x)}{q(x)}$)
+ **Theorem 2.8** End behavior of $e^x, e^{-x}, \ln x$, (_Ex6_)

##### 2.6 Continuity
hw 53, 57

+ Continuity at a Point: $\dlim_{x \to a} f(x) = f(a)$
+ Continuity Checklist: $f(a)$ is defined, $\dlim_{x \to a} f(x)$ exists and $\dlim_{x \to a} f(x) = f(a)$.
+ Continity Rules: $f+g, f-g, fg, cf, \frac{f}{g}, (f(x))^n$
+ **Theorem 2.10** Polynomial and Rational Functions: $f\circ g$
+ **Theorem 2.11** Continuity of Composite Functions at a Point
+ Continuity at Endpoints and on an Interval
+ **Theorem 2.12** Continuity of Functions with Roots
+ **Theorem 2.13** Continuity of Inverse Functions
+ **Theorem 2.14** Continuity of Transcendental Functions
  + Trigonometric Functions
  + Inverse Trigonometric Functions
  + Exponential Functions
  + Logarithmic
+ Limits involing transcendental functions (_Ex7_).
+ **Theorem 2.15** The Intermediate Value Theorem
  + $f$ is continuous on the interval $[a, b]$
  + $f(a) \le L \le f(b)$
  + Then there is at least one number $c$ in $(a, b)$ satisfying $f(c)=L$.
+ Finding an interest rate (_Ex8_)

##### 2.7 Precise Definitions of Limits
+ Moving Toward a Precise Definition
+ Limit Proofs:
  1. Find $\delta$.
  2. Write a proof.
+ Justifying Limits Laws
+ Infinite Limits
+ Limits at Infinity

### 3 Derivatives
##### 3.1 Introducing the Derivatives
+ Tangent line and Rates of Change:
  + Version 1: $m_{sec}=\dfrac{f(x)-f(a)}{x-a}, m_{tan} = \dlim_{x\to 0}\dfrac{f(x)-f(a)}{x-a}$
  + Version 2: $m_{sec}=\dfrac{f(x+h)-f(x)}{h}, m_{tan} = \dlim_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$
+ The Derivative Function: $f'(x) = \dlim_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$. $f$ is differentiable at $x$ if $f'(x)$ exists.
+ Derivative Notation: $\dfrac{dy}{dx}, \dfrac{d}{dx}f(x), y'(x)$
+ Graphs of Derivatives
+ **Theorem 3.1** Differentiable Implies Continuous. (_Proof_)
+ **Theorem 3.1 (Alternative Version)** Not Continuous Implies Not Differentiable
+ When is a Function is Not Differentiable at a Point?
  1. $f$ is not continuous at $a$.
  2. $f$ has a corner at $a$.
  3. $f$ has a vertical tangent at $a$.

##### 3.2 Rules of Differentiation
+ **Theorem 3.2** Constant Rule: $\dfrac{d}{dx}(c) = 0$
+ **Theorem 3.3** Power Rule: $\dfrac{d}{dx}(x^n) = nx^{n-1}$
+ **Theorem 3.4** Constant Multiple: $\dfrac{d}{dx}(cf(x)) = cf'(x)$
+ **Theorem 3.5** Sum Rule: $\dfrac{d}{dx}(f(x)+g(x)) = f'(x)+g'(x)$
+ The Number $e=2.718281828459$ satisfies $\dlim_{h\to 0}\frac{e^h-1}{h} = 1$
+ **Theorem 3.6** The Derivative of $e^x$: $\dfrac{d}{dx}(e^x) = e^x$
+ Slope of Tangent line
+ Higher-order Derivatives (_Ex6_)

##### 3.3 The Product and Quotient Rules
+ **Theorem 3.7** Product Rule: $\dfrac{d}{dx}(f(x)g(x)) = f'(x)g(x) + f(x)g'(x)$. (_Proof_)
+ **Theorem 3.8** Quotient Rule: $\dfrac{d}{dx}\lb \dfrac{f(x)}{g(x)} \rb = \dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}$. (_Proof_)
+ **Theorem 3.9** Extended Power Rule. (_Proof_)
+ **Theorem 3.10** The Derivative of $e^{kx}$. (_Proof_)
+ Rates of Change (_Ex6_)
+ Combinding Derivative Rules (_Ex7_)

##### 3.4 Derivatives of Trigonometric Functions
+ **Theorem 3.11** Trigonometric Limits (_Proof_)
  + $\dlim_{x\to 0}\dfrac{\sin x}{x} = 1$
  + $\dlim_{x\to 0}\dfrac{\cos x - 1}{x} = 0$
+ **Theorem 3.12** Derivative of Sine and Cosine (_Proof_)
+ **Theorem 3.13** Derivative of the Trigonometric Functions

##### 3.5 Derivatives as Rates of Change
+ One-Dimensional Motion: Position, Velocity, Speed and Acceleration
+ Free Fall (_Ex3_)
+ Growth Models (_Ex4_)
+ Average and Marginal Cost (_Ex5_)

##### 3.6 The Chain Rule
+ **Theorem 3.14** The Chain Rule (_Proof_)
  + Version 1: $\dfrac{dy}{dx} = \dfrac{dy}{du} \cdot \dfrac{du}{dx}$
  + Version 2: $\dfrac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$
+ Procedure Using the Chain Rule. (_Ex1, 2_)
+ **Theorem 3.15** Chain Rule for Powers
+ The composition of Three or More Functions (_Ex5_)

##### 3.7 Implicit Differentiation
+ Implicit Differentiation. (_Ex1, 2_)
+ Tangent lines with Implies functions. (_Ex3_)
+ Higher-Order Derivatives of Implicit Functions. (_Ex4_)
+ **Theorem 3.16** Power Rule for Rational Exponents: $\dfrac{d}{dx}x^{\frac{p}{q}} = \dfrac{p}{q}x^{\frac{p}{q} - 1}$. (_Proof_)
+ Implicit differentiation with rational exponents. (_Ex6_)

##### 3.8 Derivatives of Logarithmic and Exponential Functions
+ Inverse Properties for $e^x$ and $\ln x$
  + $e^{\ln x} = x$ for $x>0$ and $\ln(e^x) = x$ for all $x$.
  + $y=\ln x$ if and only if $x=e^y$
  + $b^x=e^{\ln b^x} = e^{x\ln b}$
+ **Theorem 3.17** Derivative of $\ln x$: $\dfrac{d}{dx}\ln x = \frac{1}{x}, \dfrac{d}{dx}(\ln |u(x)|) = \dfrac{u'(x)}{u(x)}$
+ **Theorem 3.18** Derivative of $b^x$: $\dfrac{d}{dx}b^x = b^x\ln b$
+ **Theorem 3.19** General Power Rule: $\dfrac{d}{dx}(x^p)= px^{p-1}, \dfrac{d}{dx}(u(x)^p)= p(u(x))^{p-1} \cdot u'(x)$. (_Proof_)
+ **Theorem 3.20** Derivative of $\log_b x$: $\dfrac{d}{dx}(\log_b x) = \frac{1}{x \ln b}$
+ Logarithmic differentiation. (_Ex8_)

##### 3.9 Derivatives of Inverse Trigonometric Functions
+ **Theorem 3.21** Derivative of Inverse Sine: $\dfrac{d}{dx}\sin^{-1} x = \frac{1}{\sqrt{1-x^2}}$, for $-1<x<1$. (_Proof_)
+ **Theorem 3.22** Derivative of Inverse Trigonometric Functions. (_Proof_)
+ **Theorem 3.23** Derivative of the Inverse Function: $(f^{-1})'(y_0) = \frac{1}{f'(x_0)}$, where $y_0=f(x_0)$. (_Proof_)
+ Derivative of an Inverse Function. (_Ex5_)

##### 3.10 Related Rates
Applications

#### 4 Applications of the Derivative
##### 4.1 Maxima and Minima
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

##### 4.2 What Derivative Tell Us
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

##### 4.3 Graphing functions
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

##### 4.4 Optimization Problems
+ Guidelines for Optimization Problems
  1. Read the problem carefully, identify the variables, and organize the given information with a picture.
  2. Identify the objective function (the function to be optimized). Write it in terms of the variables of the problem.
  3. Identify the constraint(s). Write them in terms of the variables of the problem.
  4. Use the constraint(s) to eliminate all but one independent variable of the objective function.
  5. With the objective function expressed in terms of a single variable, find the interval of interest for that variable.
  6. Use methods of calculus to find the absolute maximum or minimum value of the objective function on the interval of interest. If necessary, check the endpoints.

##### 4.5 Linear Approximation and Differentials
+ Linear Approximation of $f$ at $a$: $L(x) = f(a) + f'(a)(x-a)$
+ Relationship Between $\Delta x$ and $\Delta y$: $\Delta y \approx f'(a)\Delta x$
+ Differentials: $\Delta y = f(x+dx)-f(x) \approx dy=f'(x)dx$

##### 4.6 Mean Value Theorem
+ **Theorem 4.8** Rolle's Theorem. (_Proof_)
+ **Theorem 4.9** Mean Value Theorem: $\dfrac{f(b)-f(a)}{b-a} = f'(c)$. (_Proof_)
+ **Theorem 4.10** Zero Derivative Implies Constant Function
+ **Theorem 4.11** Functions with Equal Derivatives Differ by a Constant
+ **Theorem 4.12** Intervals of Increase and Decrease. (_Proof_)

##### 4.7 L'Hopital's Rules
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

##### 4.8 Newton's Method
PROCEDURE Newton’s Method for Approximating Roots of $f(x)=0$
1. Choose an initial approxmiation $x_0$ close to a root as possible.
2. For $n=0, 1, 2, \cdots$, $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$

##### 4.9 Antiderivatives
+ Antiderivative
+ **Theorem 4.16** The Family of Antiderivatives
+ **Theorem 4.17** Power Rule for Indefinite Intergrals

#### 5 Integration
##### 5.1 Approximating Areas Under Areas
##### 5.2 Definite Integrals
##### 5.3 Fundamental Theorem of Calculus
##### 5.4 Working with Integrals
##### 5.5 Substitution Rule
