import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Divider } from 'antd';
import './LandingPage.css';
import Paragraph from 'antd/lib/typography/Paragraph';
import LandingPageContent from './LandingPageContent';
import PageLayout from '../../Layout';
import { landingPageContents, pageTitle } from '../constants';

/**
 * Function for displaying the landing page
 *
 * @function
 * @return {Object} The landing page
 */

const LandingPage = () => (
  <PageLayout
    IsSiderPresent={false}
    isFooterPresent
    isAuthenticated={false}
    title={pageTitle}
  >
    {
      landingPageContents.map(test => {
        const {
          paragraphText,
          isButtonPresent,
          columnSection,
          isImagePresent,
          imageLink,
          level,
          title,
          reverseSection,
          buttonText,
          buttonLink,
        } = test;

        return (
          <LandingPageContent
            key={paragraphText}
            isButtonPresent={isButtonPresent}
            columnSection={columnSection}
            isImagePresent={isImagePresent}
            imageLink={imageLink}
            level={level}
            paragraphText={paragraphText}
            title={title}
            reverseSection={reverseSection}
            buttonText={buttonText}
            buttonLink={buttonLink}
          />
        );
      })
    }
  </PageLayout>
);

export default LandingPage;
