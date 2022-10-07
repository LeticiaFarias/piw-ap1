const Consulta = require('../models/consultaModel');
const Usuario = require('../models/usuarioModel');
const jwt = require('jsonwebtoken');

function getConsultas(req, res) {
  const token = jwt.decode(req.headers.token);
  if (token.funcao === 2) {
    Consulta.find({ usuarioId: token._id })
      .exec()
      .then((consultas) => res.status(200).json(consultas))
      .catch((error) => res.status(404).json(error));
  } else if (token.funcao === 1) {
    Consulta.find()
      .exec()
      .then((consultas) => res.status(200).json(consultas))
      .catch((error) => res.status(404).json(error));
  }
}

function postConsultas(req, res) {
  const token = jwt.decode(req.headers.token);

  if (token.funcao === 2) {
    res.status(403).json('Não Autorizado.');
  } else if (token.funcao === 1) {
    Usuario.findById(req.body.usuarioId)
      .exec()
      .then((usuario) => {
        if (usuario.funcao === 1) {
          res.status(403).json('Não Autorizado.');
        } else if (usuario.funcao === 2) {
          Consulta.create(req.body)
            .then((consulta) => res.status(201).json(consulta))
            .catch((error) => res.status(404).json(error));
        }
      })
      .catch((error) => res.status(404).json(error));
  }
}

module.exports = {
  getConsultas,
  postConsultas,
}