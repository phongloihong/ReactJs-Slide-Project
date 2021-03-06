var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser').urlencoded({extended: false});

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(cookieParser());

app.listen(process.env.PORT || 3000, () => {console.log('Server is up');});

app.use(require('./Controller/middleWare.js'));
app.get('/', (req, res)=>{ res.render('home'); });
app.post('/signin', bodyParser, require('./Controller/login.js'));
app.post('/checkauth', bodyParser, require('./Controller/checkAuth.js'));
app.get('/signout', require('./Controller/signOut.js'));
// signup
app.get('/signup', require('./Controller/signUp.js'));
