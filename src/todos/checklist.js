import { toggleCompleted } from "./common";

export class Checklist{
    constructor(title){
        this.title = title;
        this.completed = false;
    }
}

Object.assign(Checklist.prototype, toggleCompleted);