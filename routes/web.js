const ctrl = require('../controllers/index');

const webRoutes = (app) => {
    app.get('/', ctrl.homepage.homepage);
    app.get('/cars', ctrl.homepage.explore);
    app.get('/register-page', ctrl.homepage.register);
    app.get('/login-page', ctrl.homepage.login);
}

module.exports = {
    webRoutes
}