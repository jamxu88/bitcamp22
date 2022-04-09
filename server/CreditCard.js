export default class CreditCard {
    constructor() {
        this.cardNumber = null;
        this.expirationMonth = null;
        this.expirationYear = null;
        this.cvv = null;
        this.spendingLimit = null;
        this.merchantLock = null;
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
}