import React, {useState} from 'react';
import '../css/Login.css';
import {connect} from "react-redux";
import {handleSignup} from '../actions/users';

const Signup = ({dispatch}) => {

    const [message, setMessage] = useState("");
    const [signupData, setSignupData] = useState({
        'name': '',
        'id': '',
        'password': '',
        'confirmPassword': ''
    });
    const submitInput = async (event) => {
        event.preventDefault();
        const {name, id, password,  confirmPassword} = signupData;

        if (password !== confirmPassword){
            setMessage('Password and Confirm Password should be the same');
            return false;
        }

        try {
            dispatch(handleSignup({id, name, password}));
            setMessage('User registration is successful.Please login with signup data.');
        }catch (e) {
            console.error(e);
            setMessage(e.message);
        }
    }

    const changeEvent = (event) => {
        const {name, value} = event.target;
        setSignupData({...signupData, [name]: value});
    }

    const focusEvent = (event) => {
        setMessage('');
    }

    return (
        <div>
            <form onSubmit={submitInput} id="signup">
                <h1>Sign Up Form</h1>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required="name" onChange={changeEvent} value={signupData.name} data-testid="name"/>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" required="id" onChange={changeEvent} value={signupData.id} data-testid="id"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required onChange={changeEvent} onFocus={focusEvent} value={signupData.password} data-testid="password"/>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirmPassword" required onChange={changeEvent} onFocus={focusEvent} value={signupData.confirmPassword} data-testid="confirm-password"/>
                    <input type="submit" value="Sign up" className="button" data-testid="signup"/>
                </div>
                {message && <h3 className={message.includes('successful') ? "success-msg" : "message-alert"}>{message}</h3>}
            </form>
        </div>
    );
}

export { Signup as UnwrappedSignup };
export default connect()(Signup);