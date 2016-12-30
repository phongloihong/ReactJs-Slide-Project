import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class Loader extends React.Component{
  render(){
    return(
      <div className="loading">
        <div className="loading-text" >
          <span className="loading-text-words">L</span>
          <span className="loading-text-words">O</span>
          <span className="loading-text-words">A</span>
          <span className="loading-text-words">D</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">N</span>
          <span className="loading-text-words">G</span>
        </div>
      </div>
    );
  }
}
module.exports = Loader;
