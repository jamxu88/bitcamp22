import express from 'express';

let router = express.Router();

router.use(function (req, res, next) {
    next();
});

router.route("/profile").get((req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

export default router;