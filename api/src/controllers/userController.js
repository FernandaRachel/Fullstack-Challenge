const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/user', async(req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send([
            user
        ]);
    } catch (err) {
        return res.status(400).send({
            error: 'Não foi possivel criar o usuário: ' + err
        });
    }
})

router.route('/user').get((req, res) => {
    User.find({}, (err, user) => {
        res.json(user)
    })
})

module.exports = app => app.use('/api', router);