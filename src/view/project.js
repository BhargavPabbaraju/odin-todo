import {renderTodoList} from './todo';

function renderProjectList(projects){
    const ul = document.createElement("ul");
    ul.classList.add("project-list");
    projects.forEach((project)=>{
        const li = document.createElement("li");
        li.innerText = project.name;
        ul.appendChild(li);
    });
    return ul;
}


export function renderProjects({projects, activeProject}){
    const content = document.getElementById("content");
    content.replaceChildren();
    
    const projectList = renderProjectList(projects);
    content.appendChild(projectList);

    const todoList = renderTodoList(activeProject);
    content.appendChild(todoList);
}