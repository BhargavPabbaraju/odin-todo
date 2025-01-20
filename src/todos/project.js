import { Priority } from './common';
import {Todo} from './todo';
import { Checklist } from './checklist';

export class Project{
    constructor(name, todos=[]){
        this.name = name;
        this.todos = todos;
    }
}

export const defaultProjects = [
    new Project(
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
    ),
    new Project(
        "Pokémon Trainer Journey",
        [
            new Todo({
                title: "Catch Your First Pokémon",
                description: "Start your journey as a Pokémon trainer by catching your first wild Pokémon.",
                priority: Priority.HIGH,
                notes: "Don't forget to stock up on Poké Balls and bring some Potions for emergencies.",
                checklist: [
                    new Checklist("Choose your starter Pokémon"),
                    new Checklist("Visit Professor Oak's Lab"),
                ]
            })
        ]
    )
    
];