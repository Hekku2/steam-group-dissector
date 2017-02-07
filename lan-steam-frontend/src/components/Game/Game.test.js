import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

it('renders without crashing', () => {
    const div = document.createElement('div');

    var game = {
        owners: []
    };

    ReactDOM.render(<Game game={game}/>, div);
});
