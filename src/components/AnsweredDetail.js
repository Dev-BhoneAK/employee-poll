import "react-circular-progressbar/dist/styles.css";
import OptionContainer from "./OptionContainer";
const AnsweredDetail = ({propsObj}) => {

    const {users, question, optionOnePercentage, optionTwoPercentage, authedUser} = propsObj;

    return (
        <div className={"detail-container answered"}>
            <OptionContainer propsObj={{users, question, option: "optionOne", percentage: optionOnePercentage, authedUser}}/>
            <OptionContainer propsObj={{users, question, option: "optionTwo", percentage: optionTwoPercentage, authedUser}}/>
        </div>
    )
}

export default AnsweredDetail;