import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import "../../../stylesheets/Products.css";
import "../../../stylesheets/Responsive.css";

import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Slider from "@mui/material/Slider";
import { fetchProductsBrand } from "../../../lib/getProductBrand";
import { fetchProducts } from "../../../lib/getProducts";
import { fetchProductsCategories } from "../../../lib/getProductsCategory";
import ProductCard from "./ProductCard";

function Products() {
  /* 
    price range state
  */
  const [priceValueRange, setPriceValueRange] = useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setPriceValueRange(newValue);
  };

  /* 
    search input state
  */
  const [searchField, setSearchField] = useState("");
  const [search, setSearch] = useState("");

  /* 
    category search state
  */
  const [category, setCategory] = useState("");

  /* 
    brand search state
  */
  const [brand, setBrand] = useState("");

  /* 
    page change state
  */
  const [page, setPage] = useState(1);

  /* 
    size state
  */
  const [size, setSize] = useState("");

  /* 
    handle input search field
  */
  const handleSearch = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearch(e.target.value);
    }
  };

  /* 
    handle input search field submit
   */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchField);
  };

  /* 
    fetch products 
  */
  const {
    data: products,
    isLoading: isProductsLoadding,
    isError: isProductError,
    error: productError,
  } = useQuery({
    queryFn: () =>
      fetchProducts({
        search,
        category,
        brand,
        minPrice: priceValueRange[0],
        maxPrice: priceValueRange[1],
        page,
        size,
      }),
    queryKey: [
      "products",
      { search, category, brand, priceValueRange, page, size },
    ],
    staleTime: Infinity,
  });

  /* 
    fetchProducts categories
  */
  const {
    data: categories,
    isLoading: isCategoriesLoadding,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery({
    queryFn: fetchProductsCategories,
    queryKey: ["categories"],
  });

  /* 
    fetchProducts brand
  */
  const {
    data: brands,
    isLoading: isbrandsLoadding,
    isError: isbrandsError,
    error: brandsError,
  } = useQuery({
    queryFn: fetchProductsBrand,
    queryKey: ["brands"],
  });

  /* 
    products rendering
  */
  let productsContent;

  if (isProductsLoadding) {
    productsContent = <p>Loading...</p>;
  } else if (!isProductsLoadding && isProductError) {
    productsContent = <p>{productError.message}</p>;
  } else if (!isProductsLoadding && products.payload.data.length === 0) {
    productsContent = <p>No product found</p>;
  } else if (!isProductsLoadding && products.payload.data.length > 0) {
    productsContent = products.payload.data?.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  /* 
    categories render
  */
  let categoriesContent;

  if (isCategoriesLoadding) {
    categoriesContent = <p>Loading...</p>;
  } else if (!isCategoriesLoadding && isCategoriesError) {
    categoriesContent = <p>{categoriesError.message}</p>;
  } else if (!isCategoriesLoadding && categories.payload.length === 0) {
    categoriesContent = <p>No category found</p>;
  } else if (!isCategoriesLoadding && categories.payload.length > 0) {
    categoriesContent = categories.payload.map((ct, _) => (
      <div
        key={_}
        className="categories-inner--links flex justify-between pt-2 font-medium"
        onClick={() => {
          setCategory(ct.category);
        }}
      >
        <div className="flex items-center categories-inner--linksRes">
          <i className={`pr-1 ${category === ct.category && "text-blue-600"}`}>
            <MdKeyboardArrowRight />
          </i>
          <p
            className={`capitalize ${
              category === ct.category && "text-blue-600"
            }`}
          >
            {ct.category}
          </p>
        </div>
        <h4 className={`${category === ct.category && "text-blue-600"}`}>
          {ct.count}
        </h4>
      </div>
    ));
  }

  /* 
    brand rendering
  */
  let brandContent;

  if (isbrandsLoadding) {
    brandContent = <p>Loading...</p>;
  } else if (!isbrandsLoadding && isbrandsError) {
    brandContent = <p>{brandsError.message}</p>;
  } else if (!isbrandsLoadding && brands.payload.length === 0) {
    brandContent = <p>No product found</p>;
  } else if (!isbrandsLoadding && brands.payload.length > 0) {
    brandContent = brands?.payload?.map((b, _) => (
      <div
        className="product-brands--links items-center flex pt-2 font-medium"
        key={_}
        onClick={() => setBrand(b.brand)}
      >
        <i className="pr-1">
          <MdKeyboardArrowRight />
        </i>
        <p className={`capitalize ${brand === b.brand && "text-blue-600"}`}>
          {b.brand}
        </p>
      </div>
    ));
  }

  return (
    <React.Fragment>
      <div id="product-dashboard" className="product-wrapper p-8">
        <h3 className="font-semibold product-title">Products</h3>
        {/* <p className="products-links">
          Home / <span>Shop</span>
        </p> */}

        <div className="product-inner mx-auto mt-6 flex">
          <div className="product-inner--left w-3/12 pr-4">
            {/* 
              product category section
            */}
            <div className="product-categories pl-4 pr-10 py-5">
              <h3 className="text-lg font-semibold mb-4">
                Products Categories
              </h3>
              <hr />
              <div className="product-categories--inner">
                <div
                  className="categories-inner--links flex justify-between pt-2 font-medium"
                  onClick={() => {
                    setCategory("");
                  }}
                >
                  <div className="flex items-center categories-inner--linksRes">
                    <i className={`pr-1 ${category === "" && "text-blue-600"}`}>
                      <MdKeyboardArrowRight />
                    </i>
                    <p
                      className={`capitalize ${
                        category === "" && "text-blue-600"
                      }`}
                    >
                      All
                    </p>
                  </div>
                  {/* <h4>{ct.count}</h4> */}
                </div>

                {categoriesContent}
              </div>
            </div>

            {/* 
              price range slider
            */}
            <div className="price-ranges my-5 pl-4 pr-10 py-5">
              <h3 className="font-semibold mb-4 ">Price Ranges</h3>
              <hr />
              <h5 className="mt-4 mb-2">
                Range:{" "}
                <span className="font-semibold">
                  ${priceValueRange[0]} - ${priceValueRange[1]}
                </span>
              </h5>

              <Box>
                <Slider
                  size="small"
                  value={priceValueRange}
                  // onChange={handleChange}
                  onChangeCommitted={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  step={15}
                  marks
                />
              </Box>
            </div>

            {/* 
              Product Brand section
            */}
            <div className="product-brands pl-4 pr-10 py-5 mb-5">
              <h3 className="font-semibold mb-4">Product Brands</h3>
              <hr />

              <div
                className="product-brands--links items-center flex pt-2 font-medium"
                onClick={() => setBrand("")}
              >
                <i className="pr-1">
                  <MdKeyboardArrowRight />
                </i>
                <p className={`capitalize ${brand === "" && "text-blue-600"}`}>
                  All
                </p>
              </div>

              {brandContent}
            </div>

            {/* 
              product size section
            */}
            <div className="product-size pl-4 pr-10 py-5">
              <h3 className="font-semibold mb-4">Size</h3>
              <hr />
              <div className="product-size--inner  flex flex-wrap mt-3">
                <p
                  className={`border my-1 mr-2 h-10 w-10 uppercase ${
                    size === "" && "text-blue-600"
                  }`}
                  onClick={() => setSize("")}
                >
                  all
                </p>

                {["MM", "XL", "MX", "SM", "2XL", "3XL", "L"].map((s, _) => (
                  <p
                    key={_}
                    className={`border my-1 mr-2 h-10 w-10 uppercase ${
                      size === s && "text-blue-600"
                    }`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="product-inner--right w-9/12">
            <div className="flex items-center product-inner--rightRes">
              {/* 
                search bar for products
              */}
              <form onSubmit={handleSearchSubmit}>
                <div className="product-search">
                  <input
                    className="p-4 font-medium"
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                    value={searchField}
                    onBlur={(e) => setSearch(e.target.value)}
                  />

                  <div className="search-icon">
                    <button type="submit">
                      <GoSearch />
                    </button>
                  </div>
                </div>
              </form>

              <h3 className="showingResult pl-4 font-medium">
                Showing {products?.payload?.start} - {products?.payload?.end} of{" "}
                {products?.payload?.total} results
              </h3>
            </div>

            {/* 
                Tabs section
              */}
            <div className="flex items-center product-tabsResponsive mb-10">
              <div className="product-tabs mt-5 p-5">
                <ul className="flex justify-around font-semibold">
                  <li>
                    <a href="#">Top Rated</a>
                  </li>
                  <span className="border-right1"></span>
                  <li>
                    <a href="#">Popular</a>
                  </li>
                  <span className="border-right2"></span>
                  <li>
                    <a href="#">Newest</a>
                  </li>
                </ul>
              </div>

              {/* 
                Go to upload product page
              */}
              <div className="product-tabs--btn mt-5 ml-5">
                <Link to="/upload-product" className="p-5 px-12 font-semibold">
                  Upload Product
                </Link>
              </div>
            </div>

            {/* 
              show all products
            */}
            <div className="flex flex-wrap product-cardMain">
              {productsContent}
            </div>

            {/* 
              pagination UI
              
            */}

            <Pagination
              className="flex justify-end mr-4 pagination"
              count={products?.payload?.totalPages}
              variant="outlined"
              shape="rounded"
              onChange={(_, val) => setPage(val)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
