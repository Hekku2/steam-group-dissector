import React, { Component } from 'react';

class Game extends Component {

    render() {
        return (
            <tr>
                <td><img src={this.props.game.logo} role="presentation"/> {this.props.game.name}</td>
            </tr>
        );
    }
}
export default Game;