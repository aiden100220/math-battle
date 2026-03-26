let num1, num2;
let score = 0;
let aiScore = 0;
timeLeft = 70;
timeleft2 =70;

let mode = "";
let aiInterval;
let timerInterval;

// 문제 생성
function generateQuestion() {
  num1 = Math.floor(Math.random() * 50);
  num2 = Math.floor(Math.random() * 50);
  document.getElementById("question").innerText =
    `${num1} + ${num2} = ?`;
}

// 게임 시작
function startGame(selectedMode) {
  mode = selectedMode;

  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";

  score = 0;
  aiScore = 0;
  timeLeft = 60;
  timeleft2 =70;
  
  document.getElementById("score").innerText = score;
  document.getElementById("aiScore").innerText = aiScore;
  document.getElementById("timer").innerText = "시간: " + timeleft2;

  if (mode === "ai") {
    document.getElementById("modeTitle").innerText = "AI 배틀";
    document.getElementById("aiScoreText").style.display = "block";

    // AI 자동 점수 증가
    aiInterval = setInterval(() => {
      aiScore++;
      document.getElementById("aiScore").innerText = aiScore;
    }, 2000); // 2초마다 점수
  } else {
    document.getElementById("modeTitle").innerText = "타임어택";
  }

  // 타이머
  timerInterval = setInterval(() => {
    timeleft2--;
   
      // document.getElementById("timer").innerText = "시간: " + timeleft2;
    document.getElementById("timer").innerText = "aaa: " + timeleft2;
    
    if (timeleft2 <= 0) {
      endGame();
    }
  }, 1000);

  generateQuestion();
}

// 정답 체크
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

// 게임 종료
function endGame() {
  clearInterval(timerInterval);
  clearInterval(aiInterval);

  if (mode === "ai") {
    if (score > aiScore) {
      alert("승리!");
    } else if (score < aiScore) {
      alert("패배!");
    } else {
      alert("무승부!");
    }
  } else {
    alert("최종 점수: " + score);
  }
}
