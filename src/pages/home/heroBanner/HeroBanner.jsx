import { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';


const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery]  = useState("");
    const navigate = useNavigate();

    const {url} = useSelector((state) => state.home)
    const { data, loading} = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    }, [data])

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`)
        }
    };

    return (
        <div className="heroBanner">
            {/*hero Banner background image start */}
            { !loading && 
                <div className='backdrop-img'>
                  <Img src={background}/>
                </div>
            }
            {/*hero Banner background image end */}

            {/*hero Banner background image bottom  gradient start*/}
            <div className="opacity-layer"></div>
            {/*hero Banner background image bottom  gradient end*/}

            {/*hero Banner Content start */}
            <ContentWrapper>
                 <div className="heroBannerContent">
                        <span className='title'>Welcome.</span>
                        <span className='subTitle'>Unlimited movies, TV shows, and more.</span>
                        <div className='searchInput'>
                            <input
                                type="text"  
                                placeholder='Search for movies, TV shows, and more.'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <button>Search</button>
                        </div>
                </div> 
            </ContentWrapper>
            {/*hero Banner Content end */}
           
        </div>
    );
};

export default HeroBanner;
