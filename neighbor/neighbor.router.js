const express = require('express');
const router = express.Router();
const service = require('./neighbor.service')


router.get('/', async (req, res) => {
    const password = req.headers.building_password;
    console.log(password + "fromRouter");
    try {
        let result = await service.getNeighborsDetails(password);

        res.send(result)

    }
    catch (err) {
        res.status(err?.code ?? 404).send(err?.message)
    }
})






module.exports = router