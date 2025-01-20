import { defaultProjects, Project } from "./todos/project";
export const model = {
    projects: defaultProjects,
    activeProject: null,

    getActiveProject(){
        if(this.activeProject === null){
            this.setActiveProject(this.projects[0].id);
        }
        return this.activeProject;
    },
    setActiveProject(projectId){
       this.activeProject = this.projects.find((project)=> project.id === projectId);
    },
    toggleTodoComplete(todoId){
        const todo = this.getActiveProject().todos.find((todo)=>todo.id === todoId);
        todo.toggleCompleted();
    },
    addTodo(todo){
        this.getActiveProject().addTodo(todo);
    },
    addProject(name){
        const project = new Project(name);
        this.projects.push(project);
        this.setActiveProject(project.id);
    }
}