import express from 'express';
import { auth } from 'express-openid-connect';
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'Uu7JT95VGCu7MT77f15SnQqwOW6gyZfZ3S9pRysj3hPUq-tZp2Yl1d4nMzWEFeIi',
    baseURL: 'http://localhost:3000',
    clientID: '9fZCjKmRgG35AauwFVoEIpOll7w6fdnR',
    issuerBaseURL: 'https://musepay.us.auth0.com'
  };
let router = express.Router();
router.use(auth(config));
router.use(function (req, res, next) {
    next();
});

router.route("/profile").get((req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

export default router;