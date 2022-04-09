import fetch from "node-fetch";
(async() => {
    await fetch("http://localhost:3000/create", {
        method: "POST",
        body: "hi"
    });
})();