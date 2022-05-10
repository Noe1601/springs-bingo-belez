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
exports.deleteJugada = exports.updateJugada = exports.createJugada = exports.getJugadasById = exports.getJugadas = void 0;
const jugada_model_1 = __importDefault(require("../shared/models/jugada.model"));
const getJugadas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jugadas = yield jugada_model_1.default.findAll({
        where: {
            state: true
        }
    });
    res.json({
        jugadas
    });
});
exports.getJugadas = getJugadas;
const getJugadasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jugada = yield jugada_model_1.default.findByPk(id);
    if (jugada) {
        res.json({
            jugada
        });
    }
    else {
        res.status(404).json({
            ok: false,
            message: `Not exists jugada with ${id} number ID`
        });
    }
});
exports.getJugadasById = getJugadasById;
const createJugada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const jugadaExists = yield jugada_model_1.default.findOne({
            where: {
                name: body.name
            }
        });
        if (jugadaExists) {
            return res.status(400).json({
                message: `Already exists an jugada with name ${body.name}, try with another one`
            });
        }
        const token = Math.floor(100000 + Math.random() * 900000);
        const buildJugada = Object.assign(Object.assign({}, body), { id: token });
        const jugada = yield jugada_model_1.default.create(buildJugada);
        res.json({
            jugada
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createJugada = createJugada;
const updateJugada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const jugada = yield jugada_model_1.default.findByPk(id);
        if (!jugada) {
            return res.status(404).json({
                message: `Not exists an jugada with this ID`
            });
        }
        yield jugada.update(body);
        res.json(jugada);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.updateJugada = updateJugada;
const deleteJugada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield jugada_model_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            message: `Not exists an jugada with this ID`
        });
    }
    yield user.update({ state: false });
    res.json({
        message: `Jugada deleted`
    });
});
exports.deleteJugada = deleteJugada;
//# sourceMappingURL=jugadas.controller.js.map