const express = require('express');
const router = express.Router();
const jwt =require('jsonwebtoken')

const service = require('./building.service')



router.get('/neighborsDetails', async (req, res) => {
    // const user ={name:req.headers.userName}
    // const accessToken= jwt.sign(user,process.env.TOKEN_SECRET);
    // res.json({accessToken:accessToken})

   
    const {password,username} = req.headers;
    console.log(password,"router");
    try {
        let result = await service.getNeighborsDetails({password,username});

        res.send(result)

    }
    catch (err) {
        res.status(err?.code ?? 404).send(err?.message)
    }
})

router.get('/')






module.exports = router