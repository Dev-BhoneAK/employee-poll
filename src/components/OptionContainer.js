import AnimatedProgressBar from "./AnimatedProgressBar";
import {easeQuadInOut} from "d3-ease";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const OptionContainer = ({propsObj}) => {

    const {users, question, option, percentage, authedUser} = propsObj;
    const authedUserAnswer = users[authedUser].answers[question.id];
    return (
        <div className={"option-container"}>
            <div className="answered-card">
                <div className="top center">
                    <p>{authedUserAnswer === option && "You chose"}</p>
                </div>
                <div className="bottom">
                    <p>{question[option].text}</p>
                </div>
            </div>
            <div style={{width: '150px', height: '150px', textAlign: 'center'}} className={"center"}>
                <AnimatedProgressBar
                    valueStart={0}
                    valueEnd={percentage}
                    duration={2}
                    easingFunction={easeQuadInOut}
                >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles({ pathTransition: "none",
                                    textSize: "16px",
                                    textColor: "#5885DD",
                                    pathColor: "#5885DD"
                                })}
                            />
                        );
                    }}
                </AnimatedProgressBar>
            </div>

            <div className={"wrap-vote-info"}>
                {question[option].votes.map(userID => (
                        <div className="vote-user-info" key={userID}>
                            <img src={users[userID].avatarURL} alt="Avatar" className={"avatar"} />
                            <h4><b>{users[userID].name}</b></h4>
                        </div>
                ))}
            </div>

        </div>
    );
}

export default OptionContainer;