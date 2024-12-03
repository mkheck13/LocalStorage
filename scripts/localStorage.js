// Storing data with local storage
// localStorage.setItem('key', 'value');

// Retreving data from local storage
// let value = localStorage.getItem('key');

// We will be removing data from local storage
// localStorage.removeItem('key');

function saveToLocalStorage(name){
    console.log("This is name inside of our function " + name);

    let nameArr = getFromLocalStorage();

    if(!nameArr.includes(name)){
        nameArr.push(name);
    }

    localStorage.setItem('Names', JSON.stringify(nameArr));
};

function getFromLocalStorage(){
    let localStorageData = localStorage.getItem('Names');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
};

function removeFromLocalStorage(name){
    let localStorageData = getFromLocalStorage();

    let nameIndex = localStorageData.indexOf(name);

    localStorageData.splice(nameIndex, 1);

    localStorage.setItem('Names', JSON.stringify(localStorageData));
};



export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage }