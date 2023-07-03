class Todo {
    constructor(){
        this.todoList=new Array();
    }
    add(todo){
        this.todoList.push(todo);
    }
    remove(indexOfTodo){
        if(indexOfTodo>=this.todoList.length){
            console.log("Incorrect input Array length is "+this.todoList.length);
        }else{
        this.todoList.splice(indexOfTodo,1);}
    }
    update(index,indexTodo){
        if(indexOfTodo>=this.todoList.length){
            console.log("Incorrect input Array length is "+this.todoList.length);
        }else{
        this.todoList[index]=indexTodo;}
    }
    getAll(){
        return this.todoList;
    }
    get(indexOfTodo){
        if(indexOfTodo>=this.todoList.length){
            console.log("Incorrect input Array length is "+this.todoList.length);
        }else{
        return this.todoList[indexOfTodo];}
    }
    clear(){
        while(this.todoList.length!==0){
            this.todoList.pop();
        }
    }
}