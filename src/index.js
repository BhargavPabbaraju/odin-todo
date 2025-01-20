import { model } from "./model";
import { renderProjects } from "./view/project";
import "./index.css";
import { renderTodoList } from "./view/todo";


function onProjectChange(index){
    model.setActiveProject(index);
    renderTodoList(model.getActiveProject());
}

renderProjects(model.projects, onProjectChange);
renderTodoList(model.getActiveProject());