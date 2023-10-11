import { Modal, TextField, TextareaAutosize } from "@mui/material";
import { useFormik } from "formik";
import { HiOutlineX } from "react-icons/hi";
import { useMutation, useQueryClient } from "react-query";
import * as Yup from "yup";
import { updateProduct } from "../../lib/updateProduct";

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

const UpdateProductModal = ({ isOpen, setIsOpen, product, refetch }) => {
  /* 
    client query
  */
  const queryClient = useQueryClient();

  /* 
    react query
  */

  const {
    mutateAsync,
    isLoading: isUpdateLoading,
    isError: isProductError,
    error: productError,
  } = useMutation({
    mutationFn: (data) => updateProduct(data),
    onSuccess: async () => {
      queryClient.invalidateQueries();

      refetch();
      setIsOpen(false);
    },
    // onMutate: (newData) => {
    //   // Optimistically update the cache with the new data
    //   queryClient.setQueryData("product", (oldData) => {
    //     // Modify the data in the cache optimistically
    //     return { ...oldData, ...newData };
    //   });

    //   return newData;
    // },
  });
  const formik = useFormik({
    initialValues: {
      name: product.name || "",
      description: product.description || "",
      price: product.price || 0,
      discountPrice: product.discountPrice || 0,
      shippingFee: product.shippingFee || 0,
      taxRate: product.taxRate || 0,
      category: product.category || "",
      brand: product.brand || "",
      stock: product.stock || 0,
      color: product.color || "",
      weight: product.weight || 0,
      size: product.size || "",
      rating: product.rating || 0,
      sku: product.sku || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product Name is required*"),
      description: Yup.string().required("required*"),
      price: Yup.number().required("required*").min(0),
      discountPrice: Yup.number()
        .required("At lest 0 required")
        .test(
          "is-valid-discount-price",
          "Discount Price must be less than Price and greater than or equal to 0",
          function (value) {
            const price = this.parent.price; // Get the value of the "price" field
            if (
              value === undefined ||
              value === null ||
              price === undefined ||
              price === null
            ) {
              // If either value is not defined, return true to skip validation
              return true;
            }
            return value >= 0 && value < price; // Validation passes if discountPrice is valid
          }
        ),
      shippingFee: Yup.number().required("required*").min(0),
      taxRate: Yup.number().required("Tax Rate is required").min(0),
      category: Yup.string().required("Product Category is required"),
      brand: Yup.string().required("Product Brand is required"),
      stock: Yup.number().required("Product Stock is required").min(0),
      //color: Yup.string(),
      weight: Yup.number(),
      //   size: Yup.string()
      //     .required("Please Enter a valid Size")
      //     .matches(
      //       /(M|XL|MX|SM|2XL|3XL|L)/,
      //       "Please Enter a valid Size (M, XL, MX, SM, 2XL, 3XL, L)"
      //     ),

      sku: Yup.string().required("SKU Number is required"),
    }),
    onSubmit: async (values) => {
      // Handle the form submission here, e.g., make an API request to update the product
      // You can access the validated form data in the `values` object
      await mutateAsync({ ...values, id: product._id });
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

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
          <h2 className={`text-lg `}>Update Product Information</h2>
          <div className="mr-5 text-xl cursor-pointer">
            <HiOutlineX onClick={() => setIsOpen(false)} />
          </div>
        </div>
        <div
          className="w-full mt-11 overflow-y-auto"
          style={{ maxHeight: "calc(90vh - 4.2rem)" }}
        >
          {/* <h2 className={`${styles.title}`}>Login with E-Learner</h2> */}

          <form onSubmit={handleSubmit}>
            <div className="uploadProduct-inner p-5 border rounded mr-8 flex justify-between flex-wrap">
              {/* 
            input from left side
          */}
              <div className="uploadProduct-left w-6/12">
                <div className="shadow-gray-50 mx-3 uploadProduct-left--responsive">
                  <div className="w-full upProduct-left--inner rounded">
                    <h3 className="font-semibold mb-10 pt-2.5 pl-2">
                      Basic Information
                    </h3>

                    {/* 
                    prouduct title
                  */}
                    <div className="my-4 mx-2">
                      <TextField
                        className="w-full"
                        id="name"
                        label="Product Title"
                        placeholder="Product Title"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />

                      {errors.name && (
                        <span className="text-red-600 pt-2 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* 
                    regular price discount price
                  */}
                    <div className="my-8 upPro-res mx-2 flex justify-between">
                      {/* 
                      price
                    */}
                      <div className="mr-4 w-full upPro-resInner">
                        <TextField
                          className="w-full"
                          id="price"
                          label="Regular Price"
                          placeholder="Type here"
                          type="number"
                          required
                          inputProps={{
                            inputMode: "numeric",
                            min: 0,
                          }}
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                        />
                        {errors.price && (
                          <span className="text-red-600 pt-2 block">
                            {errors.price}
                          </span>
                        )}
                      </div>

                      {/* 
                      discount price
                    */}
                      <div className="w-full">
                        <TextField
                          className="w-full"
                          id="discountPrice"
                          label="Discount Price"
                          placeholder="Type here"
                          type="number"
                          inputProps={{
                            min: 0,
                          }}
                          name="discountPrice"
                          value={values.discountPrice}
                          onChange={handleChange}
                        />
                        {errors.discountPrice && (
                          <span className="text-red-600 pt-2 block">
                            {errors.discountPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 
                    discreption
                  */}
                    <div className="my-4 mx-2">
                      <TextareaAutosize
                        minRows={3}
                        placeholder="About Discription"
                        id="outlined-textarea"
                        className="w-full p-2 border-[2px] focus:outline-none placeholder:text-[#333]"
                        required
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                      />
                      {errors.description && (
                        <span className="text-red-600 pt-2 block">
                          {errors.description}
                        </span>
                      )}
                    </div>

                    {/* 
                    category and brand input fields
                  */}
                    <div className="my-8 flex mx-2 upPro-res">
                      <div className="mr-4 w-full upPro-resInner">
                        {/* 
                        category
                      */}
                        <TextField
                          className="w-full"
                          id="category"
                          label="Category"
                          placeholder="Type here"
                          required
                          name="category"
                          value={values.category}
                          onChange={handleChange}
                        />
                        {errors.category && (
                          <span className="text-red-600 pt-2 block">
                            {errors.category}
                          </span>
                        )}
                      </div>

                      {/* 
                      brand
                    */}
                      <div className="w-full">
                        <TextField
                          className="w-full"
                          id="brand"
                          label="Brand"
                          placeholder="Type here"
                          required
                          name="brand"
                          value={values.brand}
                          onChange={handleChange}
                        />

                        {errors.brand && (
                          <span className="text-red-600 pt-2 block">
                            {errors.brand}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 
                    shiping and tax percentage
                  */}
                    <div className="my-8 mx-2 upPro-res flex justify-between">
                      <div className="mr-4 w-full upPro-resInner">
                        {/* 
                        shiping field
                      */}
                        <TextField
                          className="w-full"
                          id="shippingFee"
                          label="Shipping Fee"
                          placeholder="Type here"
                          type="number"
                          required
                          inputProps={{
                            min: 0,
                          }}
                          name="shippingFee"
                          value={values.shippingFee}
                          onChange={handleChange}
                        />

                        {errors.shippingFee && (
                          <span className="text-red-600 pt-2 block">
                            {errors.shippingFee}
                          </span>
                        )}
                      </div>

                      {/* 
                      taxt percentage
                    */}
                      <div className="w-full">
                        <TextField
                          className="w-full"
                          id="taxRate"
                          label="Tax Rate percentage"
                          placeholder="Type here"
                          type="number"
                          inputProps={{
                            min: 0,
                            max: 100,
                          }}
                          required
                          name="taxRate"
                          value={values.taxRate}
                          onChange={handleChange}
                        />
                        {errors.taxRate && (
                          <span className="text-red-600 pt-2 block">
                            {errors.taxRate}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 
                    SKU field
                  */}
                    <div className="my-4 mx-2 ">
                      <TextField
                        className="w-full"
                        id="sku"
                        label="SKU Number"
                        placeholder="Type here"
                        required
                        name="sku"
                        value={values.sku}
                        onChange={handleChange}
                      />
                      {errors.sku && (
                        <span className="text-red-600 pt-2 block">
                          {errors.sku}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 
            input form right side
          */}
              <div className="uploadProduct-right w-6/12">
                <div className="uploadProduct--spefic  p-5">
                  <h3 className="font-semibold">Specification</h3>

                  <div className="my-8 flex justify-between">
                    {/* 
                    stock input
                  */}
                    <div className="mr-4 w-full">
                      <TextField
                        className="w-full"
                        id="stock"
                        label="Stock"
                        placeholder="Type here"
                        type="number"
                        required
                        inputProps={{
                          min: 0,
                        }}
                        name="stock"
                        value={values.stock}
                        onChange={handleChange}
                      />
                      {errors.stock && (
                        <span className="text-red-600 pt-2 block">
                          {errors.stock}
                        </span>
                      )}
                    </div>

                    {/* 
                    weight input
                  */}
                    <div className="w-full">
                      <TextField
                        className="w-full"
                        id="weight"
                        label="Weight"
                        placeholder="Type here"
                        type="number"
                        required
                        inputProps={{
                          min: 0,
                        }}
                        name="weight"
                        value={values.weight}
                        onChange={handleChange}
                      />
                      {errors.weight && (
                        <span className="text-red-600 pt-2 block">
                          {errors.weight}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 
                  size and color section title
                */}
                  {/* <div className="w-full mb-2">
                    <TextField
                      className="w-full"
                      label="Size"
                      placeholder="Type here"
                      type="text"
                      required
                    />
                    {errors.size && (
                      <span className="text-red-600 pt-2 block">
                        {errors.size}
                      </span>
                    )}
                  </div>

                  <div className="w-full">
                    <TextField
                      className="w-full"
                      label="Color"
                      placeholder="Type here"
                      type="text"
                      value={values.color}
                      onChange={handleChange}
                    />
                    {errors.color && (
                      <span className="text-red-600 pt-2 block">
                        {errors.color}
                      </span>
                    )}
                  </div> */}

                  {/* 
                  size and color items
                */}
                  <div className="flex justify-between w-full">
                    {/* 
                    size items
                  */}
                    {/* <div className="uploadProduct--spefic--inner flex flex-wrap w-1/2 mt-3">
                    {["M", "XL", "MX", "SM", "2XL", "3XL", "L"].map((s, _) => (
                      <p
                        key={_}
                        className={`font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded uppercase ${
                          selectedSize === s && "bg-slate-600 text-white"
                        }`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </p>
                    ))}
                  </div> */}

                    {/* 
                    color items
                  */}
                    {/* <div className="uploadProduct--spefic--inner flex flex-wrap pl-2 w-1/2 mt-3 gap-2">
                    {["black", "white", "blue", "gray", "yellow"].map(
                      (s, _) => (
                        <p
                          key={_}
                          className={`border py-1 px-2 cursor-pointer w-max  rounded font-medium capitalize ${
                            selectedColor === s && "bg-slate-600 text-white"
                          }`}
                          onClick={() => setSelectedColor(s)}
                        >
                          {s}
                        </p>
                      )
                    )}
                  </div> */}
                  </div>
                </div>
              </div>

              {/* 
              show error if have
          */}
              {/* {isError && (
              <p className="w-full rounder-lg bg-red-400 py-2 px-1 lg:ml-3 my-3 text-white text-center text-xl">
                {error.message}
              </p>
            )} */}

              {/* 
            submit button and cancel button
          */}
              <div className="uploadProduct-bottom--btn flex justify-end w-full md:ml-5 mt-10">
                <button
                  className="publish py-4 px-6 font-medium text-white  rounded disabled:bg-blue-300"
                  type="submit"
                  // disabled={isLoading && true}
                >
                  Publish Product
                </button>

                {/* <span
                className="cursor-pointer cancel ml-4 py-4 px-6 font-medium text-white  rounded"
                onClick={clearFromData}
              >
                Clear
              </span> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateProductModal;
