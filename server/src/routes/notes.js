import { Router } from "express";
import {
  createNote,
  deleteNode,
  getIdNote,
  toggelDone,
  getNotes,
  result,
} from "../controllers/notes.js";
const router = Router();

// router.get("/", getRoot);
router.get("/", getNotes);
router.post("/", createNote);
router.patch("/:id/done", toggelDone);
// /notes/2
router.delete("/:id", deleteNode);
//res.send(req.params.id)
//res.send(notes)
router.get("/:id", getIdNote);
router.get("/:id/result", result);

export default router;
