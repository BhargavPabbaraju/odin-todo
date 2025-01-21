
const STORAGE_KEY = "bhargav-pabbaraju-todo-projects"

export const Storage = {
    type: "localStorage",
    loadProjects(){
        const storage = window["localStorage"];
        const projects = storage.getItem(STORAGE_KEY);
        if(!storage || !projects){
            return {
                keyExists: false,
                projects: [],
            };
        }
        return {
            keyExists: true,
            projects: JSON.parse(projects || []),
        };

    },
    saveProjects(projects){
        const storage = window["localStorage"];
        if(!storage){
            alert("Error saving projects to local storage");
            return;
        }
        storage.setItem(STORAGE_KEY, JSON.stringify(projects));

    }
}