var express = require('express');
var router = express.Router();
var menuArr = require('../models/menu');
var arrPokemon = require('../models/pokemon');
var login = require('../models/flag').flag;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { menuArr, arrPokemon, login});
});

router.get('/filter/:typePokemon', function(req, res, next) {
  if(!(req.params.typePokemon == 'All')){
    var listFilter = arrPokemon.filter(item => item.type.includes(req.params.typePokemon));
    res.render('index' , { menuArr, arrPokemon: listFilter, login})
  } else {
    res.render('index' , { menuArr, arrPokemon, login})
  }
});


router.get('/single/:ma', function(req, res){
  var newArrPokemon = arrPokemon.filter((pokemon) => {
    var ma = Number(req.params.ma);
    return pokemon.id == ma;
  })

  res.render('single', { newArrPokemon });
})
module.exports = router;
