function addZero(time) {
  return time < 10 ? "0" + time : time;
}

let startTime = new Date();

function updateClock() {
  let now = new Date();
  let hours = addZero(now.getHours());
  let minutes = addZero(now.getMinutes());
  let seconds = addZero(now.getSeconds());
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

updateClock();

let clockInterval = setInterval(updateClock, 1000);

setTimeout(() => {
  alert("Пройшла ще одна хвилина!");
  clearInterval(clockInterval);
}, 60000);
