const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  idUsuario: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  idMedico: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medico',
  },
});

module.exports = mongoose.model('Consulta', consultaSchema);
