import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Banner.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";

import { motion } from "framer-motion";

import Banner1 from "../../assets/banner-1.png";

const CustomLeftArrow = ({ onClick }) => (
  <div className="custom-slick-arrow custom-slick-prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CustomRightArrow = ({ onClick }) => (
  <div className="custom-slick-arrow custom-slick-next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />,
  };

  return (
    <div className="bg-[#F7F5EB] py-10">
      <div className="Grid p-8 mx-auto">
        <div className="banner-wrapper">
          <Slider {...settings}>
            <div className="carousel-item1 w-1/2">
              <div className="flex justify-between items-center bannerHeightResponsive">
                <div className="text-content">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="flex items-center">
                      <i className="pr-3">
                        <GiConverseShoe />
                      </i>
                      <h5 className="font-semibold">
                        Sustainable Style Solutions
                      </h5>
                    </div>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 0.6 },
                    }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="text-6xl my-4	font-bold pr-4">
                      Sustainable Fashion for Enthusiasts
                    </h1>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 1.2 },
                    }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                  >
                    <a href="##" className="uppercase font-semibold">
                      Explore Products
                    </a>
                  </motion.div>
                </div>
                <div className="image-content">
                  <img src={Banner1} alt="Slide 1" />
                </div>
              </div>
            </div>
            <div className="carousel-item2 w-1/2">
              <div className="flex flex-row-reverse justify-between items-center bannerHeightResponsive">
                <div className="text-content text-right">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="flex justify-end">
                      <i className="pr-3">
                        <GiConverseShoe />
                      </i>
                      <h5 className="font-semibold">100% Genuine Products</h5>
                    </div>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 0.6 },
                    }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="text-6xl my-4 font-bold">
                      Luxury Fashion and Lifestyle
                    </h1>
                  </motion.h1>

                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 1 },
                    }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="font-medium text-lg border-r">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt possimus cumque quasi?
                    </p>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 1.8 },
                    }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                  >
                    <a href="##" className="uppercase font-semibold">
                      Explore Products
                    </a>
                    <a
                      href="##"
                      className="uppercase font-semibold pl-5 bgWhite"
                    >
                      Learn More
                    </a>
                  </motion.div>
                </div>
                <div className="image-content">
                  <img src={Banner1} alt="Slide 2" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
