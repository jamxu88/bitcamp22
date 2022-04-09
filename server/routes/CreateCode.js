import express from 'express';
import DatabaseManager from '../database/manager.js';
import CreditCode from "../CreditCode.js"
let router = express.Router();
router.use(express.json())


router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/create").post(async function(req, res) {
    let data = req.body;
    let Manager = new DatabaseManager()
    await Manager.connect();
    // Read Auth Information, Validate Authorization

    

    // Get credit card information from database that matches the user ID
    // Create Credit Code
    let code = new CreditCode();
    let user = await Manager.getUser(data.email);
    code.setIssuer(data.email);
    code.setFunding(user);
    code.generateCode();
    code.setSpendingLimit(data.spending_limit);
    code.setMerchantLock(data.merchant_lock);

    await Manager.addCode(code)
    await Manager.disconnect();
    res.send(code.code);
})

export default router;