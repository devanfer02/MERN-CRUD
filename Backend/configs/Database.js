import { Sequelize } from "sequelize";

const db = new Sequelize('crudmern1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;