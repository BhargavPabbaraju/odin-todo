import { Priority } from './common';
import {Todo} from './todo';
import { Checklist } from './checklist';
import {v4 as uuidv4} from "uuid";


export class Project{
    constructor(name, todos=[]){
        this.name = name;
        this.todos = todos;
        this.id = uuidv4();
    }
}

export const defaultProjects = [
    new Project(
        "Default Project",
        [
            new Todo({
                title: "Default task 1",
                description: "Default task's description",
                priority: Priority.LOW,
                notes: "Some notes",
                checklist: [
                    new Checklist("Subtask 1"),
                    new Checklist("Subtask 2"),
                ]
            }),
            new Todo({
                title: "Default task 2",
                priority: Priority.MEDIUM,
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
            }),
            new Todo({
                title: "Train Your Starter Pokémon",
                description: "Strengthen your starter Pokémon by battling wild Pokémon in the tall grass.",
                priority: Priority.MEDIUM,
                checklist: [
                    new Checklist("Battle 5 wild Pokémon"),
                    new Checklist("Level up to 10"),
                ],
            }),
            new Todo({
                title: "Meet Legendary Trainer Red",
                description: "Learn valuable tips from one of the best Pokémon trainers in history.",
                priority: Priority.LOW,
                notes: "Red is often found at Mt. Silver. Be prepared for a tough challenge someday.",
                dueDate: new Date("12/31/1999"),
            }),
            new Todo({
                title: "Explore Viridian Forest",
                description: "Search for rare Pokémon and collect useful items during your exploration.",
                priority: Priority.MEDIUM,
            }),
        ]
    )
    
];