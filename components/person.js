//   const response = await axios.get(
//     `https://compulaboratoriomendez.com/lib/?Key=DESARROLLOWEB&MUN_CED=${cedula.substr(
//       0,
//       3
//     )}&SEQ_CED=${cedula.substr(3, 7)}&VER_CED=${cedula.substr(10, 1)}`
//   );

import axios from "axios";
import { useState } from "react";

export default function PersonPage() {
  const [cedula, setCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [sexo, setSexo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [foto, setFoto] = useState("");
  const [comentario, setComentario] = useState("");

  const handleCedulaChange = (event) => {
    setCedula(event.target.value);
  };

  const handleNombresChange = (event) => {
    setNombres(event.target.value);
  };

  const handleApellidosChange = (event) => {
    setApellidos(event.target.value);
  };

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const handleFechaNacimientoChange = (event) => {
    setFechaNacimiento(event.target.value);
  };

  const handleFotoChange = (event) => {
    setFoto(event.target.value);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/personApi", {
        cedula,
        nombres,
        apellidos,
        sexo,
        fechaNacimiento,
        foto,
        comentario,
      });
      alert("La persona ha sido creada correctamente.");
    } catch (error) {
      alert("Ha ocurrido un error al crear la persona.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>Ejercicio 1 </h1>
      <label>
        Cédula:
        <input type="text" value={cedula} onChange={handleCedulaChange} />
      </label>
      <label>
        Nombres:
        <input type="text" value={nombres} onChange={handleNombresChange} />
      </label>
      <label>
        Apellidos:
        <input type="text" value={apellidos} onChange={handleApellidosChange} />
      </label>
      <label>
        Sexo:
        <select value={sexo} onChange={handleSexoChange}>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </label>
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          value={fechaNacimiento}
          onChange={handleFechaNacimientoChange}
        />
      </label>
      <label>
        Foto:
        <input type="text" value={foto} onChange={handleFotoChange} />
      </label>
      <label>
        Comentario:
        <textarea value={comentario} onChange={handleComentarioChange} />
      </label>
      <button type="submit">Crear Persona</button>
    </form>
  );
}
