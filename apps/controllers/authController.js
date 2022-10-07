const Usuario = require('../models/usuariomodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

signin = (req, res) => {
  function logar(user) {
    if (!bcrypt.compareSync(req.body.senha, user.senha)) {
      falhar();
    } else {
      const token = jwt.sign(
        {
          _id: user._id,
          nome: user.nome,
          funcao: user.funcao,
        },
        'piw2022'
      );
      res.status(201).json({
        token: token,
        nome: user.nome,
      });
    }
  }
  function falhar() {
    res.status(401).send('Invalid login');
  }
  Usuario.findOne({ email: req.body.email }).exec().then(logar, falhar);
};

check = (req, res, next) => {
  jwt.verify(req.headers.token, 'piw2022', (err, decoded) => {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err,
      });
    } else next();
  });
};

module.exports = {
  signin,
  check,
};
