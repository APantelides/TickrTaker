import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import App from './components/app.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Main from './components/main.jsx';
import Auctions from './components/auctions.jsx';
import NotFound from './components/notfound.jsx';
import Dashboard from './components/dashboard.jsx';
import AddAuctionItem from './components/addauctionitem.jsx';
// var requireAuth = function(nextState, replace) {

//   // if (document.cookie) {
//   //   replace({
//   //     pathname: '/login',
//   //     state: { nextPathname: nextState.location.pathname }
//   //   });
//   // }
// };

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <Route path='/main' component={Main} />
      <Route path='/auctions' component={Auctions} />
      <Route path='/dashboard' component= {Dashboard} />
      <Route path='/makeauction' component = {AddAuctionItem}/>
      <Route path='*' component={NotFound} />
      {
      // <Route path='/login' component={Login} />
      // <Route path='/signup' component={Signup} />
      }
    </Route>
  </Router>
), document.getElementById('root'));