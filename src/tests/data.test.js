import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';

describe('_saveQuestion', () => {
    it('will return all expected fields if correct data is passed', async() => {
        const questionObj = {
            optionOneText: 'Testing with Jest',
            optionTwoText: 'Testing with Mocha',
            author: 'tester1'
        }
        const returnData = await _saveQuestion(questionObj);
        expect(returnData).toEqual(expect.objectContaining({
            id: expect.any(String),
            timestamp: expect.any(Number),
            author: questionObj.author,
            optionOne: {
                votes: [],
                text: questionObj.optionOneText
            },
            optionTwo: {
                votes: [],
                text: questionObj.optionTwoText
            }
        }));
    });

    it('will return an error if incorrect data is passed', async() => {
        const questionObj = {author: 'tester1'};
        await expect(_saveQuestion(questionObj)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
})

describe('_saveQuestionAnswer', () => {
    it('will return true if correct data is passed', async() => {
        const questionAnswerObj = {
            authedUser: 'zoshikanlu',
            qid: 'loxhs1bqm25b708cmbf3g',
            answer: 'optionOne'
        }
        const returnData = await _saveQuestionAnswer(questionAnswerObj);
        expect(returnData).toBe(true);
    });

    it('will return an error if incorrect data is passed', async() => {
        const questionAnswerObj = {authedUser: 'zoshikanlu'};
        await expect(_saveQuestionAnswer(questionAnswerObj)).rejects.toEqual("Please provide authedUser, qid, and answer");
    })
})