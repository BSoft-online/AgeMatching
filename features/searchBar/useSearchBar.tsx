import { useState } from 'react';
import { getAge } from 'services/ageMatching';

type Result = {
    age: string;
    name: string;
    isModalOpen: boolean;
    onSearchButtonClick: Function;
    onModalClose: Function;
    onInputChange: Function;
};

export const useSearchBar = (): Result => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSearchButtonClick = (): void => {
        setIsModalOpen(true);
        getAge(name).then((responseAge: string): void => {
            setAge(responseAge);
        });
    };

    const onModalClose = (): void => {
        setIsModalOpen(false);
        setName('');
    };

    const onInputChange = (name: string): void => {
        setName(name);
    };

    return {
        age,
        name,
        isModalOpen,
        onSearchButtonClick,
        onModalClose,
        onInputChange,
    };
};
