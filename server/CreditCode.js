export default class CreditCode {
    constructor() {
        this.code = null;
        this.cardNumber = null;
        this.expirationMonth = null;
        this.expirationYear = null;
        this.cvv = null;
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
        return result;
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
    setCardNumber(cardNumber) {
        this.cardNumber = cardNumber;
    }
    setExpirationMonth(expirationMonth) {
        this.expirationMonth = expirationMonth;
    }
    setExpirationYear(expirationYear) {
        this.expirationYear = expirationYear;
    }
    setCvv(cvv) {
        this.cvv = cvv;
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