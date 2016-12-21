import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class User extends Component {
    render() {
        return (
            <ListGroupItem>{this.props.user.id}</ListGroupItem>
        );
    }
}
export default User;