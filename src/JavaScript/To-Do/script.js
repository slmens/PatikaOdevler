const inputText = document.querySelector("#inputText");
const inputButton = document.querySelector("#button-addon2");
const todoList = document.querySelector("#main-ul");

inputButton.addEventListener('click', addTodo);

let todos = [];
let arrayCount = localStorage.getItem("array-count") || 0;


function addTodo() {
    let pseudoCount = localStorage.getItem("array-count")
    if (inputText.value === "") {
        console.log("boş");
    } else {
        todos.push(inputText.value);
        let todoString = JSON.stringify(todos);
        localStorage.setItem("todo-array", todoString);

        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "form-check-input me-1");
        checkbox.setAttribute("value", "");
        checkbox.setAttribute("id", `checkbox-${inputText.value}-${pseudoCount+1}`);

        let label = document.createElement("label");
        label.setAttribute("class", "form-check-label");
        label.setAttribute("for", `checkbox-${inputText.value}-${pseudoCount+1}`);
        label.textContent = inputText.value;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "deletebtn");
        deleteButton.setAttribute("id",`checkbox-${inputText.value}-${pseudoCount+1}`)

        let checkboxLabelContainer = document.createElement("div");
        checkboxLabelContainer.classList.add("d-flex", "align-items-center");
        checkboxLabelContainer.appendChild(checkbox);
        checkboxLabelContainer.appendChild(label);

        listItem.appendChild(checkboxLabelContainer);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);

        arrayCount++;
        localStorage.setItem("array-count", arrayCount);

        inputText.value = "";
    }
}

function handleDelete(event) {
    if (event.target.classList.contains("deletebtn")) {
        console.log("Delete button clicked");
        let stringID = event.target.id
        let numberID;
        let existendCount = localStorage.getItem("array-count")
        let finalCount = existendCount - 1
        if(finalCount < 0){
            finalCount = 0
        }

        for (let char of stringID) {
            if (!isNaN(parseInt(char))) {
                numberID = char
            }
        }
        console.log(numberID)

        let pseudoArr = localStorage.getItem("todo-array")
        let parsedPseudoArr = JSON.parse(pseudoArr)
        let finalPseudoArr = [];

        
        for(let i = 0; i<parsedPseudoArr.length; i++){
            if(i != numberID){
                finalPseudoArr.push(parsedPseudoArr[i])
            }
        }

        console.log(finalCount);
        console.log(finalPseudoArr);

        localStorage.setItem("todo-array", JSON.stringify(finalPseudoArr));
        localStorage.setItem("array-count", finalCount);

        loadPage();
    }
}

// Use event delegation by attaching the event listener to the parent ul element
todoList.addEventListener('click', handleDelete);


function loadPage() {

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    if (todos[0] === "") {
        console.log("array boş yüklenemiyor");
    } else {
        let localTodos = localStorage.getItem("todo-array");
        let stringifiedArrayObj = JSON.parse(localTodos);
        let localArrayCount = localStorage.getItem("array-count");

        if (stringifiedArrayObj && stringifiedArrayObj.length > 0) {
            for (let i = 0; i < stringifiedArrayObj.length; i++) {
                let itemFromArray = stringifiedArrayObj[i];
                let listItem = document.createElement("li");
                listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("class", "form-check-input me-1");
                checkbox.setAttribute("value", "");
                checkbox.setAttribute("id", `checkbox-${inputText.value}-${i}`);

                let label = document.createElement("label");
                label.setAttribute("class", "form-check-label");
                label.setAttribute("for", `checkbox-${inputText.value}-${i}`);
                label.textContent = itemFromArray;

                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("btn", "btn-danger", "btn-sm", "deletebtn");
                deleteButton.setAttribute("id", `checkbox-${inputText.value}-${i}`);

                let checkboxLabelContainer = document.createElement("div");
                checkboxLabelContainer.classList.add("d-flex", "align-items-center");
                checkboxLabelContainer.appendChild(checkbox);
                checkboxLabelContainer.appendChild(label);

                listItem.appendChild(checkboxLabelContainer);
                listItem.appendChild(deleteButton);

                todoList.appendChild(listItem);
            }
        } else {
            console.log("Boş");
        }
    }
}

loadPage();