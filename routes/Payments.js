const express = require('express');
const Payments = express.Router();
const paymentdb = require('../models/payment');
const Sequelize = require('sequelize');
const User = require('../models/User');
const userDonaList = require('../models/userDonaList');
const Prolist = require('../models/prolist');


// 캠페인no을 가지고 그 프로그램의 category 을 가져옴.- buydone에 사용 
Payments.get('/getCategory/:proNum', (req, res) => { 
    const { proNum } = req.params;

    paymentdb.findOne(
        {
        attributes :["product1","product2","product3"],
        where  : {
            proNum
        }
    })
    .then(results => {
        res.send(results);
    })
    .catch(err => {
        console.error(err);
    })
})
//물품 구매시에 category에 수 증가, totalpay(사용금액)도 증가
Payments.post('/buyProductInfo/:proNum', (req, res) => { // 구매하면 증가하게 
    let { proNum } = req.params;
    const { product1, product2, product3 ,nowpay } = req.body;
    paymentdb.update(
        {
         product1: Sequelize.literal("product1 +" + product1),
         product2: Sequelize.literal("product2 +" + product2),
         product3: Sequelize.literal("product3 +" + product3),
         totalpay: Sequelize.literal("totalpay -" + nowpay),
         nowpay
        }
        ,{
            where : {
                proNum
            }
        }
    )
    .then(results => {
        if(results)
            res.send('구매 완료');
    })
    .catch(err => {
        console.error(err);
    })
})


Payments.get('/getPayment/:proNum', (req, res) => {
    const { proNum } = req.params;

    paymentdb.findOne({
        where : {
            proNum
        }
    })
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        console.error(err);
    })
})


Payments.get('/getpayinfo/:proNum', (req, res) => {
    let proNum = req.params.proNum;
    let query = `SELECT proNum, totalpay, nowpay FROM payments WHERE proNum = "${proNum}" `;

    paymentdb.sequelize.query(query).then(([results, metadata]) => {
        res.send(results);
    })
})


module.exports = Payments;