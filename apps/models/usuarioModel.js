const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  nome: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  senha: {
    required: true,
    type: String,
  },
  funcao: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
