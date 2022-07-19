"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
const PartidasJugador = connection_1.default.define('partidas_jugador', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    jugador_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    partida_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    freezeTableName: true
});
exports.default = PartidasJugador;
//# sourceMappingURL=partidas-jugador.model.js.map