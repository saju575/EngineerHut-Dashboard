import Slider from "react-slick";
import "./Testimonials.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { FaArrowLeft, FaArrowRight, FaComments } from "react-icons/fa";

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

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F7F5EB]">
      <div id="testimonials-wrapper" className="pb-10 pt-44 mt-24 Grid">
        <h3 className="font-bold uppercase"> \\ Testimonitals</h3>
        <h1 className="text-6xl font-bold py-4">
          Clients Feedbacks <span>.</span>
        </h1>
        <Slider {...settings}>
          <div className="testimonials-card my-4">
            <div className="testimonials-card--inner flex">
              <img src="/assets/1.jpg" alt="testimonials" />
              <div className="text-start px-4 testiCardRes">
                <p className="font-normal text-md">
                  ChicElegance delivers happiness through outstanding quality,
                  chic style, and excellent customer service.
                </p>
                <h4 className="font-bold text-xl my-2">Rosaline D. William</h4>
                <h5 className="font-semibold">Co-Founder</h5>
              </div>
              <i className="text-7xl">
                <FaComments />
              </i>
            </div>
          </div>
          <div className="testimonials-card my-4">
            <div className="testimonials-card--inner flex">
              <img src="/assets/5.jpg" alt="testimonials" />
              <div className="text-start px-4 testiCardRes">
                <p className="font-normal text-md">
                  ChicElegance brings outstanding style to every purchase.
                  Quality shoes, chic designs, and exceptional service
                </p>
                <h4 className="font-bold text-xl my-2">Lisa Rodriguez</h4>
                <h5 className="font-semibold">Founder</h5>
              </div>
              <i className="text-7xl">
                <FaComments />
              </i>
            </div>
          </div>
          <div className="testimonials-card my-4">
            <div className="testimonials-card--inner flex">
              <img src="/assets/6.jpg" alt="testimonials" />
              <div className="text-start px-4 testiCardRes">
                <p className="font-normal text-md">
                  From ChicElegance, I found happiness in outstanding shoes.
                  Superior quality, chic style, and excellent service.
                </p>
                <h4 className="font-bold text-xl my-2">David Parker</h4>
                <h5 className="font-semibold">Head of Design</h5>
              </div>
              <i className="text-7xl">
                <FaComments />
              </i>
            </div>
          </div>
          <div className="testimonials-card my-4">
            <div className="testimonials-card--inner flex">
              <img src="/assets/7.jpg" alt="testimonials" />
              <div className="text-start px-4 testiCardRes">
                <p className="font-normal text-md">
                  {`Outstanding quality, chic style, and excellent service define
                  ChicElegance. I'm truly happy with my purchase.`}
                </p>
                <h4 className="font-bold text-xl my-2">John Anderson</h4>
                <h5 className="font-semibold">Director of Operations</h5>
              </div>
              <i className="text-7xl">
                <FaComments />
              </i>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
