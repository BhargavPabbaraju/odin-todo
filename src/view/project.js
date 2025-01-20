function renderProjectList(projects, onProjectChange){
    const ul = document.createElement("ul");
    ul.classList.add("project-list");
    projects.forEach((project)=>{
        const li = document.createElement("li");
        li.innerText = project.name;
        li.addEventListener("click",()=>{
           onProjectChange(project.id)
        })
        ul.appendChild(li);
    });
    return ul;
}


export function renderProjects(projects,onProjectChange){
    const content = document.getElementById("projects");
    content.replaceChildren();
    
    const projectList = renderProjectList(projects, onProjectChange);
    content.appendChild(projectList);
}