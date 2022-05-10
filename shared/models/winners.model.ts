import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const Winner = db.define('Winners', {
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
    jugada_id: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

export default Winner;