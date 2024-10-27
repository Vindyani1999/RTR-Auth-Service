import { Router } from "express";
import { getTables, bookTable } from "../controllers/tableController";

const router = Router();

router.get("/", getTables);
router.post("/book", bookTable);

export default router;
