"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugadas_controller_1 = require("../../controllers/jugadas.controller");
const router = (0, express_1.Router)();
router.get('/', jugadas_controller_1.getJugadas);
router.get('/desactivated', jugadas_controller_1.getJugadasDesactivated);
router.get('/:id', jugadas_controller_1.getJugadasById);
router.post('/', jugadas_controller_1.createJugada);
router.put('/:id', jugadas_controller_1.updateJugada);
router.delete('/:id', jugadas_controller_1.deleteJugada);
exports.default = router;
//# sourceMappingURL=jugadas.routes.js.map