var {sign, decode, getNewToken} = require('../Module/jwt.js');

module.exports = (req, res) => {
  res.cookie('user_cookie', '');
  res.end();
}
