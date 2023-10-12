import { useState } from "react";

import { useQuery } from "react-query";

import { fetchProducts } from "../../lib/getProducts";
import { fetchProductsCategories } from "../../lib/getProductsCategory";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  /* 
    category search state
  */
  const [category, setCategory] = useState("");

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
    queryKey: ["pCategories"],
  });

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
        category,
      }),
    queryKey: ["hProducts", { category }],
    staleTime: Infinity,
  });

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
    categoriesContent = categories.payload.map((c, _) => (
      <h3
        className={`font-semibold uppercase cursor-pointer ${
          category === c.category && "text-blue-500"
        }`}
        key={_}
        onClick={() => setCategory(c.category)}
      >
        {c.category}
      </h3>
    ));
  }

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
  return (
    <div className="bg-[#FFFFFF]">
      <div id="products">
        <div className="Grid">
          <h1 className="text-5xl text-center font-bold py-4 mb-4">
            Our Products
          </h1>
          <div className="products-tabs flex flex-wrap my-10 px-8 justify-between items-center">
            <h3
              className={`font-semibold uppercase cursor-pointer ${
                category === "" && "text-blue-500"
              }`}
              onClick={() => setCategory("")}
            >
              All
            </h3>
            {categoriesContent}
          </div>
          <div className="product-card  mb-14 ">
            <div className="products-inner  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
              {productsContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
