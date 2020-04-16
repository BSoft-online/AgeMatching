import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { PageContainer } from 'features/pageContainer';
import { SearchBar } from 'features/searchBar';
import { People } from 'features/people';
import { names, GenderName } from 'config/constants';

type InitProps = {
    names: GenderName[];
};

const Home: NextPage<InitProps> = ({ names }) => (
    <>
        <Head>
            <title>Age Matching</title>
        </Head>
        <PageContainer>
            <SearchBar />
            <People names={names} />
        </PageContainer>
    </>
);

Home.getInitialProps = (): InitProps => {
    return { names };
};

export default Home;
