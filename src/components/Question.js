import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {formatDate, formatQuestion} from '../utils/helper';

const Question = ({id, question}) => {
    return (
        <Link to={`/questions/${id}`} className="card">
            <img src={question.avatar} alt="Avatar" className={"avatar"} />
            <div className="container">
                <h4><b>{question.name}</b></h4>
                <p className="secondary-txt">{formatDate(question.timestamp)}</p>
            </div>
        </Link>
    )
}

const mapStateToProps = ({questions, users, authedUser}, {id}) => {

    return {
        id,
        question: formatQuestion(questions[id], users[questions[id].author])
    }
}

export default connect(mapStateToProps)(Question);