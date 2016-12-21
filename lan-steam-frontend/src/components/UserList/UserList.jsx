import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import User from '../User/User';

class UserList extends Component {
    render() {
        return (
            <ListGroup>
                {this.props.users.map(user => <User key={user.id} user={user}/>)}
            </ListGroup>
        );
    }
}
export default UserList;