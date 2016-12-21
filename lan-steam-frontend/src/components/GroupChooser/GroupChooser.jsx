import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import SteamGroup from '../../data/steam/SteamGroup';

class GroupChooser extends Component {

    constructor(props) {
        super(props);
        this.group = new SteamGroup();
    }

    search(){
        this.group.fetch(this.props.groupName);
    }

    updateInputValue(evt) {
        this.props.groupChanged(evt.target.value);
    }

    render() {
        return (
            <from>
                <FormGroup>
                    <ControlLabel>Group name</ControlLabel>
                    <FormControl
                        type="text"
                        onChange={(evt) => this.updateInputValue(evt)}
                        value={this.props.groupName}
                        placeholder="Choose group name"
                    />
                    <Button type="submit" onClick={() => this.search()} >
                        Search
                    </Button>
                    <FormControl.Feedback />
                </FormGroup>
            </from>
        );
    }
}
export default GroupChooser;