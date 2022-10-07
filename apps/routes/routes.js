const Usuario = require('../controllers/usuarioController');
const Consulta = require('../controllers/consultaController');
const Medico = require('../controllers/medicoController');
const Auth = require('../controllers/authController');

module.exports = (app) => {
  // Usuario
  app.post('/usuarios/signin', Auth.signin);
  app.post('/usuarios', Usuario.postUsuario);

  app.use('/medicos', Auth.check);

  // Médico
  app.get('/medicos/:id/consultas', Medico.getConsultasById);
  app.post('/medicos', Medico.postMedico);

  // Consulta
  app.get('/consultas', Consulta.getConsulta);
  app.post('/consultas', Consulta.postConsulta);
};
