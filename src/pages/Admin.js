import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {Link, Outlet} from "react-router-dom";

const Admin = () => {

    const location = useLocation();
    const prevPath = location.state?.prevPath;
    const [active, setActive] = useState("login");
    const addActiveClass = (e) => {
        const clicked = e.target.id;
        setActive(clicked);
    }

    return (
        <div className="form-container">
            <div className="forms">
                <ul className="tab-group">
                    <Link to="/login" state={{ prevPath }}><li className={`tab ${active === 'login' && 'login-active'}`} id="login" onClick={addActiveClass}>Log In</li></Link>
                    <Link to="/signup" state={{ prevPath }}><li className={`tab ${active === 'signup' && 'login-active'}`} id="signup" onClick={addActiveClass}>Sign Up</li></Link>
                </ul>

                <Outlet />
            </div>
        </div>
    );
}

export default Admin;