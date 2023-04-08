import axios from "axios";
import React, { useState } from "react";

const PadronPage = () => {
  const [cedula, setCedula] = useState("");
  const [padron, setPadron] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://compulaboratoriomendez.com/lib/?Key=DESARROLLOWEB&MUN_CED=${cedula.substring(
          0,
          3
        )}&SEQ_CED=${cedula.substring(3, 7)}&VER_CED=${cedula.substring(7, 8)}`
      );
      const { data } = response;

      // Calcular edad
      const fechaNacimiento = new Date(data.FechaNacimiento);
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const mes = hoy.getMonth() - fechaNacimiento.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
      }

      // Actualizar estado de la aplicación
      setPadron({
        cedula: cedula, //Por motivos de ejemplo guardare la misma cedula
        nombres: data.Nombres,
        apellidos: data.Apellidos,
        edad: edad,
        telefono: data.Telefono,
        direccion: data.Direccion,
        fechaNacimiento: fechaNacimiento,
        lugarNacimiento: data.LugarNacimiento,
      });

      axios.post(`/api/padronApi`, padron);
      alert("La persona ha sido creada correctamente.");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Consultar Padron</h2>
        <input
          placeholder="Introducir la cedula de la persona"
          onChange={(e) => {
            setCedula(() => {
              return e.target.value;
            });
          }}
          type="text"
        />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default PadronPage;
