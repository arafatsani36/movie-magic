import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
    const [endPoint, setEndPoint] = useState('day');
    const {data, loading} = useFetch(`/trending/all/${endPoint}`)
    const onChangeTab = (tab) => {
        setEndPoint(tab === "Day" ? 'day' : 'week')
    }
    console.log(setEndPoint)
    return (
        <div className="carouselSection">
           <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTab  data={["Day", "Week"]} onChangeTab={onChangeTab}/>
           </ContentWrapper>

           <Carousel data ={data?.results} loading={loading}/>
        </div>
    );
};

export default Trending;