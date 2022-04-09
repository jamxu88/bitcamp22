export default class CreditCode {
    constructor() {
        this.code = null;
        this.funding = null;
        this.spendingLimit = null;
        this.merchantLock = null;
        this.issuer = null;
    }
    generateCode() {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 15; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.code = result;
    }
    getInfo() {
        return {
            cardNumber: this.cardNumber,
            expirationMonth: this.expirationMonth,
            expirationYear: this.expirationYear,
            cvv: this.cvv,
            spendingLimit: this.spendingLimit,
            merchantLock: this.merchantLock
        }
    }
    setFunding(funding) {
        this.funding = funding;
    }
    setSpendingLimit(spendingLimit) {
        this.spendingLimit = spendingLimit;
    }
    setMerchantLock(merchantLock) {
        this.merchantLock = merchantLock;
    }
    setIssuer(issuer) {
        this.issuer = issuer;
    }
}