import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { reducer as formReducer} from "redux-form";
import {createStore, combineReducers} from 'redux'
import * as reducers from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({
    ...reducers,
    form: formReducer,
}))
ReactDOM.render(
    <Provider store={store}>

        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
