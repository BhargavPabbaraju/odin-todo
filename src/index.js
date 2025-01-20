import { model } from "./model";
import { renderProjects } from "./view/project";
import "./index.css";


function onProjectChange(index){
    renderProjects({projects: model.projects,activeProject: model.projects[index]}, onProjectChange);
}

renderProjects({projects: model.projects,activeProject: model.projects[0]}, onProjectChange);