import * as icons from './icons';

function renderProject(project,isActive,onProjectChange,onDeleteProject){
    const li = document.createElement("li");
    const title = document.createElement("span");
    title.classList.add("project-name");
    const span = document.createElement("span");
    span.innerText = project.name;
    const icon = icons.getRightArrow()
    
    title.appendChild(icon);
    title.appendChild(span);
    li.appendChild(title);

    const deleteIcon = icons.getTrashCan();
    deleteIcon.setAttribute("aria-label","Delete project");
    deleteIcon.setAttribute("title","Delete project");
    deleteIcon.addEventListener("click",()=>{
        onDeleteProject(project.id);
    });
    li.appendChild(deleteIcon);
    
    title.addEventListener("click",()=>{
        onProjectChange(project.id)
    });

    if(isActive){
        icon.style.color = "white";
        li.style.background = "rebeccapurple";
    }

    return li;
}


function renderProjectList(projects,activeProject, onProjectChange, onDeleteProject){
    const ul = document.createElement("ul");
    ul.classList.add("project-list");
    projects.forEach((project)=>{
        const isActive = project.id === activeProject.id;
        ul.appendChild(renderProject(project,isActive,onProjectChange,onDeleteProject));
    });
    if(projects.length === 0){
        const li = document.createElement("li");
        li.innerText = "No projects";
        ul.appendChild(li);
    }
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


export function renderProjects(projects,activeProject,onProjectChange, onAddProject, onDeleteProject){
    const content = document.getElementById("projects");
    content.replaceChildren();
    
    const projectList = renderProjectList(projects,activeProject, onProjectChange, onDeleteProject);
    content.appendChild(projectList);

    content.appendChild(renderAddProject(onAddProject));

}