require("dotenv").config();
/* 
    server port number
*/
exports.SERVER_PORT = process.env.SERVER_PORT || 5000;

/* 
    export mongodb url
*/
exports.MONGODB_URL = process.env.MONGODB_URL;

/* 
    exporting all firebase configuration keys to
*/

exports.FIREBASE_API_KEY =
  process.env.FIREBASE_API_KEY || "AIzaSyBCwy1vUr0D0bFv6Pt5of9-aCOoIAcwLoQ";

exports.FIREBASE_AUTH_DOMAIN =
  process.env.FIREBASE_AUTH_DOMAIN || "e-com-997d5.firebaseapp.com";

exports.FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || "e-com-997d5";

exports.FIREBASE_STORAGE_BUCKET =
  process.env.FIREBASE_STORAGE_BUCKET || "e-com-997d5.appspot.com";

exports.FIREBASE_MESSAGING_SENDER_ID =
  process.env.FIREBASE_MESSAGING_SENDER_ID || "278404608426";

exports.FIREBASE_APP_ID =
  process.env.FIREBASE_APP_ID || "1:278404608426:web:5121874fc2a89416bd7bd3";

exports.JWT_ACTIVATION_KEY = process.env.JWT_ACTIVATION_KEY || "jdkekkw^^555%7";

exports.JWT_ACCESS_KEY = process.env.JWT_ACCESS_KEY || "jdkekkw";

exports.CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

exports.SMTP_EMAIL = process.env.SMTP_EMAIL;

exports.SMTP_EMAIL_PASS = process.env.SMTP_EMAIL_PASS;
