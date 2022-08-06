import React from "react";
import './howitWorks.less';
import { Carousel } from 'antd';

const HowItWorks = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <section className="how-it-works">
            <Carousel afterChange={onChange}>
                <div>
                    <Slider />
                </div>
                <div>
                    <Slider />
                </div>

            </Carousel>
        </section>
    )
}
export default HowItWorks;

const Slider = () => {
    return (
        <div className="sliderbox">
            <img src="" alt="image name" />
            ASD
        </div>
    )

}