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

function renderTodoDetail(key,value){
    const row = document.createElement("div");
    row.classList.add("column");
    const label = document.createElement("div");
    label.innerText = key;

    const data = document.createElement("div");
    data.innerText = value;
    row.append(label);
    row.append(data);
    return row;
}

function renderTodoDetails(todo){
    return [
        renderTodoDetail("Description:",todo.description),
        renderTodoDetail("Notes:",todo.notes),
    ]
}

export function renderTodo(todo, onToggleComplete, onDeleteTodo, onToggleExpand, onUpdateTodo){
    const li = document.createElement("li");
    const row = document.createElement("div");
    row.classList.add("row");
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

    const showIcon = todo.expanded ? icons.getUpArrow() : icons.getDownArrow();
    showIcon.addEventListener("click",()=>{
        onToggleExpand(todo.id);
    });
    leftSide.appendChild(showIcon);
    showIcon.setAttribute("aria-label", `${todo.expanded ?  "Hide" :"Show"} details`);
    showIcon.setAttribute("title",`${todo.expanded ?  "Hide" :"Show"} details`);
    
    const rightSide = document.createElement("div");
    const dueDate = document.createElement("span");
    dueDate.innerText = "Due " + format(todo.dueDate, "MMM dd yyyy");
    
    const deleteIcon = icons.getTrashCan();
    deleteIcon.addEventListener("click",()=>{
        onDeleteTodo(todo.id);
    });
    deleteIcon.setAttribute("aria-label","Delete task");
    deleteIcon.setAttribute("title","Delete task");

    rightSide.appendChild(dueDate);
    rightSide.appendChild(deleteIcon);

    if(todo.completed){
        title.classList.add("completed");
        chip.classList.add("completed");
        dueDate.classList.add("completed");
    }

    row.appendChild(leftSide);
    row.appendChild(rightSide);
    li.appendChild(row);

    if(todo.expanded){
        const rows = renderTodoDetails(todo);
        rows.forEach((row)=>{
            li.appendChild(row);
        })
        
    }

    return li;

}

export function renderTodoList(project, onToggleComplete, onAddTodo, onDeleteTodo,onToggleExpand,onUpdateTodo){
    const content = document.getElementById("todos");
    content.replaceChildren();
    const ul = document.createElement("ul");
    ul.classList.add("todo-list");

    const todos = project?.todos.slice().sort((a,b)=>
       new Date(a.dueDate) - new Date(b.dueDate)
    ) || [];
    todos.forEach((todo)=>{
        ul.appendChild(renderTodo(todo,onToggleComplete, onDeleteTodo, onToggleExpand, onUpdateTodo));
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