import {getInitialData} from '../utils/api';
import {showLoading, hideLoading} from "react-redux-loading-bar";

export const LOGIN_DATA = 'LOGIN_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
const receiveData = (data, authedUser) => {
    const {questions, users} = data;
    return {
        type: RECEIVE_DATA,
        questions,
        users,
        authedUser
    }
}

export const handleReceivedData = (authedUser) => {
    return (dispatch) => {
        dispatch(showLoading());
        getInitialData().then((returnData) => {
            dispatch(receiveData(returnData, authedUser));
            dispatch(hideLoading());
        });
    }
}
