import Store from './BaseStore';
import dispatcher from '../dispatcher';

class UserStore extends Store{
    constructor() {
        super("UserStore");
        this.logger.debug('Initializing UserStore');
        this._users = [];
    }

    getUsers(){
        return this._users;
    }

    addUsers(items){
        this._users.push(...items);
        this.changeStore();
    }
}
let userStore = new UserStore();
dispatcher.registerStore(userStore);
export default userStore;