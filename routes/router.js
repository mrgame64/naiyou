var auth = require('./auth.js');
var content = require('./content.js');
var users = require('./users.js');
var dashboard = require('./dashboard.js');


app.use(express.static('static'));

//API
app.all('/api/auth', auth.api);
app.all('/api/users', users.api);
app.all('/api/content', content.api);
app.all('/api/dashboard', dashboard.api);

//Pages
app.get('/', content.main);
app.get('/page', content.page);
app.get('/post', content.post);
app.get('/dashboard', dashboard.page);
