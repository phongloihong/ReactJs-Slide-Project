var jwt = require('jsonwebtoken');
var SECRET_KEY = "asdasd&*^*98192uide8q7&*^T&YGPOIJS7*^&%&^%)!(#^)";

// sign token
function sign(data){
  return jwt.sign(data, SECRET_KEY, {expiresIn: 1000000});
}

// decode token
function decode(encode){
  try {
    return jwt.verify(encode, SECRET_KEY);
  } catch (err) {
    return err;
  }
}

// refesh token
function getNewToken(data){
  data.exp = Math.floor(Date.now() / 1000 + 1000);
  return jwt.sign(data, SECRET_KEY);
}

module.exports = {sign, decode, getNewToken};
