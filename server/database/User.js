export default class User {
    constructor() {
        this.email = null;
        this.funding = null;
    }
    getEmail() {
        return this.email;
    }
    getFunding() {
        return this.funding;
    }
    setEmail(email) {
        this.email = email;
    }
    setFunding(funding) {
        this.funding = funding;
    }
    removeFunding() {
        this.funding = null;
    }
}