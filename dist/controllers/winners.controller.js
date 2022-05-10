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
exports.updateWinner = exports.createWinner = exports.getWinnersById = exports.getWinners = void 0;
const winners_model_1 = __importDefault(require("../shared/models/winners.model"));
const getWinners = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const winners = yield winners_model_1.default.findAll();
    res.json({
        winners
    });
});
exports.getWinners = getWinners;
const getWinnersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const winner = yield winners_model_1.default.findByPk(id);
    if (winner) {
        res.json({
            winner
        });
    }
    else {
        res.status(404).json({
            ok: false,
            message: `Not exists winner with ${id} number ID`
        });
    }
});
exports.getWinnersById = getWinnersById;
const createWinner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const token = Math.floor(100000 + Math.random() * 900000);
        const buildWinner = Object.assign(Object.assign({}, body), { id: token, jugada_id: body.jugada_id });
        const winner = yield winners_model_1.default.create(buildWinner);
        res.json({
            winner
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createWinner = createWinner;
const updateWinner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const winner = yield winners_model_1.default.findByPk(id);
        if (!winner) {
            return res.status(404).json({
                message: `Not exists an winner with this ID`
            });
        }
        yield winner.update(body);
        res.json(winner);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.updateWinner = updateWinner;
//# sourceMappingURL=winners.controller.js.map