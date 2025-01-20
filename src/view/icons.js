
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

export function getArrow(){
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.innerText = "keyboard_double_arrow_right";
    span.style.color = "rebeccapurple";
    return span;
}