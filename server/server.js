import express from "express";
import Routes from "./routes/CreateCode.js"


const app = express();
const port = process.env.PORT || 3000;

app.use('/', Routes);

app.listen(port, () => {
    console.log(`Server initialized on port ${port}!`)
})
