import React from "react";
import "./Wishlist.css";

import Pagination from "@mui/material/Pagination";

import { GiRoundStar } from "react-icons/gi";
import { HiArrowsExpand } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

const Wishlist = () => {
  return (
    <React.Fragment>
      <div className="product-wrap h-full bg-white relative pl-4 sm:pl-8 pt-8 pb-10 sm:pb-12">
        <h3 className="font-semibold text-lg sm:text-xl product-titles">
          Products
        </h3>
        <p className="product-link text-sm sm:text-base">
          Home / <span>Shop</span>
        </p>
        <div className="product-cardss flex justify-center flex-row flex-wrap mt-7 space-x-2 space-y-3">
          <div className="product-cardss--inside p-4 sm:p-5 mr-0 flex-grow sm:flex-grow-0 bg-amber-300">
            <div className="product-cardss--image relative group ">
              <picture className="flex justify-center md:w-[270px] md:h-[310px]  w-[200px] h-[170px]">
                <img
                  src="src/assets/61XXwuccR1L._AC_UL600_SR600,600_.jpg"
                  alt="product"
                  className="object-cover"
                />
              </picture>

              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Polka Dots Women Dress
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$155</span> $135{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>

          <div className="product-cardss--inside p-4 sm:p-5 mr-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group ">
              <picture className="flex justify-center md:w-[270px] md:h-[310px]  w-[200px] h-[170px]">
                <img
                  src="src/assets/81YQV4V7qHL.jpg"
                  alt="product"
                  className="object-cover"
                />
              </picture>

              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Polka Dots Women Dress
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$155</span> $135{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>

          <div className="product-cardss--inside p-4 sm:p-5 mr-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group ">
              <picture className="flex justify-center md:w-[270px] md:h-[310px]  w-[200px] h-[170px]">
                <img
                  src="src/assets/61XXwuccR1L._AC_UL600_SR600,600_.jpg"
                  alt="product"
                  className="object-cover"
                />
              </picture>

              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Polka Dots Women Dress
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$155</span> $135{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>

          <div className="product-cardss--inside p-4 sm:p-5 mr-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group ">
              <picture className="flex justify-center md:w-[270px] md:h-[310px]  w-[200px] h-[170px]">
                <img
                  src="src/assets/61HoEkgNkAL._AC_UY580_.jpg"
                  alt="product"
                  className="object-cover"
                />
              </picture>

              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Polka Dots Women Dress
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$155</span> $135{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>

          <div className="product-cardss--inside p-4 sm:p-5 mr-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group ">
              <picture className="flex justify-center md:w-[270px] md:h-[310px]  w-[200px] h-[170px]">
                <img
                  src="src/assets/images.jpeg"
                  alt="product"
                  className="object-cover"
                />
              </picture>

              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Polka Dots Women Dress
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$155</span> $135{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>

          <div className="product-cardss--inside p-4 sm:p-5 mr-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group ">
              <picture className="flex justify-center  md:w-[270px] md:h-[310px]  w-[200px] h-[170px]">
                <img
                  src="src/assets/sky-blue-checkered-double-breasted-suit.webp"
                  alt="product"
                  className="object-cover"
                />
              </picture>

              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Polka Dots Women Dress
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$155</span> $135{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* <div className="product-cardss flex flex-col sm:flex-row mt-7">
          <div className="product-cardss--inside p-4 sm:p-5 mr-0 sm:mr-10 mb-4 sm:mb-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group">
              <picture>
                <img
                  src="src/assets/61XXwuccR1L._AC_UL600_SR600,600_.jpg"
                  alt="product"
                  className="w-full"
                />
              </picture>
              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Polka Dots Women Dress
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$155</span> $135{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>
          <div className="product-cardss--inside p-4 sm:p-5 mr-0 sm:mr-10 mb-4 sm:mb-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group">
              <picture>
                <img
                  src="src/assets/sky-blue-checkered-double-breasted-suit.webp"
                  alt="product"
                  className="w-full"
                />
              </picture>
              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Double Breasted Suit
            </h3>
            <h4 className="font-med text-base sm:text-lg">$160</h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(33)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>
          <div className="product-cardss--inside p-4 sm:p-5 mr-0 sm:mr-10 mb-4 sm:mb-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group">
              <picture>
                <img
                  src="src/assets/81YQV4V7qHL.jpg"
                  alt="product"
                  className="w-full"
                />
              </picture>
              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Sweater For Women
            </h3>
            <h4 className="font-med text-base sm:text-lg">
              {" "}
              <span className="pr-2">$130</span> $120{" "}
            </h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(35)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>
          <div className="product-cardss--inside p-4 sm:p-5 mr-0 sm:mr-10 mb-4 sm:mb-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group">
              <picture>
                <img
                  src="src/assets/61HoEkgNkAL._AC_UY580_.jpg"
                  alt="product"
                  className="w-full"
                />
              </picture>
              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Luxury T-Shirt For Men
            </h3>
            <h4 className="font-med text-base sm:text-lg">$180</h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(25)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>
          <div className="product-cardss--inside p-4 sm:p-5 mr-0 sm:mr-10 mb-4 sm:mb-0 flex-grow sm:flex-grow-0">
            <div className="product-cardss--image relative group">
              <picture>
                <img
                  src="src/assets/images.jpeg"
                  alt="product"
                  className="w-full"
                />
              </picture>
              <div className="product-imgs--ikons absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="my-4 p-4">
                  <MdFavorite color="red" />
                </p>
                <p className="my-4 p-4">
                  <HiArrowsExpand />
                </p>
                <p className="my-4 p-4">
                  <TfiReload />
                </p>
              </div>
            </div>
            <h3 className="font-med text-base sm:text-lg my-2 sm:my-4">
              Convert for Men
            </h3>
            <h4 className="font-med text-base sm:text-lg">$200</h4>
            <div className="flex product-cardss--rating mt-2 items-center">
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i className="pr-1">
                {" "}
                <GiRoundStar />{" "}
              </i>
              <i>
                {" "}
                <GiRoundStar />{" "}
              </i>
              <p className="pl-2 font-med">(10)</p>
              <a href="#" className="p-3 font-med ml-4 border">
                Add To Cart
              </a>
            </div>
          </div>
        </div> */}
        <br />
        <br />
        <Pagination
          className="flex justify-end mr-2 sm:mr-4 pagination"
          count={10}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </React.Fragment>
  );
};

export default Wishlist;
