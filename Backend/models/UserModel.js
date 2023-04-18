import { Sequelize } from "sequelize";
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    nim: DataTypes.STRING,
    email: DataTypes.STRING,
    major: DataTypes.STRING,
    university: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default User;

(async() => {
    await db.sync();
})();