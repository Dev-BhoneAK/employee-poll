import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {MemoryRouter} from "react-router-dom";
import middleware from "./middleware";
import reducers from "./reducers";

const store = createStore(reducers, middleware);
test('renders learn react link', () => {
  render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
  );
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});


