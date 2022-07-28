"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_file_controller_1 = require("../../controllers/upload-file.controller");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const router = (0, express_1.Router)();
router.use((0, express_fileupload_1.default)());
router.post('/', upload_file_controller_1.uploadFile);
router.get('/', upload_file_controller_1.getImages);
exports.default = router;
//# sourceMappingURL=upload.routes.js.map