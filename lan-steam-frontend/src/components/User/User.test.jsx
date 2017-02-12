import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import User from './User';

describe('User', () => {
    var Wrapper = React.createClass({
        render: function() {
            return (
                <div>{this.props.children}</div>
            );
        }
    });

    it('renders without crashing', () => {
        const element = document.createElement('div');

        var user = {
            picture: 'test',
            name: 'name'
        };

        ReactDOM.render(<User user={user}/>, element);
    });

    it('renders correct image for user', () => {
        var user = {
            picture: 'test.png',
            name: 'name'
        };
        var wrapper = TestUtils.renderIntoDocument(<Wrapper><User user={user}/></Wrapper>);
        var image = TestUtils.findRenderedDOMComponentWithTag(wrapper, "img");
        expect(image.src).toEqual(user.picture);
        expect(image.alt).toEqual(user.name);
    });

    it('renders user name in span', () => {
        var user = {
            picture: 'test.png',
            name: 'name'
        };
        var wrapper = TestUtils.renderIntoDocument(<Wrapper><User user={user}/></Wrapper>);
        var header = TestUtils.findRenderedDOMComponentWithTag(wrapper, "h3");
        var text = header.querySelector('span');
        expect(ReactDOM.findDOMNode(text).textContent).toEqual(user.name);
    });
});
