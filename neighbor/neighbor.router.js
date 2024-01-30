const express = require('express');
const router = express.Router();
const Service =require ('./.service')



router.get('/' , async (req, res) => {

    try {
let result = await Service.getAllsDetails(req.headers)
res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 404).send(err?.message)
    }
})






module.exports = router