
import { MongoClient } from "mongodb";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    const newMessage = {
      name,
      email,
      message,
    };
    console.log(newMessage);

    res.status(201).json({ message: "succssfully stored message " });
  }
}
