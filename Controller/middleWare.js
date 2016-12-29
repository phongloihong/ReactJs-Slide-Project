var {sign, decode, getNewToken} = require('../Module/jwt.js');

module.exports = (req, res, next) => {
  var isAuth = false;
  var decodeToken = decode(req.cookies.user_cookie);
  if(typeof decodeToken == 'object'){
    res.cookie('user_cookie', getNewToken(decodeToken));
  }
  next();
}
