import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageContainer } from 'features/pageContainer';
import { SearchBar } from 'features/searchBar';
import { People } from 'features/people';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Age Matching</title>
        </Head>
        <PageContainer>
            <SearchBar />
            <People />
        </PageContainer>
    </>
);

const NoSSRHome = dynamic(() => Promise.resolve(Home), {
    ssr: false,
});

export default NoSSRHome;
