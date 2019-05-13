import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Divider } from 'antd';
import './LandingPage.css';
import LandingPageContent from './LandingPageContent';
import PageLayout from '../../Layout';
import {
    pageTitle, landingPageMainContentTitle, landingPageMainContentButtonText, landingPageMainContentParagraphText, landingPageLevel2ParagraphText, landingPageLevel2ButtonText, landingPageLevel3ContentTitle, landingPageLevel3ParagraphText, landingPageLevel4ContentTitle, landingPageLevel4ParagraphText, landingPageLevel5ParagraphText, landingPageLevel5ContentTitle, landingPageLevel5ButtonText
} from '../constants';

const { Content } = Layout;

/**
 * Function for displaying the landing page
 *
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
        <LandingPageContent
          level={1}
          title={landingPageMainContentTitle}
          paragraphText={landingPageMainContentParagraphText}
          buttonText={landingPageMainContentButtonText}
          imageIsPresent
          imageLink="../../../static/connected.svg"
          buttonLink="/signup"
          buttonIsPresent
        />

        <LandingPageContent
          level={2}
          title={landingPageLevel2ButtonText}
          paragraphText={landingPageLevel2ParagraphText}
          imageIsPresent
          imageLink="../../../static/smile.svg"
          buttonIsPresent={false}
          columnSection
        />

        <LandingPageContent
          level={3}
          title={landingPageLevel3ContentTitle}
          paragraphText={landingPageLevel3ParagraphText}
          imageLink="../../../static/community.svg"
          reverseSection
          buttonIsPresent={false}
          imageIsPresent
        />

        <LandingPageContent
          level={2}
          title={landingPageLevel4ContentTitle}
          paragraphText={landingPageLevel4ParagraphText}
          imageIsPresent={false}
          buttonIsPresent={false}
        />

        <LandingPageContent
          level={3}
          title={landingPageLevel5ContentTitle}
          paragraphText={landingPageLevel5ParagraphText}
          imageIsPresent
          imageLink="../../../static/hangout.svg"
          reverseSection={false}
          buttonIsPresent
          buttonText={landingPageLevel5ButtonText}
          buttonLink="/signup"
        />
    </PageLayout>
);

export default LandingPage;
