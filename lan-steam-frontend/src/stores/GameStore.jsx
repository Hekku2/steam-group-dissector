import Store from './BaseStore';
import dispatcher from '../dispatcher';

class GameStore extends Store{
    constructor() {
        super("GameStore");
        this.logger.debug('Initializing GameStore');
        this._games = [];
    }

    getGames(){
        return this._games;
    }

    setGames(items){
        this._games = [];
        this._games.push(...items);
        this.changeStore();
    }
}
let store = new GameStore();
dispatcher.registerStore(store);
export default store;