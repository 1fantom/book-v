// Полная база из 50 вопросов (здесь я приведу часть, а остальное — по такому же шаблону)
const allQuestions = [
  { q: 'Найдите производную: \\(f(x) = x^3\\)', ans: '3x^{2}' },
  { q: 'Найдите производную: \\(f(x) = \\sin x\\)', ans: '\\cos x' },
  { q: 'Что означает геометрический смысл производной?', ans: 'угловой коэффициент касательной' },
  { q: 'Найдите производную: \\(f(x) = \\ln x\\)', ans: '\\frac{1}{x}' },
  { q: 'Найдите производную: \\(f(x) = e^{x}\\)', ans: 'e^{x}' },
  { q: 'Найдите производную: \\(f(x) = \\cos x\\)', ans: '-\\sin x' },
  { q: 'Найдите производную: \\(f(x) = \\tan x\\)', ans: '\\sec^{2} x' },
  { q: 'Найдите производную: \\(f(x) = \\sqrt{x}\\)', ans: '\\frac{1}{2\\sqrt{x}}' },
  { q: 'Найдите производную: \\(f(x) = \\frac{1}{x}\\)', ans: '-\\frac{1}{x^{2}}' },
  { q: 'Что такое дифференциал функции?', ans: 'линейное приближение изменения функции' },
  { q: 'Найдите производную: \\(f(x) = x^5 - 3x^2 + 7\\)', ans: '5x^{4} - 6x' },
  { q: 'Найдите производную: \\(f(x) = \\ln(\\sin x)\\)', ans: '\\frac{\\cos x}{\\sin x}' },
  { q: 'Найдите производную: \\(f(x) = \\arcsin x\\)', ans: '\\frac{1}{\\sqrt{1 - x^{2}}}' },
  { q: 'Найдите производную: \\(f(x) = \\arctan x\\)', ans: '\\frac{1}{1 + x^{2}}' },
  { q: 'Чему равна производная постоянной функции?', ans: '0' },
  { q: 'Найдите производную: \\(f(x) = x^2 \\cdot e^{x}\\)', ans: '2x e^{x} + x^{2} e^{x}' },
  { q: 'Найдите производную: \\(f(x) = \\sin^{2} x\\)', ans: '2 \\sin x \\cos x' },
  { q: 'Правило произведения для производных', ans: 'u\'v + uv\'' },
  { q: 'Правило частного для производных', ans: '\\frac{u\'v - uv\'}{v^{2}}' },
  { q: 'Найдите производную: \\(f(x) = \\frac{\\sin x}{x}\\)', ans: '\\frac{x \\cos x - \\sin x}{x^{2}}' },
  { q: 'Что показывает знак производной функции?', ans: 'направление изменения функции' },
  { q: 'Найдите производную: \\(f(x) = \\ln(x^2 + 1)\\)', ans: '\\frac{2x}{x^{2} + 1}' },
  { q: 'Найдите производную: \\(f(x) = e^{\\sin x}\\)', ans: 'e^{\\sin x} \\cos x' },
  { q: 'Найдите производную: \\(f(x) = \\sqrt{1 - x^2}\\)', ans: '-\\frac{x}{\\sqrt{1 - x^{2}}}' },
  { q: 'Найдите производную: \\(f(x) = \\tan^{-1}(x^2)\\)', ans: '\\frac{2x}{1 + x^{4}}' },
  { q: 'Найдите производную: \\(f(x) = x \\cdot \\ln x\\)', ans: '\\ln x + 1' },
  { q: 'Что такое производная по определению?', ans: 'предел отношения приращения функции к приращению аргумента' },
  { q: 'Найдите производную: \\(f(x) = \\cos^{3} x\\)', ans: '-3 \\cos^{2} x \\sin x' },
  { q: 'Найдите производную: \\(f(x) = \\ln(\\tan x)\\)', ans: '\\frac{1}{\\tan x} \\sec^{2} x' },
  { q: 'Найдите производную: \\(f(x) = (x^2 + 1)^5\\)', ans: '10x (x^{2} + 1)^{4}' },
  { q: 'Найдите производную: \\(f(x) = \\sin(x^2)\\)', ans: '2x \\cos(x^{2})' },
  { q: 'Что такое касательная к графику функции?', ans: 'прямая, касающаяся графика в одной точке' },
  { q: 'Найдите производную: \\(f(x) = \\frac{1}{\\sqrt{x}}\\)', ans: '-\\frac{1}{2x^{3/2}}' },
  { q: 'Найдите производную: \\(f(x) = \\log_{10} x\\)', ans: '\\frac{1}{x \\ln 10}' },
  { q: 'Найдите производную: \\(f(x) = \\sec x\\)', ans: '\\sec x \\tan x' },
  { q: 'Найдите производную: \\(f(x) = \\csc x\\)', ans: '-\\csc x \\cot x' },
  { q: 'Что такое точка экстремума?', ans: 'точка, в которой производная равна нулю и меняет знак' },
  { q: 'Найдите производную: \\(f(x) = \\ln(1 + e^{x})\\)', ans: '\\frac{e^{x}}{1 + e^{x}}' },
  { q: 'Найдите производную: \\(f(x) = x^{x}\\)', ans: 'x^{x} (\\ln x + 1)' },
  { q: 'Найдите производную: \\(f(x) = \\sin x + \\cos x\\)', ans: '\\cos x - \\sin x' },
  { q: 'Найдите производную: \\(f(x) = e^{3x}\\)', ans: '3 e^{3x}' },
  { q: 'Что такое производная высшего порядка?', ans: 'производная от производной функции' },
  { q: 'Найдите вторую производную: \\(f(x) = x^{3}\\)', ans: '6x' },
  { q: 'Найдите производную: \\(f(x) = \\ln |x|\\)', ans: '\\frac{1}{x}' },
  { q: 'Что такое дифференцируемость функции?', ans: 'существование конечной производной в точке' },
  { q: 'Найдите производную: \\(f(x) = \\sin(\\ln x)\\)', ans: '\\cos(\\ln x) \\frac{1}{x}' },
  { q: 'Найдите производную: \\(f(x) = \\cosh x\\)', ans: '\\sinh x' },
  { q: 'Найдите производную: \\(f(x) = \\sinh x\\)', ans: '\\cosh x' },
  { q: 'Что такое касательная плоскость к поверхности?', ans: 'плоскость, касающаяся поверхности в точке' }
];


// Количество вопросов в тесте
const questionsCount = 10;

const quizContainer = document.getElementById('quizArea');
const feedbackElem = document.getElementById('feedback');

let currentQuestionIndex = 0;
let correctCount = 0;
let quizQuestions = [];

// Функция для выбора случайных уникальных вопросов из базы
function selectRandomQuestions(all, count) {
  const shuffled = all.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function normalizeAnswer(str) {
  return str.trim().toLowerCase().replace(/\s+/g, '').replace(/[{}[\]]/g, '');
}

function showQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showResult();
    return;
  }

  const q = quizQuestions[currentQuestionIndex];
  const formulaMatch = q.q.match(/\\\((.*?)\\\)/);
  const questionText = formulaMatch ? q.q.replace(/\\\((.*?)\\\)/, '').trim() : q.q;
  const formula = formulaMatch ? formulaMatch[1] : '';

  quizContainer.innerHTML = `
    <p><strong>Вопрос ${currentQuestionIndex + 1} из ${quizQuestions.length}:</strong></p>
    <p style="margin-bottom: 0.3em;">${questionText}</p>
    ${formula ? `<p style="font-size:1.3rem; margin-top: 0;">$$${formula}$$</p>` : ''}
    <input type="text" id="quizAnswer" placeholder="Введите ответ в LaTeX формате" autocomplete="off" />
    <button id="submitAnswer">Ответить</button>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise().catch(console.error);
  }

  const answerInput = document.getElementById('quizAnswer');
  const submitBtn = document.getElementById('submitAnswer');

  submitBtn.onclick = () => checkAnswer(answerInput, submitBtn);
  answerInput.onkeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkAnswer(answerInput, submitBtn);
    }
  };

  feedbackElem.textContent = '';
  answerInput.focus();
}

function checkAnswer(inputElem, buttonElem) {
  const userAnswerRaw = inputElem.value;
  if (!userAnswerRaw.trim()) {
    feedbackElem.style.color = 'crimson';
    feedbackElem.textContent = 'Пожалуйста, введите ответ 💜';
    return;
  }

  const userAnswer = normalizeAnswer(userAnswerRaw);
  const correctAnswer = normalizeAnswer(quizQuestions[currentQuestionIndex].ans);

  if (userAnswer === correctAnswer) {
    correctCount++;
    feedbackElem.style.color = 'green';
    feedbackElem.textContent = 'Правильно! Ты молодец! 💖';
  } else {
    feedbackElem.style.color = 'crimson';
    feedbackElem.textContent = `Неправильно. Правильный ответ: ${quizQuestions[currentQuestionIndex].ans}`;
  }

  inputElem.disabled = true;
  buttonElem.disabled = true;

  setTimeout(() => {
    currentQuestionIndex++;
    inputElem.disabled = false;
    buttonElem.disabled = false;
    inputElem.value = '';
    feedbackElem.textContent = '';
    showQuestion();
  }, 2500);
}

function showResult() {
  quizContainer.innerHTML = `
    <h2>Тест завершён!</h2>
    <p>Правильных ответов: <strong>${correctCount}</strong> из <strong>${quizQuestions.length}</strong>.</p>
    <button id="retryBtn">Пройти ещё раз</button>
  `;
  feedbackElem.textContent = '';

  if (window.MathJax) {
    MathJax.typesetPromise().catch(console.error);
  }

  document.getElementById('retryBtn').onclick = () => {
    currentQuestionIndex = 0;
    correctCount = 0;
    quizQuestions = selectRandomQuestions(allQuestions, questionsCount);
    showQuestion();
  };
}

window.addEventListener('DOMContentLoaded', () => {
  quizQuestions = selectRandomQuestions(allQuestions, questionsCount);
  showQuestion();
});
