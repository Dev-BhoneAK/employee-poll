import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {UnwrappedLogin} from "../pages/Login";
import Login from "../pages/Login";
import * as React from 'react';
import Signup from "../pages/Signup";
import {createStore} from "redux";
import reducers from "../reducers";
import middleware from "../middleware";

describe('Login Form', () => {
    it('will show input fields and button', () => {

        render(
            <MemoryRouter>
                <UnwrappedLogin />
            </MemoryRouter>
        );
        const userID = screen.getByTestId('id');
        const password = screen.getByTestId('password');
        const submitButton = screen.getByTestId('login');
        expect(userID).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
})