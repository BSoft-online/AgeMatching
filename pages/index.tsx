import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { PageContainer } from 'features/pageContainer';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Advanced Form</title>
        </Head>
        <PageContainer />
    </>
);

export default Home;
