interface Todo {
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ': ' + todo.text);
}

let myTodo = { title: 'Car Clean', text: 'Clean the interior of my car' };

showTodo(myTodo);

