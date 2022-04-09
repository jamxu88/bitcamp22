import express from "express";
import CreateCode from "./routes/CreateCode.js";
import Data from "./routes/Data.js";
import Preferences from "./routes/Preferences.js";
import ValidateCode from "./routes/ValidateCode.js";
import Profile from "./routes/Profile.js";
import AddFunding from "./routes/AddFunding.js";

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/', AddFunding);
app.use('/api/', Profile);
app.use('/api/', CreateCode);
app.use('/api/', Data);
app.use('/api/', Preferences);
app.use('/api/', ValidateCode);

app.listen(port, () => {
    console.log(`Server initialized on port ${port}!`)
})
