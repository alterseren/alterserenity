
function addZero(time) {
  return time < 10 ? '0' + time : time;
}

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  let display = `${addZero(seconds)}`;


  if (seconds === 0) {
      display = `${addZero(minutes)} хвилин`;
  }

 
  if (minutes === 0 && seconds === 0) {
      display = `${addZero(hours)} годин`;
  }

  document.getElementById('clock').innerText = display;
}


updateClock();


setInterval(updateClock, 1000);
