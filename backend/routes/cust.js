const express = require("express");
// import mongoose from 'mongoose';
const router = express.Router();
const Cust = require("../schema/custSchema.js");




router.get('/user', async (req, res) => {
    try {
        const user = await Cust.find();
        res.json(user);
    } catch {
        res.json({ message: err })
    }

});

//create user
router.post('/create', async (req, res) => {


    // customer.push({ ...user, id: uiidv4() });
    const user = new Cust({

        cust_name: req.body.cust_name,
        balance: req.body.balance,
        message: req.body.message,
        status: req.body.status

    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err })
    }
});

router.delete('/delete:id', async (req, res) => {

    try {
        const { id } = req.params;
        const removed = customer.remove({ _id: id })
        res.send(removed);
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;