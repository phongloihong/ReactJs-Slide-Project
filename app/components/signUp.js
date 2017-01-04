import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Signup extends React.Component{
  render(){
    return(
      <div id="signin-signup" >
        <div className = "row">
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
              <h2>Sign up</h2>
            </div>
            <form>
                <div className="row">

                  <div className="medium-12 columns user-input animated zoomIn">
                      <input className="my-input-transparent" type="text" ref="username" placeholder="Email"/>
                  </div>
                  <div className="medium-12 columns password-input animated zoomIn">
                      <input className="my-input-transparent" type="password" ref="password" placeholder="Password"/>
                  </div>
                  <div className="medium-12 columns password-input animated zoomIn">
                      <input className="my-input-transparent" type="password" ref="repassword" placeholder="Re-Password"/>
                  </div>
                  <div className="medium-12 columns fullname-input animated zoomIn">
                      <input className="my-input-transparent" type="text" ref="repassword" placeholder="Full Name"/>
                  </div>
                  <div className="medium-12 columns ">
                    <button type="submit" className="button expanded my-button animated flipInY" >Sign In</button>
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

module.exports = Signup;
