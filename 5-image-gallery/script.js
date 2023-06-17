const panels = document.querySelectorAll('.panel');
function toggleOpen()
{
    const openDiv = document.querySelector(".open");
    if(openDiv!=null && openDiv!=this)
    openDiv.classList.remove("open");
    this.classList.toggle("open");
}

panels.forEach((panel)=>{
    panel.addEventListener("click",toggleOpen);
    panel.addEventListener("transitionend",(e)=>{
        if(e.propertyName.includes('flex-grow'))
        {
            panel.classList.toggle("open-active");
        }
    });
});
