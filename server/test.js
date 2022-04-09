import fetch from "node-fetch";
import Manager from "./database/manager.js";
import User from "./database/User.js"
let manager = new Manager();
let user = new User();
user.setEmail("test@mail.com")
user.setFunding({
    "type": "debit",
    "value": {
        "number": "4444444444444443",
        "cvv": "123",
        "exp_month": "12",
        "exp_year": "20"
    }
})
manager.addUser(user);


(async() => {
    await fetch("http://localhost:3001/api/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: "test@mail.com",
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
            "email": "test@mail.com",
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
            "email": "test@mail.com",
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