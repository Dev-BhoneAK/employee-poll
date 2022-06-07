import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import NewDetail from "../components/NewDetail";
import AnsweredDetail from "../components/AnsweredDetail";
import NotFound from "./NotFound";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let params = useParams();
        return <Component {...props} router={{ params }} />;
    };

    return ComponentWithRouterProp;
};

const Detail = ({questionNotFound, users, answered, authedUser, question, user, dispatch, optionOnePercentage, optionTwoPercentage}) => {

    if(questionNotFound){
        return <NotFound/>
    }else{
        if(answered  === true){
            return <AnsweredDetail propsObj={{users, question, optionOnePercentage, optionTwoPercentage, authedUser}}/>
        }else{
            return <NewDetail authedUser={authedUser} question={question} user={user} dispatch={dispatch}/>
        }
    }
}

const mapStateToProps = ({questions, users, authedUser}, props) => {
    const {question_id} = props.router.params;

    if(questions[question_id]){
        const answered = Object.keys(users[authedUser].answers).includes(question_id);
        const optionOneVotes = questions[question_id].optionOne.votes.length;
        const optionTwoVotes = questions[question_id].optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;
        const optionOnePercentage = (optionOneVotes/totalVotes) * 100;
        const optionTwoPercentage = (optionTwoVotes/totalVotes) * 100;
        return {
            users,
            answered,
            authedUser,
            question: questions[question_id],
            user: users[questions[question_id].author],
            optionOnePercentage,
            optionTwoPercentage,
            questionNotFound: false
        }
    }else {
        return {questionNotFound: true}
    }
}
export default withRouter(connect(mapStateToProps)(Detail));