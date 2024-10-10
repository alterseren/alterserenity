
function addZero(time) {
  return time < 10 ? '0' + time : time;
}


function updateClock() {
  const now = new Date();
  const hours = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());

  document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}


updateClock();


document.getElementById('updateButton').addEventListener('click', updateClock);
