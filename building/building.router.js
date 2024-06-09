const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const authToken = require('../authToken.js')
const service = require('./building.service.js')



router.get('/neighborsDetails', authToken, async (req, res) => {
    const { username } = req;
    console.log(username);
    try {
        let result = await service.getBuilding(username,res);
        
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

router.post('adminMessage', authToken, async (req, res) => {
    console.log(...req.body, req.username, "serviceAdminMessage");
//     const { title } = req.body;
//     try{
//         let result=awit service.addAdminMessage( title);
//     }
// 
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


// router.get('/neighborMessages',authToken, async (req, res) => {
//     let result = await service.getNeighborMessages(req.username)
// console.log(req.username);
// res.send()

// })





module.exports = router