const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  nome: {
    required: true,
    type: String,
  },
  crm: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Medico', medicoSchema);
