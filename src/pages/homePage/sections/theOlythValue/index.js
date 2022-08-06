import React from "react";
import { Stethoscope } from "../../../../assets/images";
import xray from "../../../../assets/images/png/xray.png";
import './theolythvalue.less';
import { Row, Col } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const TheOlythValue = () => {
    const dataList = [
        {
            icon: <Stethoscope />,
            listname: 'Saving',
            activeclass: 'selectted'
        },
        {
            icon: <Stethoscope />,
            listname: 'Accurate Surgeries'
        },
        {
            icon: <Stethoscope />,
            listname: 'Reduce Development Time'
        },
        {
            icon: <Stethoscope />,
            listname: 'Environmental Benefits'
        },
        {
            icon: <Stethoscope />,
            listname: 'Empowered Logistics'
        }
    ]
    return (
        <section className="olyth-value">
            <div className="olyth-value-header">
                <h2>
                    The value in  Olyth
                </h2><br />
                <h4>
                    The benefits of using olynth's innovative services.  The value in  Olyth
                </h4>
            </div>
            <div className="olyth-value-middle">
                <ul className="olyth-type-list">
                    {
                        dataList.map((item) => {
                            return (
                                <li className={item.activeclass}>
                                    <div className="listbox">
                                        <span className="iconname">{item.icon}</span>
                                        <span className="listname">{item.listname}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="olynth-help">
                    <Row gutter={32}>
                        <Col className="gutter-row olynth-help-image" span={10}>
                            <img src={xray} alt="xray" />
                        </Col>
                        <Col className="gutter-row" span={14}>
                            <div className="olynth-help-content">
                                <h2>
                                    <span>What's the value in This?</span>
                                    How Olynth Helps
                                </h2>
                                <p>The benefits of using olynth's innovative services.  The value in  OlythThe benefits of using olynth's innovative services.
                                    The value in  OlythThe benefits of using olynth's innovative services.  The value in  Olyth</p>
                                <ul>
                                    <li> <DoubleRightOutlined /> Alue in  OlythThe benefits of using olynth's innovative services alue in  OlythThe benefits of using olynth's innovative servicesalue in  OlythThe benefits of using olynth's innovative services.</li>
                                    <li> <DoubleRightOutlined /> OlythThe in  OlythThe benefits of using olynth's innovative services alue in  OlythThe benefits of using olynth's innovative servicesalue in  OlythThe benefits of using olynth's innovative services.</li>
                                    <li> <DoubleRightOutlined /> Alue in  OlythThe benefits of using olynth's innovative services alue in  OlythThe benefits of using olynth's innovative servicesalue in  OlythThe benefits of using olynth's innovative services.</li>
                                </ul>
                                <Link className="btn">View Details</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </section>
    )
}

export default TheOlythValue