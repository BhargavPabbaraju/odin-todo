import {renderTodoList} from './todo';

function renderProjectList(projects, onProjectChange){
    const ul = document.createElement("ul");
    ul.classList.add("project-list");
    projects.forEach((project, index)=>{
        const li = document.createElement("li");
        li.innerText = project.name;
        li.addEventListener("click",()=>{
           onProjectChange(index)
        })
        ul.appendChild(li);
    });
    return ul;
}


export function renderProjects({projects, activeProject}, onProjectChange){
    const content = document.getElementById("content");
    content.replaceChildren();
    
    const projectList = renderProjectList(projects, onProjectChange);
    content.appendChild(projectList);

    const todoList = renderTodoList(activeProject);
    content.appendChild(todoList);
}