window.addEventListener('load', updateTime);
function updateTime() {
    let date = new Date();
    day.innerHTML = getWeekeDay(date);
    hour.innerHTML = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    minute.innerHTML = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    seconds.innerHTML = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    setTimeout(updateTime, 1000);
}

function getWeekeDay(date) {
    let weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

    return date.getDay() == 0 ? weekDays[weekDays.length - 1] : weekDays[date.getDay() - 1];
}



