/* eslint-disable react/jsx-no-literals */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

const href = 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css';
export default class extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link
                        rel="stylesheet"
                        href={href}
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

            </html>
        );
    }
}
