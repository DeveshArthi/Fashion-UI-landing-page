
import Banner from "../pages/Banner"
import BannerSlider from "../pages/BannerSlider"
import Products from "../pages/Products"
import About from "../pages/About"
import Discover from "../pages/Discover"
import Clients from "../pages/Clients"
import Banner2 from "../pages/Banner2"
import Subscription from "../pages/Subscription"
import Footer from "../pages/Footer"

const Home = () => {
  return (
    <div>
        <Banner  />
        <BannerSlider />
        <Products />
        <About />
        <Discover />
        <Clients />
        <Banner2 />
        <Subscription />
        <Footer />
    </div>
  )
}

export default Home