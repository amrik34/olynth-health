import React from "react";
import { EmergencyAmbulance, Stethoscope } from "../../../../../assets/images";
import './featureslist.less';

const FeaturesList = () => {
    return (
        <div className="features-list">
            <FeaturesListBox customClass="" iconcode={<EmergencyAmbulance/> } titletext="Added Functionality" description="Add parts, extra teeth, handles, clamps, or whatever an operation calls for to an already  existing tool. This reduces the number of tools required" />
            <FeaturesListBox customClass="" iconcode={<EmergencyAmbulance/> } titletext="RFID Tracking" description="Add parts, extra teeth, handles, clamps, or whatever an operation calls for to an already  existing tool. This reduces the number of tools required" />
            <FeaturesListBox customClass="" iconcode={<Stethoscope/> } titletext="Size and Shape" description="Add parts, extra teeth, handles, clamps, or whatever an operation calls for to an already  existing tool. This reduces the number of tools required " />
            <FeaturesListBox customClass="full-width" iconcode={<EmergencyAmbulance/> } titletext="Reusable Toggle" description="Some tools which are of more general-use should be kept around, others not so much. Olynth's platform" />
            
        </div>
    )
}

export default FeaturesList;

const FeaturesListBox = (props) => {
    return (
        <div className={`features-list-box ${props.customClass}`}>
            <div className="imagebox">
                {props.iconcode}
            </div>
            <div className="list-content">
                <h3>{props.titletext }</h3>
                <p>{props.description }</p>
            </div>
        </div>
    )
}


