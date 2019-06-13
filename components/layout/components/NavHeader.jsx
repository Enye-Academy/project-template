import {
    Button, Input, Layout, Menu
} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import {
    IMAGE_ALT, IMAGE_URLS, LINKS, MENU_ITEMS, STRINGS
} from '../constants';

const { Header } = Layout;
const {
    HEADER_TITLE, LOGIN, LOGOUT, PLACEHOLDER,
} = STRINGS;
const { HELPME_LOGO } = IMAGE_URLS;
const { HELPME_LOGO_DESC } = IMAGE_ALT;
const { LOGIN_LINK } = LINKS;
const { Search } = Input;

/**
 * Head function that is infused into all pages and controls page's title
 * @function
 * @param {String} title - The title of the currently viewed page
 * @return {Object} head metadata which is inserted in every page
 */
function NavHeader(props) {
    const {
        handleSearch, searchValue, title, selectedKey, isAuthenticated,
    } = props;

    return (
        <>
            {/* head parametes */}
            <Head>
                <title>{!title ? HEADER_TITLE : title}</title>
            </Head>
            {/* navheader for mobile */}
            <Header theme="light" className="layout_header-mobile">
                <Link href={LOGIN_LINK}>
                    <a>
                        <img src={HELPME_LOGO} alt={HELPME_LOGO_DESC} className="logo" />
                    </a>
                </Link>
                {/* hide when authenticated */}
                {isAuthenticated ? null : (
                    <Button className="LandingPage_login_button" type="primary">
                        <Link href={LOGIN_LINK}>
                            <a>{LOGIN}</a>
                        </Link>
                    </Button>
                )}
            </Header>
            {/* header for desktop */}
            <Header theme="light" className="layout_header-desktop">
                <Link href="/">
                    <a>
                        <img src={HELPME_LOGO} alt={HELPME_LOGO_DESC} className="logo" />
                    </a>
                </Link>
                {
                    isAuthenticated
                        ? (
                            <Search
                                placeholder={PLACEHOLDER}
                                onSearch={handleSearch}
                                className="search"
                                value={searchValue}
                            />
                        )
                        : null
                }

                {/* navbar for authenticated desktop */}
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={[selectedKey]}
                    className="layout_header-list"
                >
                    {
                        MENU_ITEMS.map(menuItem => {
                            let { key, href, text } = menuItem;
                            if (key === 1) {
                                href = isAuthenticated ? '/timeline' : '/';
                            }
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
                <Button
                    className="LandingPage_login_button"
                    type={isAuthenticated ? 'danger' : 'primary'}
                >
                    <Link href={isAuthenticated ? '/' : LOGIN_LINK}>
                        <a>
                            { isAuthenticated ? LOGOUT : LOGIN }
                        </a>
                    </Link>
                </Button>
            </Header>
        </>
    );
}
export default NavHeader;
NavHeader.propTypes = {
    handleSearch: PropTypes.func,
    isAuthenticated: PropTypes.bool.isRequired,
    searchValue: PropTypes.string,
    selectedKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

NavHeader.defaultProps = {
    handleSearch: null,
    searchValue: '',
};
