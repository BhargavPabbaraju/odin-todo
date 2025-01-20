import {v4 as uuidv4} from "uuid";
export class Checklist{
    constructor(title){
        this.id = uuidv4();
        this.title = title;
        this.completed = false;
    }
}

Object.assign(Checklist.prototype, {
    toggleCompleted(){
        this.completed = !this.completed;
    },
});
