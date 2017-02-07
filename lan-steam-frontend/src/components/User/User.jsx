import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class User extends Component {
    render() {
        return (
            <ListGroupItem>
                <h3>
                    <img src={this.props.user.picture} alt={this.props.user.name} />
                    <span> {this.props.user.name} </span>
                </h3>
            </ListGroupItem>
        );
    }
}
export default User;