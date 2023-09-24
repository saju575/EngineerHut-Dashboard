import React, { useState } from "react";
import "../../../stylesheets/UploadProduct.css";
import "../../../stylesheets/Responsive.css";
import TextField from "@mui/material/TextField";
import { GrGallery } from "react-icons/gr";
import axios from "axios";

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    mainPrice: "",
    discountPrice: "",
    shippingFee: "",
    taxRate: "",
    category: "",
    brand: "",
    stock: "",
    color: "",
    weight: "",
    size: "MM",
    rating: "0",
    sku: "",
  });

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append product data to formData
    for (const key in productData) {
      formData.append(key, productData[key]);
    }

    // Append images to formData
    for (const image of images) {
      formData.append("images", image);
    }

    try {
      const response = await axios.post("/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error uploading product.");
    }
  };

  return (
    <React.Fragment>
      <div className="uploadProduct-wrapper pl-8 pt-8 pb-10">
        <h3 className="font-semibold product-title">Upload Product</h3>
        <p className="products-links pb-10">
          Home / <span>Upload Product</span>
        </p>
        <form onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
          <div className="uploadProduct-inner p-5 border rounded mr-8 flex justify-between flex-wrap">
            <div className="uploadProduct-left w-6/12">
              <div className="shadow-gray-50 mx-3 uploadProduct-left--responsive">
                <div className="w-full upProduct-left--inner rounded">
                  <h3 className="font-semibold mb-10 pt-2.5 pl-2">
                    Basic Information
                  </h3>
                  <div className="my-4 mx-2">
                    <input
                      type="text"
                      name="name"
                      value={productData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="my-8 upPro-res mx-2 flex justify-between">
                    <div className="mr-4 w-full upPro-resInner">
                      <TextField
                        className="w-full"
                        id="outlined-textarea"
                        label="Regular Price"
                        placeholder="Type here"
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                        className="w-full"
                        id="outlined-textarea"
                        label="Discount Price"
                        placeholder="Type here"
                      />
                    </div>
                  </div>
                  <div className="my-4 mx-2">
                    <input
                      type="text"
                      name="name"
                      value={productData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="my-8 flex mx-2 upPro-res">
                    <div className="mr-4 w-full upPro-resInner">
                      <TextField
                        id="outlined-select-currency"
                        className="w-full"
                        select
                        label="Category*"
                        defaultValue="EUR"
                      ></TextField>
                    </div>

                    <div className="w-full">
                      <TextField
                        id="outlined-select-currency"
                        className="w-full"
                        select
                        label="Brand*"
                        defaultValue="EUR"
                      ></TextField>
                    </div>
                  </div>
                  <div className="my-8 mx-2 upPro-res flex justify-between">
                    <div className="mr-4 w-full upPro-resInner">
                      <TextField
                        className="w-full"
                        id="outlined-textarea"
                        label="Shipping Fee"
                        placeholder="Type here"
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                        className="w-full"
                        id="outlined-textarea"
                        label="Tax Rate"
                        placeholder="Type here"
                      />
                    </div>
                  </div>
                  <div className="my-4 mx-2 ">
                    <TextField
                      className="w-full"
                      id="outlined-textarea"
                      label="Tag"
                      placeholder="Type Tag here"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="uploadProduct-right w-6/12">
              <div className="w-full upProduct-right--inner rounded">
                <h3 className="font-semibold mb-10 pt-2.5 pl-2">
                  Organization
                </h3>
                <div className="my-4 mx-2 flex items-center">
                  <TextField
                    className="w-10/12"
                    id="outlined-textarea"
                    label="Add Category"
                    placeholder="Type here"
                  />
                  <a href="#" className="font-semibold cursor-pointer rounded">
                    Add
                  </a>
                </div>
                <div className="my-8 mx-2 flex items-center">
                  <TextField
                    className="w-10/12"
                    id="outlined-textarea"
                    label="Add Brand"
                    placeholder="Type here"
                  />
                  <a href="#" className="font-semibold cursor-pointer rounded">
                    Add
                  </a>
                </div>
                <div className="my-4 mx-2 flex items-center">
                  <TextField
                    className="w-10/12"
                    id="outlined-textarea"
                    label="Add Color"
                    placeholder="Type here"
                  />
                  <a href="#" className="font-semibold cursor-pointer rounded">
                    Add
                  </a>
                </div>
                <div className="my-8 mx-2 flex items-center">
                  <TextField
                    className="w-10/12"
                    id="outlined-textarea"
                    label="Add Size"
                    placeholder="Type here"
                  />
                  <a href="#" className="font-semibold cursor-pointer rounded">
                    Add
                  </a>
                </div>
              </div>
              <div className="uploadProduct--spefic mt-10 p-5">
                <h3 className="font-semibold">Specification</h3>
                <div className="my-8 flex justify-between">
                  <div className="mr-4 w-full">
                    <TextField
                      className="w-full"
                      id="outlined-textarea"
                      label="Stock"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="w-full">
                    <TextField
                      className="w-full"
                      id="outlined-textarea"
                      label="Weight"
                      placeholder="Type here"
                    />
                  </div>
                </div>
                <div className="uploadProduct-inner--title justify-between flex w-full">
                  <div className="w-1/2">
                    <h4 className="block font-semibold">Size</h4>
                  </div>
                  <div className="w-1/2">
                    <h4 className="pl-2 font-semibold">Color</h4>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="uploadProduct--spefic--inner flex flex-wrap w-1/2 mt-3">
                    <p className="font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded">
                      MM
                    </p>
                    <p className="font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded">
                      XL
                    </p>
                    <p className="font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded">
                      ZX
                    </p>
                    <p className="font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded">
                      X
                    </p>
                    <p className="font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded">
                      L
                    </p>
                    <p className="font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded">
                      SM
                    </p>
                    <p className="font-medium border my-1 mr-2 cursor-pointer h-10 w-14 rounded">
                      SX
                    </p>
                  </div>
                  <div className="uploadProduct--spefic--inner flex flex-wrap pl-2 w-1/2 mt-3">
                    <p className="border my-1 mr-2 cursor-pointer h-15 w-20 rounded font-medium">
                      Black
                    </p>
                    <p className="border my-1 mr-2 cursor-pointer h-15 w-20 rounded font-medium">
                      White
                    </p>
                    <p className="border my-1 mr-2 cursor-pointer h-15 w-20 rounded font-medium">
                      Blue
                    </p>
                    <p className="border my-1 mr-2 cursor-pointer h-15 w-20 rounded font-medium">
                      Gray
                    </p>
                    <p className="border my-1 mr-2 cursor-pointer h-15 w-20 rounded font-medium">
                      Yellow
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="uploadProduct-bottom mt-5 w-full pl-3 ">
              <div className="w-full my-10 flex ">
                <picture className="uploadProduct-bottom--inner flex">
                  <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageChange}
                  />
                  <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageChange}
                  />
                  <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageChange}
                  />
                  <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageChange}
                  />
                </picture>
                <div className="uploadProduct-bottom--icon bg- border w-44 flex items-center mr-4 justify-center ">
                  <i>
                    <GrGallery />
                  </i>
                </div>
              </div>
            </div>
            <div className="uploadProduct-bottom--btn flex justify-end w-full ml-5 mt-10">
              <button type="submit">Upload Product</button>
              <a
                className="cancel ml-4 py-4 px-6 font-medium text-white  rounded"
                href="#"
              >
                Cancel
              </a>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UploadProduct;
