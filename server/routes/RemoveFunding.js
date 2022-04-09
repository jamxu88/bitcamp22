import express from 'express';
import DatabaseManager from '../database/manager.js';
import CreditCode from "../CreditCode.js"
let router = express.Router();
router.use(express.json())

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/removefunding").post(async function(req, res) {
    const Manager = new DatabaseManager();
    await Manager.connect();
    let data = req.body;
    let user = Manager.getUser(data.email);
    user.funding = null;
    await Manager.removeUser(data.email);
    await Manager.addUser(user);
    await Manager.disconnect();
    res.send("Removed Funding source: " + data.funding);
})

export default router;