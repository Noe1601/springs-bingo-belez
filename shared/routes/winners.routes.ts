import { Router } from "express";
import { createWinner, getWinners, getWinnersById, updateWinner } from "../../controllers/winners.controller";

const router = Router();

router.get('/', getWinners);

router.get('/:id', getWinnersById);

router.post('/', createWinner);

router.put('/:id', updateWinner);

export default router;