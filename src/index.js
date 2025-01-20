import { model } from "./model";
import { renderProjects } from "./view/project";
import "./index.css";
import { renderTodoList } from "./view/todo";
import { renderAddTodoForm } from "./view/todo-add";


function onProjectChange(projectId){
    model.setActiveProject(projectId);
    renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);
}

function onToggleComplete(todoId){
    model.toggleTodoComplete(todoId);
    renderTodoList(model.getActiveProject(),onToggleComplete,onAddTodo );
}

function onAddTodo(){
    renderAddTodoForm(onCloseAddTodo);
}

function onCloseAddTodo(){
    renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);
}

renderProjects(model.projects, onProjectChange);
renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);