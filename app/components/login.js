import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Import mycomponent
import Loader from '../components/etc/loader.js';
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {loading: true};
  }
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
    var loader = this.state.loading != true? '':<Loader/>;
    return(
      <div id="signin-signup" >
        {loader}
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
              <h2>Sign in</h2>
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
                <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
            </div>
          </div>
        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
  componentDidMount(){
    this.state.loading = false;
    setTimeout(() => {
    this.setState(this.state); }, 0);
  }
}
module.exports = connect(
  function(state){
    return state
  }
)(Login);
