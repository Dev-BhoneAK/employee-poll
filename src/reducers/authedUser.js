import {LOGIN, LOGOUT} from '../actions/users';
import {RECEIVE_DATA} from '../actions/shared';

const authedUser = (state = null, action) => {
    switch (action.type) {
        case LOGIN:
            return action.authedUser;
        case RECEIVE_DATA:
            return action.authedUser;
        case LOGOUT:
            return null;
        default:
            return state;
    }
}

export default authedUser;