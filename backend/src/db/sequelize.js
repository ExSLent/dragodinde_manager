const {Sequelize, DataTypes} = require('sequelize')
const dragodindes = require('./dragodindes-json')
const dragodindeModel = require('../models/dragodindes')

const sequelize = new Sequelize(
    'dragodindes_prod',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT+1'
        },
        logging: false
    }
)

const authenticateDB = () => {
    return sequelize.authenticate()
        .then(_ => console.log("Connexion établie à la base de données"))
        .catch(error => console.error(`Connexion à la base de données impossile ${error}`))
}

const Dragodinde = sequelize.define('dragodinde', dragodindeModel.dragodindes, dragodindeModel.dragodindes_sql)

const initDB = () => {
    return sequelize.sync()
}

module.exports = {
    initDB, Dragodinde, authenticateDB
}