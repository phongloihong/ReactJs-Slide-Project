import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Login extends React.Component{
  componentWillMount(){
    if(this.props.isAuth == true){
      this.props.router.push('/');
    }
  }
  signin(event){
    event.preventDefault()
    var {username, password} = this.refs;
    $.post('/signin', {username: username.value, password: password.value}, (data) => {
      if(data.userName !== "undefined" && data !== "undefined"){
        var {dispatch} = this.props;
        dispatch({type: 'LOGIN', userName: data.userName});
        this.props.router.push('/');
      }
    });
  }
  render(){
    return(
      <div id="signin-signup">

        <div className = "row ">
          <ReactCSSTransitionGroup
                transitionName="overlayLogin"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
          <div className="medium-12 medium-centered columns overlay-login">
            <div className="head-login-logo" key="a">
              <i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <form onSubmit={this.signin.bind(this)}>
                <div className="row">
                  <div className="medium-12 columns user-input animated zoomIn">
                      <input className="my-input-transparent" type="text" ref="username" placeholder="Username"/>
                  </div>
                  <div className="medium-12 columns password-input animated zoomIn">
                      <input className="my-input-transparent" type="password" ref="password" placeholder="Password"/>
                  </div>
                  <div className="medium-12 columns ">
                    <button type="submit" className=" button expanded my-button animated flipInY" >Sign In</button>
                  </div>
                </div>
            </form>
            <div className="sign-up-link">
                <span>Don't have an account? <Link to="/signin">Sign up</Link></span>
            </div>
          </div>
        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}
module.exports = connect(
  function(state){
    return state
  }
)(Login);
