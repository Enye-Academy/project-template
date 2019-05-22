import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';
import { FOOTER_FIRST_COLUMN, FOOTER_SECOND_COLUMN } from '../constants';
import FooterListCreator from './FooterListCreator';

const { Content, Footer } = Layout;

/**
 * footer function that is infused into all pages
 * @function
 * @return {Object} footer
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
                      list={FOOTER_FIRST_COLUMN}
                    />
                    <FooterListCreator
                      list={FOOTER_SECOND_COLUMN}
                    />
                </Footer>
            </Content>
        </Layout>
    );
}
