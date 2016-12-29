import React from 'react';
import {Link, IndexLink, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
class Nav extends React.Component{
  componentWillMount(){
    var {dispatch} = this.props;
    axios.post('/checkauth')
      .then(function(response){
        if(!response.data.userName){
          hashHistory.push('/signin');
        } else {
          dispatch({type: 'LOGIN', userName: response.data.userName});
        }
      });
  }
  signout(){
    $.get('/signout', data => {
      var {dispatch} = this.props;
      dispatch({type: 'SIGN-OUT'});
      hashHistory.push('/signin');
    });
  }
  render(){
    return(
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="title-bar" data-responsive-toggle="widemenu" data-hide-for="medium">
            <div className="title-bar-left">
              <button className="menu-icon" type="button" data-open="offCanvasLeft"></button>
              <span className="title-bar-title">Foundation</span>
            </div>
          </div>

          <div className="off-canvas position-left" id="offCanvasLeft" data-off-canvas>
            <ul className="vertical dropdown menu" data-dropdown-menu>
              <li><a href="left_item_1">Left item 1</a></li>
              <li><a href="left_item_2">Left item 2</a></li>
              <li><a href="left_item_3">Left item 3</a></li>
            </ul>
          </div>

          <div id="widemenu" className="top-bar">
            <div className="top-bar-right">
              <ul className="menu">
                <li><Link to="/">{this.props.userName}</Link></li>
                <li><Link to="/" onClick={this.signout.bind(this)}>Sign Out</Link></li>
              </ul>
            </div>
          </div>

          <div className="off-canvas-content" data-off-canvas-content>
            <div className="row column">

            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount(){
    $(document).foundation();
  }
}
module.exports = connect(
  function(state){
    return state
  }
)(Nav);
