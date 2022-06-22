"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const settings_controller_1 = require("../../controllers/settings.controller");
const router = (0, express_1.Router)();
// router.get('/', getUsers);
router.post('/', settings_controller_1.configurateSettings);
exports.default = router;
//# sourceMappingURL=settings.routes.js.map