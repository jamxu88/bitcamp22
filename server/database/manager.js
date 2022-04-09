import pg from "pg";
import parse from "pg-connection-string";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// AwfICmBZvku9lDa4J69nBQ


export default class DatabaseManager {
    constructor() {
        this.database = JSON.parse(fs.readFileSync(path.join(__dirname, "./database.json"), "utf8"));
        this.client = new pg.Client("postgresql://james:AwfICmBZvku9lDa4J69nBQ@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Droachcamp-1176");
    }

    async connect() {
        await this.client.connect();
    }

    async disconnect() {
        await this.client.end();
    }

    async addUser(user) {
        
        let statements = ["CREATE TABLE IF NOT EXISTS users (email TEXT PRIMARY KEY, funding TEXT)", "INSERT INTO users (email, funding) VALUES ('" + user.email + "', '" + user.funding + "')"];
        for (let n = 0; n < statements.length; n++) {
            let result = await this.client.query(statements[n]);
            if (result.rows[0]) { console.log(result.rows[0].message); }
          }
        
        /*this.database.users.push(user);
        fs.writeFileSync(path.join(__dirname, "./database.json"), JSON.stringify(this.database));*/
    }
    async removeUser(email) {
        
        let statements = ["DELETE FROM users WHERE email = '" + email + "'"];
        for (let n = 0; n < statements.length; n++) {
            let result = await this.client.query(statements[n]);
            if (result.rows[0]) { console.log(result.rows[0].message); }
          }
        
        /*
        for (let i = 0; i < this.database.users.length; i++) {
            if (this.database.users[i].email == email) {
                
                this.database.users.splice(i, 1);
            }
        }
        fs.writeFileSync(path.join(__dirname, "./database.json"), JSON.stringify(this.database));*/
    }
    async getUser(email) {
        // get funding on same line as email
        let statements = ["SELECT email, funding FROM users WHERE email = '" + email + "'"];
        for (let n = 0; n < statements.length; n++) {
            let result = await this.client.query(statements[n]);
            if (result.rows[0]) { return(result.rows[0].funding); }
        }
        
        
        /*
        for (let i = 0; i < this.database.users.length; i++) {
            if (this.database.users[i].email == email) {
                
                return this.database.users[i];
            }
        }
        return null;*/
    }
    async addCode(code) {
        console.log(code)

        let statements = ["CREATE TABLE IF NOT EXISTS codes (code TEXT, funding TEXT)", "INSERT INTO codes (code, funding) VALUES ('" + code.code + "', '" + JSON.stringify(code.funding) + "')"];
        for (let n = 0; n < statements.length; n++) {
            let result = await this.client.query(statements[n]);
            if (result.rows[0]) { console.log(result.rows[0].message); }
        }
        
        /*
        this.database.codes[code.code] = code;
        fs.writeFileSync(path.join(__dirname, "./database.json"), JSON.stringify(this.database));*/
    }
    async getCode(code) {
        let statements = ["SELECT code,funding FROM codes WHERE code = '" + code + "'"];
        for (let n = 0; n < statements.length; n++) {
            let result = await this.client.query(statements[n]);
            if (result.rows[0]) { return(result.rows[0].funding); }
        }

    }
}