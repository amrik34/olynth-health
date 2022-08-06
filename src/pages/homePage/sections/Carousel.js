import React from 'react';
import { Carousel } from 'antd';
import SlideBox from './slideBox';
import slider1 from '../../../assets/images/jpg/slider1.jpg';

// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };

const CarouselLayout = () => (
    <div className='main-carousel'>
        <Carousel autoplay>
            <div className='carousel1'>
                {/* <h3 style={contentStyle}>1</h3> */}
                <SlideBox imagepath={slider1} title="The Power of" title2="3D-Printed Surgical Instruments" caption="Olynth allows hospitals and surgeons to design and create customized Olynth allows hospitals and surgeons to design and create customized" />
            </div>
            <div className='carousel2'>
                <SlideBox imagepath={slider1} title="The of Power" title2="3D Surgical Instruments" caption="Olynth allows hospitals and surgeons to design and create customized" />
            </div>
            <div className='carousel3'>
                <SlideBox imagepath={slider1} title="The Power of" title2="3D-Printed Surgical Instruments" caption="Olynth allows hospitals and surgeons to design and create customized" />
            </div>
            <div className='carousel4'>
                <SlideBox imagepath={slider1} title="The Power of" title2="3D-Printed Surgical Instruments" caption="Olynth allows hospitals and surgeons to design and create customized" />
            </div>
        </Carousel>
    </div>
);

export default CarouselLayout;