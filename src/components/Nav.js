import {Link, useLocation} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../actions/users";

const Nav = ({users, authedUser, dispatch}) => {

    const location = useLocation();
    const handleOnClick = () => {
        dispatch(logout());
        localStorage.setItem('userId', '');
    }

    return (
        <nav className={"nav"}>
            <ul className={"menu-list"}>
                <li></li>
                <li>
                    <ul className={"menu"}>
                        <li>
                            <Link to="/home" className={location.pathname === '/home' ? 'active-menu' : ''}>Home</Link>
                        </li>
                        <li>
                            <Link to="/leaderboard" className={location.pathname === '/leaderboard' ? 'active-menu' : ''}>Leaderboard</Link>
                        </li>
                        <li>
                            <Link to="/add" className={location.pathname === '/add' ? 'active-menu' : ''}>New</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className={"menu"}>
                        <li>
                            <div className="user-data">
                                <img src={users[authedUser].avatarURL} alt="Avatar" className={"leaderboard-avatar"} />
                                <h4><b>{users[authedUser].name}</b></h4>
                            </div>
                        </li>
                        <li onClick={handleOnClick}>Logout</li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({users, authedUser}) => {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Nav);