import express from 'express';
import DatabaseManager from '../database/manager.js';
import {mint} from '../sage.js';
let router = express.Router();
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

router.route("/validate").post(async (req, res)=> {
    const data = req.body;
    const Manager = new DatabaseManager();
    await Manager.connect();
    console.log("a")
    console.log(data.code)
    let funding = await Manager.getCode(data.code)
    console.log("b")
    console.log(funding)
    await Manager.disconnect();
    if(!funding) return;
    res.send(mint(JSON.stringify(funding.replace(/\\/gm,"").slice(1,-1))));
})

export default router;
