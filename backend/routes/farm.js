const express = require("express");
const router = express.Router();
// const { v4 as uuidv4 } =require( 'uuid');
const Farm = require("../schema/farmSchema.js");




router.get('/user', async (req, res) => {
    try {
        const user = await Farm.find();
        res.json(user);
    } catch {
        res.json({ message: err })
    }

});

//create user
router.post('/create', async (req, res) => {


    // customer.push({ ...user, id: uiidv4() });
    const user = new Farm({

        farm_name: req.body.farm_name,
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

//create user
router.post('/create', (req, res) => {
    const user = req.body;

    Farm.push({ ...user, id: 12 });
    res.send(user);
});

router.delete('/delete:id', async (req, res) => {
    try {
        const { id } = req.params;
        const removed = await Farm.findByIdAndDelete(id);
        res.send(removed);
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router