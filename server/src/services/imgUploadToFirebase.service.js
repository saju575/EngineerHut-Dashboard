const {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} = require("firebase/storage");
const { firebaseApp } = require("../config/firebase.config");

/* 
    upload image to firebase with the help of this function.
    This function actually return an object array of store image urls.Example: [{ url:"http://example.com"},{url:"http://example.com}]
*/
exports.uploadImages = async (files) => {
  //use the firebase configuration to access the storage
  const storageFB = getStorage(firebaseApp);

  const imageUrls = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const dateTime = Date.now();
    const fileName = `images/${dateTime}_${i}`;
    const storageRef = ref(storageFB, fileName);
    const metadata = {
      contentType: file.mimetype,
    };

    // Upload the image
    await uploadBytesResumable(storageRef, file.buffer, metadata);

    // Get the download URL
    const imageUrl = await getDownloadURL(storageRef);
    imageUrls.push({ url: imageUrl });
  }

  return imageUrls;
};
