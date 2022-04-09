import User from "./User.js";
import CreditCode from "../CreditCode.js";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


export default class DatabaseManager {
    constructor() {
        this.database = JSON.parse(fs.readFileSync(path.join(__dirname, "./database.json"), "utf8"));
    }
    addUser(user) {
        this.database.users.push(user);
        fs.writeFileSync(path.join(__dirname, "./database.json"), JSON.stringify(this.database));
    }
    removeUser(email) {
        for (let i = 0; i < this.database.users.length; i++) {
            if (this.database.users[i].email == email) {
                this.database.users.splice(i, 1);
            }
        }
        fs.writeFileSync(path.join(__dirname, "./database.json"), JSON.stringify(this.database));
    }
    getUser(email) {
        for (let i = 0; i < this.database.users.length; i++) {
            if (this.database.users[i].email == email) {
                return this.database.users[i];
            }
        }
        return null;
    }
    addCode(code) {
        console.log(code)
        this.database.codes[code.code] = code;
        fs.writeFileSync(path.join(__dirname, "./database.json"), JSON.stringify(this.database));
    }
    getCode(code) {
        return this.database.codes[code];
    }
}