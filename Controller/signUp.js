var {signUp} = require('../Module/db.js');

module.exports = (req, res) => {
  signUp('Phong', '123', '1', 'Loi Hong Phong')
  .then(() => console.log('SIGN UP SUCCESS'))
  .catch((e) => console.log('SIGN IN FALSE' + e));
};
