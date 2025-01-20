import { model } from "./model";

function renderProjectList(projects){
    const ul = document.createElement("ul");
    projects.forEach((project)=>{
        const li = document.createElement("li");
        li.innerText = project.name;
        ul.appendChild(li);
    });
    return ul;
}


function renderProjects(){
    const content = document.getElementById("content");
    content.replaceChildren();
    
    const projectList = renderProjectList(model.projects);

    content.appendChild(projectList);

    console.log(model.projects[model.activeProject].todos);
}


model.activeProject = 0;
renderProjects();