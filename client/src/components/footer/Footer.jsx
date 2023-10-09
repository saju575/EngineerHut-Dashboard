import { useState } from "react";
import "./Footer.css";

import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

import { BsDribbble, BsSendFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { GrTopCorner } from "react-icons/gr";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="bg-[#F7F5EB]">
        <div className="Grid">
          <div id="footer-wrapper">
            <div id="footer-top" className="py-4 bg-[#FFFFFF] flex">
              <div className="footer-topResponsive flex">
                <div className="w-1/2 footer-topInner px-4">
                  <div className="flex items-center">
                    <picture>
                      <img src="/assets/icon-img-1.png" alt="icon" />
                    </picture>
                    <div>
                      <h3 className="pl-5 font-bold text-xl pb-2">
                        Leather Oxfords
                      </h3>
                      <p className="pl-5">
                        Provide Curated Products for all product over $100
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 footer-topInner px-4 borderRight1">
                  <div className="flex items-center">
                    <picture>
                      <img src="/assets/icon-img-2.png" alt="icon" />
                    </picture>
                    <div>
                      <h3 className="pl-5 font-bold text-xl pb-2">
                        Classic Loafers
                      </h3>
                      <p className="pl-5">
                        We ensure the product quality that is our main goal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-topResponsive flex">
                <div className="w-1/2 footer-topInner px-4">
                  <div className="flex items-center">
                    <picture>
                      <img src="/assets/icon-img-3.png" alt="icon" />
                    </picture>
                    <div>
                      <h3 className="pl-5 font-bold text-xl pb-2">
                        Sleek Brogues
                      </h3>
                      <p className="pl-5">
                        Return product within 3 days for any product you buy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 footer-topInner px-4 borderRight">
                  <div className="flex items-center">
                    <picture>
                      <img src="/assets/icon-img-4.png" alt="icon" />
                    </picture>
                    <div>
                      <h3 className="pl-5 font-bold text-xl pb-2">
                        Modern Moccasins
                      </h3>
                      <p className="pl-5">
                        We ensure the product quality that you can trust easily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-main flex pt-44">
            <div className="footer-mainResponsive1 flex pl-10">
              <div className="w-6/12">
                <div>
                  <picture>
                    <img src="/assets/logo.png" alt="footer-logo" />
                  </picture>
                  <p className="py-4 pr-2">
                    Explore our curated collection of elegant and chic shoes to
                    elevate your style.
                  </p>
                  <div className="flex items-center my-4">
                    <i className="pr-2">
                      <TfiLocationPin />
                    </i>
                    <p>Brooklyn, New York, United States</p>
                  </div>
                  <div className="flex items-center my-4">
                    <i className="pr-2">
                      <LuPhoneCall />
                    </i>
                    <p>+0123-456789</p>
                  </div>
                  <div className="flex items-center my-4">
                    <i className="pr-2">
                      <MdOutlineMail />
                    </i>
                    <p>example@example.com</p>
                  </div>
                  <div className="flex social my-8">
                    <i className="pr-5 text-xl">
                      <FaFacebookF />
                    </i>
                    <i className="pr-5 text-xl">
                      <FaTwitter />
                    </i>
                    <i className="pr-5 text-xl">
                      <FaInstagram />
                    </i>
                    <i className="text-xl">
                      <BsDribbble />
                    </i>
                  </div>
                </div>
              </div>
              <div className="w-4/12">
                <h3 className="mb-6 font-bold text-2xl footer-title">
                  Company
                </h3>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> About
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Blog
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> All Products
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Location Map
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> FAQ
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Contact Us
                </a>
              </div>
            </div>
            <div className="footer-mainResponsive2 width flex pl-10">
              <div className="w-6/12">
                <h3 className="mb-6 font-bold text-2xl footer-title">
                  Services
                </h3>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Order Tracing
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Wishlist
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> All Login
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> My Account
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Terms & Condition
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Promotional Offer
                </a>
              </div>
              <div className="w-6/12">
                <h3 className="mb-6 font-bold text-2xl footer-title">
                  Customer Care
                </h3>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span>Login
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span>My Accout
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span>Wish List
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span>Over tracing
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span>Faq
                </a>
                <a href="##" className="font-normal flex link pb-4">
                  {" "}
                  <span className="pr-2">\\</span> Contact Us
                </a>
              </div>
            </div>
            <div className="w-4/12 pl-10 newsLPaddingTopRes">
              <h3 className="mb-6 font-bold text-2xl footer-title">
                Newsletter
              </h3>
              <p className="font-medium text-lg">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
              <div className="flex items-center my-4">
                <input
                  type="text"
                  placeholder="Email*"
                  className="p-4"
                  required
                />
                <i className="send p-5">
                  <BsSendFill />
                </i>
              </div>
              <h6 className="text-md font-bold mt-2 mb-4">We Accept</h6>
              <picture className="paymentResPadding">
                <img
                  className="paymentResPadding"
                  src="/assets/payment-method.png"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#071C1F] py-10">
        <div className="Grid">
          <div className="footer-bottom flex items-center justify-between text-white">
            <h2 className="font-medium">
              All Rights Reserved Engineer Hut 2023
            </h2>
            <div>
              <a className="font-semibold pl-4" href="##">
                Terms & Conditions
              </a>
              <a className="font-semibold pl-4" href="##">
                Claim
              </a>
              <a className="font-semibold pl-4" href="##">
                Privacy & Policy
              </a>
            </div>
          </div>
        </div>
        {/* BactoTop */}
        <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
          <button className="p-3 pb-2 pr-2 scrollToTop" onClick={scrollToTop}>
            <i>
              <GrTopCorner />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
