const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector(".bar-seconds")
const romanArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]
const barElement = []
const numberElement = []
const handHours = document.querySelector('.hand.hours')
const handMinutes = document.querySelector('.hand.minutes')
const handSeconds = document.querySelector('.hand.seconds')
for(let i = 0; i <= 11; i++){
    numberElement.push(
        `<span style="--index:${i + 1};"><p>${romanArray[i]}</p></span>`
    );
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""))
for(let i = 1; i <= 60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    )
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""))

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    handHours.style.transform = `rotate(${hRotation}deg)`;
    handMinutes.style.transform = `rotate(${mRotation}deg)`;
    handSeconds.style.transform = `rotate(${sRotation}deg)`;

}
displayTime()
setInterval(displayTime, 9000);

