const day = document.querySelector(".date");
const time = document.querySelector(".time")

function getDay(){
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    return daysOfWeek[dayOfWeek];
}

function getCurrentUTCTime(){
    const currentDate = new Date();
    return currentDate.getTime();
}

day.innerHTML = getDay();
time.innerHTML = getCurrentUTCTime();

console.log(getDay());
console.log(getCurrentUTCTime())