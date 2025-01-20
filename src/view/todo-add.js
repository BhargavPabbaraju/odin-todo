import { Priority } from '../todos/common';
import * as icons from './icons';

function renderCloseButton(onClose){
    const div = document.createElement("div");
    const button = icons.getCross();
    button.classList.add("close-button");
    button.addEventListener("click",onClose);
    div.appendChild(button);
    return div;
}


function renderTodoTitle(){
    const div = document.createElement("div");
    div.classList.add("title");
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

    const label = document.createElement("label");
    label.htmlFor = "description";
    label.innerText = "Description";

    const input = document.createElement("textarea");
    input.name = "description";
    input.innerText = "Sample description";

    div.appendChild(label);
    div.appendChild(input);

    return div;
}


function renderPriority(){
    const div = document.createElement("div");
    div.classList.add("priority");

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
    })

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function renderDueDate(){
    const div = document.createElement("div");
    // div.classList.add("due-date");

    const label = document.createElement("label");
    label.htmlFor = "due-date";
    label.innerText = "Due date";

    const input = document.createElement("input");
    input.name = "due-date";
    input.type = "date";

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function renderNotes(){
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.htmlFor = "notes";
    label.innerText = "Notes";

    const input = document.createElement("textarea");
    input.name = "notes";
    input.innerText = "Notes";

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function renderChecklist(){
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
    form.appendChild(renderPriority());
    form.appendChild(renderDueDate());
    form.appendChild(renderNotes());
    
    content.appendChild(form);

}