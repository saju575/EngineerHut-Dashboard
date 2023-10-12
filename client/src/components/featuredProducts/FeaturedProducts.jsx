import "./FeaturedProducts.css";

import { useQuery } from "react-query";

import { fetchProducts } from "../../lib/getProducts";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
  /* 
      fetch products 
    */
  const {
    data: products,
    isLoading: isProductsLoadding,
    isError: isProductError,
    error: productError,
  } = useQuery({
    queryFn: () => fetchProducts({}),
    queryKey: ["fetureProducts"],
    staleTime: Infinity,
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
      <FeaturedProductCard key={product._id} product={product} />
    ));
  }

  return (
    <div>
      <div className="bg-[#FFFFFF]">
        <div className="Grid">
          <div id="featProducts">
            <h1 className="text-5xl text-center font-bold mt-10 pt-14 mb-8">
              Featured Products
            </h1>
            <div className="featProdResInner  justify-evenly grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
              {productsContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
