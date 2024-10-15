
let date = new Date(2021, 1, 20, 3, 12);
document.getElementById('date-display').textContent = date.toString();


function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
document.getElementById('weekday-display').textContent = getWeekDay(date);


function getLastDayOfMonth(year, month) {
    let lastDay = new Date(year, month + 1, 0);
    return lastDay.getDate();
}
document.getElementById('lastday-display').textContent = getLastDayOfMonth(2021, 1);


function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.floor(diff / 1000);
}
document.getElementById('seconds-display').textContent = getSecondsToTomorrow();


function formatDate(date) {
    let diff = new Date() - date;
    
    if (diff < 1000) {
        return "прямо зараз";
    }
    
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + " сек. назад";
    }
    
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + " хв. назад";
    }

    let d = date;
    let day = ('0' + d.getDate()).slice(-2);
    let month = ('0' + (d.getMonth() + 1)).slice(-2);
    let year = ('' + d.getFullYear()).slice(-2);
    let hours = ('0' + d.getHours()).slice(-2);
    let minutes = ('0' + d.getMinutes()).slice(-2);

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

document.getElementById('formatted-display').textContent = formatDate(date);
