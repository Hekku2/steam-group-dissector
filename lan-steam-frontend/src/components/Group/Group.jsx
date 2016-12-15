import React, { Component } from 'react';
import UserList from '../UserList/UserList';
import userStore from '../../stores/UserStore'

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userStore.getUsers()
        }
    }

    componentWillMount() {
        this.storeId = userStore.registerView(() => { this.updateState(); });
        this.updateState();
    }

    componentWillUnmount() {
        userStore.deregisterView(this.storeId);
    }

    updateState() {
        this.setState({
            users: userStore.getUsers()
        });
    }

    render() {
        return (
            <div >
                <p>{this.state.users.length}</p>
                <UserList users={this.state.users}/>
            </div>
        );
    }
}
export default Group;