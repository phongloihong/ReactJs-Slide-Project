import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component{
  componentDidMount(){
    var {isAuth} = this.props;
    if(isAuth == true){
      this.props.router.push('/');
    }
  }
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
        <div className = "row">
          <div className="medium-8 medium-centered columns">
            <h2>Sign In</h2>
            <form>
              <div className="row">
                <div className="medium-12 columns">
                  <label>Username
                    <input type="text" ref="username" placeholder="Username"/>
                  </label>
                </div>
                <div className="medium-12 columns">
                  <label>Password
                    <input type="password" ref="password" placeholder="Password"/>
                  </label>
                </div>
                <div className="medium-12 columns">
                  <button type="button" className=" button expanded" onClick={this.signin.bind(this)}>Sign In</button>
                </div>
              </div>
            </form>
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
