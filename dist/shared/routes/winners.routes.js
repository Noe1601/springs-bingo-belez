"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const winners_controller_1 = require("../../controllers/winners.controller");
const router = (0, express_1.Router)();
router.get('/', winners_controller_1.getWinners);
router.get('/:id', winners_controller_1.getWinnersById);
router.post('/', winners_controller_1.createWinner);
router.put('/:id', winners_controller_1.updateWinner);
router.delete('/:id', winners_controller_1.deleteWinner);
exports.default = router;
//# sourceMappingURL=winners.routes.js.map