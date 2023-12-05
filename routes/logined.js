var express = require('express');
var router = express.Router();
var khachhang = require('../models/khachhang');
var arrPokemon = require('../models/pokemon');
var menuArr = require('../models/menu');
var login = require('../models/flag').flag;

router.get('/:id/filter/:typePokemon', function(req, res, next) {
  console.log(req.params.id);
  khachhang.find({_id: req.params.id})
  .then((data) => {
    if(data){
      login = true;
      var notice = '';
      if(!(req.params.typePokemon == 'All')){
        var listFilter = arrPokemon.filter(item => item.type.includes(req.params.typePokemon));
        res.render('index' , { menuArr, arrPokemon: listFilter, login, data, notice})
      } else {
        res.render('index' , { menuArr, arrPokemon, login, data, notice})
      }
    } else {
      console.log('Lỗi không xđ..');
    }
  }).catch((err) => {
      console.log('Lỗi ...');
  });
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  khachhang.find({_id: req.params.id})
  .then((data) => {
    if(data){
      var notice = 'Đăng nhập thành công!'
      login = true;
      res.render('index', { menuArr, arrPokemon, login, data , notice})
    } else {
      console.log('Lỗi không xđ..');
    }
    
  }).catch((err) => {
      console.log('Lỗi ...');
  });
});


module.exports = router;
