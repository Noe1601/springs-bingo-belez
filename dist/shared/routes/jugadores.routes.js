"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugadores_controller_1 = require("../../controllers/jugadores.controller");
const router = (0, express_1.Router)();
router.get('/', jugadores_controller_1.getJugadores);
router.get('/:id', jugadores_controller_1.getJugadorById);
router.post('/', jugadores_controller_1.createJugador);
router.put('/:id', jugadores_controller_1.updateJugador);
router.delete('/:id', jugadores_controller_1.deleteJugador);
exports.default = router;
//# sourceMappingURL=jugadores.routes.js.map