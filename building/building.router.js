const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const authToken = require('../authToken.js')
const service = require('./building.service')



router.get('/neighborsDetails', authToken, async (req, res) => {

    const { username } = req;
    try {
        let result = await service.getBuilding(username);
        res.send(result)
    }

    catch (err) {
        res.status(err?.code ?? 404).send(err?.message);
    }
})



router.post('/neighborMessage', authToken, async (req, res) => {
    const { title } = req.body;
    console.log(req.username, title, "service");
    try {
        let result = await service.addNeighborMessage(req.username, title);
        res.send(result);
    }
    catch (err) {
        res.status(err?.code ?? 404).send(err?.message)
    };

})
// router.get('/neighborsMessages',async (req, res) => {
//     const {password,username} = req.headers;
//     try{
//     let result = await service.getNeighborsMessages({password,username});
//     res.send(result)}
//     catch(err){
//         res.status(err?.code ?? 404).send(err?.message)
//     }
// })


// router.get('/neighborsMessages',async (req, res) => {

//     try {
//         let result = await service.getMainMessages
//     }
//     catch(err){}
// })






module.exports = router