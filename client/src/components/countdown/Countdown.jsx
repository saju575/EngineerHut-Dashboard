import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Countdown.css";

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

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T00:00:00+06:00");
    const currentDate = new Date();
    const totalSeconds = Math.floor((targetDate - currentDate) / 1000);

    if (totalSeconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setCountdown(timeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />,
  };

  return (
    <div className="bg-[#F7F5EB]">
      <div className="Grid">
        <div className="countdown-wrapper flex justify-between">
          <div className="w-4/12 countdown-left my-20">
            <Slider {...settings}>
              <div className="countdown-inner">
                <img src="/assets/countdown-left.jpg" alt="Countdown" />
              </div>
              <div className="countdown-inner">
                <img src="/assets/countdown-left.jpg" alt="Countdown" />
              </div>
            </Slider>
          </div>
          <div className="countdown-right my-24 w-7/12">
            <h5 className="font-bold text-md">Todays Hot Deals</h5>
            <h1 className="pr-24 font-bold text-7xl my-4">
              Timeless Elegance, Modern Trends Boutiq
            </h1>
            <div className="flex mt-10">
              <div className="mr-5">
                <p className="font-bold mb-2 text-3xl rounded-full">
                  {countdown.days}
                </p>
                <h6 className="uppercase text-xl font-medium text-center">
                  days
                </h6>
              </div>
              <div className="mr-5">
                <p className="font-bold mb-2 text-3xl rounded-full">
                  {countdown.hours}
                </p>
                <h6 className="uppercase text-xl font-medium text-center">
                  Hrs
                </h6>
              </div>
              <div className="mr-5">
                <p className="font-bold mb-2 text-3xl rounded-full">
                  {countdown.minutes}
                </p>
                <h6 className="uppercase text-xl font-medium text-center">
                  mins
                </h6>
              </div>
              <div className="mr-5">
                <p className="font-bold mb-2 text-3xl rounded-full">
                  {countdown.seconds}
                </p>
                <h6 className="uppercase text-xl font-medium text-center">
                  secs
                </h6>
              </div>
            </div>
            <div className="pt-10">
              <a
                href="##"
                className="uppercase text-lg font-semibold px-5 py-3"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
