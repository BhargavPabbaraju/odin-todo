const { defaultProject } = require("./todos/project");

const projects = [
    defaultProject,
];


function renderProjectList(){
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
    
    const projectList = renderProjectList();

    content.appendChild(projectList);
}


renderProjects();