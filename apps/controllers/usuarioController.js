const Usuario = require('../models/usuarioModel');
const Bcrypt = require('bcrypt');

function PostUsuario(req, res) {
  const usuario = {
    nome: req.body.nome,
    email: req.body.email,
    funcao: req.body.funcao,
    senha: Bcrypt.hashSync(req.body.senha, 10),
  };
  Usuario.create(usuario)
    .then((usuario) => {
      res.status(201).json(usuario);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
}

module.exports = {
  PostUsuario,
};
