import { Router } from "express";
import { createPartida, deletePartida, getPartidaById, getPartidas, updatePartida } from "../../controllers/partidas.controller";

const router = Router();

router.get('/', getPartidas);

router.get('/:id',getPartidaById );

router.post('/', createPartida);

router.put('/:id', updatePartida);

router.delete('/:id', deletePartida);

export default router;