const tasks = [
  {
    question: 'Найдите производную функции \\(f(x) = 3x^2 + 5x - 7\\).',
    solution: '<p><strong>Решение:</strong> \\(f\'(x) = 6x + 5\\).</p>'
  },
  {
    question: 'Найдите производную \\(g(x) = \\sin x + x^3\\).',
    solution: '<p>\\(g\'(x) = \\cos x + 3x^2\\).</p>'
  },
  {
    question: 'Вычислите производную \\(h(x) = e^{2x}\\).',
    solution: '<p>\\(h\'(x) = 2 e^{2x}\\) (по цепному правилу).</p>'
  },
  {
    question: 'Найдите производную \\(k(x) = (x^2 + 1)^5\\).',
    solution: '<p>\\(k\'(x) = 10x (x^2 + 1)^4\\).</p>'
  },
  {
    question: 'Найдите производную \\(m(x) = \\ln(3x + 2)\\).',
    solution: '<p>\\(m\'(x) = \\frac{3}{3x + 2}\\).</p>'
  },
  {
    question: 'Вычислите \\(f\'(x)\\) для \\(f(x) = \\cos x\\).',
    solution: '<p>\\(f\'(x) = -\\sin x\\).</p>'
  },
  {
    question: 'Найдите производную \\(g(x) = \\tan x\\).',
    solution: '<p>\\(g\'(x) = \\sec^2 x\\).</p>'
  },
  {
    question: 'Вычислите производную \\(h(x) = x^5 - 4x + 7\\).',
    solution: '<p>\\(h\'(x) = 5x^4 - 4\\).</p>'
  },
  {
    question: 'Найдите \\(f\'(x)\\) для \\(f(x) = \\sqrt{x}\\).',
    solution: '<p>\\(f\'(x) = \\frac{1}{2\\sqrt{x}}\\).</p>'
  },
  {
    question: 'Вычислите производную \\(g(x) = \\frac{1}{x^3}\\).',
    solution: '<p>\\(g\'(x) = -\\frac{3}{x^4}\\).</p>'
  },
  {
    question: 'Найдите производную \\(h(x) = \\arcsin x\\).',
    solution: '<p>\\(h\'(x) = \\frac{1}{\\sqrt{1 - x^2}}\\).</p>'
  },
  {
    question: 'Вычислите \\(f\'(x)\\) для \\(f(x) = \\arctan x\\).',
    solution: '<p>\\(f\'(x) = \\frac{1}{1 + x^2}\\).</p>'
  },
  {
    question: 'Найдите производную \\(g(x) = \\ln(x^2 + 1)\\).',
    solution: '<p>\\(g\'(x) = \\frac{2x}{x^2 + 1}\\).</p>'
  },
  {
    question: 'Вычислите производную \\(h(x) = \\sin^2 x\\).',
    solution: '<p>\\(h\'(x) = \\sin 2x\\) (через формулу двойного угла).</p>'
  },
  {
    question: 'Найдите \\(f\'(x)\\) для \\(f(x) = e^{x^2}\\).',
    solution: '<p>\\(f\'(x) = 2x e^{x^2}\\).</p>'
  },
  {
    question: 'Вычислите производную \\(g(x) = \\frac{x+1}{x-1}\\).',
    solution: '<p>\\(g\'(x) = -\\frac{2}{(x-1)^2}\\).</p>'
  },
  {
    question: 'Найдите \\(h\'(x)\\) для \\(h(x) = \\ln\\left(\\frac{x+1}{x-1}\\right)\\).',
    solution: '<p>\\(h\'(x) = -\\frac{2}{(x+1)(x-1)}\\).</p>'
  },
  {
    question: 'Вычислите производную \\(f(x) = \\sqrt{3x+1}\\).',
    solution: '<p>\\(f\'(x) = \\frac{3}{2\\sqrt{3x + 1}}\\).</p>'
  },
  {
    question: 'Найдите \\(g\'(x)\\) для \\(g(x) = \\cos^3 x\\).',
    solution: '<p>\\(g\'(x) = -3 \\cos^2 x \\sin x\\).</p>'
  },
  {
    question: 'Вычислите производную \\(h(x) = \\frac{1}{\\sqrt{x}}\\).',
    solution: '<p>\\(h\'(x) = -\\frac{1}{2 x^{3/2}}\\).</p>'
  },
  {
    question: 'Найдите \\(f\'(x)\\) для \\(f(x) = x e^x\\).',
    solution: '<p>\\(f\'(x) = e^x (1 + x)\\).</p>'
  },
  {
    question: 'Вычислите производную \\(g(x) = \\ln(\\sin x)\\).',
    solution: '<p>\\(g\'(x) = \\cot x\\).</p>'
  },
  {
    question: 'Найдите производную \\(h(x) = \\tan^{-1}(x^2)\\).',
    solution: '<p>\\(h\'(x) = \\frac{2x}{1 + x^4}\\).</p>'
  },
  {
    question: 'Вычислите \\(f\'(x)\\) для \\(f(x) = \\sin(3x^2)\\).',
    solution: '<p>\\(f\'(x) = 6x \\cos(3x^2)\\).</p>'
  },
  {
    question: 'Найдите производную \\(g(x) = e^{\\sin x}\\).',
    solution: '<p>\\(g\'(x) = e^{\\sin x} \\cos x\\).</p>'
  },
  {
    question: 'Вычислите производную \\(h(x) = \\frac{x^2 + 1}{x^3 - 2}\\).',
    solution: '<p>\\(h\'(x) = \\frac{2x(x^3 - 2) - 3x^2(x^2 + 1)}{(x^3 - 2)^2}\\).</p>'
  },
  {
    question: 'Найдите \\(f\'(x)\\) для \\(f(x) = \\ln(x) \\cdot x^2\\).',
    solution: '<p>\\(f\'(x) = x + 2x \\ln(x)\\).</p>'
  },
  {
    question: 'Вычислите производную \\(g(x) = \\sqrt{x^2 + 4x + 5}\\).',
    solution: '<p>\\(g\'(x) = \\frac{x + 2}{\\sqrt{x^2 + 4x + 5}}\\).</p>'
  },
  {
    question: 'Найдите производную \\(h(x) = \\sin x \\cdot \\cos x\\).',
    solution: '<p>\\(h\'(x) = \\cos 2x\\).</p>'
  },
  {
    question: 'Вычислите \\(f\'(x)\\) для \\(f(x) = e^{x} \\sin x\\).',
    solution: '<p>\\(f\'(x) = e^x (\\sin x + \\cos x)\\).</p>'
  },
  {
    question: 'Найдите производную \\(g(x) = \\tan x \\cdot x^2\\).',
    solution: '<p>\\(g\'(x) = x^2 \\sec^2 x + 2x \\tan x\\).</p>'
  },
  {
    question: 'Вычислите \\(h\'(x)\\) для \\(h(x) = \\ln(x^2 + 1) + x\\).',
    solution: '<p>\\(h\'(x) = \\frac{2x}{x^2 + 1} + 1\\).</p>'
  },
  {
    question: 'Найдите производную \\(f(x) = (3x + 2)^4\\).',
    solution: '<p>\\(f\'(x) = 12(3x + 2)^3\\).</p>'
  },
  {
    question: 'Вычислите производную \\(g(x) = \\frac{1}{1 + e^{-x}}\\).',
    solution: '<p>\\(g\'(x) = \\frac{e^{-x}}{(1 + e^{-x})^2}\\).</p>'
  },
  {
    question: 'Найдите \\(h\'(x)\\) для \\(h(x) = x^x\\).',
    solution: '<p>\\(h\'(x) = x^x (\\ln x + 1)\\).</p>'
  },
  {
    question: 'Вычислите производную \\(f(x) = \\arccos x\\).',
    solution: '<p>\\(f\'(x) = -\\frac{1}{\\sqrt{1 - x^2}}\\).</p>'
  },
  {
    question: 'Найдите производную \\(g(x) = \\frac{\\sin x}{x}\\).',
    solution: '<p>\\(g\'(x) = \\frac{x \\cos x - \\sin x}{x^2}\\).</p>'
  },
  {
    question: 'Вычислите \\(h\'(x)\\) для \\(h(x) = (x^2 - 1)^{3/2}\\).',
    solution: '<p>\\(h\'(x) = 3x (x^2 - 1)^{1/2}\\).</p>'
  },
  {
    question: 'Найдите производную \\(f(x) = \\frac{\\ln x}{x}\\).',
    solution: '<p>\\(f\'(x) = \\frac{1 - \\ln x}{x^2}\\).</p>'
  },
  {
    question: 'Вычислите производную \\(g(x) = e^{\\sqrt{x}}\\).',
    solution: '<p>\\(g\'(x) = e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}}\\).</p>'
  },
  {
    question: 'Найдите \\(h\'(x)\\) для \\(h(x) = \\sin(x^2 + 1)\\).',
    solution: '<p>\\(h\'(x) = 2x \\cos(x^2 + 1)\\).</p>'
  },
  {
    question: 'Вычислите производную \\(f(x) = \\cos(3x)\\).',
    solution: '<p>\\(f\'(x) = -3 \\sin(3x)\\).</p>'
  },
  {
    question: 'Найдите производную \\(g(x) = \\frac{x^2 + 1}{x}\\).',
    solution: '<p>\\(g\'(x) = 1 - \\frac{1}{x^2}\\).</p>'
  },
  {
    question: 'Вычислите производную \\(h(x) = \\tan^{-1}(\\sqrt{x})\\).',
    solution: '<p>\\(h\'(x) = \\frac{1}{2\\sqrt{x} (1 + x)}\\).</p>'
  },
  {
    question: 'Найдите производную \\(f(x) = (x + 1)^x\\).',
    solution: '<p>\\(f\'(x) = (x + 1)^x \\left( \\ln(x + 1) + \\frac{x}{x + 1} \\right)\\).</p>'
  },
  {
    question: 'Вычислите \\(g\'(x)\\) для \\(g(x) = \\frac{\\sin x}{x^2}\\).',
    solution: '<p>\\(g\'(x) = \\frac{x \\cos x - 2 \\sin x}{x^3}\\).</p>'
  },
  {
    question: 'Найдите производную \\(h(x) = x \\ln x\\).',
    solution: '<p>\\(h\'(x) = \\ln x + 1\\).</p>'
  },
  {
    question: 'Вычислите производную \\(f(x) = \\frac{1}{\\cos x}\\).',
    solution: '<p>\\(f\'(x) = \\tan x \\sec x\\).</p>'
  },
  {
    question: 'Найдите \\(g\'(x)\\) для \\(g(x) = (x^3 + 2)^4\\).',
    solution: '<p>\\(g\'(x) = 12 x^2 (x^3 + 2)^3\\).</p>'
  },
  {
    question: 'Вычислите производную \\(h(x) = e^{\\sin x}\\).',
    solution: '<p>\\(h\'(x) = e^{\\sin x} \\cos x\\).</p>'
  },
  {
    question: 'Найдите производную \\(f(x) = \\ln(\\tan x)\\).',
    solution: '<p>\\(f\'(x) = \\frac{1}{\\sin x \\cos x}\\).</p>'
  },
];
