import express from 'express';
import DatabaseManager from '../database/manager.js';
import {mint} from '../sage.js';
let router = express.Router();

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
    res.send(mint(JSON.stringify(funding.replace(/\\/gm,"").slice(1,-1))));
})

export default router;