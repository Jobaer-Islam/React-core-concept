// export default function ToDo({task, isDone}){
//     if(isDone===true){
//         return <li>Done: {task}</li>
//     }
//     return <li>To be done:{task}</li>
// }

//  conditional rendering : 3 ternary 
// condition? true : false

// export default function ToDo({ task, isDone }) {
//     return isDone ?
//         <li>DOne: {task}</li>
//         : <li>Not DOne: {task}</li>
// }  

// conditinal rendering: 4 &&

// export default function ToDo({ task, isDone }) {
//     return isDone && <li>DOne Tasks: {task}</li>
// } 


// conditinal rendering: 5 ||

// export default function ToDo({ task, isDone }) {
//     return isDone || <li>Not done Tasks: {task}</li>
// }    

// conditional rendering : 6 Use variables

export default function ToDo({ task, isDone }) {
    let listItem ;
    if(isDone === true){
        listItem = <li>Done: {task}</li>
    }
    else{
        listItem = <li>Pending: {task}</li>
    }
    return listItem
}