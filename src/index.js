import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import GlobalStyle from './components/GlobalStyle';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <GlobalStyle>
                    <App />
                </GlobalStyle>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
