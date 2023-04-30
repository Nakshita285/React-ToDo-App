import React, { Component } from 'react';

class TodosList extends Component {
  
        state = {  } 

    render() { 
        let todos = this.props.todos;
        let deleteTodo = this.props.deleteTodo;
        return (
            <div className="todos">
            {todos.map(function(todoObj){
                return (
                    <div className="todo" key ={todoObj.id}>
                        <div className="todoText" >{todoObj.todoName}</div>
                        <button className="Delete" onClick={ (e)=>{ deleteTodo(todoObj.id) }}>Delete</button>
                    </div>
                )
            })}
            </div>
        );
    }
}
 
export default TodosList;