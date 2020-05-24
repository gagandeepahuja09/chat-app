const express = require('express');
const router = express.Router();
const Subscriber = require('../models/users');

router.get('/', async(req, res) => {
    try {
        res.send('Hello World');
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async(req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
    catch(err) {
        res.status(400).json({ message: err.message });
    } 
});

module.exports = router;