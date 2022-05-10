import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const Jugada = db.define('Jugadas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    monto: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

export default Jugada;