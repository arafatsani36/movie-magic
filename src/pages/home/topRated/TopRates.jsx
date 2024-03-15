import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRates = () => {
    const [endPoint, setEndPoint] = useState('movie');
    const {data, loading} = useFetch(`/${endPoint}/top_rated`)
    const onChangeTab = (tab) => {
        setEndPoint(tab === "Movies" ? 'movie' : 'tv')
    }
    console.log(setEndPoint)
    return (
        <div className="carouselSection">
           <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTab  data={["Movies", "Tv Show"]} onChangeTab={onChangeTab}/>
           </ContentWrapper>

           <Carousel data ={data?.results} loading={loading} endPoint={endPoint}/>
        </div>
    );
};

export default TopRates;