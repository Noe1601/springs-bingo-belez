import { Router } from "express";
import { createPartidaJugador, deletePartidaJugador, getPartidasJugador, updatePartidaJugador } from "../../controllers/partidas-jugador.controller";
import { getPartidaById } from "../../controllers/partidas.controller";

const router = Router();

router.get('/', getPartidasJugador);

router.get('/:id', getPartidaById);

router.post('/', createPartidaJugador);

router.put('/:id', updatePartidaJugador);

router.delete('/:id', deletePartidaJugador);

export default router;