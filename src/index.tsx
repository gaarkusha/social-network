import {store} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const renderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root'));
}

store.subscribe(renderEntireTree);
renderEntireTree();
