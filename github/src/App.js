import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile';
import { Row, Col, Button } from 'react-materialize';
import Judging from './Judging';


class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     player1: {},
     player2: {}
   }
 }

 lookupPlayer(player_number){
   console.log(player_number)

   var username;
   if (player_number == 1) {
     username = this.player1Input.value
   } else {
     username = this.player2Input.value
   }
   console.log(username)

   fetch(`https://api.github.com/users/${username}`)
   .then(function(response) {
     return response.json()
   })
   .then((response) => {
     if (player_number == 1) {
     this.setState({ player1: response })
   } else {
     this.setState({ player2: response})
   }
   })

 }

 render() {
      return (
     <div>
       <h2>Git of thrones</h2>

       <Row>
         <Col s={12} m={6}>
             <input
               ref = {(input) => {this.player1Input = input; }}
             />
             <Button onClick = {() => this.lookupPlayer(1)}> ™ </Button>
           <PlayerProfile player_data = {this.state.player1} />
         </Col>

         <Col s={12} m={6}>
             <input
               ref = {(input) => {this.player2Input = input; }}
             />
             <Button onClick = {() => this.lookupPlayer(2)}> ™ </Button>
           <PlayerProfile player_data = {this.state.player2} />
         </Col>
       </Row>
     </div>
   );
 }
}

export default App;
