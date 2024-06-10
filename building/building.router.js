const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const authToken = require('../authToken.js')
const service = require('./building.service.js')



router.get('/neighborsDetails', authToken, async (req, res) => {
    const { username } = req;
    console.log(username);
    try {
        let result = await service.getBuilding(username, res);

        res.send(result)
    }

    catch (err) {
        res.status(err?.code ?? 404).send(err?.message);
    }
})



router.post('/neighborMessage', authToken, async (req, res) => {
    const { title } = req.body;
    console.log(req.username, title, "service1234");
    try {
        let result = await service.addNeighborMessage(req.username, title);
        res.send(result);
    }
    catch (err) {

        res.status(err?.code ?? 404).send(err?.message)
    };

})

router.post('/adminMessage', authToken, async (req, res) => {
    console.log(req.username, "serviceAdminMessage");
    const { title } = req.body;

    try {
        console.log(title);
        await service.addAdminMessage(req.username, title);
       res.sendStatus(201);

    }
    catch (err) {
        console.log("in catch");
        res.status(err?.code ?? 404).send(err?.message)
    };

}
);



router.delete('/deleteMessages/:username', authToken, async (req, res) => {
    const deletesArray = req.body.messagesId;
    console.log(deletesArray);
    try {
        let result = await service.deleteMessages(deletesArray, req.username);
    }
    catch (err) { res.status(err?.code ?? 404).send(err?.message) }
    res.send("1234");
})








module.exports = router