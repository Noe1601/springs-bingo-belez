import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const Jugador = db.define('Jugadores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    state: {
        type: DataTypes.BOOLEAN
    }
}, {
    freezeTableName: true
});

export default Jugador;