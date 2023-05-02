const {DataTypes} = require('sequelize')

const dragodindes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sexe: {
        type: DataTypes.STRING,
        allowNul: false
    },
    couleur: {
        type: DataTypes.STRING,
        allowNul: false
    },
    fatigue: {
        type: DataTypes.INTEGER,
        allowNul: false
    },
    amour: {
        type: DataTypes.BOOLEAN,
        allowNul: false
    },
    maturite: {
        type: DataTypes.BOOLEAN,
        allowNul: false
    },
    endurance: {
        type: DataTypes.BOOLEAN,
        allowNul: false
    },
    stat: {
        type: DataTypes.INTEGER,
        allowNul: false
    },
    reproduction: {
        type: DataTypes.INTEGER,
        allowNul: false
    },
    reproduction_max: {
        type: DataTypes.INTEGER,
        allowNul: false
    },
    feconde: {
        type: DataTypes.BOOLEAN,
        allowNul: true
    },
    fecondee: {
        type: DataTypes.BOOLEAN,
        allowNul: true
    }}

const dragodindes_sql = {
    timestamps: true,
    createdAt: true,
    updatedAt: true
}

module.exports = {dragodindes, dragodindes_sql}