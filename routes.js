module.exports = (app,db) => {
    const index = require('./controller/index.js')(app,db);
    app.get('/', index.sayhello)
    app.get('/register',index.register)
    app.post('/signup',index.signup)
    app.post('/login',index.login)
};