"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const play_winners_controller_1 = require("../../controllers/play-winners.controller");
const router = (0, express_1.Router)();
router.get('/:id', play_winners_controller_1.getPlaysDetailsByPlayer);
router.post('/', play_winners_controller_1.createPlayWinner);
exports.default = router;
//# sourceMappingURL=play-winner.routes.js.map