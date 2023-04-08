const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  cedula: {
    type: String,
  },
  nombres: {
    type: String,
  },
  apellidos: {
    type: String,
  },
  sexo: {
    type: String,
  },
  fechaNacimiento: {
    type: Date,
  },
  foto: {
    type: String,
  },
  comentario: {
    type: String,
  },
  fechaIngreso: {
    type: Date,
    default: Date.now,
  },
});

const Person = mongoose.model("Personas", PersonSchema);

module.exports = Person;
