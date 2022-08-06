import React, { useState } from 'react';
// import 'antd/dist/antd.css';
// import './index.less';
import { DownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Features',
        key: 'features',
    },
    {
        label: 'Contact Us',
        key: 'contactus',
    },
    {
        label: 'Pricing',
        key: 'Pricing',
        icon: <DownOutlined />,
        children: [

            {
                label: 'Option 1',
                key: 'Pricing:1',
            },
            {
                label: 'Option 2',
                key: 'Pricing:2',
            },



        ],
    },

    {
        label: 'How it Works',
        key: 'contactus',
    },
    {
        label: 'RFID Tags',
        key: 'contactus',
    },

    {
        label: 'Shortcodes',
        key: 'Shortcodes',
        icon: <DownOutlined />,
        children: [
            {
                label: 'Shortcodes 1',
                key: 'Shortcodes:1',
            },
            {
                label: 'Shortcodes 2',
                key: 'Shortcodes:2',
            },

        ],
    },
    //   {
    //     label: (
    //       <a href="#" target="_blank" rel="noopener noreferrer">
    //         Navigation Four - Link
    //       </a>
    //     ),
    //     key: 'alipay',
    //   },
];

const MainMenu = () => {
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MainMenu;