### Summary of Discrete Mathematics
#### 3. Algorithms
##### 3.1 Algorithms

##### 3.2 The growth of Functions
**EX** 1, 2, 3, 4, 8, 12, 13, Fig 3
**HW** pg 237: 10, 13, 15, 16, 25, 26

1\. **Definion of Big-O Notation**
Let $f$ and $g$ function from the set of integers or the set of real numbers to the set of real numbers, we say that $f(x)$ is $O(g(x))$ of there are constant $C$ and $k$ such that
$$
|f(x)| \leqslant C|g(x)|
$$
whenever $x>k$. [This is read as $f(x)$ is big oh of $g(x)$].
2\. Suppose that $f_1(x)$ is $O(g_1(x))$, and  $f_2(x)$ is $O(g_2(x))$, then $(f_1+f_2)(x)$ is $O(max(|g_1(x)|, |g_2(x)|))$.
3\. Suppose that $f_1(x)$ is $O(g_1(x))$, and  $f_2(x)$ is $O(g_2(x))$, then $(f_1f_2)(x)$ is $O(g_1(x)g_2(x)))$.
4\. BigOmega and Big-Theta Notation.

##### 3.3 Complexity of Algorithm
\-

#### 5. Induction and Recursion
##### 5.1 Mathematical Induction
**EX** 1, 2, 3, 5, 6, 8, 9, 10, 11
**HW** pg 350: 6, 14, 15, 20, 21, 31, 32, 34, 36, 43

To prove a statement $P(n)$ is true for every $n \mid n > n_{threshold}$ (positive integer)
1\. **Basic step** Show $P(n_{threshold})$ is true.
2\. **Hypothesis** Assume the statement for a value of $n=k, P(k)$ is true .
3\. **Induction step** Prove for $n=k+1, P(k+1)$ is true.

##### 5.3 Recursive Definitions and Structural Induction
**EX** 1, 2, 3, 5
**HW** pg 379: 12, 13, 15, 48, 49, 50

  * Fabonacci numbers

#### 6. Counting
##### 6.1 The Basics of Counting
**EX** 1-23, except 17
**HW** pg 417: 1, 6, 10, 12, 17, 28, 32a-f, 34, 37a-b,48, 49, 55, 56

* How to count one-to-one functions (**hw37**)
* Product rule (**and**)
* Sum rule (**or**)

##### 6.2 The Pigeonhole Principle
**EX** 1-3, 5-7
**HW** 2, 6, 9

**Theorem 1 - The pigeonhole principle**
If **k** is a positive integer and **k+1** or more objects are placed into $k$ boxes, then there is at least one box containing two or more of the objects.
**Theorem 2 - Generalized pigeonhole principle**
If $N$ object are placed into $k$ boxes, then there is at least one box containing $\lceil N/k \rceil$ objects.

##### 6.3 Permutations and Combinations
**EX** 1-15, except 11
**HW** pg 434: 8, 10, 11, 12, 14, 16, 19, 22a,b,c, 27, 33, 34

* Permutation (order matters)
> If $n$ is positive integer and $r$ is an integer with $0 \leqslant r \leqslant n$, then there are $P(n, r) = n(n-1) \cdots (n-r+1) = \frac{n!}{(n-r)!}$

* Combination (order does not matter)
> The number is $r$-combinations of a set with $n$ elements, where $n$ is a nonnegative integer and $r$ i an integer with $0 \leqslant r \leqslant n$, equals $C(n, r) = \frac{n!}{(n-r)!r!}$

##### 6.4 Binomial Coefficients and Identities
**EX** 1-4
**HW** pg 443: 4, 7, 8, 9

**The Binomial Theorem**
$$
(x+y)^n = \sum^n_{k=0}x^{n-k}y^k
$$

##### 8.1 Applications of Recurrence Relations
**EX** 1, 2
**HW**

##### 8.2 Solving Linear Recurrence Relations
**EX** 1-6
**HW** 2, 4adefg, 8, 12, 14

##### 8.3: Divide-and-Conquer Algorithms and Recurrence Relations
**Ex** 1, 3, 5, 9, theorem 2
**HW** 34, 36

##### 9.1 Relations and Their Properties
**Ex**
**HW** 3cdef, 9, 25, 32
Let $A$ be positive integer. $R$ is "$a$ divides $b$"
a. Is $R$ reflective?
> Yes, since $\forall a a divides a$.

b. Is $R$ symmetric?
>No, because $2 \mid b$, but $b \nmid 2$

##### 10.1 Graphs and Graph Models
**Ex**
**HW**

##### 10.2 Graph Terminology and Special Types of Graphs
**Ex**:
**HW** 23, 24, 25, 52, 53, 54

##### 10.3 Representing Graphs and Graph Isomorphism
**EX**
**HW** 35, 36, 37, 38, 39, 43

##### 10.4 Connectivity
**EX** 2, 3, 15
**HW** 26ab, 30

##### 10.5 Euler and Hamilton Paths
**EX** 1-7
**HW** 10, 30, 31, 35, 26, 28a

##### 11.1 Introduction to Trees
**EX**
**HW** 18, 19, 28

##### 11.2 Applications of Trees
**EX**
**HW**

##### 11.3 Tree Traverse
**EX**
**HW** 8, 9
