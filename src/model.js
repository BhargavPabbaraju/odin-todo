import { defaultProjects } from "./todos/project";
export const model = {
    projects: defaultProjects,
    activeProject: 0,

    getActiveProject(){
        return this.projects[this.activeProject];
    },
    setActiveProject(index){
        this.activeProject = index;
    }
}