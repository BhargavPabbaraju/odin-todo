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

function onAddTodo(){
    renderAddTodoForm(model.getActiveProject().name,onCloseAddTodo,(todo)=>{
        model.addTodo(todo);
        refreshTodos();
    });
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
        alert(`Succesfully deleted ${todo.title}`);
        refreshTodos();
    }
    
}

function onCloseAddTodo(){
    refreshTodos();
}

function onAddProject(name){
    model.addProject(name);
    refreshPage();
}


function refreshProjects(){
    renderProjects(model.projects,model.getActiveProject(),  onProjectChange, onAddProject);
}

function refreshTodos(){
    renderTodoList(model.getActiveProject(), onToggleComplete, onAddTodo, onDeleteTodo);
}

function refreshPage(){
    refreshProjects();
    refreshTodos();
}

refreshPage();