var {sign, decode, getNewToken} = require('../Module/jwt.js');

module.exports = (req, res) => {
  var decodeToken = decode(req.cookies.user_cookie);
  var result;
  if(typeof decodeToken == 'object'){
    result = {userName: decodeToken.username}
  } else {
    result = {errMessage: 'Verify Token Fail'}
  }
  res.send(result);
}
