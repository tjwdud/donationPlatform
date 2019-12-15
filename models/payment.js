const Sequelize = require('sequelize');
const db = require('../database/db');
//const userDonaList = require('./userDonaList');

const payment = db.sequelize.define(
    'payment',
    {
        proNum: {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        product1 : {
            type : Sequelize.INTEGER,
            defaultValue: 0
        },
        product2 : {
            type : Sequelize.INTEGER,
            defaultValue: 0
        },
        product3 : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        totalpay : {
            type : Sequelize.INTEGER,
            defaultValue: 0
        },
        nowpay: {
            type : Sequelize.INTEGER,
            defaultValue: 0
        }
    },
    {
        timestamps: false
    }
)
module.exports = payment;