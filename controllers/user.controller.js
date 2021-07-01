const shortid = require('shortid');
var db = require('../db');


module.exports.index = (req, res, next) => {
    res.render('user/index', {
        users: db.get('users').value()
    });
};

module.exports.search = (req, res) => {
    let q = req.query.q;
    let matchedUsers = db.get('users').filter((user) => {
        return user.name.toLowerCase().indexOf(q) !== -1;
    })
    res.render('user/index', {
        users: matchedUsers
    });
};

module.exports.getCreate = (req, res, next) => {
    res.render('user/create');
};
module.exports.postCreate = (req, res, next) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/user');
};

module.exports.detail = (req,res,next)=>{
    let id = req.params.id;
    let user = db.get('users').find({id:id}).value();
    res.render('user/detail',{
        user: user
    });
};