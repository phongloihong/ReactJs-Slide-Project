var {sign, decode, getNewToken} = require('../Module/jwt.js');

module.exports = (req, res) => {
  var {username, password} = req.body;
  var result;
  if(username == 'phong' && password == '123'){
    cookie = res.cookie('user_cookie', sign({username}));
    result = {userName: username}
  } else {
    result = {errMessage: 'Sign in Fail'};
  }
  res.send(result);
}
