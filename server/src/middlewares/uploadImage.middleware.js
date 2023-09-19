const { uploadImages } = require("../services/imgUploadToFirebase.service");

exports.uploadImage = async (req, res, next) => {
  try {
    const singleFile = req.file;
    const multipleFiles = req.files;

    let imageUrls;

    if (singleFile) {
      imageUrls = await uploadImages([singleFile]);
    }

    if (multipleFiles) {
      imageUrls = await uploadImages(multipleFiles);
    }

    req.imageUrls = imageUrls;
    next();
  } catch (error) {
    next(error);
  }
};
