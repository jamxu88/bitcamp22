import express from 'express';
//import DatabaseManager from '../database/manager.js';
import CreditCode from "../CreditCode.js"
let router = express.Router();
router.use(express.json())


router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/create").post(function(req, res) {
    let data = req.body;
    //let Manager = new DatabaseManager()
    // Read Auth Information, Validate Authorization

    

    // Get credit card information from database that matches the user ID
    // Create Credit Code
    let code = new CreditCode();
    let id = code.generateCode();
    let user = this.getUser(id);
    code.setIssuer(user)
    let fundingSource = user.getFunding()
    code.setSpendingLimit(spending);
    code.setMerchantLock(merchant);
    code.setCardNumber(fundingSource.cardNumber);
    code.setExpirationMonth(fundingSource.expirationMonth);
    code.setExpirationYear(fundingSource.expirationYear);
    code.setCvv(fundingSource.cvv);

    DatabaseManager.addCode(code)
    
})

export default router;