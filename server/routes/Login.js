import express from 'express';
let router = express.Router();

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/login").post(function(req, res) {
    console.log(req);
})

export default router;