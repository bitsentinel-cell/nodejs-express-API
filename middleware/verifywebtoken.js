const jwt = require('jsonwebtoken');
const {defaults} = require("joi");
const verifyToken = (req, res, next) => {
    const token = req.headers['auth-token'];
    if (!token) {
        return res.status(403).send({
            message: 'No token provided'
        });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                message: 'Failed to authenticate token.'
            });
        }
        req.user = decoded.UserInfo.email;
        req.roles = decoded.UserInfo.roles;

        req.decoded = decoded;
        next();
    });
}

module.exports = verifyToken;

