import request from 'request';
import userStore from '../../stores/UserStore'

class SteamGroup {
    constructor(){
        this.url = process.env.BACKEND + '/group/kokkeli';
    }

    _addUsers(error, response, body){
        var json = JSON.parse(body);
        var users = json.map(id => {return { id: id};});

        userStore.addUsers(users);
    }

    fetch(){
        request.get(this.url, this._addUsers);
    }
}
export default SteamGroup;