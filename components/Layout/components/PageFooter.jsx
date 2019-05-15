import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';
import { footerFirstColumn, footerSecondColumn } from '../constants';
import FooterListCreator from './FooterListCreator';
const { Content, Footer } = Layout;

/**
 * footer function that is infused into all pages
 *
 * @function
 *
 * @return {Object} footer
 *
 */

export default function PageFooter() {
    return (
        <Layout>
            <Content>
                <Footer className="LandingPage_footer">
                    <Link href="/">
                        <a>
                            <img src="../../../static/logo-light.png" alt="helpme logo" className="logo" />
                        </a>
                    </Link>
                    <FooterListCreator
                      list={footerFirstColumn}
                    />
                    <FooterListCreator
                      list={footerSecondColumn}
                    />
                </Footer>
            </Content>
        </Layout>
    );
}
