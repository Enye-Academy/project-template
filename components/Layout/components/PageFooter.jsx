import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';

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

                    <ul>
                        <Link href="/#">
                            <li>
                                <a>Home</a>
                            </li>
                        </Link>

                        <Link href="/contact">
                            <li>
                                <a>Contact us</a>
                            </li>
                        </Link>

                        <Link href="/about-us">
                            <li>
                                <a>About Helpme</a>
                            </li>
                        </Link>
                    </ul>

                    <ul>
                        <Link href="/about-us">
                            <li>
                                <a>Security & Privacy</a>
                            </li>
                        </Link>
                        <Link href="/about-us">
                            <li>
                                <a>Terms Of Service</a>
                            </li>
                        </Link>
                    </ul>
                </Footer>
            </Content>
        </Layout>
    );
}
