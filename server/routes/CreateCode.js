import express from 'express';
import CreditCard from '../CreditCard.js';
let router = express.Router();
router.use(express.json())


router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/create").post(function(req, res) {
    let data = req.body;
    let card = new CreditCard();
    card.setMerchantLock(data.merchant_lock);
    card.setSpendingLimit(data.spending_limit);
})

export default router;