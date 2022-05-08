"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const { USER, PWD, HOST, DB } = process.env;
const db = new sequelize_1.Sequelize('bingoBelez', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = db;
//# sourceMappingURL=connection.js.map