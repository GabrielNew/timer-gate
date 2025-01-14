import express from "express";
import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();

app.use(cors(corsOptions));

app.get("", (req, res) => {
  res.send("<h1>This is a test server</h1>");
});

app.listen(3000, () => {
  console.log("Server online");
});
