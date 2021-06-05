const database = require("../main.js")
const db = new database()

db.on("ready" , {
    message : "databaseye bağlanıldı"
});

console.log(db.math("1" , "*" , "0"))