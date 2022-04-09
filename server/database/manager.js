/*import User from "./User.js";
import CreditCode from "../CreditCode.js";
import fs from "fs";

let database = fs.readFileSync("./database.json");


export default class DatabaseManager {
    constructor() {
        this.data = null;
    }
    addUser(user) {
        database.users.append(user);
    }
    removeUser(user) {
        database.users.remove(user);
    }
    getUser(id) {
        return database.users.find(function(user) {
            return user.getId() === id;
        });
    }
    addCode(code) {
        database.codes[code.getId()] = code;
    }
}*/