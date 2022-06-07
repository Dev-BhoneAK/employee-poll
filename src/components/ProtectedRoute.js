import React from 'react';
import {connect} from "react-redux";
import {Routes, Route, Navigate, useNavigate, useLocation} from 'react-router-dom';

const ProtectedRoute = ({ children, authedUser, questions,users }) => {

    const location = useLocation();
    if (!authedUser) {
        return <Navigate
            to={'/'}
            state={{ prevPath: location.pathname }}
        />
    }else{
        if(questions && users){
            if(Object.keys(questions).length !== 0 && Object.keys(users).length !== 0 ){
                return children;
            }
        }
    }
};

const mapStateToProps = ({ authedUser,questions, users }) => {
    return {
        authedUser: authedUser ? authedUser : localStorage.getItem('userId'),
        questions,
        users
    }
};
export default connect(mapStateToProps)(ProtectedRoute);