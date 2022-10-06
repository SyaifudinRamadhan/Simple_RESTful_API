const ctrl = require('../controllers/index');

const webRoutes = (app) => {
    app.get('/', ctrl.homepage.homepage);
    app.get('/cars', ctrl.homepage.explore);
    app.get('/register-page', ctrl.homepage.register);
    app.get('/login-page', ctrl.homepage.login);
    app.get('/auth/:auth/cars-dashboard', ctrl.homepage.homeManagement);
}

module.exports = {
    webRoutes
}