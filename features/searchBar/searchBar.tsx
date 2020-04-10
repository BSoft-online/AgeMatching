import React from 'react';
import { Button } from 'components/button';
import { Modal } from 'components/modal';
import { Container } from './container';
import { Input } from './input';
import { useSearchBar } from './useSearchBar';

export const SearchBar: React.FunctionComponent = () => {
    const {
        age,
        name,
        isModalOpen,
        onSearchButtonClick,
        onModalClose,
        onInputChange,
    } = useSearchBar();

    return (
        <Container>
            <Input value={name} onChange={onInputChange} />
            <Button onClick={onSearchButtonClick}>Search</Button>
            {isModalOpen ? (
                <Modal age={age} name={name} onClose={onModalClose} />
            ) : null}
        </Container>
    );
};
