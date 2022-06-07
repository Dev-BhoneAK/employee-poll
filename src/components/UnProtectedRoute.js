import React from 'react';
import {connect} from "react-redux";
import {Routes, Route, Navigate, useNavigate, useLocation} from 'react-router-dom';

const UnProtectedRoute = ({ children, authedUser }) => {

    if (authedUser) {
        return <Navigate
            to={'/home'}
        />
    }else{
        return children;
    }
};

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser: authedUser ? authedUser : localStorage.getItem('userId')
    }
};
export default connect(mapStateToProps)(UnProtectedRoute);