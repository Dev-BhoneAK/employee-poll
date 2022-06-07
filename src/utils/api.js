import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer ,
    _signupUser
} from './_DATA.js'

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => {

        const newSignupUser = localStorage.getItem('newSignupUser');
        if(newSignupUser){
            const signupUser = JSON.parse(newSignupUser);
            return {
                users: { ...users, [signupUser?.id] : signupUser},
                questions,
            };
        }else{
            return {
                users,
                questions,
            }
        }
    })
}

export function saveQuestion (info) {
    return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}

export function getApiUsers() {
    return _getUsers();
}

export function signupUser(user){
    return _signupUser(user);
}