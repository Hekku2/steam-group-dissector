import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as userStore from '../../stores/UserStore'

describe('App', () => {
    beforeEach(() => {
        spyOn(userStore.default, 'getUsers').and.returnValue([]);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
});

