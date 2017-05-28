import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './assets/css'

let store = createStore(reducer)

ReactDOM.render((
    <Provider store={store}>
        <App store={store}/>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
