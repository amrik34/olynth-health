// import { Header } from "antd/lib/layout/layout";
import React from "react";
import MainHeader from "../../layout/publicLayout/header";
import 'antd/dist/antd.less'
import CarouselLayout from "./sections/Carousel";
import { OpeningHours } from "./sections/openingHours";
import PlatformFeatures from "./sections/platformFeatures";
import TheOlythValue from "./sections/theOlythValue";
// import HowItWorks from "./sections/howItWorks";
import './homepage.less';
// import Footer from "../../layout/publicLayout/footer";
import Footer2 from "./sections/footer";


const MainhomePage = () => {
    return (
        <>
            <MainHeader />

            <CarouselLayout />
            <OpeningHours />
            <PlatformFeatures />
            <TheOlythValue />
            {/* <HowItWorks /> */}
            <Footer2 />

        </>
    )
}
export default MainhomePage
