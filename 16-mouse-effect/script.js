const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 30;  // Constricting the value to 100

function shadowGame(e) {
    // Getting the width and height of area we will work on
    const width = hero.offsetWidth;
    const height = hero.offsetWidth;
    // Getting the point where our mouse is present
    let x = e.offsetX;
    let y = e.offsetY;

    // Sometimes target and this may be different. 
    if(this!== e.target) {
        x = x+e.target.offsetLeft;
        y += e.target.offsetTop; 
    }

    // Now values will be confined within walk
    const xWalk = (x/width * walk) - (walk/2);
    const yWalk = (y/height * walk) - (walk/2);


    text.style.textShadow = `${xWalk * -1}px ${yWalk *-1}px 0 rgb(199, 186, 186)`;

    // console.log(x,y);
    // console.log(width, height);
}

hero.addEventListener("mousemove",shadowGame);