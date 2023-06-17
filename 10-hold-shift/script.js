const inputBoxes = document.querySelectorAll("input");

// console.log(inputBoxes);
let BoxIndex = 0;
inputBoxes.forEach(inputBox => {

    inputBox.addEventListener("click", (e) => {
        // console.log(e.target.value);
        if (e.shiftKey) {
            let currentIndex = e.target.value;

            console.log(currentIndex);

            inputBoxes.forEach(inputBox => {
                if ((inputBox.value > currentIndex && inputBox.value < BoxIndex)
                    || (inputBox.value < currentIndex && inputBox.value > BoxIndex)) {
                    inputBox.checked = true;
                }
            })
        }
        else {
            BoxIndex = e.target.value;
            console.log(BoxIndex);
        }
    })
})

