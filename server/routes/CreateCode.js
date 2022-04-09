import express from 'express';
import DatabaseManager from '../database/manager.js';
import CreditCode from "../CreditCode.js"
let router = express.Router();
router.use(express.json())


router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/create").post(function(req, res) {
    let data = req.body;
    let Manager = new DatabaseManager()
    // Read Auth Information, Validate Authorization

    

    // Get credit card information from database that matches the user ID
    // Create Credit Code
    let code = new CreditCode();
    let user = Manager.getUser(data.email);
    code.setIssuer(data.email);
    let fundingSource = user.funding
    code.setFunding(fundingSource);
    code.generateCode();
    code.setSpendingLimit(data.spending_limit);
    code.setMerchantLock(data.merchant_lock);

    Manager.addCode(code)
    res.send(code.code);
})

export default router;