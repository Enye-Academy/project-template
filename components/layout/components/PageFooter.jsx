import { Layout } from 'antd';
import Link from 'next/link';
import React from 'react';

import {
    FOOTER_FIRST_COLUMN, FOOTER_SECOND_COLUMN, IMAGE_ALT, IMAGE_URLS
} from '../constants';
import FooterListCreator from './FooterListCreator';

const { Content, Footer } = Layout;
const { HELPME_LOGO_DESC } = IMAGE_ALT;
const { HELPME_LOGO_LIGHT } = IMAGE_URLS;

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
                            <img
                                src={HELPME_LOGO_LIGHT}
                                alt={HELPME_LOGO_DESC}
                                className="logo"
                            />
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
