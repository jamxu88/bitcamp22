import express from 'express';
import DatabaseManager from '../database/manager.js';
import {mint} from '../sage.js';
let router = express.Router();

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

router.route("/validate").post((req, res)=> {
    const data = req.body;
    const Manager = new DatabaseManager();
    console.log(data.code)
    let code = Manager.getCode(data.code)
    console.log(code.funding)
    res.send(mint(JSON.stringify(code.funding)));
})

export default router;