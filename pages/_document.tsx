/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import BaseDocument, { Head, Main, NextScript } from 'next/document';

class Document extends BaseDocument {
    render() {
        return (
            <html lang="pl">
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
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

export default Document;
