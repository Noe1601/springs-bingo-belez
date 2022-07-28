"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
const PartidasJugadas = connection_1.default.define('partidas_jugadas', {
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
    partida_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    cosita_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    medio_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    sumita_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    letra_t_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    bingo_regular_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    bingo_4_esquinas_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    bingo_4_esquinas_fecha_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    letra_x_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    letra_l_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    carton_lleno: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    media_c_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cometa_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true
});
exports.default = PartidasJugadas;
//# sourceMappingURL=partidas-jugadas.model.js.map