import React from 'react';
import uuid from 'uuid';
import Router from 'next/router';
import { components } from '../../layout';
import LandingPageContent from './LandingPageContent';
import { LANDING_PAGE_CONTENTS, STRING } from '../constants';
import Auth from '../../auth/components/auth';

const auth = new Auth();
const { PageLayout } = components;
const { PAGE_TITLE } = STRING;

/**
 * Function for displaying the landing page
 *
 * @function
 * @return {Object} The landing page
 */

class LandingPage extends React.Component {
    componentDidMount() {
        if (auth.isAuthenticated()) {
            Router.push('/timeline');
        }
    }

    render() {
        return (
            <PageLayout
                isSiderPresent={false}
                isFooterPresent
                title={PAGE_TITLE}
                selectedKey="1"
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
                                key={uuid()}
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
    }
}
export default LandingPage;
