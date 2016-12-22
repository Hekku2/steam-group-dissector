import React, { Component } from 'react';
import gameStore from '../../stores/GameStore'
import Game from '../Game/Game';

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: gameStore.getGames()
        }
    }

    componentWillMount() {
        this.storeId = gameStore.registerView(() => { this.updateState(); });
        this.updateState();
    }

    componentWillUnmount() {
        gameStore.deregisterView(this.storeId);
    }

    updateState() {
        this.setState({
            games: gameStore.getGames()
        });
    }

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Owners</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.games.map(game => <Game key={game.appId} game={game}/>)}
                </tbody>
            </table>
        );
    }
}
export default Games;