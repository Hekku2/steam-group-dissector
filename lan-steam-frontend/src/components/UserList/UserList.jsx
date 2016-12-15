import React, { Component } from 'react';
import User from '../User/User';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.users.map(user => <User key={user.id} user={user}/>)}
            </ul>
        );
    }
}
export default UserList;