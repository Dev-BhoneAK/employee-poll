import React, {useState} from 'react';
import '../css/Login.css';
import {connect} from "react-redux";
import {useLocation, useNavigate} from 'react-router-dom';
import {login} from "../actions/users";
import {getApiUsers} from '../utils/api';
import {handleReceivedData} from "../actions/shared";

const Login = ({users, authedUser, dispatch}) => {

    const location = useLocation();

    const [message, setMessage] = useState("");
    const [loginData, setLoginData] = useState({
       'id': '',
        'password': ''
    });
    const navigate = useNavigate();
    const submitInput = async (event) => {
        event.preventDefault();
        const {id, password} = loginData;
        try {
            const apiUsers = await getApiUsers();
            if((users?.[id]?.password === password) || (apiUsers?.[id]?.password === password)) {
                dispatch(handleReceivedData(id));
                localStorage.setItem('userId', id);
                location.state && location.state.prevPath && location.state.prevPath !== null ? navigate(location.state.prevPath): navigate('/home');
            }else{

                setMessage('Invalid username or password. Please signup first!');
            }
        }catch (e) {
            setMessage(e.message);
        }
    }

    const changeEvent = (event) => {
        const {name, value} = event.target;
        setLoginData({...loginData, [name]: value});
    }

    const focusEvent = (event) => {
        setMessage('');
    }

    return (
        <div>
            <form onSubmit={submitInput} id="login">
                <h1>Login Form</h1>
                <div className="input-field">
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" required="id" onChange={changeEvent} onFocus={focusEvent} value={loginData.id} data-testid="id"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required onChange={changeEvent} onFocus={focusEvent} value={loginData.password} data-testid="password"/>
                    <input type="submit" value="Login" className="button" data-testid="login"/>
                </div>
                {message && <h3 className="message-alert" data-testid="error">{message}</h3>}
            </form>
        </div>
    );
}

const mapStateToProps = ({users, authedUser}) => {
    return {
        users,
        authedUser
    }
}

export {Login as UnwrappedLogin};
export default connect(mapStateToProps)(Login);