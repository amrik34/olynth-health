import React from "react";
import { Image } from 'antd';
import citiscan from '../../../../../assets/images/png/citiscan.png'; 
import './whyChoose.less';
import { PlusOutlined } from '@ant-design/icons';
const WhyChoose = () => {
    return (
        <div className="why-choose">
            <Image src={citiscan} alt="citiscan" preview={false} />
            <h3>Why Choose Us?</h3>
            <ul>
                <li><PlusOutlined /> Only vender of REID Tagged 3D-Printed Tools</li>
                <li><PlusOutlined /> We use carbon fiber filaments, Not Titanium or steel</li>
                <li><PlusOutlined /> Full customizable</li>
            </ul>
        </div>
    )
}
export default WhyChoose;

