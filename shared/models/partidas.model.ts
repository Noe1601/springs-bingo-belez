import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const Partidas = db.define('partidas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Partidas;