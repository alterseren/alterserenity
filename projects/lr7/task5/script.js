function initCaptcha(numDigits) {
  const captchaContainer = document.getElementById("captcha");
  const captchaDigits = [];

  for (let i = 0; i < numDigits; i++) {
    const digit = Math.floor(Math.random() * 10);
    captchaDigits.push(digit);
  }

  captchaContainer.innerHTML = "";
  captchaDigits.forEach((digit) => {
    const span = document.createElement("span");
    span.innerText = digit;
    captchaContainer.appendChild(span);
  });

  return captchaDigits.join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const captchaLength = 5;
  let generatedCaptcha = initCaptcha(captchaLength);

  const checkCaptchaButton = document.getElementById("checkCaptcha");
  const userInput = document.getElementById("userInput");
  const resultDiv = document.getElementById("result");

  checkCaptchaButton.addEventListener("click", () => {
    const userCaptcha = userInput.value.trim();

    if (userCaptcha === generatedCaptcha) {
      resultDiv.innerText = "Правильно!";
      resultDiv.style.color = "green";
    } else {
      resultDiv.innerText = `помилка прав від: ${generatedCaptcha}`;
      resultDiv.style.color = "red";
    }

    generatedCaptcha = initCaptcha(captchaLength);
    userInput.value = "";
  });
});
