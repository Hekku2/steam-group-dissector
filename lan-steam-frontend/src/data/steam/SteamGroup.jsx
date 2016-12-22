import request from 'request';
import userStore from '../../stores/UserStore'
import gameStore from '../../stores/GameStore'

class SteamGroup {
    constructor(){
        this.url = process.env.BACKEND + '/group/';
        this._handleResponse = this._handleResponse.bind(this);
    }

    _handleGames(content){
        function onlyUnique(value, index, self) {
            return self.findIndex(function(item){return item.appId === value.appId}) === index;
        }

        function flatten(a, b){
            return a.concat(b);
        }

        var uniqueGames = content.map(playerData => {
            return playerData.games.map(gameData => {
                return {
                    appId: gameData.appId,
                    name: gameData.name,
                    logo: gameData.logo
                }
            });
        }).reduce(flatten).filter(onlyUnique);
        gameStore.setGames(uniqueGames);
    }

    _handleUsers(content){
        var users = content.map(playerData => {
            return {
                id: playerData.playerId
            };
        });
        userStore.setUsers(users);
    }

    _handleResponse(error, response, body){
        var json = JSON.parse(body);
        this._handleGames(json);
        this._handleUsers(json)
    }

    fetch(groupName){
        var searchUrl = this.url + groupName;
        request.get(searchUrl, this._handleResponse);
    }
}
export default SteamGroup;