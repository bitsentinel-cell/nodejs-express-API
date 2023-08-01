const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
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
        req.decoded = decoded;
        next();
    });
}
module.exports = verifyToken;