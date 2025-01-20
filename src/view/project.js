import * as icons from './icons';

function renderProject(project,isActive,onProjectChange){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = project.name;
    const icon = icons.getArrow()
    li.appendChild(icon);
    
    li.appendChild(span);
    li.addEventListener("click",()=>{
        onProjectChange(project.id)
    });

    if(isActive){
        icon.style.color = "white";
        li.style.background = "rebeccapurple";
    }

    return li;
}


function renderProjectList(projects,activeProject, onProjectChange){
    const ul = document.createElement("ul");
    ul.classList.add("project-list");
    projects.forEach((project)=>{
        const isActive = project.id === activeProject.id;
        ul.appendChild(renderProject(project,isActive,onProjectChange));
    });
    return ul;
}


function renderAddProject(onAddProject){
    const div = document.createElement("div");
    const form = document.createElement("form");
    form.method = "post";

    const input = document.createElement("input");
    input.name = "name";
    input.type = "text";
    input.placeholder = "New project name";
    input.required = true;
    form.appendChild(input);

    const button = document.createElement("input");
    button.type = "submit";
    button.value = "Add project";
    button.addEventListener("click",(e)=>{
        if(!e.target.form.checkValidity()){
            return;
        }
        e.preventDefault();
        onAddProject(e.target.form.name.value);
    });
    form.appendChild(button);
    div.appendChild(form);

    return div;
}


export function renderProjects(projects,activeProject,onProjectChange, onAddProject){
    const content = document.getElementById("projects");
    content.replaceChildren();
    
    const projectList = renderProjectList(projects,activeProject, onProjectChange);
    content.appendChild(projectList);

    content.appendChild(renderAddProject(onAddProject));

}