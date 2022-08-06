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
                        <Link to='/' className="phone"><PhoneIcon /> 123-456-789</Link>
                        <Link to='/'><ClockCircleOutlined /> Mon-Fri 8:00 to 2:00</Link>
                        <Link to='/'><MailOutlined /> contact@yourdomain.com</Link>
                        <Link to='/' className="make-Appointment">Make an Appointment</Link>
                    </Col>
                </Row>
            </div>
        )
    }
}