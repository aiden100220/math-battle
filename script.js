let num1, num2;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 50);
  num2 = Math.floor(Math.random() * 50);

  document.getElementById("question").innerText =
    `${num1} + ${num2} = ?`;
}

function checkAnswer() {
  let userAnswer = Number(document.getElementById("answer").value);
  let correct = num1 + num2;

  if (userAnswer === correct) {
    score++;
    document.getElementById("result").innerText = "정답!";
  } else {
    document.getElementById("result").innerText = "오답!";
  }

  document.getElementById("score").innerText = score;
  document.getElementById("answer").value = "";

  generateQuestion();
}

generateQuestion();
