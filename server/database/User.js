export default class User {
    constructor() {
        this.id = null;
        this.funding = null;
    }
    getId() {
        return this.id;
    }
    getFunding() {
        return this.funding;
    }
    setId(id) {
        this.id = id;
    }
    addFunding(funding) {
        this.funding = this.funding.push(funding);
    }
    removeFunding(funding) {
        this.funding = this.funding.filter(function(item) {
            return item !== funding;
        });
    }
}