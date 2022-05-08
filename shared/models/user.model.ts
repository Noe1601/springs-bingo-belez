import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const User = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    NAME: {
        type: DataTypes.STRING
    },
    EMAIL: {
        type: DataTypes.STRING
    },
    PASSWORD: {
        type: DataTypes.STRING
    },
    CODE: {
        type: DataTypes.INTEGER
    },
    ROLE: {
        type: DataTypes.STRING
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

export default User;