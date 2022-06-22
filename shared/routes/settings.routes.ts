import { Router } from "express";
import { configurateSettings } from "../../controllers/settings.controller";

const router = Router();

// router.get('/', getUsers);

router.post('/', configurateSettings);

export default router;