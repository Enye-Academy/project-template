import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { sideBarMenuItems } from '../constants';

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
                {
                    sideBarMenuItems.map(sideBarItem => (
                        <Menu.Item key={sideBarItem.key}>
                            <Link href={sideBarItem.href}>
                                <a>
                                    <Icon type={sideBarItem.type} />
                                    <span className="nav-text">{sideBarItem.text}</span>
                                </a>
                            </Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    ) : null;
}

Sider.propTypes = {
    siderIsPresent: PropTypes.bool,
};
