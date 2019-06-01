import React from 'react';
import Head from 'next/head';
import {
    Layout, Menu, Button, Input
} from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import { HEADER_TITLE, MENU_ITEMS } from '../constants';

const { Header } = Layout;
const { Search } = Input;

/**
 * Head function that is infused into all pages and controls page's title
 * @function
 * @param {String} title - The title of the currently viewed page
 * @return {Object} head metadata which is inserted in every page
 */
function NavHeader(props) {
    const { title } = props;
    let isAuthenticated;
    // fake Authentication for development
    if (global.location !== undefined && global.location.pathname === '/') {
        isAuthenticated = false;
    } else {
        isAuthenticated = true;
    }

    return (
        <>
            {/* head parametes */}
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="shortcut icon" href="../../static/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="../../static/favicon.ico" type="image/x-icon" />
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                />
                <title>{!title ? HEADER_TITLE : title}</title>
            </Head>
            {/* navheader for mobile */}
            <Header theme="light" className="layout_header-mobile">
                <Link href="/">
                    <a>
                        <img src="../../../static/logo.png" alt="helpme logo" className="logo" />
                    </a>
                </Link>
                {/* hide when authenticated */}
                {isAuthenticated ? null : (
                    <Button className="LandingPage_login_button" type="primary">
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </Button>
                )}
            </Header>
            {/* header for desktop */}
            <Header theme="light" className="layout_header-desktop">
                <Link href="/">
                    <a>
                        <img src="../../../static/logo.png" alt="helpme logo" className="logo" />
                    </a>
                </Link>
                {isAuthenticated ? (
                    <>
                        {/* search */}
                        <Search
                          placeholder="input search text"
                          onSearch={value => console.log(value)}
                          style={{ width: 200 }}
                        />
                        {/* navbar for authenticated desktop */}
                        <Menu
                          theme="light"
                          mode="horizontal"
                          defaultSelectedKeys={['1']}
                          className="layout_header-list"
                        >
                            {
                                MENU_ITEMS.map(menuItem => {
                                    const { key, href, text } = menuItem;
                                    return (
                                        <Menu.Item key={key}>
                                            <Link href={href}>
                                                <a>{text}</a>
                                            </Link>
                                        </Menu.Item>
                                    );
                                })
                            }
                        </Menu>
                        <Button className="LandingPage_login_button" type="danger">
                            <Link href="/">
                                <a>Logout</a>
                            </Link>
                        </Button>
                    </>
                ) : (
                    <Button className="LandingPage_login_button" type="primary">
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </Button>
                )}
            </Header>
        </>
    );
}
export default NavHeader;
Head.propTypes = {
    title: PropTypes.string,
};
