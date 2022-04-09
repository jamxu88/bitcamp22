import express from "express";
import CreateCode from "./routes/CreateCode.js";
import Data from "./routes/Data.js";
import Login from "./routes/Login.js";
import Preferences from "./routes/Preferences.js";
import Register from "./routes/Register.js";
import ValidateCode from "./routes/ValidateCode.js";



const app = express();
const port = process.env.PORT || 3000;

app.use('/', CreateCode);
app.use('/', Data);
app.use('/', Login);
app.use('/', Preferences);
app.use('/', Register);
app.use('/', ValidateCode);

app.listen(port, () => {
    console.log(`Server initialized on port ${port}!`)
})
