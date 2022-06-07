import {useEffect} from "react";
import {connect} from "react-redux";
import {handleReceivedData} from './actions/shared';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import New from "./pages/New";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Leaderboard from "./pages/Leaderboard";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import LoadingBar from "react-redux-loading-bar";
import UnProtectedRoute from "./components/UnProtectedRoute";

const App = ({users, authedUser, dispatch}) => {


    useEffect(() => {

        if (authedUser) {
            dispatch(handleReceivedData(authedUser));
        }
    }, [authedUser]);

    return (
        <div>
            <LoadingBar className={"loading"}/>
            {users && users[authedUser] && <Nav/>}
            <Routes>
                <Route exact path="/" element={
                    <UnProtectedRoute>
                        <Admin/>
                    </UnProtectedRoute>
                }>
                    <Route index element={<Login/>}/>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="signup" element={<Signup/>}></Route>
                </Route>
                <Route path="/home" element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }/>
                <Route path="/leaderboard" element={
                    <ProtectedRoute>
                        <Leaderboard/>
                    </ProtectedRoute>
                }/>
                <Route path="/add" element={
                    <ProtectedRoute>
                        <New/>
                    </ProtectedRoute>
                }/>
                <Route path="/questions/:question_id" element={
                    <ProtectedRoute>
                        <Detail/>
                    </ProtectedRoute>
                }/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

const mapStateToProps = ({authedUser, users}) => {
    return {
        users,
        authedUser: authedUser ? authedUser : localStorage.getItem('userId')
    }
};
export default connect(mapStateToProps)(App);
