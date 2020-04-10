import React from 'react';
import { Container } from './container';
import { Header } from './header';
import { Person } from './person';
import { PeopleWrapper } from './peopleWrapper';
import { getData } from './data';

type Props = {
    children?: React.ReactNode;
};

export const People: React.FunctionComponent<Props> = () => {
    return (
        <Container>
            <Header>Featured People:</Header>
            <PeopleWrapper>
                {getData().map(
                    (value, index): JSX.Element => (
                        <Person key={index} {...value} />
                    )
                )}
            </PeopleWrapper>
        </Container>
    );
};
