const express=require('express');
const router = express.Router();
const Order = require('../models/Orders.js');
const sumFunction = require('../helpers/calculation');
const formatDate = require('../helpers/dateFormat');
const valid = require('../validation/validation');
const validationLib=require('../validation/validateFunctions');

//Get all orders from the last day
router.get('/', async(req,res) => {
    try{
        const today =formatDate();
        const todayOrders = await Order.find({date: today});
        //check if the request is empty
        const valid=validationLib.checkLastDayOrders(todayOrders);
        if(valid){
            res.status(valid.status).send({ message: valid.message });
        }
        else{
            res.status(200).json(todayOrders);
        }
    }
    catch(err){
        res.json({message: err});
    }
});

//Save new order , using middleware to check whether request is proper or not
router.post('/',valid, async(req,res) => {
    //Sumup the order price
    const sumOrder= sumFunction(req.body.food.map( item => item.price));
    const order = new Order({
        food:req.body.food,
        drink:req.body.drink,
        sum:sumOrder
    });
    try{
    const saveOrder= await order.save();
    res.status(200).json(saveOrder);
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;