import {saveQuestion} from '../utils/api';
import {addQuestionID} from './users';
import {showLoading, hideLoading} from "react-redux-loading-bar";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_USER_ID = "ADD_USER_ID";

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const addUserID = ({ authedUser, qid, answer }) => {
    return {
        type: ADD_USER_ID,
        authedUser,
        qid,
        answer
    }
}

export const handleAddQuestion = (data) => {
    return (dispatch) => {
        dispatch(showLoading());
        saveQuestion(data).then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(addQuestionID(formattedQuestion));
            dispatch(hideLoading());
        })
    }
}