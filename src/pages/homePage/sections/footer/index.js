import React from "react";
import { Link } from "react-router-dom";
import './footer.less';
import { Row, Col, Form, Input, Button } from "antd";
import { TwitterOutlined, SendOutlined, InstagramOutlined } from "@ant-design/icons";
import { Facebookicon, LinkedInicon, GooglePlusicon } from "../../../../assets/images";
import logo from '../../../../assets//images/png/brand2.png';
import { Image } from 'antd';
const Footer2 = () => {
    return (
        <footer className="footer">

            <div className="footer-top">
                <Row gutter={16}>
                    <Col span={6} className="gutter-row ourservices-main">
                        <Ourservices />
                    </Col>
                    <Col span={12} className="gutter-row center-newsletter">
                        <FtCenterNewsLetter />
                    </Col>
                    <Col span={6} className="gutter-row contactus-main">
                        <Contactus />

                    </Col>
                </Row>

            </div>
            <div className="footer-bar">
                <div className="ft-copyrights">
                    Copyright 2022 olynth All Rights Reserved
                </div>
                <div className="ft-links">
                    <Link to="/">Home</Link>/
                    <Link to="/">Features</Link>/
                    <Link to="/">Contact Us</Link>/
                    <Link to="/">Pricing</Link>/
                    <Link to="/">How it Works</Link>/
                    <Link to="/">RFID Tags</Link>/
                    <Link to="/">Shortcodes</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer2

const Ourservices = () => {
    return (
        <div className="ourservices">
            <h2>Our services</h2>
            <ul>
                <li>
                    <Link to='/'>Choosing a Doctor</Link>

                </li>
                <li>

                    <Link to='/'>Take proper teatment</Link>
                </li>
                <li>

                    <Link to='/'>Discuss your Doctor</Link>

                </li>
                <li>

                    <Link to='/'>Find medical error</Link>

                </li>
                <li>
                    <Link to='/'>Report progress  condition</Link>
                </li>
                <li>
                    <Link to='/'>Primary medical care</Link>
                </li>
            </ul>
        </div>
    )
}
const FtCenterNewsLetter = () => {
    return (
        <div className="">
            <div className="ftcenter-wrapper">
                <div className="ft-top">
                    <Image className="ft-logo" src={logo} preview={false} />
                    <p>Lorem Ipsum is simply dummy text of thas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                </div>
                <div className="newsletter">
                    <h3>Subscribe Our Newsletter</h3>
                    <Form.Item >
                        <Form.Item name="field" noStyle>
                            <Input placeholder="Your email" />
                            <Button type="primary" htmlType="submit">
                                <SendOutlined />
                            </Button>
                        </Form.Item>

                    </Form.Item>

                </div>
            </div>
        </div>
    )
}
const Contactus = () => {
    return (
        <div className="contactus">
            <h2>Contact us</h2>
            <ul>
                <li>
                    <a href="">+1800-001-658</a>
                </li>

                <li>
                    <a href="">info@yOlynth.com</a>
                </li>
                <li>
                    Themeforest, Envato HQ 24 st., Los Angeles, USA
                </li>



            </ul>
            <div className="social-links">
                <Link to='/'><Facebookicon /></Link>
                <Link to='/' className="twitter"><TwitterOutlined /></Link>
                <Link to='/'><GooglePlusicon /></Link>
                <Link to='/' className="twitter"><InstagramOutlined /></Link>
                <Link to='/'><LinkedInicon /></Link>
            </div>

        </div>
    )
}