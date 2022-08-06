import React from "react";

import './header.less';
import MainMenu from "./menu";
import { TopBar } from "./topbar";
import { Image } from 'antd';
import logo from '../../../assets/images/png/brandlogo.png';
import { MenuOutlined } from "@ant-design/icons";
const MainHeader = () => {
    return (
        <>
            <TopBar />
            <header className="header">
                <div className="header-wrapper">
                    <div className="brand">
                        <Image src={logo} preview={false} />
                        {/* logo */}
                    </div>
                    <div className="menu">
                        <MainMenu />
                        <div className="side-drwar">
                            <MenuOutlined />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default MainHeader