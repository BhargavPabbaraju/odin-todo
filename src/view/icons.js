
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