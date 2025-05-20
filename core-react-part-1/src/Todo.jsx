export default function ToDo({task, isDone}){
    if(isDone===true){
        return <li>Done: {task}</li>
    }
    return <li>To be done:{task}</li>
}