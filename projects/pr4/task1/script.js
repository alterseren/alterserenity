
function addZero(time) {
    return time < 10 ? '0' + time : time;
}


let hours = 9;
let minutes = 5;
let seconds = 3;


let formattedTime = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);


document.getElementById('formattedTime').innerText = formattedTime;
