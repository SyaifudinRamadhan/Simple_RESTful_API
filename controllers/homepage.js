const models = require('../models');
const getUser = (id)=>{

}

const homepage = (req, res) => {
    res.render('index', {
        title : 'BINAR Rent Car | Landing Page',
        layout : 'layouts/main-layout',
    });
}
const explore = (req, res) => {
    res.render('car-search', {
        title : 'BINAR Rent Car | Explore',
        layout : 'layouts/main-layout',
    });
}

const register = (req, res) => {
    res.render('management/register',{
        layout: 'layouts/blank-layout'
    })
}

const login = (req, res) => {
    res.render('management/login', {
        layout: 'layouts/blank-layout'
    });
}

const homeManagement = (req, res) => {
    res.render('management/index', {
        layout: 'layouts/management-layout',
        userID: req.params.auth,
        title: 'Car Management',
    });
}

module.exports = {
    homepage, explore, register, login, homeManagement
}