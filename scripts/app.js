
import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "./localStorage.js";

const inputField = document.getElementById('storageInput');
const addToStorageBtn = document.getElementById('addToStorageBtn');
const getFromStorageBtn = document.getElementById('getFromStorageBtn');
const storedValue = document.getElementById('storedValue');

addToStorageBtn.addEventListener("click", function(){
    let userInput = inputField.value;
    saveToLocalStorage(userInput);
});

getFromStorageBtn.addEventListener("click", function(){
    createElements();
});

function createElements(){
    let studentNames = getFromLocalStorage();
    console.log(studentNames);

    studentNames.map(names => {
        console.log(names);

        let p = document.createElement('p');

        p.innerText = names;

        let removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'btn btn-danger';
        removeButton.innerText = "Delete Name";

        removeButton.addEventListener("click", function(){
            removeFromLocalStorage(names);
            p.remove();
        })

        p.appendChild(removeButton);

        storedValue.appendChild(p);
    })
}