import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3300;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// foods create-foods {categories: main dish, something, appitizer