"use strict"
const hero = document.getElementById('hero');


let images= ['./images/1.png','./images/2.png','./images/3.png','./images/4.png','./images/5.png'];
let count =1;
function changeImage() {
    hero.style.backgroundImage = `url(${images[count]})`;
    count++;
    count =  count%5;

  
}

let todaydate = new Date();
hero.innerText = `${todaydate.getDate()}`;

setInterval(changeImage, 3000);