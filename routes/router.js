app.use(express.static('static'));

//API
app.all('/api/access', access.api);
app.all('/api/posts', content.apiPosts);
app.all('/api/comments', content.apiComments);
app.all('/api/pages' pages.api);
app.all('/api/dashboard', dashboard.api);

//Pages
app.get('/', pages.main);
app.get('/page', pages.page);
app.get('/post', pages.post);
app.get('/dashboard', dashboard.page);
