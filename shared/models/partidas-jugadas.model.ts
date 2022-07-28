import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const PartidasJugadas = db.define('partidas_jugadas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    partida_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cosita_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    medio_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sumita_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    letra_t_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bingo_regular_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bingo_4_esquinas_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bingo_4_esquinas_fecha_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    letra_x_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    letra_l_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    carton_lleno: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    media_c_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cometa_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true
});

export default PartidasJugadas;