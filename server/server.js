import express from "express";
//import CreateCode from "./routes/CreateCode.js";
import Data from "./routes/Data.js";
import Preferences from "./routes/Preferences.js";
import ValidateCode from "./routes/ValidateCode.js";
import Profile from "./routes/Profile.js";
import AddFunding from "./routes/AddFunding.js";
import RemoveFunding from "./routes/RemoveFunding.js";
import CreateCode from "./routes/CreateCode.js";
import { auth } from 'express-openid-connect';

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'Uu7JT95VGCu7MT77f15SnQqwOW6gyZfZ3S9pRysj3hPUq-tZp2Yl1d4nMzWEFeIi',
    baseURL: 'https://bitcamp2022api.herokuapp.com',
    clientID: '9fZCjKmRgG35AauwFVoEIpOll7w6fdnR',
    issuerBaseURL: 'https://musepay.us.auth0.com'
};

const app = express();
const port = process.env.PORT || 3001;
app.use(auth(config));

app.use('/api/', AddFunding);
app.use('/api/', Profile);
app.use('/api/', CreateCode);
app.use('/api/', Data);
app.use('/api/', Preferences);
app.use('/api/', RemoveFunding);
app.use('/api/', ValidateCode);
//app.use('/test/', testRoute)

app.listen(port, () => {
    console.log(`Server initialized on port ${port}!`)
})
