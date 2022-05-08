"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/', user_controller_1.getUsers);
router.get('/:id', user_controller_1.getUserById);
router.post('/', user_controller_1.createUser);
router.put('/:id', user_controller_1.updateUser);
router.delete('/:id', user_controller_1.deleteUser);
router.put('/', user_controller_1.recuperatePassword);
exports.default = router;
//# sourceMappingURL=users.routes.js.map