let score = 0;
let currentQuestion;
let optionsElement = document.getElementById('options');
let questionElement = document.getElementById('question');
let scoreElement = document.getElementById('score');
let resultElement = document.getElementById('result');
let nextButton = document.getElementById('nextButton');

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentQuestion = { num1, num2 };
    questionElement.innerText = `${num1} × ${num2} = `;


    const correctAnswer = num1 * num2;
    let options = [correctAnswer];
    while (options.length < 4) {
        let option = Math.floor(Math.random() * 100) + 1;
        if (!options.includes(option)) {
            options.push(option);
        }
    }


    options = options.sort(() => Math.random() - 0.5);


    optionsElement.innerHTML = '';
    options.forEach(option => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = option;
        radio.id = `option${option}`;
        radio.addEventListener('change', checkAnswer);

        const label = document.createElement('label');
        label.htmlFor = `option${option}`;
        label.innerText = option;

        optionsElement.appendChild(radio);
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement('br'));
    });

    resultElement.innerText = '';
    nextButton.disabled = true;
}

function checkAnswer(event) {
    const selectedAnswer = parseInt(event.target.value);
    const correctAnswer = currentQuestion.num1 * currentQuestion.num2;

    if (selectedAnswer === correctAnswer) {
        resultElement.innerText = "Правильно!";
        score++;
    } else {
        resultElement.innerText = `Анлак, правельна відповідь: «${correctAnswer}»`;
    }

    scoreElement.innerText = `Загальний рахунок: ${score}`;
    nextButton.disabled = false;

    const radios = document.getElementsByName('option');
    radios.forEach(radio => {
        radio.disabled = true;
    });
}

nextButton.addEventListener('click', generateQuestion);


generateQuestion();
