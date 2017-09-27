import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
      this.state = {
        count: 1
      }
  }

increment() {
  console.log('clicked!!!')
  this.setState({
    count: this.state.count + 1
  })
}
//setState = changes the state

  render() {
    return(
      <div>
        <h1>{this.state.count} </h1>
        <button onClick={() => this.increment()}>ADD</button>
      </div>
    )
  }
}

export default Counter;
