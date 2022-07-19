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
exports.deletePartida = exports.updatePartida = exports.createPartida = exports.getPartidaById = exports.getPartidasDesactivated = exports.getPartidas = void 0;
const partidas_model_1 = __importDefault(require("../shared/models/partidas.model"));
const crud_service_1 = require("../shared/services/crud.service");
const getPartidas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.get)({ where: { state: true } }, req, res, partidas_model_1.default);
});
exports.getPartidas = getPartidas;
const getPartidasDesactivated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.get)({ where: { state: false } }, req, res, partidas_model_1.default);
});
exports.getPartidasDesactivated = getPartidasDesactivated;
const getPartidaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.getById)(req, res, partidas_model_1.default);
});
exports.getPartidaById = getPartidaById;
const createPartida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const token = Math.floor(100000 + Math.random() * 900000);
        const buildPartida = Object.assign(Object.assign({}, body), { id: token });
        (0, crud_service_1.create)(buildPartida, req, res, partidas_model_1.default);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createPartida = createPartida;
const updatePartida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.update)(req, res, partidas_model_1.default);
});
exports.updatePartida = updatePartida;
const deletePartida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.deleteObject)({ state: false }, req, res, partidas_model_1.default);
});
exports.deletePartida = deletePartida;
//# sourceMappingURL=paritdas-jugador.controller.js.map