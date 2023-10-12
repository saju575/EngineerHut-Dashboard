import { Modal } from "@mui/material";
import { AiFillFileAdd, AiOutlineCamera } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchProduct } from "../../lib/getProducts";
import {
  addMoreImages,
  updateProductImage,
} from "../../lib/updateProductImage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // maxWidth: 450,
  // minWidth: 365,
  // backgroundColor: "#0f172a",
  outline: "none",
  padding: "20px 10px",
  borderRadius: "3px",
};

const UpdateProductImgModal = ({ isOpen, setIsOpen, productId, refetch }) => {
  const {
    data: product,
    isLoading: isProductLoadding,
    isError: isProductError,
    error: productError,
    isSuccess: isProductSuccess,
    refetch: productRefetch,
  } = useQuery({
    queryFn: () => fetchProduct(productId),
    queryKey: ["UpProduct", { productId }],
    // onSuccess: (data) => {
    //   setImgUrl(data.payload.images[0].url);
    // },
  });

  /* 
    client query
  */
  const queryClient = useQueryClient();

  /* 
      react query
    */

  const { mutateAsync, isError, error } = useMutation({
    mutationFn: (data) => updateProductImage(data),
    onSuccess: async () => {
      productRefetch();
      refetch();
      queryClient.invalidateQueries();
    },
  });

  const {
    mutateAsync: addMoreImagesFn,
    isError: isMoreImageError,
    error: moreImagesError,
  } = useMutation({
    mutationFn: (data) => addMoreImages(data),
    onSuccess: async () => {
      productRefetch();
      refetch();
      queryClient.invalidateQueries();
    },
  });

  //iamge handler
  const imageHandler = async (imageId, image) => {
    const formData = new FormData();

    formData.append("imageId", imageId);
    formData.append("image", image);

    const newObject = {
      productId,
      formData,
    };

    await mutateAsync(newObject);
  };

  /* 
    multiple image upload handlers
  */
  const multipleImageUploadHandler = async (e) => {
    const selectedImages = e.target.files;
    const formData = new FormData();

    // Append images to formData
    for (const image of selectedImages) {
      formData.append("image", image);
    }

    const newObject = {
      productId,
      formData,
    };

    await addMoreImagesFn(newObject);
  };

  // show images
  let productImgContent;

  if (isProductLoadding) {
    productImgContent = <p>Loading...</p>;
  } else if (!isProductLoadding && isProductError) {
    productImgContent = <p>{productError.message}</p>;
  } else if (!isProductLoadding && !product?.payload) {
    productImgContent = <p>No product found</p>;
  } else if (
    !isProductLoadding &&
    isProductSuccess &&
    product?.payload.images?.length > 0
  ) {
    productImgContent = product?.payload.images?.map((img) => (
      <div key={img._id} className="relative w-40">
        <img src={img.url} alt="product" className="object-cover" />
        <input
          type="file"
          id={img._id}
          className="hidden"
          accept="image/png,image/jpg,image/jpeg"
          onChange={(e) => imageHandler(img._id, e.target.files[0])}
        />
        <label htmlFor={img._id}>
          <div className="w-[30px] h-[30px] bg-slate-500 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
            <AiOutlineCamera size={20} className="z-1" />
          </div>
        </label>
      </div>
    ));
  }

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{
        sx: { backgroundColor: "rgba(255, 255, 0, 0.1)" }, // Adjust the backdrop color here
      }}
    >
      <div
        style={{ ...style }}
        className="dark:bg-dark bg-white shadow sm:w-[80%] w-[95%] max-h-[90vh]  relative"
      >
        <div className="flex justify-between items-center absolute top-3 left-0 right-0 px-5">
          <h2 className={`text-lg `}>Update Product Image</h2>
          <div className="mr-5 text-xl cursor-pointer">
            <HiOutlineX onClick={() => setIsOpen(false)} />
          </div>
        </div>

        <div
          className="w-full mt-11 overflow-y-auto"
          style={{ maxHeight: "calc(90vh - 4.2rem)" }}
        >
          {/* 
                TODO: add image
            */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 sm:gap-6">
            {productImgContent}
          </div>

          <div className="mt-6">
            <input
              type="file"
              id={`uploadImage`}
              className="hidden"
              accept="image/png,image/jpg,image/jpeg"
              multiple
              onChange={(e) => multipleImageUploadHandler(e)}
            />
            <label htmlFor={`uploadImage`}>
              <div className="w-[150px] h-[150px] bg-slate-500 rounded-full  bottom-2 right-2 flex items-center justify-center cursor-pointer">
                <AiFillFileAdd size={120} className="z-1" />
              </div>
            </label>
          </div>

          {isError && <p className="text-red-500 mb-2">{error.message}</p>}
          {isMoreImageError && (
            <p className="text-red-500 mb-2">{moreImagesError.message}</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UpdateProductImgModal;
