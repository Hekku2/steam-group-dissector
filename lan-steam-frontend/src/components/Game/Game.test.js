import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

it('renders without crashing', () => {
    const tbody = document.createElement('tbody');

    var game = {
        owners: []
    };

    ReactDOM.render(<Game game={game}/>, tbody);
});
