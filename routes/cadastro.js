var express = require('express');
var router = express.Router();
var novoCliente = require('../models/ModelCrud')

router.post('/salvar', async function (req, res) {
  let { NovoCliente } = req.body;
  var cliente = new novoCliente();
  var result = await cliente.Save('cliente', NovoCliente);
  console.log(result);
});

module.exports = router;