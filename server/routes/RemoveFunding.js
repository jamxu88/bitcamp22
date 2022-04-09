import express from 'express';
import DatabaseManager from '../database/manager.js';
import CreditCode from "../CreditCode.js"
let router = express.Router();
router.use(express.json())

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/removefunding").post(function(req, res) {
    const Manager = new DatabaseManager();
    let data = req.body;
    let user = Manager.getUser(data.email);
    user.funding = null;
    Manager.removeUser(data.email);
    Manager.addUser(user);
    res.send("Removed Funding source: " + data.funding);
})

export default router;