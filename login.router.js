const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Model = require('./building/building.model');


router.post('/', auth, async (req, res) => {

    const username = { username: req.headers.username };
    
    const accessToken = jwt.sign(username, process.env.TOKEN_SECRET);
   
    res.json({ accessToken: accessToken, });
})

async function auth(req, res, next) {
    const authorizedUser = await Model.findOne({
        neighbors: {
            $elemMatch: {
                userName: req.headers.username,
                password: req.headers.password
            },
        }
    });
     console.log(authorizedUser, "fromLogin");
    if (!authorizedUser) { return res.status(404).send("User not found"); }
    next()
}



module.exports = router;