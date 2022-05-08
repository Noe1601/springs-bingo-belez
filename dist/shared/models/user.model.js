"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
const User = connection_1.default.define('Users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    NAME: {
        type: sequelize_1.DataTypes.STRING
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING
    },
    PASSWORD: {
        type: sequelize_1.DataTypes.STRING
    },
    CODE: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ROLE: {
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
}, {
    freezeTableName: true
});
exports.default = User;
//# sourceMappingURL=user.model.js.map