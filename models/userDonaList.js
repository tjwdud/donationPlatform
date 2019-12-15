const Sequelize = require('sequelize');
const db = require('../database/db');
const userDonaList = db.sequelize.define(
    'userDonaList',
    {
        email : {
            type : Sequelize.STRING,
            primaryKey : true,
        },
        proNum: {
            type: Sequelize.INTEGER,
            primaryKey : true,
        },
        date : {
            type: Sequelize.DATE,
            primaryKey : true,
            defaultValue : Sequelize.NOW
        },
        donaCoin : {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },

    },
    {
        timestamps: false
    }
)

module.exports = userDonaList;