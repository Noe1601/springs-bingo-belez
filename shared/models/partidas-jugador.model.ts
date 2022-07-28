import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const PartidasJugador = db.define('partidas_jugador', {
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
    jugador_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    partida_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    freezeTableName: true
});

export default PartidasJugador;