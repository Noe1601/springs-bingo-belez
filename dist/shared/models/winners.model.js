"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
const Winner = connection_1.default.define('Winners', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    jugada_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    jugador_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    monto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});
exports.default = Winner;
//# sourceMappingURL=winners.model.js.map