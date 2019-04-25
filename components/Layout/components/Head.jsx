import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

/**
 * Head function that is infused into all pages and controls page's title
 *
 * @function
 * @param {String} title - The title of the currently viewed page
 * @return {Object} head metadata which is inserted in every page
 *
 */

export default function Layout(props) {
    const { title } = props;

    return (
        <Head>
    <meta charSet="UTF-8" />
            <meta name="viewport" content="width=/, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link rel="shortcut icon" href="../../static/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="../../static/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
            <title>{!title ? 'Helpme | Connect with Friends' : title}</title>
        </Head>
    );
}

Head.propTypes = {
    title: PropTypes.string,
};
