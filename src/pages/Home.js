import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {useEffect} from "react";
import questions from "../reducers/questions";
import Question from "../components/Question";

const Home = ({newQuestionIds, doneQuestionIds, dispatch, authedUser}) => {

    return (
        <>
            <div className={"home-container"}>
                <div className={"half-container"}>
                    <h2>New Questions</h2>
                    <div className="cards">
                        {newQuestionIds.map(id => <Question id={id} key={id}/>)}
                    </div>
                </div>
                <div className={"half-container"}>
                    <h2>Done</h2>
                    <div className="cards">
                        {doneQuestionIds.map(id => <Question id={id} key={id}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({questions, users, authedUser}) => {

    const doneQuestionIds = Object.keys(users[authedUser].answers).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    return {
        authedUser,
        newQuestionIds: Object.keys(questions).filter(question_id => !doneQuestionIds.includes(question_id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        doneQuestionIds
    }
}
export default connect(mapStateToProps)(Home);