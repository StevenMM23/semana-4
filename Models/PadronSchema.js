const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const padronSchema = new Schema({
  cedula: { type: Number },
  nombres: { type: String },
  apellidos: { type: String },
  edad: { type: Number },
  telefono: { type: Number },
  direccion: { type: String },
  fechaNacimiento: { type: Date },
  lugarNacimiento: { type: String },
});

const Padron = mongoose.model("Padrn", padronSchema);

module.exports = Padron;
