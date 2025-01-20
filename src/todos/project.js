import { Priority } from './common';
import {Todo} from './todo';
import { Checklist } from './checklist';

export class Project{
    constructor(name, todos=[]){
        this.name = name;
        this.todos = todos;
    }
}

export const defaultProject = new Project(
    "Default Project",
    [
        new Todo({
            title: "Default task",
            description: "Default task's description",
            priority: Priority.LOW,
            notes: "Some notes",
            checklist: [
                new Checklist("Subtask 1"),
                new Checklist("Subtask 2"),
            ]
        })
    ]
);