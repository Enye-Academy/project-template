import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Divider } from 'antd';
import './LandingPage.css';
import Paragraph from 'antd/lib/typography/Paragraph';
import LandingPageContent from './LandingPageContent';
import PageLayout from '../../Layout';
import { LANDING_PAGE_CONTENTS, pageTitle } from '../constants';

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
            LANDING_PAGE_CONTENTS.map(landingPageContent => {
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
                } = landingPageContent;

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
