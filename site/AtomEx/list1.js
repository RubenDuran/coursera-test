var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    //ask again for new input
    input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
}

function addTodo() {
    //ask for new todos
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo() {
    //ask for index of todo to be deleted
    //delete that todo
    var index = prompt("Enter index of todo to be deleted");
    //deleted that to
    //splice()
    todos.splice(index, 1);
    console.log("deleted Todo");
}