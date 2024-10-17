import { Router } from "express";
// import { getUsers } from "../controllers/users.js";
import { login } from "../controllers/users.js";

const router = Router();
// router.get("/", getUsers);
router.post("/", login);

export default router;
