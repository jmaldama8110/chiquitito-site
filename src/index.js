import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{ history} from './router/AppRouter';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';

import './styles/styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.render(<AppRouter />, document.getElementById('root') );



//------ Change to play mode 2------
// import ModalSample from './components/play/ModalSample';
// ReactDOM.render(<ModalSample />, document.getElementById('root') );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


