import { Router } from "express";
import { createPlayWinner, getPlaysDetailsByPlayer } from "../../controllers/play-winners.controller";

const router = Router();

router.get('/:id', getPlaysDetailsByPlayer);
router.post('/', createPlayWinner);


export default router;