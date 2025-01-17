import express from "express";
import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("", (req, res) => {
  res.send("<h1>This is a test server</h1>");
});

app.post("/createUser", async (req, res) => {
  const { name } = req.body;
  console.log(name);
});

app.listen(3000, () => {
  console.log("Server online");
});
