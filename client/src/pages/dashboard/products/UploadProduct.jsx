import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import "../../../stylesheets/Responsive.css";
import "../../../stylesheets/UploadProduct.css";

import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createProduct } from "../../../lib/createProduct";

const UploadProduct = () => {
  /* 
    image states
  */
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  /* 
    color and size states
  */
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  /* 
    product state
   */
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    shippingFee: "",
    taxRate: "",
    category: "",
    brand: "",
    stock: "",
    weight: "",
    sku: "",
  });

  /* 
    handle input change function
  */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  /* 
    image upload handler
  */
  const handleImageUpload = async (e) => {
    const files = e.target.files;

    // Clear previous selections
    setSelectedImages([]);
    setPreviewImages([]);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        console.error(`File ${file.name} is not a valid image type.`);
        continue;
      }

      setSelectedImages((prevImages) => [...prevImages, file]);

      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviewImages((prevPreviews) => [...prevPreviews, e.target.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  /* 
    client query
  */
  const queryClient = useQueryClient();

  /* 
    react query
  */

  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: (data) => createProduct(data),
    onSuccess: async () => {
      clearFromData();
      queryClient.invalidateQueries();
    },
  });

  /* 
  handle submit
 */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatedData = {
      ...productData,
      size: selectedSize,
      color: selectedColor,
      price: Number(productData.price),
      discountPrice: Number(productData.discountPrice),
      shippingFee: Number(productData.shippingFee),
      taxRate: Number(productData.taxRate),
      stock: Number(productData.stock),
      weight: Number(productData.weight),
    };

    const formData = new FormData();

    // Append product data to formData
    for (const key in formatedData) {
      formData.append(key, formatedData[key]);
    }

    // Append images to formData
    for (const image of selectedImages) {
      formData.append("image", image);
    }

    await mutateAsync(formData);
  };

  /* 
  clear from data
*/
  const clearFromData = () => {
    setProductData({
      name: "",
      description: "",
      price: "",
      discountPrice: "",
      shippingFee: "",
      taxRate: "",
      category: "",
      brand: "",
      stock: "",
      weight: "",
      sku: "",
    });
    setSelectedColor("");
    setSelectedSize("");
    setSelectedImages([]);
    setPreviewImages([]);
  };

  return (
    <React.Fragment>
      <div className="uploadProduct-wrapper pl-8 pt-8 pb-10">
        <h3 className="font-semibold text-2xl mb-10 product-title">
          Upload Product
        </h3>
        {/* <p className="products-links pb-10">
          Home / <span>Upload Product</span>
        </p> */}

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
                      placeholder="Type here"
                      required
                      name="name"
                      value={productData.name}
                      onChange={handleInputChange}
                    />
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
                        value={productData.price}
                        onChange={handleInputChange}
                      />
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
                        required
                        inputProps={{
                          min: 0,
                        }}
                        name="discountPrice"
                        value={productData.discountPrice}
                        onChange={handleInputChange}
                      />
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
                      value={productData.description}
                      onChange={handleInputChange}
                    />
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
                        value={productData.category}
                        onChange={handleInputChange}
                      />
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
                        value={productData.brand}
                        onChange={handleInputChange}
                      />
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
                        value={productData.shippingFee}
                        onChange={handleInputChange}
                      />
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
                        value={productData.taxRate}
                        onChange={handleInputChange}
                      />
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
                      value={productData.sku}
                      onChange={handleInputChange}
                    />
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
                      value={productData.stock}
                      onChange={handleInputChange}
                    />
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
                      value={productData.weight}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* 
                  size and color section title
                */}
                <div className="uploadProduct-inner--title justify-between flex w-full">
                  <div className="w-1/2">
                    <h4 className="block font-semibold">Size*</h4>
                  </div>
                  <div className="w-1/2">
                    <h4 className="pl-2 font-semibold">Color*</h4>
                  </div>
                </div>

                {/* 
                  size and color items
                */}
                <div className="flex justify-between w-full">
                  {/* 
                    size items
                  */}
                  <div className="uploadProduct--spefic--inner flex flex-wrap w-1/2 mt-3">
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
                  </div>

                  {/* 
                    color items
                  */}
                  <div className="uploadProduct--spefic--inner flex flex-wrap pl-2 w-1/2 mt-3 gap-2">
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
                  </div>
                </div>
              </div>
            </div>

            {/* 
            image upload section
          */}
            <div className="uploadProduct-bottom lg:ml-3 mt-5 w-full pl-3 ">
              <div className="w-full my-10 flex justify-between">
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  multiple
                  onChange={handleImageUpload}
                />

                <div>
                  <picture className="uploadProduct-bottom--inner flex gap-4">
                    {previewImages.map((preview, index) => (
                      <img
                        key={index}
                        src={preview}
                        alt={`Preview ${index}`}
                        className="object-cover"
                      />
                    ))}

                    {/* <img
                    className="mr-4"
                    src="/src/assets/figma-img.jpeg"
                    alt="product"
                  />
                  <img
                    className="mr-4"
                    src="/src/assets/fimga-img4.jpeg"
                    alt="product"
                  />
                  <img
                    className="mr-4"
                    src="/src/assets/figma-img5.jpeg"
                    alt="product"
                  />
                  <img
                    className="mr-4"
                    src="/src/assets/figma-img.jpeg"
                    alt="product"
                  /> */}
                  </picture>
                </div>
              </div>
            </div>

            {/* 
              show error if have
          */}
            {isError && (
              <p className="w-full rounder-lg bg-red-400 py-2 px-1 lg:ml-3 my-3 text-white text-center text-xl">
                {error.message}
              </p>
            )}

            {/* 
            submit button and cancel button
          */}
            <div className="uploadProduct-bottom--btn flex justify-end w-full md:ml-5 mt-10">
              <button
                className="publish py-4 px-6 font-medium text-white  rounded disabled:bg-blue-300"
                type="submit"
                disabled={isLoading && true}
              >
                Publish Product
              </button>

              <span
                className="cursor-pointer cancel ml-4 py-4 px-6 font-medium text-white  rounded"
                onClick={clearFromData}
              >
                Clear
              </span>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UploadProduct;
