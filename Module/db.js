var pg = require('pg');

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'myslideproject', //env var: PGDATABASE
  password: 'hongphong', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 100, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);


function db(query, cb){
  pool.connect((err, client, done) => {
    if(err) return cb(err);
    done();
    client.query(query, (err, result) => {
      if(err) return cb(err);
      return cb(err, result);
    });
  });
};

// Sign up
function signUp(email, password, sex, fullname){
  return new Promise((resolve, reject) => {
    query = `INSERT INTO "user"(email, password, sex, fullname) VALUES('${email}', '${password}', '${sex}', '${fullname}')`;
    db(query, (err, result) => {
      if(err) return reject(err);
      resolve();
    });
  });
}

module.exports = {signUp};
