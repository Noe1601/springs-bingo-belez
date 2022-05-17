import { Router } from "express";
import { createWinner, deleteWinner, getWinners, getWinnersById, updateWinner } from "../../controllers/winners.controller";

const router = Router();

router.get('/', getWinners);

router.get('/:id', getWinnersById);

router.post('/', createWinner);

router.put('/:id', updateWinner);

router.delete('/:id', deleteWinner);

export default router;