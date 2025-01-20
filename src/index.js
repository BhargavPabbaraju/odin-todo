import { model } from "./model";
import { renderProjects } from "./view/project";
import "./index.css";
import { renderTodoList } from "./view/todo";


function onProjectChange(projectId){
    model.setActiveProject(projectId);
    renderTodoList(model.getActiveProject(), onToggleComplete);
}

function onToggleComplete(todoId){
    model.toggleTodoComplete(todoId);
    renderTodoList(model.getActiveProject(),onToggleComplete );
}

renderProjects(model.projects, onProjectChange);
renderTodoList(model.getActiveProject(), onToggleComplete);