import { model } from "./model";
import { renderProjects } from "./view/project";
import "./index.css";
import { renderTodoList } from "./view/todo";
import { renderAddTodoForm } from "./view/todo-add";



function onProjectChange(projectId){
    model.setActiveProject(projectId);
    refreshPage();
}

function onToggleComplete(todoId){
    model.toggleTodoComplete(todoId);
    refreshTodos();
}

function onToggleExpand(todoId){
    model.toggleTodoExpand(todoId);
    refreshTodos();
}

function onAddTodo(){
    renderAddTodoForm(model.getActiveProject().name,onCloseAddTodo,(todo)=>{
        model.addTodo(todo);
        refreshTodos();
    });
}

function onCloseAddTodo(){
    refreshTodos();
}


function onDeleteTodo(todoId){
    const todo = model.getTodo(todoId);
    if(!todo){
        alert("Error while fetching task to delete");
        return;
    }
    const choice = confirm(`Do you want to delete the task: ${todo.title} ?`);
    if(choice){
        model.deleteTodo(todoId);
        refreshTodos();
        alert(`Succesfully deleted task: ${todo.title}`);
    }
    
}


function onAddProject(name){
    model.addProject(name);
    refreshPage();
}

function onDeleteProject(projectId){
    const project = model.getProject(projectId);
    if(!project){
        alert("Error while fetching project to delete");
        return;
    }
    const choice = confirm(`Do you want to delete the project: ${project.name} ?`);
    if(choice){
        model.deleteProject(projectId);
        refreshPage();
        alert(`Succesfully deleted project: ${project.name}`);
    }
}


function refreshProjects(){
    renderProjects(model.projects,model.getActiveProject(),  onProjectChange, onAddProject, onDeleteProject);
}

function refreshTodos(){
    renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo, onDeleteTodo,onToggleExpand);
}

function refreshPage(){
    refreshProjects();
    refreshTodos();
}


function loadProjects(){
    model.loadProjects();
    refreshPage();
}

loadProjects();

window.addEventListener("beforeunload",(e)=>{
    e.preventDefault();
    model.saveProjects();
});