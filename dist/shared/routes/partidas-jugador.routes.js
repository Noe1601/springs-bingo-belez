"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const partidas_jugador_controller_1 = require("../../controllers/partidas-jugador.controller");
const partidas_controller_1 = require("../../controllers/partidas.controller");
const router = (0, express_1.Router)();
router.get('/', partidas_jugador_controller_1.getPartidasJugador);
router.get('/:id', partidas_controller_1.getPartidaById);
router.post('/', partidas_jugador_controller_1.createPartidaJugador);
router.put('/:id', partidas_jugador_controller_1.updatePartidaJugador);
router.delete('/:id', partidas_jugador_controller_1.deletePartidaJugador);
router.get('/partidas/:id', partidas_jugador_controller_1.getPlayersByPartida);
exports.default = router;
//# sourceMappingURL=partidas-jugador.routes.js.map