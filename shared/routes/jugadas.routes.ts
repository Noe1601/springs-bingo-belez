import { Router } from "express";
import { createJugada, deleteJugada, getJugadas, getJugadasById, updateJugada } from "../../controllers/jugadas.controller";

const router = Router();

router.get('/', getJugadas);

router.get('/:id', getJugadasById);

router.post('/', createJugada);

router.put('/:id', updateJugada);

router.delete('/:id', deleteJugada);

export default router;