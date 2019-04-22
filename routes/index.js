var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/cadastro', function (req, res, next) {
  res.render('cadastro');
});

router.get('/pesquisar', function (req, res, next) {
  res.render('pesquisar');
});

router.get('/editar', function (req, res, next) {
  res.render('editar');
});

router.get('/visualizar', function (req, res, next) {
  res.render('visualizar');
});

module.exports = router;