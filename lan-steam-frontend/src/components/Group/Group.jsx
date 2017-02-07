import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
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
        const title = (
            <h4 style={{cursor: 'pointer'}}>Users</h4>
        );

        return (
            <Panel header={title} collapsible>
                <UserList users={this.state.users}/>
            </Panel>
        );
    }
}
export default Group;