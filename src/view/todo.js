import { format } from "date-fns";
import * as icons from "./icons";
import "./todo.css";

function renderPriorityChip(priority){
    const chip = document.createElement("span");
    chip.classList.add("priority-chip");
    chip.classList.add(priority[0].toLowerCase()+priority.substring(1));
    chip.innerText = priority;
    return chip;
}

export function renderTodo(todo, onToggleComplete, onDeleteTodo, onUpdateTodo){
    const li = document.createElement("li");

    const leftSide = document.createElement("div");
    
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("click", ()=>{
        onToggleComplete(todo.id);
    })
    
    const title = document.createElement("span");
    title.innerText = todo.title;
    
    const chip = renderPriorityChip(todo.priority);

    leftSide.appendChild(checkbox);
    leftSide.appendChild(title);
    leftSide.appendChild(chip);

    // const viewIcon = renderViewIcon(todo);

    const rightSide = document.createElement("div");
    const dueDate = document.createElement("span");
    dueDate.innerText = "Due " + format(todo.dueDate, "MMM dd yyyy");
    
    const deleteIcon = icons.getTrashCan();
    deleteIcon.addEventListener("click",()=>{
        onDeleteTodo(todo.id);
    })

    rightSide.appendChild(dueDate);
    rightSide.appendChild(deleteIcon);

    if(todo.completed){
        leftSide.classList.add("completed");
        dueDate.classList.add("completed");
    }

    li.appendChild(leftSide);
    li.appendChild(rightSide);

    return li;

}

export function renderTodoList(project, onToggleComplete, onAddTodo, onDeleteTodo,onUpdateTodo){
    const content = document.getElementById("todos");
    content.replaceChildren();
    const ul = document.createElement("ul");
    ul.classList.add("todo-list");

    const todos = project?.todos.slice().sort((a,b)=>
       new Date(a.dueDate) - new Date(b.dueDate)
    ) || [];
    todos.forEach((todo)=>{
        ul.appendChild(renderTodo(todo,onToggleComplete, onDeleteTodo, onUpdateTodo));
    });

    if(todos.length === 0){
        const li = document.createElement("li");
        li.innerText = "No tasks";
        ul.appendChild(li);
    }

    content.appendChild(ul);

    const addButton = document.createElement("button");
    addButton.innerText = "Add task";
    addButton.classList.add("add-task");
    addButton.addEventListener("click",onAddTodo);

    content.appendChild(addButton);
}