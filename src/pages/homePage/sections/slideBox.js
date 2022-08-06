import React from "react";
import { Link } from "react-router-dom";
import { Image } from 'antd';
// import { Typography } from 'antd'
// interface Props {
//     title: any;
//     title: any;
//     caption: any;
//     imagepath: AnalyserNode;
// }

const SlideBox = (props) => {

    return (
        <div className="slideBox">
            <div className="image-container">
                <Image src={props.imagepath} preview={false} />
            </div>
            <div className="slide-content">
                <h2>{props.title}</h2>
                <h3 level={2}>{props.title2}</h3>
                <div level={2} className="caption">{props.caption}</div>
                <Link className="btn">View Details</Link>
            </div>

        </div>
    )
}
export default SlideBox