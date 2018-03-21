---
tags: [Newton's Law of Cooling]
---

**Newton's Law of Cooling**
The rate at which the tempature changes at any time is proportional to the _temperature difference_ between the object and the ambient tempature.
Let the current tempature of the object be $T$, the initial tempature of the object be $T(0) = T_0$ and the ambient tempature be $A$, where $A$ and $T_0$ are constants. We have
$$
\begin{aligned}
\frac{dT}{dt} &= -k(T - A)\\
\frac{dT}{dt} \cdot \frac{1}{T(t) - A}&= -k\\
\int \frac{dT}{T - A} &= \int (-k)dt\\
\ln |T-A| &= -kt + C\\
T &= \pm e^{-kt + C} + A\\
T &= (\pm e^C) \cdot e^{-kt} + A\\
T &= C e^{-kt} + A &\text{Rename} \pm e^C \to C\\
T(0) &= C e^0 + A \To C = T_0 - A\\
T(t) &= (T_0 - A)e^{-kt} + A
\end{aligned}
$$

(Quiz3) A roast turkey is taken from an oven when its temperature has reached $185 \degree F$ and is placed on a table in a room where the temperature is $75 \degree F$. The temperature of the turkey is $150 \degree F$ after half an hour. Determine when the turky will have cooled to $100 \degree F$. Set up and Solve a differential equation showing complete steps.
>Solution
According to the euqation $T(t) = (T_0 - A)e^{-kt} + A$, we have
$$
\begin{aligned}
C &= T_0 - A = 110\\
T(0.5) & = 110e^{-kt} + 75 = 150\\
\To k &= 2 \cdot \ln \frac{110}{75} \approx 0.766
\end{aligned}
$$
Solve for $t$ when $T(t) = 100$,
$$
\begin{aligned}
T(t) & = 110e^{-0.766t} + 75 = 100\\
\To t& \approx 1.934 hrs
\end{aligned}
$$
