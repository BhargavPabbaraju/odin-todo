import { Priority } from '../todos/common';
import * as icons from './icons';
import './todo-add.css';

function renderCloseButton(onClose){
    const div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("end");
    const button = icons.getCross();
    button.addEventListener("click",onClose);
    div.appendChild(button);
    return div;
}


function renderTodoTitle(){
    const div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("required");

    const label = document.createElement("label");
    label.htmlFor = "title";
    label.innerText = "Title";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "title";
    input.placeholder = "Sample Task";
    input.required = true;

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function renderDescription(){
    const div = document.createElement("div");
    div.classList.add("description");
    div.classList.add("column");

    const label = document.createElement("label");
    label.htmlFor = "description";
    label.innerText = "Description";

    const input = document.createElement("textarea");
    input.name = "description";
    input.placeholder = "Sample description";

    div.appendChild(label);
    div.appendChild(input);

    return div;
}


function renderPriority(){
    const span = document.createElement("span");

    const label = document.createElement("label");
    label.htmlFor = "priority";
    label.innerText = "Priority";

    const input = document.createElement("select");
    input.name = "priority";
    Object.keys(Priority).forEach((priority)=>{
        const priorityLabel = Priority[priority];
        if(priorityLabel === Priority.UNASSIGNED){
            return;
        }
        const option = document.createElement("option");
        option.classList.add(priorityLabel[0].toLowerCase()+priorityLabel.substring(1));
        option.value = priority;
        option.innerText = priorityLabel;
        input.appendChild(option);
    });
    input.value = Priority.UNASSIGNED;

    span.appendChild(label);
    span.appendChild(input);

    return span;
}

function renderDueDate(){
    const span = document.createElement("span");
    span.classList.add("row");

    const label = document.createElement("label");
    label.htmlFor = "due-date";
    label.innerText = "Due date";

    const input = document.createElement("input");
    input.name = "due-date";
    input.type = "date";

    span.appendChild(label);
    span.appendChild(input);

    return span;
}

function renderNotes(){
    const div = document.createElement("div");
    div.classList.add("column");
    const label = document.createElement("label");
    label.htmlFor = "notes";
    label.innerText = "Notes";

    const input = document.createElement("textarea");
    input.name = "notes";
    input.placeholder = "Sample Notes";

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function renderAddButton(){
    const input = document.createElement("input");
    input.classList.add("add-button");
    input.type = "submit";
    input.value = "Add";
    return input;
}



export function renderAddTodoForm(onCloseAddTodo){
    const content = document.getElementById("todos");
    content.replaceChildren();

    const form = document.createElement("form");
    form.method = "post";
    form.classList.add("add-todo-form");

    form.appendChild(renderCloseButton(onCloseAddTodo));
    form.appendChild(renderTodoTitle());
    form.appendChild(renderDescription());
    const div = document.createElement("div");
    div.classList.add("row");
    div.appendChild(renderPriority());
    div.appendChild(renderDueDate());
    form.appendChild(div);
    form.appendChild(renderNotes());
    form.appendChild(renderAddButton());
    
    content.appendChild(form);

}