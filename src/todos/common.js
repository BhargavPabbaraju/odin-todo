export const Priority = {
    URGENT: 0,
    HIGH : 1,
    MEDIUM: 2,
    LOW: 3,
    UNASSIGNED: 4,
}

export const toggleCompleted = (obj) => {
    if(!obj.comlpeted){
        throw Exception("This object does not have a completed property");
    }
    obj.comlpeted = !obj.comlpeted;
}