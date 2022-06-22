"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = exports.getConfigurationById = exports.getConfigurations = exports.configurateSettings = void 0;
const settings_model_1 = __importDefault(require("../shared/models/settings.model"));
const crud_service_1 = require("../shared/services/crud.service");
const configurateSettings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        (0, crud_service_1.create)(body, req, res, settings_model_1.default);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
});
exports.configurateSettings = configurateSettings;
const getConfigurations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const settings = yield settings_model_1.default.findAll();
        res.json({
            settings
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        });
    }
});
exports.getConfigurations = getConfigurations;
const getConfigurationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const settings = settings_model_1.default.findByPk(id);
        if (!settings) {
            res.status(404).json({
                message: 'No existe nada con esta clave.'
            });
        }
        res.json({
            settings
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        });
    }
});
exports.getConfigurationById = getConfigurationById;
const updateSettings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const setting = yield settings_model_1.default.findByPk(id);
        if (!setting) {
            res.status(404).json({
                message: 'No existe nada con esta clave.'
            });
        }
        const updatedResult = yield (setting === null || setting === void 0 ? void 0 : setting.update(body));
        res.json({
            updatedResult
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        });
    }
});
exports.updateSettings = updateSettings;
//# sourceMappingURL=settings.controller.js.map