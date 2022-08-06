import { TwitterOutlined, ClockCircleOutlined, MailOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Facebookicon, GooglePlusicon, LinkedInicon, PhoneIcon } from "../../../assets/images";
// import { Link } from "react-router-dom";

export class TopBar extends Component {
    render() {
        return (
            <div className="topbar">
                <Row gutter={16}>
                    <Col span={12} className="gutter-row">
                        <div className="social-media">
                            <Link to='/'><Facebookicon /></Link>
                            <Link to='/' className="twitter"><TwitterOutlined /></Link>
                            <Link to='/'><GooglePlusicon /></Link>
                            <Link to='/'><LinkedInicon /></Link>
                        </div>

                    </Col>
                    <Col span={12} className="gutter-row topbar-right">
                        <a href="#" className="phone"><PhoneIcon /> 123-456-789</a>
                        <a href="#"><ClockCircleOutlined /> Mon-Fri 8:00 to 2:00</a>
                        <a href="#"><MailOutlined /> contact@yourdomain.com</a>
                        <a href="#" className="make-Appointment">Make an Appointment</a>
                    </Col>
                </Row>
            </div>
        )
    }
}