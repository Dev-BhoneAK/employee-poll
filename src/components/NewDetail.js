import {useState} from 'react';
import {handleAddAnswer} from "../actions/users";

const NewDetail = ({authedUser, question, user, dispatch}) => {

    const [activeClass, setActiveClass] = useState("");

    const handleOnClick = (option) => {
        setActiveClass(option);
        const qid = question.id;
        dispatch(handleAddAnswer({authedUser, qid, answer:option}));
    }
    return (
        <div className="center detail-container">
            <h2>Poll by {user.name}</h2>
            <img src={user.avatarURL} alt="Avatar" className={"detail-avatar"}/>
            <h3>Would You Rather</h3>
            <div className="option-cards">
                <div className={activeClass === 'optionOne' ? "option-card active" : "option-card"} onClick={() => handleOnClick('optionOne')}>
                    <div className="container">
                        <p>{question.optionOne.text}</p>
                    </div>
                </div>
                <div className={activeClass === 'optionTwo' ? "option-card active" : "option-card"} onClick={() => handleOnClick('optionTwo')}>
                    <div className="container">
                        <p>{question.optionTwo.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDetail;