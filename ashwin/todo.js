//6th
/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
    constructor()
    {
        this.result = new Array();
    }
    add(todo)
    {
        this.result.push(todo);
    }
    remove(indexOfTodo)
    {
        this.result.splice(indexOfTodo,1);
    }
    update(index, updatedTodo)
    {
        this.result.splice(index,0,updatedTodo);
    }
    getAll()
    {
        return this.result;
    }
    get(indexOfTodo)
    {
        return this.result[indexOfTodo];
    }
    clear()
    {
        this.result = new Array();
    }
}

//obj = new Todo();
//obj.add(["hi","hello","hola","hey"]);
//obj.getAll();