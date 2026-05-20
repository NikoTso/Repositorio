import express from "express";
import cors from "cors";

import projectRoutes from "./routes/project.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API running 🚀",
  });
});

app.use("/projects", projectRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});