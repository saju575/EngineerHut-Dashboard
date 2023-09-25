require("dotenv").config();
/* 
    server port number
*/
exports.SERVER_PORT = process.env.SERVER_PORT || 3000;

/* 
    export mongodb url
*/
exports.MONGODB_URL = process.env.MONGODB_URL;
