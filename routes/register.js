var express = require('express');
var router = express.Router();
var khachhang = require('../models/khachhang');
var arrPokemon = require('../models/pokemon');
var menuArr = require('../models/menu');
var login = require('../models/flag').flag;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var notice = undefined;
  res.render('register', { notice });
});
router.post('/', function(req, res, next) {
  console.log(req.body);
  khachhang.findOne({username: req.body.username})
  .then((data) => {
    if(data){
      var notice = 'Tài khoản đã tồn tại!';
      res.render('register', { notice })
    } else {
      var khach = new khachhang({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      khach.save()
      .then((data) => {
        console.log('Đã tạo thành công');
        login = true;
        res.redirect('/logined/'+data._id)
      })
      .catch((error) => {
          console.error('thêm thất bại', error);
      });
    }
  }).catch((err) => {
    console.log(err);
  });
  
});

module.exports = router;
