import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Group from '../Group/Group'
import GroupChooser from '../GroupChooser/GroupChooser'
import Games from '../Games/Games';
import Config from 'Config';

class App extends Component {
    constructor() {
        super();
        this.groupChanged = this.groupChanged.bind(this);
        this.state = {
            group: Config.defaultGroup,
        };
    }

    groupChanged(newGroupName){
        this.setState({
            group: newGroupName
        });
    }

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Steam Group Dissector</h1>
                </Jumbotron>
                <GroupChooser groupChanged={this.groupChanged} groupName={this.state.group}/>
                <Group groupName={this.state.group} />
                <Games />
            </div>
        );
    }
}

export default App;
