const express = require('express');
const router = express.Router();
const service = require('./registration.service')
const jwt = require('jsonwebtoken');

const controller = require('../DB/controller');


router.post('/userLogin', async (req, res) => {
    console.log(req.body, "req.body");
    const { userName, password } = req.body;

    try {
        const response = await service.userLogin(userName, password);
        res.json(response);
    }
    catch (err) {
        console.log("user catch");
        res.status(err?.code ?? 400).send(err?.msg)
    }

})

router.post('/adminLogin', async (req, res) => {
    const { userName, password } = req.body;
    console.log(userName, "req.body");
    try { const response = await service.adminLogin(userName, password);
    res.status(200).json(response) }
    catch (err) { res.status(err?.code ?? 400).send(err?.msg) }



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
        res.sendStatus(err?.code ?? 400, err?.msg)
    }
})



module.exports = router;