import Padron from "@/Models/PadronSchema";
import connectDB from "@/libs";

export default async function handler(req, res) {
  try {
    await connectDB;
    const response = req.query;
    const person = await Padron.create({ response });
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({
        message: "No fue posible guardar.",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error." });
  }
}
