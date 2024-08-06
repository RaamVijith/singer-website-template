import './HomePage.css'
import Header from '../../components/header/Header'
import Slider from '../../components/Slider/Slider'
import Deals from '../../components/deals/Deals'
import SpecialOffers from '../../components/spcialOffers/SpecialOffers'
import RecentlyViewedProducts from '../../components/recentlyViewedProducts/RecentlyViewedProducts'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Header2 from '../../components/header2/Header2'
import CompanyLogos from '../../components/companyLogos/CompanyLogos'
import Banner2 from '../../components/banner2/Banner2'

const HomePage = () => {
  return (
    <div className='homePage'>
        <Header/>
        <Header2/>
        <Slider/>
        <Deals/>
        <SpecialOffers/>
        <Banner/>
        <RecentlyViewedProducts/>
        <CompanyLogos/>
        <Banner2/>
        <Footer/>
    </div>
  )
}

export default HomePage