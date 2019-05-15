import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const FooterListCreator = props => {
    const { list } = props;
    return (
        <ul>
            {
                list.map(link => {
                    const { href, text } = link;
                    return (
                        <Link href={href} key={text}>
                            <li>
                                <a>{text}</a>
                            </li>
                        </Link>
                    );
                })
            }
        </ul>
    );
};
export default FooterListCreator;
FooterListCreator.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
};
