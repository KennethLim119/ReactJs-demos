import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return(
      <ul>
        {this.props.todo_data.map((todo,i) => <li key={i}>{todo}</li> )}
      </ul>
    )
  }
}
export default TodoList;
