"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
const Partidas = connection_1.default.define('partidas', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});
exports.default = Partidas;
//# sourceMappingURL=partidas.model.js.map