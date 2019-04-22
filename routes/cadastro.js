var express = require('express');
var router = express.Router();
var novoCliente = require('../models/ModelCrud')

router.post('/salvar', async function (req, res) {
  let { Nome, DtCadastro, Telefone, CpfCnpj, Celular, Ie, Logradouro, Bairro, Complemento, Cep, Cidade, Uf, DtNascimento, Bloqueado, Obs, Email } = req.body;
  try {
    var cliente = new novoCliente();
    var result = await cliente.Save('cliente', { Nome, DtCadastro, Telefone, CpfCnpj, Celular, Ie, Logradouro, Bairro, Complemento, Cep, Cidade, Uf, DtNascimento, Bloqueado, Obs, Email });
    console.log(result);
    res.json(result)
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;