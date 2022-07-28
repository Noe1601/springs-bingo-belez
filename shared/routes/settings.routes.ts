import { Router } from "express";
import { configurateSettings, getConfigurationById, getConfigurations, updateSettings } from "../../controllers/settings.controller";

const router = Router();

router.post('/', configurateSettings);

router.get('/', getConfigurations);

router.get('/:id', getConfigurationById);

router.put('/:id', updateSettings);

export default router;