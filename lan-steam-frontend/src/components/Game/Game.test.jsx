import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Game from './Game';

describe('Game', () => {
    var Wrapper = React.createClass({
        render: function() {
            return (
                <table><tbody>{this.props.children}</tbody></table>
            );
        }
    });

    it('renders without crashing', () => {
        const tbody = document.createElement('tbody');

        var game = {
            owners: []
        };

        ReactDOM.render(<Game game={game}/>, tbody);
    });

    it('renders correct images for users', () => {
        var game = {
            owners: [
                {
                    playerId: 123,
                    picture: 'testurl.png',
                    name: 'usertestname 1'
                },
                {
                    playerId: 666,
                    picture: 'testurl2.png',
                    name: 'usertestname 2'
                }
            ]
        };
        var wrapper = TestUtils.renderIntoDocument(<Wrapper><Game game={game}/></Wrapper>);
        var images = TestUtils.scryRenderedDOMComponentsWithTag(wrapper, "img");
        expect(images).toExist();
        expect(images.length).toEqual(game.owners.length+1);
        expect(images[1].src).toEqual(game.owners[0].picture);
        expect(images[1].alt).toEqual(game.owners[0].name);
        expect(images[2].src).toEqual(game.owners[1].picture);
        expect(images[2].alt).toEqual(game.owners[1].name);
    });
});
