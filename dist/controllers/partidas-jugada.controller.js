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
exports.createPartidaJugadas = exports.getPartidasJugadasById = void 0;
const partidas_model_1 = __importDefault(require("../shared/models/partidas.model"));
const crud_service_1 = require("../shared/services/crud.service");
const partidas_jugadas_model_1 = __importDefault(require("../shared/models/partidas-jugadas.model"));
const getPartidasJugadasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const jugadaPartidaByPartidaId = yield partidas_jugadas_model_1.default.findOne({
            where: {
                partida_id: id
            }
        });
        if (!jugadaPartidaByPartidaId) {
            return res.status(404).json({
                message: 'Esta partida no existe'
            });
        }
        return res.json({
            list: jugadaPartidaByPartidaId
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.getPartidasJugadasById = getPartidasJugadasById;
const createPartidaJugadas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const existsPartida = yield partidas_model_1.default.findOne({
            where: {
                id: body.partida_id
            }
        });
        const existsPartidaInPartidasJugada = yield partidas_jugadas_model_1.default.findOne({
            where: {
                partida_id: id
            }
        });
        if (!existsPartida) {
            return res.status(404).json({
                message: 'Esta partida no existe'
            });
        }
        if (existsPartidaInPartidasJugada) {
            yield existsPartidaInPartidasJugada.update(body);
            res.json({
                existsPartidaInPartidasJugada
            });
        }
        else {
            const token = Math.floor(100000 + Math.random() * 900000);
            const buildPartidaJugada = Object.assign(Object.assign({}, body), { id: token });
            (0, crud_service_1.create)(buildPartidaJugada, req, res, partidas_jugadas_model_1.default);
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.createPartidaJugadas = createPartidaJugadas;
//# sourceMappingURL=partidas-jugada.controller.js.map