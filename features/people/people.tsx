import React from 'react';
import { Modal } from 'components/modal';
import { GenderName } from 'config/constants';
import { Container } from './container';
import { Header } from './header';
import { Person } from './person';
import { PeopleWrapper } from './peopleWrapper';
import { getData } from './getData';
import { usePeople } from './usePeople';

type Props = {
    names: GenderName[];
    children?: React.ReactNode;
};

export const People: React.FunctionComponent<Props> = ({ names }) => {
    const {
        age,
        name,
        isModalOpen,
        onSeeDetailsClick,
        onModalClose,
    } = usePeople();
    return (
        <Container>
            <Header>Featured People:</Header>
            <PeopleWrapper>
                {getData(names).map(
                    (value, index): JSX.Element => (
                        <Person
                            key={index}
                            {...value}
                            onButtonClick={onSeeDetailsClick}
                        />
                    )
                )}
            </PeopleWrapper>
            {isModalOpen ? (
                <Modal age={age} name={name} onClose={onModalClose} />
            ) : null}
        </Container>
    );
};
