import {connect} from "react-redux";

const Leaderboard = ({users, userIds, authedUser}) => {

    return (
        <div className={"table-container"}>
            <table>
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Created</th>
                        <th>Answered</th>
                    </tr>
                </thead>
                <tbody>
                    {userIds.map(userId => (
                        <tr key={userId} style={authedUser === userId ? {color: "#5885DD"}: {}}>
                            <td>
                                <div className="user-data">
                                    <img src={users[userId].avatarURL} alt="Avatar" className={"leaderboard-avatar"} />
                                    <div >
                                        <h4><b>{users[userId].name}</b></h4>
                                        <p className="secondary-txt" style={authedUser === userId ? {color: "#5885DD"}: {}}>{users[userId].id}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{users[userId].questions.length}</td>
                            <td>{Object.keys(users[userId].answers).length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({users, authedUser}) => {
    return {
        userIds: Object.keys(users).sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)),
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(Leaderboard);