import { Router } from "express";
import { createJugada, deleteJugada, getJugadas, getJugadasById, getJugadasDesactivated, updateJugada } from "../../controllers/jugadas.controller";

const router = Router();

router.get('/', getJugadas);

router.get('/desactivated', getJugadasDesactivated);

router.get('/:id', getJugadasById);

router.post('/', createJugada);

router.put('/:id', updateJugada);

router.delete('/:id', deleteJugada);

export default router;