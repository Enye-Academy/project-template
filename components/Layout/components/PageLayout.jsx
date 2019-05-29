/* eslint-disable react/require-default-props */
import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader';
import Sidebar from './Sidebar';
import PageFooter from './PageFooter';
import './PageLayout.css';
import { HEADER_TITLE } from '../constants';

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
        title, isAuthenticated, children, isFooterPresent, isSiderPresent,
    } = props;
    return (
        <>
            <Layout className="LandingPage_layout">
                <NavHeader title={title || HEADER_TITLE} isAuthenticated={isAuthenticated} />
                <Content className="PageLayout_body">
                    <Layout hasSider className="PageLayout_content_sidebar">
                        <Sidebar isSiderPresent={isSiderPresent} />
                        <Content className="PageLayout_content">{children}</Content>
                    </Layout>
                </Content>
            </Layout>
            {isFooterPresent ? <PageFooter /> : null}
        </>
    );
}
PageLayout.propTypes = {
    children: PropTypes.node,
    isAuthenticated: PropTypes.bool,
    isFooterPresent: PropTypes.bool,
    isSiderPresent: PropTypes.bool,
    title: PropTypes.string,
};
