import React from 'react';
import Nav from './nav.js';
import {Router} from 'react-router';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let currentRouteName = this.props.location.pathname;
    let nav = currentRouteName == '/signin' || currentRouteName == '/signup'? '': <Nav/>;
    return(
      <div>
        {nav}
        {this.props.children}
      </div>
    );
  }
}
module.exports = Main;
