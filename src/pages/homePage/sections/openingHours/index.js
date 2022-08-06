
import React, { Component } from "react";
import { Row, Col, Button } from 'antd';
import { ClockCircleOutlined, FormOutlined } from '@ant-design/icons';
import sign from '../../../../assets/images/png/sign.png';
import doctorpic from '../../../../assets/images/png/doctor-pic.png';
import './openinghours.less';

export class OpeningHours extends Component {
    render() {
        return (
            <section className="opening-hours">
                <div className="opening-hours-wrapper">

                    <Row gutter={32}>
                        <Col className="gutter-row" span={6}>
                            <div className="timing-list">
                                <h4><ClockCircleOutlined /> Opening Hours</h4>
                                <ul>
                                    <li>Monday- Friday <span className="time">9:00 -  20:00</span></li>
                                    <li>Saturday <span className="time">10:00 -  16:00</span></li>
                                    <li>Sunday <span className="time">9:30 -  18:00</span></li>
                                </ul>
                                <h4><FormOutlined /> Need Help?</h4>
                                <p className="help-captions">Just make an appointment to get help from our experts</p>
                                <Button className="btn">Request an appointment</Button>


                            </div>
                        </Col>
                        <Col span={18} className="gutter-row about-olynth">
                            <div className="about-olynth-detail">
                                <h2>About <br /> olynth</h2>
                                <div className="description">
                                    <p>olynth believes to one shape, form, or size. Gone are the days of simple tools e understand that every surgeon's hands, surgical</p>
                                    <p>We understand that every surgeon's hands, surgical e understand that every surgeon's hands, surgical</p>
                                </div>
                                <div className="doctor-sign">
                                    <img src={sign} alt={sign} />
                                </div>
                                <Button className="outline-btn">Read more</Button>
                            </div>
                            <div className="about-doc-detail">
                                <img src={doctorpic} alt="Doctor" />
                            </div>

                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}