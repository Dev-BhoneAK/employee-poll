import {saveQuestionAnswer, signupUser} from '../utils/api';
import {addUserID} from './questions';
export const ADD_QUESTION_ID = "ADD_QUESTION_ID";
export const ADD_ANSWER = "ADD_ANSWER";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const addQuestionID = ({id, author}) => {
    return {
        type: ADD_QUESTION_ID,
        id,
        author
    }
}

export const addAnswer = ({ authedUser, qid, answer }) => {
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export const handleAddAnswer = (info) => {
    return (dispatch) => {
        saveQuestionAnswer(info).then(() => {
            dispatch(addAnswer(info));
            dispatch(addUserID(info));
        })
    }
}

export const signup = (newSignupUser) => {
    return {
        type: SIGNUP,
        newSignupUser
    }
}

export const handleSignup = (user) => {
    return (dispatch) => {
        signupUser(user).then((newSignupUser) => {
            dispatch(signup(newSignupUser));
        })
    }
}

export const login = (authedUser) => {
    return {
        type: LOGIN,
        authedUser
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}