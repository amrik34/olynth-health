import React from "react";
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
                <img src={props.imagepath} />
            </div>
            <div className="slide-content">
                <h2>{props.title}</h2>
                <h3 level={2}>{props.title2}</h3>
                <div level={2} className="caption">{props.caption}</div>
                <a href="#" className="btn">View Details</a>
            </div>

        </div>
    )
}
export default SlideBox