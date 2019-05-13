import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

const { Sider } = Layout;

/**
 * HFunction that controls the sidebar which displays on mobile
 * @function
 * @param {boolean} siderIsPresent shows sidebar if true
 * @return {Object} Side Bar
 */

export default function Sidebar(props) {
    const { siderIsPresent } = props;

    return siderIsPresent ? (
        <Sider breakpoint="lg" collapsedWidth="0" className="layout_sider">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                    <Link href="/#">
                        <a>
                            <Icon type="user" />
                            <span className="nav-text">Home</span>
                        </a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link href="/#">
                        <a>
                            <Icon type="video-camera" />
                            <span className="nav-text">Forum</span>
                        </a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link href="/#">
                        <a>
                            <Icon type="upload" />
                            <span className="nav-text">Dairy</span>
                        </a>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    ) : null;
}

Sider.propTypes = {
    siderIsPresent: PropTypes.bool,
};
