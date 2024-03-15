import Popular from './popular/Popular';
import HeroBanner from './heroBanner/HeroBanner';
import './style.scss'
import Trending from './trending/Trending';
import TopRates from './topRated/TopRates';

const Home = () => {
    return (
        <div className='homePage'>
          <HeroBanner/>
          <Trending/>
          <Popular/>
          <TopRates/>
        </div>
    );
};

export default Home;