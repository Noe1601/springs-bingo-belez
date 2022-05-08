import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const Code = db.define('Code', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CODE: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
}, {
    freezeTableName: true
});

export default Code;