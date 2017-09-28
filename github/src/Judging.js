import React, { Component } from 'react';

class Judging extends Component {
	render() {
		var isPlayer1Ready = !!Object.keys(this.props.player1).length;
		var isPlayer2Ready = !!Object.keys(this.props.player2).length;
		var playersReady = isPlayer1Ready && isPlayer2Ready

		var result;
		if (this.props.player1.followers > this.props.player2.followers) {
			result = 'Player1 wins!!!'
		} else if (this.props.player1.followers == this.props.player2.followers) {
			result = "It's a draw!!!!"
		} else {
			result = 'Player2 wins!!!'
		}

		return (
			<div>
				{playersReady ? <p>{result}</p> : null}
			</div>
		)
	}
}

export default Judging;
