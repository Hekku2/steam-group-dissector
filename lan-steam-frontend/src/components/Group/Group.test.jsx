import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Group from './Group';
import * as userStore from '../../stores/UserStore'

describe('Group', () => {
    beforeEach(() => {
        spyOn(userStore.default, 'getUsers').and.returnValue([]);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Group />, div);
    });

    it('has pointer style (this should be done differently in future)', () => {
        var wrapper = TestUtils.renderIntoDocument(<Group />);
        var header = TestUtils.findRenderedDOMComponentWithTag(wrapper, "h4");
        expect(header.style.cursor).toBe('pointer');
    })
});

