const quizData = [
  {
    question: "🛠️ You're inspecting a jet engine and AI alerts you to a potential issue. What do you do first?",
    options: [
      "Check the AI’s diagnostics report before touching anything",
      "Ignore it and hope the jet survives",
      "Call your AI assistant 'Jarvis' and ask politely",
      "Take a selfie with the engine"
    ],
    answer: "Check the AI’s diagnostics report before touching anything"
  },
  {
    question: "🤖 AI suggests replacing a part that looks fine. What’s the best approach?",
    options: [
      "Trust the AI and follow the maintenance protocol",
      "Argue with the AI and do it your way",
      "Throw a wrench at it to see what happens",
      "Ask the coffee machine for advice"
    ],
    answer: "Trust the AI and follow the maintenance protocol"
  },
  {
    question: "🎯 The AI predicts a minor failure in 3 days. How do you prepare?",
    options: [
      "Schedule maintenance and order parts in advance",
      "Ignore it and plan a karaoke night",
      "Call the AI an overachiever",
      "Start practicing your juggling skills"
    ],
    answer: "Schedule maintenance and order parts in advance"
  },
  {
    question: "💡 AI offers to help optimize engine efficiency. What should you do?",
    options: [
      "Review its recommendations and implement the safe ones",
      "Tell it to mind its own business",
      "Rename it 'Captain AI' and salute",
      "Use it as a coaster for your mug"
    ],
    answer: "Review its recommendations and implement the safe ones"
  },
  {
    question: "⚡ Future AI tools may help technicians by:",
    options: [
      "Predicting failures before they happen",
      "Making jokes about your tool skills",
      "Brewing perfect tea on deck",
      "Repainting the aircraft with emojis"
    ],
    answer: "Predicting failures before they happen"
  },
  {
    question: "🛩️ Your AI assistant flags an unusual reading mid-flight. How do you react?",
    options: [
      "Follow standard emergency protocols and consult the AI report",
      "Ignore it and hope for the best",
      "Ask it if it wants a promotion",
      "Take a nap and dream about drones"
    ],
    answer: "Follow standard emergency protocols and consult the AI report"
  },
  {
    question: "🎮 Which of these best describes AI in Air Engineering?",
    options: [
      "A helpful teammate that never sleeps",
      "A cranky mechanic who hides your tools",
      "A DJ on deck playing 'Eye of the Tiger'",
      "A paperweight that talks"
    ],
    answer: "A helpful teammate that never sleeps"
  }
];

// Quiz state
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progress-bar');

// Load a question
function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  nextBtn.classList.add('hidden');

  q.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.style.whiteSpace = 'normal';
    button.style.wordWrap = 'break-word';
    button.style.textAlign = 'center';
    button.onclick = () => checkAnswer(option);
    optionsEl.appendChild(button);
  });

  scoreEl.textContent = `Score: ${score}/${quizData.length}`;
  progressBar.style.width = `${(currentQuestion / quizData.length) * 100}%`;
}

// Check the selected answer
function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    feedbackEl.textContent = "✅ Correct! Well done!";
    score++;
  } else {
    feedbackEl.textContent = `❌ Wrong! The correct answer is: "${correct}"`;
  }

  // Disable all buttons after selecting
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  nextBtn.classList.remove('hidden');
}

// Next question
nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz Completed! 🎉";
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';
    scoreEl.textContent = `Final Score: ${score}/${quizData.length}`;
    progressBar.style.width = "100%";
    nextBtn.classList.add('hidden');
  }
});

// Initialize first question
loadQuestion();
