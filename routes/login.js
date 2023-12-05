var express = require('express');
var router = express.Router();

var khachhang = require('../models/khachhang');
var login = require('../models/flag').flag;


/* GET users listing. */
router.get('/', function(req, res, next) {
  login = false;
  res.render('login');
});
router.get('/false', function(req, res, next) {
  var notice = 'Sai thông tin đăng nhập hoặc mật khẩu'
  res.render('login', { notice });
});
router.post('/', function(req, res, next) {
  khachhang.findOne({
    username: req.body.username,
    password: req.body.password
  })
  .then(data => {
    if(data) {
      login = true;
      res.redirect('/logined/'+data._id)
      
    } else {
      var err = 'Tài khoản hoặt mật khẩu bạn không đúng.'
      res.redirect('/login/false')
    }
  })
  .catch((err) => {
    console.log('Không xem được',err)
  })
});
module.exports = router;
