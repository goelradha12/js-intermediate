const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];


function saveItems(e) {
    e.preventDefault();
    const text = this.querySelector("[name=item]");
    // console.log(text.value);
    const item = {
        text: `${text.value}`,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
    // console.table(items);
}

function populateList(plates = [], plateList) {
    const values = plates.map((item, index) => {
        return `
        <li>
        <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? "checked" : ""}/>
        <label for="item${index}">${item.text}</label>
        </li>
        `;
    }).join('');
    plateList.innerHTML = values;
}

function toggleDone(e) {
    if(!e.target.matches("input")) return;
    const indexVal = e.target.dataset.index;
    items[indexVal].done = !items[indexVal].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items,itemsList); 
    // console.log(indexVal);
}

itemsList.addEventListener("click", toggleDone);
addItems.addEventListener("submit", saveItems);
populateList(items, itemsList);


// for buttons

const resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click",()=>localStorage.removeItem("items"));