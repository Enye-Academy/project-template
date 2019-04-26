import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Button, Divider, Typography } from 'antd';
import Link from 'next/link';
import Head from '../../Layout';
import './LandingPage.css';
import LandingPageContent from './LandingPageContent';

const { Header, Content, Sider, Footer } = Layout;

/**
 * Function for displaying the landing page
 *
 * @function
 * @return {Object} The landing page
 */

const LandingPage = () => (
	<>
		<Head title="HelpMe | Welcome to HelpMe" />
		<Layout className="LandingPage_layout">
			<Header theme="light" className="layout_header-mobile">
				<Link href="/">
					<a>
						<img src="../../../static/logo.png" alt="helpme logo" className="logo" />
					</a>
				</Link>

				<Button className="LandingPage_login_button" type="primary">
					<Link href="/login">
						<a>Login</a>
					</Link>
				</Button>
			</Header>

			<Header theme="light" className="layout_header-desktop">
				<Link href="/">
					<a>
						<img src="../../../static/logo.png" alt="helpme logo" className="logo" />
					</a>
				</Link>

				{/* navbar */}
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="layout_header-list">
					<Menu.Item key="1">
						<Link href="/#">
							<a>nav 1</a>
						</Link>
					</Menu.Item>

					<Menu.Item key="2">
						<Link href="/#">
							<a>nav 2</a>
						</Link>
					</Menu.Item>

					<Menu.Item key="3">
						<Link href="/#">
							<a>nav 3</a>
						</Link>
					</Menu.Item>
				</Menu>

				<Button className="LandingPage_login_button" type="primary">
					<Link href="/login">
						<a>Login</a>
					</Link>
				</Button>
			</Header>

			<Content className="LandingPage_body">
				<Layout hasSider>
					<Sider breakpoint="lg" collapsedWidth="0" className="layout_sider">
						<div className="logo" />
						<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
							<Menu.Item key="1">
								<Link href="/#">
									<a>
										<Icon type="user" />
										<span className="nav-text">nav 1</span>
									</a>
								</Link>
							</Menu.Item>

							<Menu.Item key="2">
								<Link href="/#">
									<a>
										<Icon type="video-camera" />
										<span className="nav-text">nav 2</span>
									</a>
								</Link>
							</Menu.Item>

							<Menu.Item key="3">
								<Link href="/#">
									<a>
										<Icon type="upload" />
										<span className="nav-text">nav 3</span>
									</a>
								</Link>
							</Menu.Item>

							<Menu.Item key="4">
								<Link href="/#">
									<a>
										<Icon type="user" />
										<span className="nav-text">nav 4</span>
									</a>
								</Link>
							</Menu.Item>
						</Menu>
					</Sider>

					<Content className="LandingPage_content">
						<LandingPageContent
							level={1}
							title="Help me Title"
							paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero"
							buttonText="Lets begin this Journey"
							imageIsPresent
							imageLink="../../../static/connected.svg"
							buttonLink="/register"
							buttonIsPresent
						/>

						<LandingPageContent
							level={2}
							title="Title 2"
							paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero"
							imageIsPresent
							imageLink="../../../static/smile.svg"
							buttonIsPresent={false}
							columnSection
						/>

						<Divider />

						<LandingPageContent
							level={3}
							title="Lorem Ipsum  dolor sit a "
							paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero"
							imageLink="../../../static/community.svg"
							reverseSection
							buttonIsPresent={false}
							imageIsPresent
						/>

						<LandingPageContent
							level={2}
							title="Title 2"
							paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero"
							imageIsPresent={false}
							buttonIsPresent={false}
						/>

						<Divider />

						<LandingPageContent
							level={3}
							title="Lorem Ipsum  dolor sit a "
							paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero v Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero"
							imageIsPresent
							imageLink="../../../static/hangout.svg"
							reverseSection={false}
							buttonIsPresent
							buttonText="Create an Account"
							buttonLink="/register"
						/>
					</Content>
				</Layout>
			</Content>
		</Layout>
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
	</>
);

export default LandingPage;
