import { defaultProjects, Project } from "./todos/project";
import { Storage } from "./storage";
export const model = {
    projects: defaultProjects,
    activeProject: null,
    storage: Storage,

    getActiveProject(){
        if((this.activeProject === null && this.projects.length > 0) || !this.projects.includes(this.activeProject)){
            this.setActiveProject(this.projects[0].id);
        }
        return this.activeProject;
    },
    setActiveProject(projectId){
       this.activeProject = this.projects.find((project)=> project.id === projectId);
    },
    toggleTodoComplete(todoId){
        const todo = this.getActiveProject().todos.find((todo)=>todo.id === todoId);
        todo?.toggleCompleted();
        if(!todo){
            throw Exception("Invalid todo id");
        }
    },
    toggleTodoExpand(todoId){
        const todo = this.getActiveProject().todos.find((todo)=>todo.id === todoId);
        todo?.toggleExpanded();
        if(!todo){
            throw Exception("Invalid todo id");
        }
    },
    addTodo(todo){
        this.getActiveProject().addTodo(todo);
    },
    getTodo(todoId){
        return this.getActiveProject().getTodo(todoId);
    },
    deleteTodo(todoId){
        this.getActiveProject().deleteTodo(todoId);
    },
    addProject(name){
        const project = new Project(name);
        this.projects.push(project);
        this.setActiveProject(project.id);
    },
    getProject(projectId){
        return this.projects.find((project)=>project.id === projectId);
    },
    deleteProject(projectId){
        this.projects = this.projects.filter((project)=>project.id !== projectId);
        if(projectId === this.activeProject?.id){
            this.activeProject = this.projects.length > 0 ? this.projects[0] : null;
        }
    },
    loadProjects(){
        const {projects,keyExists} = this.storage.loadProjects();
        if(keyExists){
            this.projects = projects.map((projectData)=> Project.fromJSON(projectData));
            this.setActiveProject();
        }else{
            this.projects = defaultProjects;
        }
    },
    saveProjects(){
        this.storage.saveProjects(this.projects);
    }
}