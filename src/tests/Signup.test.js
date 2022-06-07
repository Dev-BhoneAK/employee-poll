import { render, screen, fireEvent } from '@testing-library/react';
import {UnwrappedSignup} from "../pages/Signup";
import Signup from "../pages/Signup";
import * as React from 'react';
import {createStore} from "redux";
import reducers from "../reducers";
import middleware from "../middleware";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import Nav from "../components/Nav";

describe('Sign Up Form', () => {
    it('will show error message', () => {
        render(<UnwrappedSignup />);
        const name = screen.getByTestId('name');
        const userID = screen.getByTestId('id');
        const password = screen.getByTestId('password');
        const confirmPassword = screen.getByTestId('confirm-password');
        const submitButton = screen.getByTestId('signup');
        fireEvent.change(name, {target: {value: 'test name'}});
        fireEvent.change(userID, {target: {value: 'test id'}});
        fireEvent.change(password, {target: {value: 'abc'}});
        fireEvent.change(confirmPassword, {target: {value: 'def'}});
        fireEvent.click(submitButton);
        expect(screen.getByText('Password and Confirm Password should be the same')).toBeInTheDocument();
    })

    it('will show success message', () => {
        const store = createStore(reducers, middleware);

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Signup />
                </MemoryRouter>
            </Provider>
        );

        const name = screen.getByTestId('name');
        const userID = screen.getByTestId('id');
        const password = screen.getByTestId('password');
        const confirmPassword = screen.getByTestId('confirm-password');
        const submitButton = screen.getByTestId('signup');
        fireEvent.change(name, {target: {value: 'test name'}});
        fireEvent.change(userID, {target: {value: 'test id'}});
        fireEvent.change(password, {target: {value: 'abc'}});
        fireEvent.change(confirmPassword, {target: {value: 'abc'}});
        fireEvent.click(submitButton);
        expect(screen.getByText('User registration is successful.Please login with signup data.')).toBeInTheDocument();
    })
})