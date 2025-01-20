
export function getTrashCan(){
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.innerText = "delete";
    return span;
}

export function getCross(){
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.innerText = "close";
    return span;
}

export function getRightArrow(){
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.classList.add("purple-icon");
    span.innerText = "keyboard_double_arrow_right";
    return span;
}

export function getDownArrow(){
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.classList.add("purple-icon");
    span.innerText = "keyboard_arrow_down";
    return span;
}

export function getUpArrow(){
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.classList.add("purple-icon");
    span.innerText = "keyboard_arrow_up";
    return span;
}