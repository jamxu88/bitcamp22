import express from 'express';
import cors from "cors";
let router = express.Router();

router.use(function (req, res, next) {
    next();
});
var corsOptions = {
    origin: 'https://bitcamp2022.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
router.route("/profile").get(cors(corsOptions), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

export default router;
