const { getStorage, ref, deleteObject } = require("firebase/storage");
const { firebaseApp } = require("../config/firebase.config");

exports.imageDeleteFromFirebase = async (imageUrl) => {
  const storage = getStorage(firebaseApp);

  // Delete the image from Firebase Storage
  const imageRef = ref(storage, imageUrl);
  await deleteObject(imageRef);
};
