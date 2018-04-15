### 03 Derivatives

#### 3.1 Introducing the Derivatives
+ Tangent line and Rates of Change:
  + Version 1: $m_{sec}=\dfrac{f(x)-f(a)}{x-a}, m_{tan} = \dlim_{x\to 0}\dfrac{f(x)-f(a)}{x-a}$
  + Version 2: $m_{sec}=\dfrac{f(x+h)-f(x)}{h}, m_{tan} = \dlim_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$
+ The Derivative Function: $f'(x) = \dlim_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$. $f$ is differentiable at $x$ if $f'(x)$ exists.
+ Derivative Notation: $\dfrac{dy}{dx}, \dfrac{d}{dx}f(x), y'(x)$
+ Graphs of Derivatives
+ **Theorem 3.1** Differentiable Implies Continuous. (_Proof_); (Alternative Version) Not Continuous Implies Not Differentiable
+ When is a Function is **Not Differentiable** at a Point?
  1. $f$ is not continuous at $a$.
  2. $f$ has a corner at $a$.
  3. $f$ has a vertical tangent at $a$.

#### 3.2 Rules of Differentiation
+ Constant Rule: $\dfrac{d}{dx}(c) = 0$
+ Power Rule: $\dfrac{d}{dx}(x^n) = nx^{n-1}$
+ Constant Multiple: $\dfrac{d}{dx}(cf(x)) = cf'(x)$
+ Sum Rule: $\dfrac{d}{dx}(f(x)+g(x)) = f'(x)+g'(x)$
+ The Number $e=2.718281828459$ satisfies $\dlim_{h\to 0}\dfrac{e^h-1}{h} = 1$
+ The Derivative of $e^x$: $\dfrac{d}{dx}(e^x) = e^x$
+ Slope of Tangent line
+ Higher-order Derivatives (_Ex6_)

#### 3.3 The Product and Quotient Rules
+ Product Rule: $\dfrac{d}{dx}(f(x)g(x)) = f'(x)g(x) + f(x)g'(x)$. (_Proof_)
+ Quotient Rule: $\dfrac{d}{dx}\lb \dfrac{f(x)}{g(x)} \rb = \dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}$. (_Proof_)
+ Extended Power Rule. (_Proof_)
+ The Derivative of $e^{kx}$. (_Proof_)
+ Rates of Change (_Ex6_)
+ Combinding Derivative Rules (_Ex7_)

#### 3.4 Derivatives of Trigonometric Functions
+ **Theorem 3.11** Trigonometric Limits (_Proof_)
  + $\dlim_{x\to 0}\dfrac{\sin x}{x} = 1$
  + $\dlim_{x\to 0}\dfrac{\cos x - 1}{x} = 0$
+ **Theorem 3.12** Derivative of Sine and Cosine (_Proof_)
+ **Theorem 3.13** Derivative of the Trigonometric Functions
+ Higher-Order Trigonometric Functions ($y=\sin x, \frac{dy}{dx}, \frac{d^2y}{dx^2}, \frac{d^3y}{dx^3}$)

#### 3.5 Derivatives as Rates of Change
+ One-Dimensional Motion
+ Position and Velocity
+ Speed and Acceleration
+ Free Fall (_Ex3_)
+ Growth Models (_Ex4_)
+ Average and Marginal Cost (_Ex5_)

#### 3.6 The Chain Rule
+ The Chain Rule (_Proof_)
  + Version 1: $\dfrac{dy}{dx} = \dfrac{dy}{du} \cdot \dfrac{du}{dx}$
  + Version 2: $\dfrac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$
+ Chain Rule for Powers

#### 3.7 Implicit Differentiation
+ Implicit Differentiation. (_Ex1, 2_)
+ Tangent lines with Implies functions. (_Ex3_)
+ Higher-Order Derivatives of Implicit Functions. (_Ex4_)
+ **Theorem 3.16** Power Rule for Rational Exponents: $\dfrac{d}{dx}x^{\frac{p}{q}} = \dfrac{p}{q}x^{\frac{p}{q} - 1}$. (_Proof_)
+ Implicit differentiation with rational exponents. (_Ex6_)

#### 3.8 Derivatives of Logarithmic and Exponential Functions
+ Inverse Properties for $e^x$ and $\ln x$
  + $e^{\ln x} = x$ for $x>0$ and $\ln(e^x) = x$ for all $x$.
  + $y=\ln x$ if and only if $x=e^y$
  + $b^x=e^{\ln b^x} = e^{x\ln b}$
+ **Theorem 3.17** Derivative of $\ln x$: $\dfrac{d}{dx}\ln x = \frac{1}{x}, \dfrac{d}{dx}(\ln |u(x)|) = \dfrac{u'(x)}{u(x)}$
+ **Theorem 3.18** Derivative of $b^x$: $\dfrac{d}{dx}b^x = b^x\ln b$
+ **Theorem 3.19** General Power Rule: $\dfrac{d}{dx}(x^p)= px^{p-1}, \dfrac{d}{dx}(u(x)^p)= p(u(x))^{p-1} \cdot u'(x)$. (_Proof_)
+ **Theorem 3.20** Derivative of $\log_b x$: $\dfrac{d}{dx}(\log_b x) = \frac{1}{x \ln b}$
+ Logarithmic differentiation. (_Ex8_)

#### 3.9 Derivatives of Inverse Trigonometric Functions
+ **Theorem 3.21** Derivative of Inverse Sine: $\dfrac{d}{dx}\sin^{-1} x = \frac{1}{\sqrt{1-x^2}}$, for $-1<x<1$. (_Proof_)
+ **Theorem 3.22** Derivative of Inverse Trigonometric Functions. (_Proof_)
+ **Theorem 3.23** Derivative of the Inverse Function: $(f^{-1})'(y_0) = \frac{1}{f'(x_0)}$, where $y_0=f(x_0)$. (_Proof_)
+ Derivative of an Inverse Function. (_Ex5_)

#### 3.10 Related Rates

>**Procedure** Steps for Rate-Related Problems
1\. Read the problem carefully, making a sketch to organize the given information. Identify the rates that are given and the rate that is to be determined.
2\. Write one or more questions that express the basic relationships among the variables.
3\. Introduce rates of change by differentiation the appropriate equation(s). with respect to time $t$.
4\. Subsitute known value and solve for the desired quantity.
5\. Check that units are consistent and the answer is reasonable. (For example, does it have the correct sign?)
