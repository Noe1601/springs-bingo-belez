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
exports.recuperatePassword = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../shared/models/user.model"));
const code_model_1 = __importDefault(require("../shared/models/code.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.findAll({
        where: {
            STATE: true
        }
    });
    res.json({
        users
    });
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (user) {
        res.json({
            user
        });
    }
    else {
        res.status(404).json({
            ok: false,
            message: `Not exists user with ${id} number ID`
        });
    }
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
                message: `Already exists an user with email ${body.EMAIL}, try with another one`
            });
        }
        if (body.CODE == null) {
            return res.status(400).json({
                message: 'The token verification is required'
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
                message: 'This token is invalid, try again.'
            });
        }
        const token = Math.floor(100000 + Math.random() * 900000);
        const buildUser = Object.assign(Object.assign({}, body), { id: token });
        const user = yield user_model_1.default.create(buildUser);
        res.json({
            user,
        });
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
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield user_model_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }
        yield user.update(body);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }
    yield user.update({ STATE: false });
    res.json({
        message: `User deleted`
    });
});
exports.deleteUser = deleteUser;
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
                message: `This email is invalid`
            });
        }
        if (body.code_confirmation == null) {
            return res.status(400).json({
                message: 'The token verification is required'
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
                message: 'This token is invalid, try again.'
            });
        }
        yield user.update(body);
        res.json({
            ok: true,
            message: 'Password updated'
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