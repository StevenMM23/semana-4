import Person from "@/Models/PersonSchema";
import connectDB from "@/libs";

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "POST":
      try {
        const personData = req.body;
        const person = new Person(personData);
        await person.save();
        res.status(201).json(person);
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error al guardar la persona en la base de datos." });
      }
      break;
    case "GET":
      try {
        const { id } = req.query;
        const person = await Person.findById(id);
        if (person) {
          res.status(200).json(person);
        } else {
          res
            .status(404)
            .json({ message: "No se encontró ninguna persona con el ID especificado." });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error al obtener la persona de la base de datos." });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Método ${method} no permitido.`);
  }
}
