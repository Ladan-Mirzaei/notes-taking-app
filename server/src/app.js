//dotenv ist eine populäre Node.js-Bibliothek, die es ermöglicht, Umgebungsvariablen aus einer .env-Datei zu laden.
// console.log(process.env.POSTGRES_HOST); // Gibt "localhost" aus
// console.log(process.env.POSTGRES_USER); // Gibt "myuser" aus
import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import noteRoutes from "./routes/notes.js";

//PORT von render Port
const PORT = process.env.PORT || 3000;
const app = express();

async function getRoot(req, res) {
  return res.json({ msg: "Hello World" });
}
app.use(cors());
app.use(json());
app.get("/", getRoot);
app.use("/notes", noteRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("api running on port " + PORT);
});
