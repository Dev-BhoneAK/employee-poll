import { render, screen, fireEvent } from '@testing-library/react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {MemoryRouter} from 'react-router-dom';
import Nav from '../components/Nav';
import reducers from "../reducers";
import {_getUsers} from '../utils/_DATA';

describe('Nav', () => {
   it('will display all expected links', async () => {

       const users = await _getUsers();

       const initialState = {
           users,
           authedUser: 'mtsamis'
       };
       const store = createStore(reducers, initialState);
       render(
           <Provider store={store}>
               <MemoryRouter>
                   <Nav />
               </MemoryRouter>
           </Provider>
       );
       const home = screen.getByText('Home');
       const leaderboard = screen.getByText('Leaderboard');
       const add = screen.getByText('New');

       expect(home).toBeInTheDocument();
       expect(leaderboard).toBeInTheDocument();
       expect(add).toBeInTheDocument();
   })
});