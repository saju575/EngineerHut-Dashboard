import { AiOutlineHeart } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
import { HiArrowsExpand } from "react-icons/hi";
import { PiArrowCounterClockwiseFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  //destructure the product information
  const { _id, name, price, images, discountPrice, rating } = product;

  const navigate = useNavigate();

  //onClick handler for each product
  const handleClick = () => {
    navigate(`/dashboard/products/${_id}`);
  };

  return (
    <>
      <div className="product-card--inner p-5">
        {/* image */}
        <div
          className="product-card--image cursor-pointer"
          onClick={handleClick}
        >
          <picture>
            <img src={images[0].url} alt={name} />
          </picture>

          <div className="product-img--icons ">
            <p className="my-4 p-4">
              <AiOutlineHeart />
            </p>
            <Link to={`/dashboard/products/${_id}`}>
              <p className="my-4 p-4">
                <HiArrowsExpand />
              </p>
            </Link>
            <p className="my-4 p-4">
              <PiArrowCounterClockwiseFill />
            </p>
          </div>
        </div>

        <h3
          className="font-medium my-4 uppercase cursor-pointer"
          onClick={handleClick}
        >
          {name}
        </h3>

        <h4 className="font-medium">
          {" "}
          {discountPrice !== 0 && (
            <span className="pr-2">${discountPrice}</span>
          )}
          ${price}
        </h4>

        {/* 
        showing the star
      */}
        <div className="flex flex-wrap product-card--rating mt-2 items-center">
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

          {/* <p className="pl-2 pr-3 font-medium">({stock})</p> */}
          {/* <a href="#" className="p-3 font-medium border">
          Add To Card
        </a> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
