
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Message from "../../model/message"; 

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

mongoose
  .connect("mongodb+srv://Javeria:Javeria123@cluster0.rtgaihc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find().populate("sender").exec();
    res.json(messages);
  } catch (err) {
    console.error("Error retrieving messages", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
