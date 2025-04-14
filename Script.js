// DOM Elements
const loginContainer = document.getElementById('login-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const questionCounterElement = document.getElementById('current-question');
const playerNameElement = document.getElementById('player-name');
const resultNameElement = document.getElementById('result-name');
const finalScoreElement = document.getElementById('final-score-value');

// Game variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let playerName = '';

// Questions array with all 20 questions
const questions = [
  {
    question: 'Who won the first FIFA World Cup in 1930?',
    answers: [
      { text: 'Argentina', correct: false },
      { text: 'Brazil', correct: false },
      { text: 'Uruguay', correct: true },
      { text: 'Italy', correct: false }
    ]
  },
  {
    question: 'Which country has won the most FIFA World Cups?',
    answers: [
      { text: 'Germany', correct: false },
      { text: 'Argentina', correct: false },
      { text: 'France', correct: false },
      { text: 'Brazil', correct: true }
    ]
  },
  {
    question: 'Who was the top scorer in the 2022 FIFA World Cup?',
    answers: [
      { text: 'Olivier Giroud', correct: false },
      { text: 'Kylian Mbappé', correct: true },
      { text: 'Lionel Messi', correct: false },
      { text: 'Álvaro Morata', correct: false }
    ]
  },
  {
    question: 'Which country hosted the 2018 FIFA World Cup?',
    answers: [
      { text: 'Brazil', correct: false },
      { text: 'Qatar', correct: false },
      { text: 'Russia', correct: true },
      { text: 'Germany', correct: false }
    ]
  },
  {
    question: 'Who scored the winning goal in the 2014 World Cup final?',
    answers: [
      { text: 'Lionel Messi', correct: false },
      { text: 'Mario Götze', correct: true },
      { text: 'Thomas Müller', correct: false },
      { text: 'Mesut Özil', correct: false }
    ]
  },
  {
    question: 'How many teams competed in the 2022 FIFA World Cup?',
    answers: [
      { text: '32', correct: true },
      { text: '24', correct: false },
      { text: '36', correct: false },
      { text: '40', correct: false }
    ]
  },
  {
    question: 'Which country will host the 2026 FIFA World Cup?',
    answers: [
      { text: 'Canada', correct: false },
      { text: 'Mexico', correct: false },
      { text: 'USA', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'Which African country reached the semi-final of the World Cup for the first time in 2022?',
    answers: [
      { text: 'Nigeria', correct: false },
      { text: 'Senegal', correct: false },
      { text: 'Morocco', correct: true },
      { text: 'Ghana', correct: false }
    ]
  },
  {
    question: 'Who won the Golden Ball (best player) at the 2014 FIFA World Cup?',
    answers: [
      { text: 'Neymar', correct: false },
      { text: 'Thomas Müller', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'James Rodríguez', correct: false }
    ]
  },
  {
    question: 'Which player has scored the most goals in World Cup history?',
    answers: [
      { text: 'Miroslav Klose', correct: true },
      { text: 'Ronaldo (Brazil)', correct: false },
      { text: 'Pelé', correct: false },
      { text: 'Lionel Messi', correct: false }
    ]
  },
  {
    question: 'Who was the youngest player to score in a World Cup final?',
    answers: [
      { text: 'Lionel Messi', correct: false },
      { text: 'Kylian Mbappé', correct: true },
      { text: 'Pelé', correct: false },
      { text: 'Michael Owen', correct: false }
    ]
  },
  {
    question: 'In which year did France first win the FIFA World Cup?',
    answers: [
      { text: '1998', correct: true },
      { text: '2002', correct: false },
      { text: '2018', correct: false },
      { text: '1986', correct: false }
    ]
  },
  {
    question: 'Which country has hosted the World Cup twice?',
    answers: [
      { text: 'Italy', correct: false },
      { text: 'Brazil', correct: false },
      { text: 'Germany', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'How many World Cups has Germany won?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'Who scored a hat-trick in the 1966 final for England?',
    answers: [
      { text: 'Geoff Hurst', correct: true },
      { text: 'Bobby Charlton', correct: false },
      { text: 'Gary Lineker', correct: false },
      { text: 'Alan Shearer', correct: false }
    ]
  },
  {
    question: 'What is the fastest goal ever scored in a World Cup match?',
    answers: [
      { text: '11 seconds', correct: false },
      { text: '10.8 seconds', correct: true },
      { text: '13 seconds', correct: false },
      { text: '12.1 seconds', correct: false }
    ]
  },
  {
    question: 'Which country was the first from Asia to reach the semi-finals?',
    answers: [
      { text: 'Japan', correct: false },
      { text: 'South Korea', correct: true },
      { text: 'Iran', correct: false },
      { text: 'Saudi Arabia', correct: false }
    ]
  },
  {
    question: 'How many goals did Just Fontaine score in a single World Cup (1958)?',
    answers: [
      { text: '10', correct: false },
      { text: '13', correct: true },
      { text: '12', correct: false },
      { text: '11', correct: false }
    ]
  },
  {
    question: 'Who was the captain of Italy during their 2006 World Cup win?',
    answers: [
      { text: 'Alessandro Del Piero', correct: false },
      { text: 'Fabio Cannavaro', correct: true },
      { text: 'Francesco Totti', correct: false },
      { text: 'Andrea Pirlo', correct: false }
    ]
  },
  {
    question: 'Which stadium hosted the 2022 FIFA World Cup final?',
    answers: [
      { text: 'Lusail Stadium', correct: true },
      { text: 'Al Bayt Stadium', correct: false },
      { text: 'Education City Stadium', correct: false },
      { text: 'Khalifa International Stadium', correct: false }
    ]
  }
];

// Event Listeners
submitButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});
restartButton.addEventListener('click', resetGame);

// Game functions
function startGame() {
  playerName = playerNameElement.value.trim();
  if (!playerName) {
    alert('Please enter your name to start the quiz!');
    return;
  }
  
  loginContainer.classList.add('hide');
  quizContainer.classList.remove('hide');
  
  // Shuffle all questions and pick first 5
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  questionCounterElement.innerText = currentQuestionIndex + 1;
  
  setNextQuestion();
}

function resetGame() {
  resultContainer.classList.add('hide');
  loginContainer.classList.remove('hide');
  playerNameElement.value = '';
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  questionCounterElement.innerText = currentQuestionIndex + 1;
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  
  if (correct) {
    score++;
    scoreElement.innerText = score;
  }
  
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    nextButton.classList.remove('hide');
  } else {
    endGame();
  }
}

function endGame() {
  quizContainer.classList.add('hide');
  resultContainer.classList.remove('hide');
  resultNameElement.innerText = playerName;
  finalScoreElement.innerText = `${score}/5`;
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// Initialize the game when loaded
window.addEventListener('DOMContentLoaded', () => {
  // Initialization code if needed
});