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
exports.login = void 0;
const generate_jwt_1 = require("../shared/helper/generate-jwt");
const menu_front_1 = require("../shared/helper/menu-front");
const user_model_1 = __importDefault(require("../shared/models/user.model"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const userAuthenticate = yield user_model_1.default.findOne({
            attributes: ['id', 'ROLE', 'NAME'],
            where: {
                EMAIL: body.email,
                PASSWORD: body.password,
                STATE: true
            }
        });
        if (!userAuthenticate) {
            return res.status(404).json({
                ok: false,
                message: 'Error in authentication, try again'
            });
        }
        const id = userAuthenticate.getDataValue('id');
        const user_role = userAuthenticate.getDataValue('ROLE');
        const token = yield (0, generate_jwt_1.generateJWT)(id);
        res.json({
            userAuthenticate,
            token,
            menu: (0, menu_front_1.getMenuFrontEnd)(user_role)
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.controller.js.map