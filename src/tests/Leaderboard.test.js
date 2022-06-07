import { render, screen } from '@testing-library/react';
import Leaderboard from '../pages/Leaderboard';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {MemoryRouter} from "react-router-dom";
import reducers from "../reducers";
import {_getUsers} from "../utils/_DATA";

describe('Leaderboard', () => {
    it("will match with snapshot", async () => {

        const users = await _getUsers();
        const initialState = {
            users,
            authedUser: 'mtsamis'
        }
        const store = createStore(reducers, initialState);
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const leaderboard = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Leaderboard />
                </MemoryRouter>
            </Provider>
        );
        expect(leaderboard).toMatchSnapshot();
    })
})