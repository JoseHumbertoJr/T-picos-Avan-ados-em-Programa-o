import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loja from './componentes/Loja';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Loja nome="Loja"/>, document.getElementById('root'));
ReactDOM.render(<App nome="Store"/>, document.getElementById('root'));

// Se for user serviceworker, troca por .register
serviceWorker.unregister();