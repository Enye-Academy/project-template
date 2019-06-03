/* eslint-disable react/require-default-props */
import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader';
import Sidebar from './Sidebar';
import PageFooter from './PageFooter';
import { STRINGS } from '../constants';

const { HEADER_TITLE } = STRINGS;
const { Content } = Layout;
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
export default function PageLayout(props) {
    const {
        title, isAuthenticated, children, isFooterPresent,
        isSiderPresent, handleSearch, searchValue,
    } = props;
    return (
        <>
            <Layout className="LandingPage_layout">
                <NavHeader
                    title={title || HEADER_TITLE}
                    isAuthenticated={isAuthenticated}
                    handleSearch={null || handleSearch}
                    searchValue={searchValue}
                />
                <Content className="PageLayout_body">
                    <Layout hasSider className="PageLayout_content_sidebar">
                        <Sidebar isSiderPresent={isSiderPresent} />
                        <Content className="PageLayout_content">{children}</Content>
                    </Layout>
                </Content>
                {isFooterPresent ? <PageFooter /> : null}
            </Layout>
        </>
    );
}
PageLayout.propTypes = {
    children: PropTypes.node,
    handleSearch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    isFooterPresent: PropTypes.bool,
    isSiderPresent: PropTypes.bool,
    searchValue: PropTypes.string,
    title: PropTypes.string,
};
