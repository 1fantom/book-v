import numpy as np
import matplotlib.pyplot as plt

# Пример 1: sin(x)
x1 = np.linspace(-2*np.pi, 2*np.pi, 400)
plt.figure()
plt.plot(x1, np.sin(x1))
plt.grid(True)
plt.savefig('images/sin_plot.png', bbox_inches='tight')

# Пример 2: e^{-0.5x} cos x
x2 = np.linspace(0, 10, 400)
plt.figure()
plt.plot(x2, np.exp(-0.5*x2)*np.cos(x2))
plt.grid(True)
plt.savefig('images/decay_cos_plot.png', bbox_inches='tight')
