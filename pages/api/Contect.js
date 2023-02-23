import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name,email, message } = req.body;

    const newMessage = {
      name,
      email,
      message,
    };
    console.log(newMessage);

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://sunilblog:sunilreddy@cluster0.qcgqqdl.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to data base. " });
      return;
    }
    try {
      const db = client.db("my_site");
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();
    res.status(201).json({ message: "succssfully stored message " });
  }
}
