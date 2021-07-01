var express = require('express');

var router = express.Router();

var userController = require('../controllers/user.controller');

router.get('/', userController.index);
router.get('/search', userController.search);
router.get('/create', userController.getCreate);
router.post('/create', userController.postCreate);
router.get('/:id',userController.detail);


module.exports= router;