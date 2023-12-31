import Banner from "../../../components/banner/Banner";
import Blog from "../../../components/blog/Blog";
import Countdown from "../../../components/countdown/Countdown";
import FeaturedProducts from "../../../components/featuredProducts/FeaturedProducts";
import Footer from "../../../components/footer/Footer";
import Products from "../../../components/products/Products";
import Shop from "../../../components/shop/Shop";
import Testimonials from "../../../components/testimonials/Testimonials";
import YTVideo from "../../../components/ytVideo/YTVideo";

const Home = () => {
  return (
    <div>
      <Banner />
      <Shop />
      <Products />
      <Countdown />
      <FeaturedProducts />
      <YTVideo />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
