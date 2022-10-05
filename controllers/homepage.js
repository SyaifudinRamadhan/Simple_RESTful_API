
const homepage = (req, res) => {
    res.render('index', {
        title : 'BINAR Rent Car | Landing Page',
        layout : 'layouts/main-layout',
    });
    return;
}
const explore = (req, res) => {
    res.render('car-search', {
        title : 'BINAR Rent Car | Explore',
        layout : 'layouts/main-layout',
    });
    return;
}

const register = (req, res) => {
    res.render('management/register',{
        layout: 'layouts/blank-layout'
    })
    return;
}

const login = (req, res) => {
    res.render('management/login', {
        layout: 'layouts/blank-layout'
    })
}

module.exports = {
    homepage, explore, register, login
}