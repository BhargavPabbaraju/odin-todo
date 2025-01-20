import { Priority } from '../todos/common';
import * as icons from './icons';
import './todo-add.css';
import { isValid } from 'date-fns';

function renderCloseButton(onClose){
    const button = icons.getCross();
    button.addEventListener("click",onClose);
    return button;
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

function renderAddButton(addTodo){
    const input = document.createElement("input");
    input.classList.add("add-button");
    input.type = "submit";
    input.value = "Add";
    input.addEventListener("click",(e)=>{
        if(!e.target.form.checkValidity()){
            return;
        }
        else{
            e.preventDefault();
            const form = e.target.form;
            addTodo({
                title: form.title.value,
                description: form.description.value,
                dueDate: isValid(new Date(form["due-date"].value))? new Date(form["due-date"].value): null,
                priority: form.priority.value || Priority.UNASSIGNED,
                notes: form.notes.value,

            });
        }
    });
    return input;
}



export function renderAddTodoForm(projectName, onCloseAddTodo, addTodo){
    const content = document.getElementById("todos");
    content.replaceChildren();

    const form = document.createElement("form");
    form.method = "post";
    form.classList.add("add-todo-form");

    const topRow = document.createElement("div");
    topRow.classList.add("row");
    const h3 = document.createElement("h3");
    h3.innerText = projectName;
    topRow.appendChild(h3);
    topRow.appendChild(renderCloseButton(onCloseAddTodo));
    form.appendChild(topRow);

    form.appendChild(renderTodoTitle());
    form.appendChild(renderDescription());
    const div = document.createElement("div");
    div.classList.add("row");
    div.appendChild(renderPriority());
    div.appendChild(renderDueDate());
    form.appendChild(div);
    form.appendChild(renderNotes());
    form.appendChild(renderAddButton(addTodo));
    
    content.appendChild(form);

}