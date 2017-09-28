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
				<h2> Search </h2>
					<input placeholder="Search" onChange={(event) => this.search(event)}/>

        <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)}/>
        <TodoList todo_data={this.state.todos}/>
      </div>
    );
  }
}

export default App;
