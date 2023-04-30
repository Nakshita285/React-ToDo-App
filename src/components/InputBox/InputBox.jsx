import React, { Component } from 'react';

class InputBox extends Component {
    state = { 
        todotextValue: ""
     } 

    handleAddTodo = (e) => {
        let addTodo = this.props.addTodo;
        let todo = this.state.todotextValue;
        addTodo(todo);
        this.setState({todotextValue: ""});

    }

    handleOnChange = (e) => {
        let todoValue = e.target.value;
        this.setState({todotextValue: todoValue});
    }

    render() { 
        let todoValue = this.state.todotextValue;
        let handleAddTodo = this.handleAddTodo;
        let handleOnChange = this.handleOnChange;
        let handleEnterText = this.handleEnterText;
        return ( 
            <div className='inputBox-container'>
                <div className='inputBox'>
                    <input type='text' className="inputText" placeholder='Type Here...' onChange = {handleOnChange} value={todoValue}/>
                    <button className='AddTodo' onClick={ handleAddTodo } >+</button>
                </div>
            </div>

         );
    }
}
 
export default InputBox;