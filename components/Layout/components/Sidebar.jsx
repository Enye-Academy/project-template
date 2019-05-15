import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { sideBarMenuItems } from '../constants';

const { Sider } = Layout;
/**
 * Function that controls the sidebar which displays on mobile
 * @function
 * @param {boolean} IsSiderPresent shows sidebar if true
 * @return {Object} Side Bar
 */
export default function Sidebar(props) {
    const { IsSiderPresent } = props;
    return IsSiderPresent ? (
        <Sider breakpoint="lg" collapsedWidth="0" className="layout_sider">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                {
                    sideBarMenuItems.map(sideBarItem => {
                        const {
                            key, href, type, text,
                        } = sideBarItem;
                        return (
                            <Menu.Item key={key}>
                                <Link href={href}>
                                    <a>
                                        <Icon type={type} />
                                        <span className="nav-text">{text}</span>
                                    </a>
                                </Link>
                            </Menu.Item>
                        );
                    })
                }
            </Menu>
        </Sider>
    ) : null;
}

Sider.propTypes = {
    IsSiderPresent: PropTypes.bool,
};
