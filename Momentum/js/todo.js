const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
   todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
   saveTodos();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.id = newTodo.id;
    button.innerText = "❌";
    span.innerText = newTodo.text;
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const ToDoObject = {
        text : newTodo,
        id : Date.now()
    };
    todos.push(ToDoObject);
    paintTodo(ToDoObject);
    saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}