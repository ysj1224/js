const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "❌";
    span.innerText = newTodo;
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);