import { Sequelize } from "sequelize";
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const Student = db.define('students', {
    name: DataTypes.STRING,
    nim: DataTypes.STRING,
    email: DataTypes.STRING,
    major: DataTypes.STRING,
    university: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Student;

(async() => {
    await db.sync();
})();