import { Sequelize } from 'sequelize';

const { USER, PWD, HOST, DB } = process.env;

const db = new Sequelize('bingoBelez','postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;