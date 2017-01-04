import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
var redux = require('redux');

import axios from 'axios';

// import components
import Main from './components/main.js';
import Login from './components/login.js';
import Dashboard from './components/dashboard.js';
import Signup from './components/signUp.js';
// import action
// import foundation css
require('style!css!foundation-sites/dist/css/foundation.min.css');

//use for foundation js
// $(document).ready(()=>{
//   $(document).foundation();
// });

var defaulState = {
  isAuth: false,
  isLoading: false
}

var reducer = (state = defaulState, action) => {
  switch (action.type) {
    case 'LOGIN':
       return {...state, isAuth: true, userName: action.userName};
    case 'SIGN-OUT':
      return {...state, isAuth: false, userName: 'undefined'};
    default: return state;
  }
}

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));

store.subscribe(() => {
  console.log('Action Complete!');
});


// function requireAuth(nextState, replace, callback) {
//   if (store.getState().isAuth == false) {
//     axios.post('/checkauth')
//       .then(function(response){
//         if(!response.data.userName){
//           replace({
//             pathname: '/signin'
//           });
//           callback();
//         } else {
//           store.dispatch({type: 'LOGIN', userName: response.data.userName});
//           callback();
//         }
//       });
//   }
// }

// render in root element
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <Route path="signin" component={Login}/>
        <Route path="signup" component={Signup}/>
        <Route path="dashboard" component={Dashboard}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
