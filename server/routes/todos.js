import express from "express";
import db from "../db/collection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const newTodo = {
      todo: req.body.todo,
    };

    const collection = db.collection("todos");
    const result = await collection.insertOne(newTodo);

    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error new todo create.");
  }
});

router.get("/fetch", async (req, res) => {
  try {
    const collection = db.collection("todos");
    const results = await collection.find({}).toArray();

    res.send(results).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetch todos");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("todos");

    const result = await collection.deleteOne(query);
    res.send(result).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error delete todo");
  }
});

export default router;
