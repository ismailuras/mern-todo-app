import express from "express";
import cors from "cors";
import todos from "./routes/todos.js";

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/todos", todos);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
