const Medico = require('../models/medicoModel');
const Consulta = require('../models/consultaModel');
const jwt = require('jsonwebtoken');

function PostMedico(req, res) {
  const medico = {
    nome: req.body.nome,
    email: req.body.email,
    funcao: req.body.funcao,
    senha: jwt.sign(req.body.senha, 'secret'),
  };
  Medico.create(medico)
    .then((medico) => {
      res.status(201).json(medico);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
}

function getConsultasById(req, res) {
  const token = jwt.decode(req.headers.token);

  Medico.find()
    .exec()
    .then((medicos) => {
      if (token.funcao == 2) {
        res.status(403).json('Não Autorizado');
      } else {
        Consulta
          .find({
            medicoId: req.params.id,
          })
          .populate('usuarioId')
          .populate('medicoId')
          .exec()
          .then((consultas) => res.status(200).json(consultas))
          .catch((error) => res.status(404).json(error));
      }
    })
    .catch((error) => res.status(404).json(error));
}

module.exports = {
  PostMedico,
  getConsultasById,
}