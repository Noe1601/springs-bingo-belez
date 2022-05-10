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
exports.deleteJugador = exports.updateJugador = exports.createJugador = exports.getJugadorById = exports.getJugadores = void 0;
const jugadores_model_1 = __importDefault(require("../shared/models/jugadores.model"));
const getJugadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jugadores = yield jugadores_model_1.default.findAll({
        where: {
            state: true
        }
    });
    res.json({
        jugadores
    });
});
exports.getJugadores = getJugadores;
const getJugadorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jugador = yield jugadores_model_1.default.findByPk(id);
    if (jugador) {
        res.json({
            jugador
        });
    }
    else {
        res.status(404).json({
            ok: false,
            message: `Not exists jugador with ${id} number ID`
        });
    }
});
exports.getJugadorById = getJugadorById;
const createJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const token = Math.floor(100000 + Math.random() * 900000);
        const buildJugador = Object.assign(Object.assign({}, body), { id: token });
        const jugador = yield jugadores_model_1.default.create(buildJugador);
        res.json({
            jugador
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createJugador = createJugador;
const updateJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const jugador = yield jugadores_model_1.default.findByPk(id);
        if (!jugador) {
            return res.status(404).json({
                message: `Not exists an jugador with this ID`
            });
        }
        yield jugador.update(body);
        res.json(jugador);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.updateJugador = updateJugador;
const deleteJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield jugadores_model_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            message: `Not exists an jugador with this ID`
        });
    }
    yield user.update({ state: false });
    res.json({
        message: `User deleted`
    });
});
exports.deleteJugador = deleteJugador;
//# sourceMappingURL=jugadores.controller.js.map