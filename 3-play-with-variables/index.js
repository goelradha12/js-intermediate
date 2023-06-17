"use strict"

const values = document.querySelectorAll("input");


function update_screen()
{
    const suffix = this.dataset.suffix || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
values.forEach(val=>{
    val.addEventListener("change",update_screen);
    val.addEventListener("mousemove",update_screen);
});