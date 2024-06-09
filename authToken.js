const jwt = require('jsonwebtoken');


function authToken(req, res, next) {

    const authToken = req.headers.authtoken;
    // console.log(authToken);
    const token = authToken && authToken.split(' ')[1];
    // console.log(token, "token");

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
     
        if (err) return res.sendStatus(403);
        
        req.username = user;

        
        next();

    })

}

module.exports = authToken;