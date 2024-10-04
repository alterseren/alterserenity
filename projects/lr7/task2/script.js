let score = 0;
let currentQuestion;
let answerElement = document.getElementById('answer');
let questionElement = document.getElementById('question');
let scoreElement = document.getElementById('score');
let resultElement = document.getElementById('result');

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentQuestion = { num1, num2 };
    questionElement.innerText = `${num1} × ${num2} = `;
    answerElement.value = '';
    resultElement.innerText = '';
}

document.getElementById('checkButton').addEventListener('click', function() {
    const userAnswer = parseInt(answerElement.value);
    const correctAnswer = currentQuestion.num1 * currentQuestion.num2;

    if (userAnswer === correctAnswer) {
        resultElement.innerText = "Хороші матиматичні здібності кассиром будеш";
        score++;
    } else {
        resultElement.innerText = `Фіговий з тебе матиматик «${correctAnswer}»`;
    }

    scoreElement.innerText = `Загалом: ${score}`;
});

document.getElementById('nextButton').addEventListener('click', generateQuestion);


generateQuestion();
