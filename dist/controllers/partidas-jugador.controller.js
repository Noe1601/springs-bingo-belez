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
exports.getPlayersByPartida = exports.deletePartidaJugador = exports.updatePartidaJugador = exports.createPartidaJugador = exports.getPartidasJugadorById = exports.getPartidasJugadorDesactivated = exports.getPartidasJugador = void 0;
const jugadores_model_1 = __importDefault(require("../shared/models/jugadores.model"));
const partidas_jugador_model_1 = __importDefault(require("../shared/models/partidas-jugador.model"));
const partidas_model_1 = __importDefault(require("../shared/models/partidas.model"));
const crud_service_1 = require("../shared/services/crud.service");
const sequelize_1 = require("sequelize");
const getPartidasJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.get)({ where: { state: true } }, req, res, partidas_jugador_model_1.default);
});
exports.getPartidasJugador = getPartidasJugador;
const getPartidasJugadorDesactivated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.get)({ where: { state: false } }, req, res, partidas_jugador_model_1.default);
});
exports.getPartidasJugadorDesactivated = getPartidasJugadorDesactivated;
const getPartidasJugadorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.getById)(req, res, partidas_jugador_model_1.default);
});
exports.getPartidasJugadorById = getPartidasJugadorById;
const createPartidaJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existsJugador = yield jugadores_model_1.default.findOne({
            where: {
                id: body.jugador_id
            }
        });
        const existsPartida = yield partidas_model_1.default.findOne({
            where: {
                id: body.partida_id
            }
        });
        const existRecord = yield partidas_jugador_model_1.default.findOne({
            where: {
                jugador_id: body.jugador_id,
                partida_id: body.partida_id
            }
        });
        if (!existsJugador || !existsPartida) {
            return res.status(404).json({
                message: 'La peticion es invalida'
            });
        }
        if (existRecord) {
            return res.json({
                message: 'Ya este jugador este registrado en esta partida.'
            });
        }
        const token = Math.floor(100000 + Math.random() * 900000);
        const buildPartida = Object.assign(Object.assign({}, body), { id: token });
        (0, crud_service_1.create)(buildPartida, req, res, partidas_jugador_model_1.default);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createPartidaJugador = createPartidaJugador;
const updatePartidaJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.update)(req, res, partidas_jugador_model_1.default);
});
exports.updatePartidaJugador = updatePartidaJugador;
const deletePartidaJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.deleteObject)({ state: false }, req, res, partidas_jugador_model_1.default);
});
exports.deletePartidaJugador = deletePartidaJugador;
const getPlayersByPartida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let ids = [];
    const existsPartida = yield partidas_model_1.default.findOne({
        where: {
            id
        }
    });
    if (!existsPartida) {
        return res.status(404).json({
            message: 'Esta partida no existe.'
        });
    }
    const getRelationByPartidaId = yield partidas_jugador_model_1.default.findAll({
        where: {
            partida_id: id
        }
    });
    getRelationByPartidaId.forEach((x) => {
        ids.push(x.jugador_id);
    });
    const jugadores = yield jugadores_model_1.default.findAll({
        where: {
            id: {
                [sequelize_1.Op.in]: ids
            }
        }
    });
    return res.json({
        jugadores
    });
});
exports.getPlayersByPartida = getPlayersByPartida;
//# sourceMappingURL=partidas-jugador.controller.js.map