import "./Shop.css";

const Shop = () => {
  return (
    <div>
      <div className="Grid">
        <div className="shop-wrapper flex justify-around my-24">
          <div className="w-1/2 shopResponsive">
            <picture>
              <img src="assets/shop-1.png" className="shop1" alt="shop" />
            </picture>
          </div>
          <div className="w-1/2 shopResponsive">
            <picture className="flex justify-end flex-wrap">
              <img src="assets/shop-2.png" className="mb-10 shop2" alt="shop" />
              <img src="assets/shop-3.png" className="shop3" alt="shop" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
