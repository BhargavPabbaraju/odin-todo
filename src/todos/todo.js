import {Priority, toggleCompleted} from './common';


export class Todo{
    constructor({title, 
                description="", 
                dueDate = new Date(),
                priority = Priority.UNASSIGNED,
                notes = "",
                checklist = [],
            }){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false;
    }
}

Object.assign(Todo.prototype, toggleCompleted);