import {LOGIN_DATA, RECEIVE_DATA} from '../actions/shared';
import {ADD_ANSWER, ADD_QUESTION_ID, LOGOUT, SIGNUP} from '../actions/users';
const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return{
                ...state,
                ...action.users,
            }
        case ADD_QUESTION_ID:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(action.id)
                }
            }
        case ADD_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SIGNUP:
            return {
                ...state,
                [action.newSignupUser.id]: action.newSignupUser
            }
        case LOGOUT:
            return null;
        default:
            return state;
    }
}

export default users;