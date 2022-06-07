import {connect} from "react-redux";
import {useState} from "react";
import {handleAddQuestion} from '../actions/questions';
import {useNavigate} from "react-router-dom";

const New = (props) => {

    const navigate = useNavigate();
    const [options, setOptions] = useState({
        option1: "",
        option2: "",
    });

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setOptions(previousOptions => ({
            ...previousOptions,
            [name]: value
        }));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const {option1, option2} = options;
        const {author} = props;
        props.dispatch(handleAddQuestion({optionOneText: option1, optionTwoText:option2, author}));
        navigate('/home');
    }

    return (
        <div className={"center"}>
            <form className="new" onSubmit={handleOnSubmit}>
                <h2>Would You Rather</h2>
                <h4>Create Your Own Poll</h4>
                <input type="text" placeholder="First Option" onChange={handleOnChange} name="option1" value={options.option1}/>
                <input type="text" placeholder="Second Option" onChange={handleOnChange} name="option2" value={options.option2}/>
                <button onSubmit={handleOnSubmit} className="btn" disabled={options.option1 === '' || options.option2 === ''}>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        author: state.authedUser
    }
}
export default connect(mapStateToProps)(New);