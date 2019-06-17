/* eslint-disable react/require-default-props */
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import NavHeader from './NavHeader';
import PageFooter from './PageFooter';
import Sidebar from './Sidebar';
import { STRINGS } from '../constants';
import { utils } from '../../authentication';

const { Content } = Layout;
const { HEADER_TITLE } = STRINGS;
const {
    authConfig, isAuthenticated, logout,
} = utils;

/**
 * Function for displaying the landing page
 * @function
 * @param {Function} title controls the title of the page
 * @param {Function} isAuthenticated controls if user is authrnticated or not
 * @param {Function} children other pages who are children of this layout
 * @param {Function} isFooterPresent displays footer if true
 * @param {Function} isSiderPresent  displays side for mobile pages
 * @return {Object} control the over all layout of the webpage
 */

class PageLayout extends React.Component {
    state= {
        isUserAuthenticated: false,
    }

    componentDidMount() {
        this.setState({
            isUserAuthenticated: isAuthenticated(),
        });
    }

    // cannot pass login but need to declare it so that it can be
    // called when components mounts. localstorage is not available in the server
    login = () => {
        authConfig.authorize();
    }

    render() {
        const {
            children,
            handleSearch,
            isFooterPresent,
            isSiderPresent,
            searchValue,
            selectedKey,
            title,
        } = this.props;

        const { isUserAuthenticated } = this.state;

        return (
            <>
                <Layout className="LandingPage_layout">
                    <NavHeader
                        title={title || HEADER_TITLE}
                        isAuthenticated={isUserAuthenticated}
                        handleSearch={null || handleSearch}
                        searchValue={searchValue}
                        selectedKey={selectedKey}
                        handleLogin={this.login}
                        handleLogOut={logout}
                    />
                    <Content className="PageLayout_body">
                        <Layout hasSider className="PageLayout_content_sidebar">
                            <Sidebar isSiderPresent={isSiderPresent} selectedKey={selectedKey} />
                            <Content className="PageLayout_content">
                                {children}
                                {isFooterPresent ? <PageFooter /> : null}
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </>
        );
    }
}

export default PageLayout;

PageLayout.propTypes = {
    children: PropTypes.node,
    handleSearch: PropTypes.func,
    isFooterPresent: PropTypes.bool,
    isSiderPresent: PropTypes.bool,
    searchValue: PropTypes.string,
    selectedKey: PropTypes.string.isRequired,
    title: PropTypes.string,
};
