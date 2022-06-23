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
exports.deleteWinner = exports.updateWinner = exports.createWinner = exports.getWinnersById = exports.getWinners = void 0;
const winners_model_1 = __importDefault(require("../shared/models/winners.model"));
const crud_service_1 = require("../shared/services/crud.service");
const getWinners = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const winners = yield winners_model_1.default.findAll();
    res.json({
        winners
    });
});
exports.getWinners = getWinners;
const getWinnersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    debugger;
    (0, crud_service_1.getById)(req, res, winners_model_1.default);
});
exports.getWinnersById = getWinnersById;
const createWinner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const token = Math.floor(100000 + Math.random() * 900000);
        const buildWinner = Object.assign(Object.assign({}, body), { id: token, jugada_id: body.jugada_id });
        (0, crud_service_1.create)(buildWinner, req, res, winners_model_1.default);
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
    (0, crud_service_1.update)(req, res, winners_model_1.default);
});
exports.updateWinner = updateWinner;
const deleteWinner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.deleteDefinitive)(req, res, winners_model_1.default);
});
exports.deleteWinner = deleteWinner;
//# sourceMappingURL=winners.controller.js.map