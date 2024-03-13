import { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../components/switchTabs/SwitchTab";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";

const Popular = () => {
    const [endPoint, setEndPoint] = useState('movie');
    const {data, loading} = useFetch(`/${endPoint}/popular`)
    const onChangeTab = (tab) => {
        setEndPoint(tab === "Movies" ? 'movie' : 'tv')
    }
    console.log(setEndPoint)
    return (
        <div className="carouselSection">
           <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTab  data={["Movies", "Tv Show"]} onChangeTab={onChangeTab}/>
           </ContentWrapper>

           <Carousel data ={data?.results} loading={loading} endPoint={endPoint}/>
        </div>
    );
};

export default Popular;