import { Router } from "express";
import { createPartidaJugadas, getPartidasJugadasById } from "../../controllers/partidas-jugada.controller";

const router = Router();

router.get('/:id', getPartidasJugadasById);

router.post('/:id', createPartidaJugadas);

export default router;