import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';


class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListGroupItem>{this.props.user.id}</ListGroupItem>
        );
    }
}
export default User;