import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Firebase from './utils/Firebase'
import FirebaseContext from './utils/FirebaseContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
