const mongoose = require('mongoose');
const { Schema } = mongoose;

const GastosSchema = new Schema({
    tipo: { type: String, required: true },
    monto: { type: Number, required: true },
    Descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Gasto', GastosSchema);