import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
class Login extends React.Component{

  signin(){
    var {username, password} = this.refs;
    $.post('/signin', {username: username.value, password: password.value}, (data) => {
      if(data.userName){
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
          <div className="medium-12 medium-centered columns overlay-login">
            <div className="head-login-logo">
              <i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <form>
              <div className="row">
                <div className="medium-12 columns user-input">
                    <input className="my-input-transparent" type="text" ref="username" placeholder="Username"/>
                </div>
                <div className="medium-12 columns password-input">
                    <input className="my-input-transparent" type="password" ref="password" placeholder="Password"/>
                </div>
                <div className="medium-12 columns">
                  <button type="submit" className=" button expanded my-button" onClick={this.signin.bind(this)}>Sign In</button>
                </div>
              </div>
            </form>
            <div className="sign-up-link">
                <span>Don't have an account? <Link to="/signin">Sign up</Link></span>
            </div>
          </div>
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
