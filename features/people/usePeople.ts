import { useState } from 'react';
import { getAge } from 'services/ageMatching';

type Result = {
    age: string;
    name: string;
    isModalOpen: boolean;
    onSeeDetailsClick: Function;
    onModalClose: Function;
};

export const usePeople = (): Result => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSeeDetailsClick = (newName: string): void => {
        setIsModalOpen(true);
        setName(newName);
        getAge(newName)
            .then((responseAge: string): void => {
                setAge(responseAge);
            })
            .catch();
    };

    const onModalClose = (): void => {
        setIsModalOpen(false);
        setName('');
        setAge('');
    };

    return {
        age,
        name,
        isModalOpen,
        onSeeDetailsClick,
        onModalClose,
    };
};
