import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        todos: ['eat', 'sleep', 'code']
      }
  }

addNewTodo(todo) {
  console.log(todo)
  this.setState({
    todos: this.state.todos.concat(todo)
  })
}

  render() {
    return (
      <div className="App">
        <h1>My Todos</h1>
        <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)}/>
        <TodoList todo_data={this.state.todos}/>
      </div>
    );
  }
}

export default App;
