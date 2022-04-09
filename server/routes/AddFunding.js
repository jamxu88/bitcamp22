import express from 'express';
import DatabaseManager from '../database/manager.js';
import CreditCode from "../CreditCode.js"
let router = express.Router();
router.use(express.json());
import cors from 'cors';
const allowedOrigins = ['bitcamp2022.herokuapp.com',
                      'bitcamp2022api.herokuapp.com'];
router.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  
  }));

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/addfunding").post(async function(req, res) {
    const Manager = new DatabaseManager();
    await Manager.connect();
    let data = req.body;
    let user = await Manager.getUser(data.email);
    user = data.funding;
    await Manager.removeUser(data.email);
    await Manager.addUser(user);
    await Manager.disconnect();
    res.send("Added Funding source: " + data.funding);
})

export default router;
