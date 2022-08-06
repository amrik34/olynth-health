import React from "react";
import { Row, Col } from 'antd';
import './platformFeatures.less';
import FeaturesList from "./featuresList";
import WhyChoose from "./whyChoose";

const PlatformFeatures = () => {
    return (
        <section className="platformfeatures">
            <div className="platformfeatures-wraper">
                <Row gutter={16}>
                    <Col className="gutter-row" span={16}>
                        <div className="features-top">
                            <h2>Platform Features</h2>
                            <p>or department but below are some of the 3D-printing aspects Olynth's platform provides to optimize tools. or department but below are some of the 3D-printing aspects Olynth's platform provides to optimize toolsor department but below are some of the 3D-printing aspects Olynth's platform provides to optimize tools</p>
                        </div>
                        <FeaturesList />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div>
                            <WhyChoose />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
export default PlatformFeatures