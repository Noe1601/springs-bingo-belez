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
exports.recuperatePassword = exports.activateUser = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsersDesactivated = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../shared/models/user.model"));
const code_model_1 = __importDefault(require("../shared/models/code.model"));
const crud_service_1 = require("../shared/services/crud.service");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.get)({ where: { STATE: true } }, req, res, user_model_1.default);
});
exports.getUsers = getUsers;
const getUsersDesactivated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.get)({ where: { STATE: false } }, req, res, user_model_1.default);
});
exports.getUsersDesactivated = getUsersDesactivated;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.getById)(req, res, user_model_1.default);
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExists = yield user_model_1.default.findOne({
            where: {
                EMAIL: body.EMAIL
            }
        });
        if (emailExists) {
            return res.status(400).json({
                message: `Ya existe un usuario con el correo ${body.EMAIL}, intenta registrarte con algun otro.`
            });
        }
        if (body.CODE == null) {
            return res.status(400).json({
                message: 'El token de verificacion es requerido'
            });
        }
        const verifyToken = yield code_model_1.default.findOne({
            where: {
                CODE: body.CODE
            }
        });
        if (!verifyToken) {
            return res.status(404).json({
                ok: false,
                message: 'Este token no es valido'
            });
        }
        const token = Math.floor(100000 + Math.random() * 900000);
        const userObject = Object.assign(Object.assign({}, body), { id: token });
        (0, crud_service_1.create)(userObject, req, res, user_model_1.default);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.update)(req, res, user_model_1.default);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_service_1.deleteObject)({ STATE: false }, req, res, user_model_1.default);
});
exports.deleteUser = deleteUser;
const activateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userToActivate = yield user_model_1.default.findOne({
        where: {
            id,
            STATE: false
        }
    });
    if (!userToActivate) {
        return res.status(204).json({
            ok: false,
            message: `User with ${id} not is desactivated`
        });
    }
    const userUpdated = yield userToActivate.update({ STATE: true });
    res.status(200).json({
        userUpdated
    });
});
exports.activateUser = activateUser;
const recuperatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield user_model_1.default.findOne({
            where: {
                EMAIL: body.email
            }
        });
        if (!user) {
            return res.status(404).json({
                message: `Este correo es invalido`
            });
        }
        if (!body.code_confirmation) {
            return res.status(400).json({
                message: 'El token de verificacion es requerido.'
            });
        }
        const verifyToken = yield code_model_1.default.findOne({
            where: {
                CODE: body.code_confirmation
            }
        });
        if (!verifyToken) {
            return res.status(404).json({
                ok: false,
                message: 'El token de verificacion es invalido.'
            });
        }
        yield user.update({
            PASSWORD: body.password
        });
        res.status(202).json({
            ok: true,
            message: 'Se actualizo correctamente.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.recuperatePassword = recuperatePassword;
//# sourceMappingURL=user.controller.js.map