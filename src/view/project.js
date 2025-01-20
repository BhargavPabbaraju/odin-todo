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


export function renderProjects(projects,onProjectChange){
    const content = document.getElementById("projects");
    content.replaceChildren();
    
    const projectList = renderProjectList(projects, onProjectChange);
    content.appendChild(projectList);
}