const quizData = [
{
question: "What is one real use of AI in military aircraft maintenance?",
options: [
"Predicting failures before they happen",
"Changing the aircraft’s paint colour",
"Ordering takeaway for the squad",
"Writing breakup texts"
],
answer: "Predicting failures before they happen"
},
{
question: "Which description best fits AI in engineering?",
options: [
"A helpful teammate that never sleeps",
"A grumpy mechanic who steals your tools",
"A seagull with a laptop",
"A talking toolbox"
],
answer: "A helpful teammate that never sleeps"
},
{
question: "Why is AI useful for analysing aircraft sensor data?",
options: [
"It can analyse thousands of inputs instantly",
"It gets bored easily",
"It loves spreadsheets",
"It wants to impress the Chief"
],
answer: "It can analyse thousands of inputs instantly"
},
{
question: "What is one real role AI plays in UAV (drone) operations?",
options: [
"Assisting with autonomous navigation",
"Delivering birthday cakes",
"Filming TikToks for the squad",
"Avoiding seagulls with attitude"
],
answer: "Assisting with autonomous navigation"
},
{
question: "Why are militaries adopting AI for decision-making support?",
options: [
"To process information faster than humans",
"Because robots demanded union breaks",
"To replace coffee breaks",
"For better karaoke suggestions"
],
answer: "To process information faster than humans"
},
{
question: "What’s a realistic benefit of AI-assisted diagnostics?",
options: [
"Faster detection of faults",
"Makes the aircraft go 'pew pew'",
"Automatically cleans the hangar",
"Gives motivational speeches"
],
answer: "Faster detection of faults"
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
