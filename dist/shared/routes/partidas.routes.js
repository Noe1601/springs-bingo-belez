"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const partidas_controller_1 = require("../../controllers/partidas.controller");
const router = (0, express_1.Router)();
router.get('/', partidas_controller_1.getPartidas);
router.get('/:id', partidas_controller_1.getPartidaById);
router.post('/', partidas_controller_1.createPartida);
router.put('/:id', partidas_controller_1.updatePartida);
router.delete('/:id', partidas_controller_1.deletePartida);
exports.default = router;
//# sourceMappingURL=partidas.routes.js.map