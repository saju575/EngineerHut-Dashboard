import { motion } from "framer-motion";
import { AiFillStar, AiTwotoneShopping } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { GoEye } from "react-icons/go";

const FeaturedProductCard = ({ product }) => {
  return (
    <div className="productsResponsive flex">
      <div className="prodsResInner flex">
        <div className="products-card mx-4 my-5 pb-5">
          <picture>
            <img src={product.images[0].url} alt="Product" />
          </picture>
          {/* <div className="new-arrival">
                            <h6 className="uppercase font-bold">
                              {product.discount}
                            </h6>
                          </div> */}
          <div className="products-desc">
            <div className="flex items-center pt-8 pl-5 pb-2">
              {/* {product.rating.map((star, index) => (
                                    <i key={index}>
                                    <AiFillStar />
                                    </i>
                                ))} */}
              {[...Array(5).keys()].map((index) => {
                if (index < product.rating) {
                  return (
                    <i key={index} className="pr-1">
                      {" "}
                      <AiFillStar />{" "}
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
            </div>
            <h4 className="font-semibold text-lg pl-5 py-1">{product.name}</h4>
            <h3 className="font-bold text-2xl pl-5">
              {product.discountPrice !== 0 && (
                <>
                  <span>${product.price}</span> ${product.discountPrice}
                </>
              )}
              {product.discountPrice === 0 && <>${product.price}</>}
            </h3>
          </div>
          <div className="products-hoverIcons">
            <motion.ul
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1.2 },
              }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1 }}
            >
              <ul className="flex">
                <li className="mr-3 cursor-pointer rounded-full p-3 text-xl">
                  <i>
                    <GoEye />
                  </i>
                </li>
                <li className="mr-3 cursor-pointer rounded-full p-3 text-xl">
                  <i>
                    <AiTwotoneShopping />
                  </i>
                </li>
                <li className="p-3 cursor-pointer rounded-full text-xl">
                  <i>
                    <FiHeart />
                  </i>
                </li>
              </ul>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
