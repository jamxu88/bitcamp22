import fetch from "node-fetch";
import Manager from "./database/manager.js";
import User from "./database/User.js"
let manager = new Manager();

var result = '';
var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for (var i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}


(async() => {
    await manager.connect();
    // delete all values in user table
    manager.client.query("DELETE FROM users");
    // delete all values in codes table
    manager.client.query("DELETE FROM codes");
    let user = new User();
    let email = `test${result}@mail.com`
    user.setEmail(email)
    user.setFunding(JSON.stringify({
        "type": "debit",
        "value": {
            "number": "4444444444444443",
            "cvv": "123",
            "exp_month": "12",
            "exp_year": "20"
        }
    }));
    await manager.addUser(user);
    await manager.disconnect();
    await fetch("http://localhost:3001/api/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: `test${result}@mail.com`,
            spending_limit: "100",
            merchant_lock: "spotify"
        }),
    }).then(async resp => {
        let data = await resp.text();
        console.log(data)
        await fetch("http://localhost:3001/api/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: data
            })
        }).then(async resp => {
            let data = await resp.text();
            console.log(data)
        })
    });

    await fetch("http://localhost:3001/api/addfunding", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": `test${result}@mail.com`,
            "funding": {
                "type": "debit",
                "value": {
                    "number": "wwww4444444444444443",
                    "cvv": "123",
                    "exp_month": "12",
                    "exp_year": "20"
                }
            }
        }),
    }).then(async resp => {
        let data = await resp.text();
        console.log(data)
    });
    await fetch("http://localhost:3001/api/removefunding", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": `test${result}@mail.com`,
            "funding": {
                "type": "debit",
                "value": {
                    "number": "wwww4444444444444443",
                    "cvv": "123",
                    "exp_month": "12",
                    "exp_year": "20"
                }
            }
        }),
    }).then(async resp => {
        let data = await resp.text();
        console.log(data)
    });
})();