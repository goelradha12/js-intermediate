"use strict";

const addButton = document.querySelector("#add");


const updateData = ()=>{
    const textAreaData = document.querySelectorAll("textarea");
    const notes=[];

    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    });

    localStorage.setItem("notes",JSON.stringify(notes));
};
function addNewNote(text= "") {
  const note = document.createElement("div");
  note.classList.add("note");

  const HTMLData = 
   `<div class="operation">
    <button class="edit"> <i class="fas fa-edit"></i> </button>
    <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
    </div>
    <div class="main ${text? " ": "hidden"}"></div>
    <textarea class="${text? "hidden": ""}"></textarea>`;


    note.insertAdjacentHTML("afterbegin",HTMLData);

//    console.log(note);
    // Taking reference of various elements
    const editButton = note.querySelector(".edit");
    const delButton = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    // Deleting the node
    delButton.addEventListener("click",()=>{
        note.remove();
        updateData();
    });

    textArea.value = text;
    mainDiv.innerHTML = text;
    // edit button
    editButton.addEventListener("click",()=>{
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("change",(event)=>{
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateData();
    });
    
    document.body.appendChild(note);
}

const notes = JSON.parse(localStorage.getItem("notes"));
if(notes)
{
    notes.forEach(element => {
        addNewNote(element);
    });
}

addButton.addEventListener("click", () => addNewNote());
