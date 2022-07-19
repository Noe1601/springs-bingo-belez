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
exports.createPlayWinner = exports.getPlaysDetailsByPlayer = void 0;
const jugada_model_1 = __importDefault(require("../shared/models/jugada.model"));
const jugadores_model_1 = __importDefault(require("../shared/models/jugadores.model"));
const play_winners_model_1 = __importDefault(require("../shared/models/play-winners.model"));
const crud_service_1 = require("../shared/services/crud.service");
const getPlaysDetailsByPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const details = yield play_winners_model_1.default.findAll({
            where: {
                jugador_id: id
            }
        });
        res.json({
            details
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error inesperado.'
        });
    }
});
exports.getPlaysDetailsByPlayer = getPlaysDetailsByPlayer;
const createPlayWinner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    if (!body.jugador_id || !body.jugada_id) {
        return res.status(400).json({
            ok: false,
            message: 'Todos los campos son obligatorios'
        });
    }
    const userIsValid = jugadores_model_1.default.findByPk(body.jugador_id);
    const playIsValid = jugada_model_1.default.findByPk(body.jugada_id);
    if (!userIsValid) {
        return res.status(404).json({
            ok: false,
            message: 'Este jugador no existe en la base de datos.'
        });
    }
    if (!playIsValid) {
        return res.status(404).json({
            ok: false,
            message: 'Esta jugada no existe en la base de datos.'
        });
    }
    const tokenPlayWinners = Math.floor(100000 + Math.random() * 900000);
    const buildPlayWinner = {
        id: tokenPlayWinners,
        jugada_id: body.jugada_id,
        jugador_id: body.jugador_id,
    };
    (0, crud_service_1.create)(buildPlayWinner, req, res, play_winners_model_1.default);
});
exports.createPlayWinner = createPlayWinner;
//# sourceMappingURL=play-winners.controller.js.map