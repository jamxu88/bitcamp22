import fetch from "node-fetch";
(async() => {
    await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            spending_limit: "100",
            merchant_lock: "spotify"
        }),
    });
})();