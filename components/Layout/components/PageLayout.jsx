/* eslint-disable react/require-default-props */
import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import NavHeader from './NavHeader';
import Sidebar from './Sidebar';
import PageFooter from './PageFooter';
import './PageLayout.css';

const { Content } = Layout;

/**
 * Function for displaying the landing page
 *
 * @function
 * @param {Function} title controls the title of the page
 * @param {Function} isAuthenticated controls if user is authrnticated or not
 * @param {Function} children other pages who are children of this layout
 * @param {Function} footerPresent displays footer if true
 * @param {Function} siderIsPresent  displays side for mobile pages
 * @return {Object} controlvhe over all layout of the webpage
 */
export default function PageLayout(props) {
    const {
        title,
        isAuthenticated,
        children,
        footerPresent,
        siderIsPresent,
    } = props;

    return (
        <>
            <Layout className="LandingPage_layout">
                <NavHeader
                  title={title || 'Helpme | Connect with Friends'}
                  isAuthenticated={isAuthenticated}
                />
                <Content className="PageLayout_body">
                    <Layout hasSider>
                        <Sidebar siderIsPresent={siderIsPresent} />
                        <Content className="PageLayout_content">
                            {children}
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            {footerPresent ? <PageFooter /> : null}
        </>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node,
    footerPresent: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    siderIsPresent: PropTypes.bool,
    title: PropTypes.string,
};
