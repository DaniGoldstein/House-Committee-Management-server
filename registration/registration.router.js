const express = require('express');
const router = express.Router();
const service = require('./registration.service')
const jwt = require('jsonwebtoken');

const controller = require('../DB/controller');


router.post('/login', async (req, res) => {

    const { username, password } = req.headers;

    try {
        const response = await service.login(username, password);
        res.json(response);
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }

})

router.post('/UserRegistration', async (req, res) => {
    console.log(req.body);
    try {
        const response = await service.UserRegistration(req.body)
        res.sendStatus(201)
    }
    catch (err) { res.status(err?.code ?? 400).send(err?.msg) }
});



router.post('/BuildingRegistration', async (req, res) => {

    console.log(req.body);
    try {
        const newBuilding = await service.BuildingRegistration(req.body);
        res.sendStatus(201)
    }
    catch (err) {
        res.sendStatus(err?.code ?? 400)
    }
})



module.exports = router;