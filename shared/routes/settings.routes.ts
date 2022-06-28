import { Router } from "express";
import { configurateSettings, getConfigurations, updateSettings } from "../../controllers/settings.controller";

const router = Router();

router.post('/', configurateSettings);

router.get('/', getConfigurations);

router.put('/:id', updateSettings);

export default router;