import {LOGIN_DATA, RECEIVE_DATA} from '../actions/shared';
import {ADD_QUESTION, ADD_USER_ID} from  '../actions/questions';
import {LOGOUT} from "../actions/users";

const questions = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_DATA:
            return {
                ...state,
                ...action.questions
            }
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_USER_ID:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat(action.authedUser)
                    }
                }
            }
        case LOGOUT:
            return null;
        default:
            return state;
    }
}

export default questions;