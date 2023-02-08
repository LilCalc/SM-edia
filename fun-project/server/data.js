const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
    posts: [
        {
            _id: "0",
            userId: "user-0",
            status: "This is an example of a user status",
            parentPostId: null
        },
        {
            _id:"2",
            parentId: "0",
            status: "Here is a reply to the status from user 0",
            parentPostId:"0"
        }
    ],
    users: [
        {
            _id: "0",
            name: "user0",
            username: "@user0"
        }
    ]
}).write();

module.exports = db;