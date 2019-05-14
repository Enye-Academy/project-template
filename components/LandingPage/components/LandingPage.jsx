import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Divider } from 'antd';
import './LandingPage.css';
import LandingPageContent from './LandingPageContent';
import PageLayout from '../../Layout';
import { landingPageContents, pageTitle } from '../constants';

/**
 * Function for displaying the landing page
 * @function
 * @return {Object} The landing page
 */

const LandingPage = () => (
    <PageLayout
        siderIsPresent={false}
        footerPresent
        isAuthenticated={false}
        title={pageTitle}
    >
        {
            landingPageContents.map(landingPageContent => (
                <LandingPageContent
                    key={landingPageContent.paragraphText}
                    buttonIsPresent={landingPageContent.buttonIsPresent}
                    columnSection={landingPageContent.columnSection}
                    imageIsPresent={landingPageContent.imageIsPresent}
                    imageLink={landingPageContent.imageLink}
                    level={landingPageContent.level}
                    paragraphText={landingPageContent.paragraphText}
                    title={landingPageContent.title}
                    reverseSection={landingPageContent.reverseSection}
                    buttonText={landingPageContent.buttonText}
                    buttonLink={landingPageContent.buttonLink}
                />
            ))
        }

    </PageLayout>
);

export default LandingPage;
