import * as icons from './icons';
function renderProjectList(projects, onProjectChange){
    const ul = document.createElement("ul");
    ul.classList.add("project-list");
    projects.forEach((project)=>{
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = project.name;
        li.appendChild(icons.getArrow());
        li.appendChild(span);
        li.addEventListener("click",()=>{
           onProjectChange(project.id)
        })
        ul.appendChild(li);
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


export function renderProjects(projects,onProjectChange, onAddProject){
    const content = document.getElementById("projects");
    content.replaceChildren();
    
    const projectList = renderProjectList(projects, onProjectChange);
    content.appendChild(projectList);

    content.appendChild(renderAddProject(onAddProject));

}