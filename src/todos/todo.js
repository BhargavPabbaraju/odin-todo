import {Priority} from './common';
import {v4 as uuidv4} from "uuid";

export class Todo{
    constructor({title, 
                description="", 
                dueDate = new Date(),
                priority = Priority.UNASSIGNED,
                notes = "",
                completed=false,
                expanded=false,
            }){
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate || new Date();
        this.priority = priority;
        this.notes = notes;
        this.completed = completed;
        this.expanded = expanded;

    }
    static fromJSON(todoData){
        return new Todo(todoData);
    }
}


Object.assign(Todo.prototype, {
    toggleCompleted(){
        this.completed = !this.completed;
    },
    toggleExpanded(){
        this.expanded = !this.expanded;
    },
});
