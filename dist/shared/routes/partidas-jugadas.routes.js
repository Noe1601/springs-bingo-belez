"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const partidas_jugada_controller_1 = require("../../controllers/partidas-jugada.controller");
const router = (0, express_1.Router)();
router.get('/:id', partidas_jugada_controller_1.getPartidasJugadasById);
router.post('/:id', partidas_jugada_controller_1.createPartidaJugadas);
exports.default = router;
//# sourceMappingURL=partidas-jugadas.routes.js.map