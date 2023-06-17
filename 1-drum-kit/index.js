"use strict"

// function to play a sound using keyvalue

function playDrum(val)
{
    const kick = document.querySelector(`audio[data-key="${val}"]`);
    
    if(kick!="null")
    {
        kick.currentTime = 0;   // to reset to start
        kick.play();
        const kickdiv = document.querySelector(`div [data-key="${val}"]`);
        kickdiv.classList.add('playing');

        // ye transition end h na ki transitioned ullu
        kickdiv.addEventListener("transitionend",function(){
            kickdiv.classList.remove('playing');
        });
    }
}


const keys = document.querySelectorAll('.key');

keys.forEach(key=>{
        key.addEventListener("click",()=>
        {
            const keyValue = key.getAttribute("data-key");
            playDrum(keyValue);
        });
});


document.addEventListener("keydown",(e)=>{
    playDrum(e.keyCode);
});


