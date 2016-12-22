import request from 'request';
import userStore from '../../stores/UserStore'
import gameStore from '../../stores/GameStore'

class SteamGroup {
    constructor(){
        this.url = process.env.BACKEND + '/group/';
        this._handleResponse = this._handleResponse.bind(this);
    }

    _handleGames(content){
        function gameEquals(a, b){
            return a.appId === b.appId;
        }

        function onlyUnique(value, index, self) {
            return self.findIndex(item => {return gameEquals(item, value)}) === index;
        }

        function flatten(a, b){
            return a.concat(b);
        }

        function hasGame(user, app){
            return user.games.some(userGame => {return gameEquals(userGame, app)});
        }

        function sort(a, b){
            return a.owners.length - b.owners.length;
        }

        var uniqueGames = content.map(playerData => {
            return playerData.games.map(gameData => {
                return {
                    appId: gameData.appId,
                    name: gameData.name,
                    logo: gameData.logo,
                    owners: content.filter(item => {return hasGame(item, gameData);})
                            .map(item => {
                                return {
                                    playerId: item.playerId,
                                    name: item.user.personaName,
                                    picture: item.user.avatar
                                }
                            })
                }
            });
        }).reduce(flatten).filter(onlyUnique).sort(sort);
        gameStore.setGames(uniqueGames);
    }

    _handleUsers(content){
        var users = content.map(playerData => {
            return {
                id: playerData.playerId,
                name:  playerData.user.personaName,
                picture: playerData.user.avatar
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