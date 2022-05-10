import { Router } from "express";
import { createJugador, deleteJugador, getJugadorById, getJugadores, updateJugador } from "../../controllers/jugadores.controller";

const router = Router();

router.get('/', getJugadores);

router.get('/:id', getJugadorById);

router.post('/', createJugador);

router.put('/:id', updateJugador);

router.delete('/:id', deleteJugador);

export default router;