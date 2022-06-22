import { Router } from "express";
import { createCodeVerification } from "../../controllers/code.controller";

const router = Router();

router.post('/:EMAIL',createCodeVerification);

export default router;