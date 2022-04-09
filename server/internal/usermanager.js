import Synapse from 'synapsenode'
const Client = Synapse.Client;

export default class User {
    constructor(fingerprint) {
        this.userInformation = null;
        this.client = new Client({
            client_id: "client_id_Por3IV4pt9JLNg0xew7BnFKQ6Tb2cRWHmjqfDEy1",
            client_secret: "client_secret_LYu7ydHRAgK2r6z5qNDcCbV00jEOo8FJT3pf19mU",
            fingerprint: fingerprint,
            ip_address: '255.127.79.76',
            isProduction: true
        })
    } 
    getAllUsers() {
        this.client.getAllUsers().then(({data}) => console.log('DATA\n', data)).catch(error => console.log(error));
    }
    getUserDetails(userID) {
        this.client.getUser(userID, {
            full_dehydrate: false
        }).then(user => {
            return(user)
        }).catch(error => {return error});
    }
}

