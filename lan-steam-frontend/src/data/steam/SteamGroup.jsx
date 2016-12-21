import request from 'request';
import userStore from '../../stores/UserStore'

class SteamGroup {
    constructor(){
        this.url = process.env.BACKEND + '/group/';
    }

    _addUsers(error, response, body){
        var json = JSON.parse(body);
        var users = json.map(id => {return { id: id};});

        userStore.setUsers(users);
    }

    fetch(groupName){
        var searchUrl = this.url + groupName;
        request.get(searchUrl, this._addUsers);
    }
}
export default SteamGroup;