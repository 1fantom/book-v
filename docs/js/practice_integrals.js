
const tasks = [
{
    question: "\( \int \operatorname{asinh}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \operatorname{asinh}{\left(x \right)} - \sqrt{x^{2} + 1} + C \)</div>`
    },
{
    question: "\( \int \sqrt{x + 1} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{2 \left(x + 1\right)^{\frac{3}{2}}}{3} + C \)</div>`
    },
{
    question: "\( \int e^{x^{2}} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{\sqrt{\pi} \operatorname{erfi}{\left(x \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int \operatorname{atan}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \operatorname{atan}{\left(x \right)} - \frac{\log{\left(x^{2} + 1 \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int x^{0.5} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( 0.666666666666667 x^{1.5} + C \)</div>`
    },
{
    question: "\( \int \frac{1}{\sqrt{1 - x^{2}}} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \operatorname{asin}{\left(x \right)} + C \)</div>`
    },
{
    question: "\( \int \log{\left(x^{2} + 1 \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \log{\left(x^{2} + 1 \right)} - 2 x + 2 \operatorname{atan}{\left(x \right)} + C \)</div>`
    },
{
    question: "\( \int \sin{\left(2 x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( - \frac{\cos{\left(2 x \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int \sqrt{x^{2} + 1} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x \sqrt{x^{2} + 1}}{2} + \frac{\operatorname{asinh}{\left(x \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int \log{\left(x + \sqrt{x^{2} + 1} \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \log{\left(x + \sqrt{x^{2} + 1} \right)} - \sqrt{x^{2} + 1} + C \)</div>`
    },
{
    question: "\( \int \operatorname{acos}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \operatorname{acos}{\left(x \right)} - \sqrt{1 - x^{2}} + C \)</div>`
    },
{
    question: "\( \int \sqrt{1 - x^{2}} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x \sqrt{1 - x^{2}}}{2} + \frac{\operatorname{asin}{\left(x \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int \sin^{2}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x}{2} - \frac{\sin{\left(x \right)} \cos{\left(x \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int e^{- x} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( - e^{- x} + C \)</div>`
    },
{
    question: "\( \int \sqrt{x^{2} + 1} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x \sqrt{x^{2} + 1}}{2} + \frac{\operatorname{asinh}{\left(x \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int \operatorname{asin}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \operatorname{asin}{\left(x \right)} + \sqrt{1 - x^{2}} + C \)</div>`
    },
{
    question: "\( \int \sqrt{\sin{\left(x \right)}} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \int \sqrt{\sin{\left(x \right)}}\, dx + C \)</div>`
    },
{
    question: "\( \int \frac{1}{x + 1} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \log{\left(x + 1 \right)} + C \)</div>`
    },
{
    question: "\( \int \tan{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( - \log{\left(\cos{\left(x \right)} \right)} + C \)</div>`
    },
{
    question: "\( \int \operatorname{acosh}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \operatorname{acosh}{\left(x \right)} - \sqrt{x^{2} - 1} + C \)</div>`
    },
{
    question: "\( \int \frac{1}{x^{2} - 1} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{\log{\left(x - 1 \right)}}{2} - \frac{\log{\left(x + 1 \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int \log{\left(\sin{\left(x \right)} \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \int \log{\left(\sin{\left(x \right)} \right)}\, dx + C \)</div>`
    },
{
    question: "\( \int \left|{x}\right| \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \int \left|{x}\right|\, dx + C \)</div>`
    },
{
    question: "\( \int \left(2 x + 5\right)^{2} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{4 x^{3}}{3} + 10 x^{2} + 25 x + C \)</div>`
    },
{
    question: "\( \int \frac{1}{x} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \ln|x| + C \)</div>`
    },
{
    question: "\( \int \sin(x) \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( -\cos(x) + C \)</div>`
    },
{
    question: "\( \int \sec^{2}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{\sin{\left(x \right)}}{\cos{\left(x \right)}} + C \)</div>`
    },
{
    question: "\( \int x^{2} e^{x} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \left(x^{2} - 2 x + 2\right) e^{x} + C \)</div>`
    },
{
    question: "\( \int \frac{1}{x^{2} + 1} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \operatorname{atan}{\left(x \right)} + C \)</div>`
    },
{
    question: "\( \int \frac{1}{x^{3}} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( - \frac{1}{2 x^{2}} + C \)</div>`
    },
{
    question: "\( \int x e^x \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( e^x(x - 1) + C \)</div>`
    },
{
    question: "\( \int \operatorname{atanh}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \operatorname{atanh}{\left(x \right)} + \log{\left(x + 1 \right)} - \operatorname{atanh}{\left(x \right)} + C \)</div>`
    },
{
    question: "\( \int (5x - 4)^2 \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{25x^3}{3} - 20x^2 + 16x + C \)</div>`
    },
{
    question: "\( \int \cos^{2}{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x}{2} + \frac{\sin{\left(x \right)} \cos{\left(x \right)}}{2} + C \)</div>`
    },
{
    question: "\( \int \frac{1}{x \sqrt{x^{2} - 1}} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \begin{cases} i \operatorname{acosh}{\left(\frac{1}{x} \right)} & \text{for}\: \frac{1}{\left|{x^{2}}\right|} > 1 \\- \operatorname{asin}{\left(\frac{1}{x} \right)} & \text{otherwise} \end{cases} + C \)</div>`
    },
{
    question: "\( \int x^{4} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x^{5}}{5} + C \)</div>`
    },
{
    question: "\( \int x^2 \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x^3}{3} + C \)</div>`
    },
{
    question: "\( \int \cos(x) \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \sin(x) + C \)</div>`
    },
{
    question: "\( \int x e^{x} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \left(x - 1\right) e^{x} + C \)</div>`
    },
{
    question: "\( \int \cos{\left(3 x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{\sin{\left(3 x \right)}}{3} + C \)</div>`
    },
{
    question: "\( \int \frac{\log{\left(x \right)}}{\log{\left(10 \right)}} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x \log{\left(x \right)}}{\log{\left(10 \right)}} - \frac{x}{\log{\left(10 \right)}} + C \)</div>`
    },
{
    question: "\( \int (x^3 + 2x^2 + x) \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x^4}{4} + \frac{2x^3}{3} + \frac{x^2}{2} + C \)</div>`
    },
{
    question: "\( \int x \sin{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( - x \cos{\left(x \right)} + \sin{\left(x \right)} + C \)</div>`
    },
{
    question: "\( \int \left(x - 1\right)^{3} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{x^{4}}{4} - x^{3} + \frac{3 x^{2}}{2} - x + C \)</div>`
    },
{
    question: "\( \int e^{3x} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( \frac{1}{3}e^{3x} + C \)</div>`
    },
{
    question: "\( \int x^{2} \cos{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x^{2} \sin{\left(x \right)} + 2 x \cos{\left(x \right)} - 2 \sin{\left(x \right)} + C \)</div>`
    },
{
    question: "\( \int \frac{1}{x^2} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( -\frac{1}{x} + C \)</div>`
    },
{
    question: "\( \int \ln(x) \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x\ln(x) - x + C \)</div>`
    },
{
    question: "\( \int x \cos{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( x \sin{\left(x \right)} + \cos{\left(x \right)} + C \)</div>`
    },
{
    question: "\( \int x^{2} \sin{\left(x \right)} \, dx \)",
    solution: `<p><strong>Решение:</strong></p><div class="formula">\( - x^{2} \cos{\left(x \right)} + 2 x \sin{\left(x \right)} + 2 \cos{\left(x \right)} + C \)</div>`
    }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.onload = () => {
  shuffle(tasks);
  const list = document.getElementById('exerciseList');

  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Задача ${idx + 1}:</strong> ${task.question}
      <button class="toggle-btn" aria-expanded="false" aria-controls="solution${idx}">Решение</button>
      <div id="solution${idx}" class="solution" hidden>${task.solution}</div>
    `;
    list.appendChild(li);
  });

  if (window.MathJax) MathJax.typesetPromise();

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sol = document.getElementById(btn.getAttribute('aria-controls'));
      const isOpen = sol.classList.toggle('open');
      if (isOpen) {
        sol.removeAttribute('hidden');
        btn.textContent = 'Скрыть';
        btn.setAttribute('aria-expanded', 'true');
        if (window.MathJax) MathJax.typesetPromise([sol]);
      } else {
        sol.setAttribute('hidden', '');
        btn.textContent = 'Решение';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
};
