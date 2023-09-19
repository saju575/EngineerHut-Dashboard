const multer = require("multer");
const path = require("path");

/* 
    Check file Type
*/
function checkFileType(file, cb) {
  // Allowed ext
  const fileTypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Only 'jpeg','jpg','png','gif' images accepted !!!");
  }
}

/* 
    multiple image uploads with the help of multer
*/
exports.uploadMultiple = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    //check the file type
    checkFileType(file, cb);
  },
}).array("image", 12);
