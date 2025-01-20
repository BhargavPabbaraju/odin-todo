import { model } from "./model";
import { renderProjects } from "./view/project";
import "./index.css";
import { renderTodoList } from "./view/todo";
import { renderAddTodoForm } from "./view/todo-add";


function onProjectChange(projectId){
    model.setActiveProject(projectId);
    renderProjects(model.projects,model.getActiveProject(), onProjectChange, onAddProject);
    renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);
}

function onToggleComplete(todoId){
    model.toggleTodoComplete(todoId);
    renderTodoList(model.getActiveProject(),onToggleComplete,onAddTodo );
}

function onAddTodo(){
    renderAddTodoForm(model.getActiveProject().name,onCloseAddTodo,(todo)=>{
        model.addTodo(todo);
        renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);
    });
}

function onCloseAddTodo(){
    renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);
}

function onAddProject(name){
    model.addProject(name);
    renderProjects(model.projects,model.getActiveProject(), onProjectChange, onAddProject);
    renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);
}


renderProjects(model.projects,model.getActiveProject(),  onProjectChange, onAddProject);
renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo);