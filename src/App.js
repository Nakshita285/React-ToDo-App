import InputBox from "./components/InputBox/InputBox";
import TodosList from "./components/TodosList/TodosList";
import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  state = { 
    todos: [
      {id: "1", todoName: "Learn C++"},
      {id: "2", todoName: "Learn C#"},
      {id: "3", todoName: "Learn .NET"},
      {id: "4", todoName: "Learn Java"},
      {id: "5", todoName: "Learn React.JS"},
    ]
   };
   
   deleteTodo = (id) => {
    let updatedTodo = this.state.todos.filter(function(todoObj) {
      if(todoObj.id == id){
        return false;
      }
      return true;
    })
    this.setState({todos: updatedTodo});
  }

  addTodo = (todo) => {
    if(todo != ""){
      let updatedTodo = [...this.state.todos , { id: this.state.todos.length + 1, todoName: todo}];
      this.setState({todos: updatedTodo});
    }
  }
   
  render() { 
    let todos = this.state.todos;
    let deleteTodo = this.deleteTodo;
    let addTodo = this.addTodo;
    return (
      <div className="App">
        <InputBox addTodo = {addTodo}></InputBox>
        <TodosList todos = {todos} deleteTodo={deleteTodo}></TodosList>
      </div>
    );
  }
}
 
export default App;

