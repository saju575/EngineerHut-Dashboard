import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import "../../../stylesheets/ProductsDetails.css";
import "../../../stylesheets/Responsive.css";

// import { AiOutlineHeart } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
// import { PiArrowCounterClockwiseFill } from "react-icons/pi";
import UpdateProductImgModal from "../../../components/updateProductImgModal/UpdateProductImgModal";
import UpdateProductModal from "../../../components/updateProductModal/UpdateProducModal";
import { fetchProduct } from "../../../lib/getProducts";

const ProductsDetails = () => {
  // const [quantity, setQuantity] = useState(1);

  // const increment = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const [selectedTab, setSelectedTab] = useState("Specification");

  // const handleTabClick = (tab) => {
  //   setSelectedTab(tab);
  // };
  const [imgUrl, setImgUrl] = useState("");

  /* 
    modal open state
  */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isPImgOpen, setIsPImgOpen] = useState(false); // product image update modal open state

  /*
    get the id parameter 
   */
  const { productId } = useParams();

  /* 
    get product using react query
  */
  const {
    data: product,
    isLoading: isProductLoadding,
    isError: isProductError,
    error: productError,
    isSuccess: isProductSuccess,
    refetch: productRefetch,
  } = useQuery({
    queryFn: () => fetchProduct(productId),
    queryKey: ["product", { productId }],
    onSuccess: (data) => {
      setImgUrl(data.payload.images[0].url);
    },
  });

  /* 
    image change
  */
  const handleImageClick = (url) => {
    setImgUrl(url);
  };

  /* 
    products rendering
  */
  let productContent;

  if (isProductLoadding) {
    productContent = <p>Loading...</p>;
  } else if (!isProductLoadding && isProductError) {
    productContent = <p>{productError.message}</p>;
  } else if (!isProductLoadding && !product?.payload) {
    productContent = <p>No product found</p>;
  } else if (!isProductLoadding && product?.payload) {
    //destructing the product
    const {
      name,
      description,
      price,
      discountPrice,
      stock,
      rating,
      sku,
      category,
      brand,
      images,
      size,
    } = product.payload;

    productContent = (
      <div className="proDetails-inner flex">
        <div className="w-2/12 proDetails-inner--responsive1">
          {/* 
            small image
          */}
          <div className="proDetails-inner--img p-5">
            <picture>
              {images.map((img) => (
                <img
                  key={img._id}
                  className="my-4 cursor-pointer"
                  src={img.url}
                  alt="product-details"
                  onClick={() => handleImageClick(img.url)}
                />
              ))}
            </picture>
          </div>
        </div>

        {/* 
        the big image
         */}
        <div className="w-4/12 pt-9 proDetails-inner--responsive2">
          <picture>
            <img src={imgUrl} alt="product-details" />
          </picture>
        </div>

        <div className="w-6/12 pt-8 proDetails-details">
          <h3 className="pl-8 font-semibold uppercase">{name}</h3>
          {/* <p className="pl-8 pt-6">Sold 21 Products in last 10 hours</p> */}
          <div className="flex items-center pt-2 pl-8">
            <h3 className="font-bold text-lg mr-2">
              {discountPrice !== 0 && (
                <>
                  <span className="line-through">${price}</span> $
                  {discountPrice}
                </>
              )}
              {discountPrice === 0 && <>${price}</>}
            </h3>

            {/* 
              showing rating star
            */}
            {[...Array(5).keys()].map((index) => {
              if (index < rating) {
                return (
                  <i key={index} className="pr-1">
                    {" "}
                    <GiRoundStar />{" "}
                  </i>
                );
              } else {
                return (
                  <i key={index} className="pr-1">
                    {" "}
                    <BsStar />{" "}
                  </i>
                );
              }
            })}

            {/* <p className="pl-2 font-medium">(33)</p> */}
          </div>
          <h4 className="pl-8 pt-5 font-semibold">{stock} in stock</h4>
          <h5 className="pl-8 pt-5 pr-40">{description}</h5>

          {/* <div className="proDetails-counter flex items-center pl-8 mt-10">
            <div className="quantity-control mr-2 flex justify-between px-4 py-2">
              <a className="font-semibold cursor-pointer" onClick={decrement}>
                -
              </a>
              <span className="font-semibold">{quantity}</span>
              <p className="font-semibold cursor-pointer" onClick={increment}>
                +
              </p>
            </div>
            <a className="addToCard font-medium border rounded" href="#">
              Add To Card
            </a>
            <i className="cursor-pointer border rounded mr-8">
              <AiOutlineHeart />
            </i>
            <i className="cursor-pointer border rounded">
              <PiArrowCounterClockwiseFill />
            </i>
          </div> */}

          <hr className="mt-10 mb-6 ml-8 mr-20" />

          <div className="pl-8 mb-6 flex gap-2">
            <button
              className="bg-slate-600 text-white rounded-sm px-2 py-1 cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Update Product Info
            </button>

            <button
              className="bg-slate-600 text-white rounded-sm px-2 py-1 cursor-pointer"
              onClick={() => setIsPImgOpen(!isPImgOpen)}
            >
              Update Product img
            </button>
          </div>

          <div className="proDetails-models">
            <h2 className="pl-8 pb-2 font-semibold">
              SKU: <span className="pl-10">{sku}</span>
            </h2>

            <h2 className="pl-8 pb-2 font-semibold">
              Category: <span className="pl-10 capitalize">{category}</span>
            </h2>
            <h2 className="pl-8 pb-2 font-semibold">
              Size: <span className="pl-10 uppercase">{size}</span>
            </h2>

            {brand && (
              <h2 className="pl-8 pb-2 font-semibold">
                Brand: <span className="pl-10 capitalize">{brand}</span>
              </h2>
            )}

            {/* <h2 className="pl-8 pb-2 font-semibold">
              Tags:
              <span className="pl-10">Grown Dress, Dress, Party Dress</span>
            </h2> */}
            {/* <h2 className="pl-8 font-semibold flex items-center">
              Share:{" "}
              <span className="pl-10 flex">
                <i className="pr-4 cursor-pointer models-icons">
                  <BsFacebook />
                </i>
                <i className="pr-4 cursor-pointer models-icons">
                  <BsTwitter />
                </i>
                <i className="pr-4 cursor-pointer models-icons">
                  <BsLinkedin />
                </i>
                <i className="pr-4 cursor-pointer models-icons">
                  <BsInstagram />
                </i>
              </span>
            </h2> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div id="product-details-dashboard" className="proDetails-wrapper p-8">
        <h3 className="font-semibold product-title text-2xl pb-10">
          Products Details
        </h3>
        {/* <p className="products-links pb-10">
          Home / <span>Product Details</span>
        </p> */}

        {/* 
        product information
         */}
        {productContent}

        {/* <div className="proDetails-specif p-10 my-10">
          <div className="proDetail-specifTabs flex my-5">
            <div className="proDetail-specifTabs flex">
              <h3
                className={`py-7 mr-1 px-12 cursor-pointer font-semibold rounded ${
                  selectedTab === "Specification" ? "selected" : ""
                }`}
                onClick={() => handleTabClick("Specification")}
              >
                Specification
              </h3>
              <h3
                className={`py-7 mx-1 px-12 cursor-pointer font-semibold rounded ${
                  selectedTab === "Features" ? "selected" : ""
                }`}
                onClick={() => handleTabClick("Features")}
              >
                Features
              </h3>
              <h3
                className={`py-7 mx-1 px-12 cursor-pointer font-semibold rounded ${
                  selectedTab === "Review" ? "selected" : ""
                }`}
                onClick={() => handleTabClick("Review")}
              >
                Review
              </h3>
            </div>
          </div>
          <h3 className="font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nobis
            quae ea repellendus voluptates corrupti fuga adipisci, libero
            explicabo quis iusto facilis dolore sit, rem alias molestias ut et,
            assumenda obcaecati optio commodi voluptate debitis! Nihil eum
            cumque fugit? Perferendis quos voluptatum placeat tempore quaerat
            esse iusto, iste ullam accusamus, assumenda, impedit repudiandae
            eveniet recusandae tempora eius dicta officia necessitatibus?
          </h3>
          <div className="proDetails-border">
            <table className="border-collapse border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
              <tbody>
                <tr>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    Package Dimention
                  </td>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    44 x 33 x 4 cm, 560 Grams
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    Manufacturer
                  </td>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    Badley Mackday
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    Product Part Nubmer
                  </td>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    JDPASF-65DS4FSFJ
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    Best Seller Rank
                  </td>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    #543 in Clothing and Accessories
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-1200 pl-4 pr-40 text-slate-700 py-4  mt-10">
                    Customers Review
                  </td>
                  <td className=" border-slate-1200 pr-40 text-slate-700 py-4 flex">
                    <i className="pl-5 pt-1">
                      {" "}
                      <GiRoundStar />{" "}
                    </i>
                    <i className="pr-1 pt-1">
                      {" "}
                      <GiRoundStar />{" "}
                    </i>
                    <i className="pr-1 pt-1">
                      {" "}
                      <GiRoundStar />{" "}
                    </i>
                    <i className="pr-1 pt-1">
                      {" "}
                      <GiRoundStar />{" "}
                    </i>
                    <i className="pt-1">
                      {" "}
                      <FaRegStar />{" "}
                    </i>
                    <p className="pl-2">2,800 Ratings</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>

      {isProductSuccess && (
        <UpdateProductModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          product={product.payload}
          refetch={productRefetch}
        />
      )}

      {isProductSuccess && (
        <UpdateProductImgModal
          isOpen={isPImgOpen}
          setIsOpen={setIsPImgOpen}
          productId={product.payload._id}
          refetch={productRefetch}
        />
      )}
    </React.Fragment>
  );
};

export default ProductsDetails;
