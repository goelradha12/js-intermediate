"use strict"

const secondHand = document.getElementById('second');
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const hands = document.querySelectorAll('.hand');

hands.forEach(hand =>{
    hand.style.transition = "transform cubic-bezier(0.49, 1.54, 0.4, 1.32)";
})

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDegree = ((seconds/60)*360 + 90);
    const minDegree = ((minutes/60)*360 +90);
    const hourDegree = ((hours/12)*360 +90);

    secondHand.style.transform = `rotate(${secDegree}deg)`;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate, 1000);