import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.user.id}</li>
        );
    }
}
export default User;