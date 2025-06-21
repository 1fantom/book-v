// Полная база из 50 вопросов (здесь я приведу часть, а остальное — по такому же шаблону)
const allQuestions = [
  { q: 'Найдите неопределённый интеграл: \\(\\int x^2 \\, dx\\)', ans: '\\frac{x^{3}}{3} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\sin x \\, dx\\)', ans: '-\\cos x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int e^{x} \\, dx\\)', ans: 'e^{x} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{1}{x} \\, dx\\)', ans: '\\ln |x| + C' },
  { q: 'Найдите определённый интеграл: \\(\\int_0^1 x \\, dx\\)', ans: '\\frac{1}{2}' },
  { q: 'Что такое первообразная функции?', ans: 'функция, производная которой равна заданной' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\cos x \\, dx\\)', ans: '\\sin x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{1}{1+x^2} \\, dx\\)', ans: '\\arctan x + C' },
  { q: 'Формула интегрирования по частям', ans: '\\int u \\, dv = uv - \\int v \\, du' },
  { q: 'Найдите неопределённый интеграл: \\(\\int x e^{x} \\, dx\\)', ans: '(x - 1) e^{x} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{\\sqrt{1 - x^{2}}}\\)', ans: '\\arcsin x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\sec^{2} x \\, dx\\)', ans: '\\tan x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x^{2} + a^{2}}\\)', ans: '\\frac{1}{a} \\arctan \\frac{x}{a} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\ln x \\, dx\\)', ans: 'x \\ln x - x + C' },
  { q: 'Что такое определённый интеграл?', ans: 'площадь под графиком функции на промежутке' },
  { q: 'Найдите неопределённый интеграл: \\(\\int x \\cos x \\, dx\\)', ans: '\\cos x + x \\sin x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{\\sqrt{x}}\\)', ans: '2 \\sqrt{x} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\sinh x \\, dx\\)', ans: '\\cosh x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x^{2} - 1}\\)', ans: '\\frac{1}{2} \\ln \\left| \\frac{x - 1}{x + 1} \\right| + C' },
  { q: 'Что такое интеграл по замене переменной?', ans: 'замена переменной для упрощения интеграла' },
  { q: 'Найдите неопределённый интеграл: \\(\\int e^{2x} \\, dx\\)', ans: '\\frac{1}{2} e^{2x} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\tan x \\, dx\\)', ans: '-\\ln |\\cos x| + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int x^{n} \\, dx\\), где \\(n \\neq -1\\)', ans: '\\frac{x^{n+1}}{n+1} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x^{2} + 1}\\)', ans: '\\arctan x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{x}{x^{2} + 1} \\, dx\\)', ans: '\\frac{1}{2} \\ln (x^{2} + 1) + C' },
  { q: 'Что такое площадь под кривой?', ans: 'значение определённого интеграла' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\cosh x \\, dx\\)', ans: '\\sinh x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x}\\)', ans: '\\ln |x| + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{\\sqrt{x^{2} + a^{2}}}\\)', ans: '\\ln \\left| x + \\sqrt{x^{2} + a^{2}} \\right| + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int x e^{x^{2}} \\, dx\\)', ans: '\\frac{1}{2} e^{x^{2}} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x^{2} + 4x + 5}\\)', ans: '\\arctan (x + 2) + C' },
  { q: 'Что такое интеграл Римана?', ans: 'предел суммы прямоугольников под кривой' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x^{2} - a^{2}}\\)', ans: '\\frac{1}{2a} \\ln \\left| \\frac{x - a}{x + a} \\right| + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\arctan x \\, dx\\)', ans: 'x \\arctan x - \\frac{1}{2} \\ln (1 + x^{2}) + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int x^{2} e^{x} \\, dx\\)', ans: '(x^{2} - 2x + 2) e^{x} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{1}{x \\ln x} \\, dx\\)', ans: '\\ln |\\ln x| + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\csc^{2} x \\, dx\\)', ans: '-\\cot x + C' },
  { q: 'Что такое среднее значение функции по интегралу?', ans: '\\frac{1}{b-a} \\int_a^b f(x) dx' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\ln (x^{2} + 1) \\, dx\\)', ans: 'x \\ln (x^{2} + 1) - 2x + 2 \\arctan x + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{x}{\\sqrt{1 - x^{2}}} \\, dx\\)', ans: '-\\sqrt{1 - x^{2}} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\sin^{2} x \\, dx\\)', ans: '\\frac{x}{2} - \\frac{\\sin 2x}{4} + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{1}{\\cos x} \\, dx\\)', ans: '\\ln |\\tan(\\frac{x}{2} + \\frac{\\pi}{4})| + C' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x^{2} + 1} \\)', ans: '\\arctan x + C' },
  { q: 'Что такое интегральная сумма?', ans: 'сумма площадей прямоугольников под графиком функции' },
  { q: 'Найдите неопределённый интеграл: \\(\\int \\frac{dx}{x^{2} + 2x + 2} \\)', ans: '\\arctan (x + 1) + C' },
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
