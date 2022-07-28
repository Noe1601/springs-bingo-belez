import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const PlaysAndWinners = db.define('PlaysAndWinners', {
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
    jugada_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jugador_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    partida_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default PlaysAndWinners;