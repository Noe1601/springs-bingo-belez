import { Router } from "express";
import { getPlaysDetailsByPlayer } from "../../controllers/play-winners.controller";

const router = Router();

router.get('/:id', getPlaysDetailsByPlayer);


export default router;