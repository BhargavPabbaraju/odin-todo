export const Priority = {
    URGENT: "Urgent",
    HIGH : "High",
    MEDIUM: "Medium",
    LOW: "Low",
    UNASSIGNED: "Unassigned",
}

export const toggleCompleted = (obj) => {
    if(!obj.comlpeted){
        throw Exception("This object does not have a completed property");
    }
    obj.comlpeted = !obj.comlpeted;
}