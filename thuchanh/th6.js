const todoList = [
    { id: 1, todo: "have breakfast", completed: false },
    { id: 2, todo: "have breakfast", completed: true },
    { id: 3, todo: "have breakfast", completed: false },
    
];
function addToDo(todo) {
    let newld = 0;
    for (let i = 0; i < todoList.length; i++){
        newld - todoList.length + 1;
    }
    let newTodo = {
        id: newld,
        todo: todo,
        completed: false,
    };
    todoList.push(newTodo);
}
addToDo("đi tắm");
console.log(todoList);

function updateComplete(id) {
    let findIndex = todoList.findIndex((e) => {
        return id === e.id
       
    });
   todoList[findIndex].completed = true; 
}
 
updateComplete(4);
console.log(todoList);

function removeTodo(id) {
    let check = -1;
    for (let i = 0; i < todoList.length; i++) {
        if (id == todoList[i].id) {
            check = i;
        }
    }
    todoList.splice(check, 1);
}

removeTpodo(2);
console.log(todoList);