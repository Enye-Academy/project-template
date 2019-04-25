import React from 'react';
import { Button, Typography } from 'antd';
import PropTypes from 'prop-types';
import { normalize } from 'path';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

/**
 * Function used to generate section layout content for landing page
 *
 * @function
 * @param {Number} level - The Number from 1-5 representing the header level h1-h5
 * @param {String} title- The Title of that Section
 *@param {String} paragraphText- The Text of that section
 * @param {Boolean} buttonIsPresent- If true, a button is shown on that section
 * @param {String} buttonText- the text on the button
 * @param {String} buttonLink- the link that the button leads to
 * @param {String} imageLink- the link to an image in the section
 * @param {Boolean} reverseSection - if true, the image and section position is swapped
 * @param {Boolean} imageIsPresent - if true, the image is shown
 * @param {Boolean} columnSection - if true, the section will be stacked
 * @return {Object} The landing page content component which is used to populate the landing page
 */

export default function LandingPageContent(props) {
    const {
        level,
        title,
        paragraphText,
        buttonIsPresent,
        buttonText,
        buttonLink,
        imageLink,
        imageIsPresent,
        reverseSection,
        columnSection,
    } = props;

    let className;

    // this helps to structure the section, the section can be normalize, reversed or columnized
    if (!reverseSection && !columnSection) {
        className = 'LandingPage_hero';
    } else if (reverseSection && !columnSection) {
        className = 'LandingPage_hero reverse';
    } else if (columnSection) {
        className = 'LandingPage_hero column-section';
    }

    return (
        <section className={className}>
            <div className="LandingPage_content__text">
                <Title level={level}>{title}</Title>
                <Paragraph>{paragraphText}</Paragraph>

                {/* displays button in a section */}
                {buttonIsPresent ? (
                    <Button className="LandingPage_button" type="primary">
                        <Link href={buttonLink}>
                            <a>{buttonText}</a>
                        </Link>
                    </Button>
                ) : null}
            </div>

            {/* displays image in a section */}
            {imageIsPresent ? <img src={imageLink} alt={`${title} image`} /> : null}
        </section>
    );
}

LandingPageContent.propTypes = {
    level: PropTypes.number,
    title: PropTypes.string,
    paragraphText: PropTypes.string,
    buttonIsPresent: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    imageIsPresent: PropTypes.bool,
    imageLink: PropTypes.string,
    reverseSection: PropTypes.bool,
    columnSection: PropTypes.bool,
};
