export enum Gender {
    male = 'male',
    female = 'female',
}

export interface GenderName {
    name: string;
    gender: Gender;
}

export const names: GenderName[] = [
    { name: 'Jan', gender: Gender.male },
    { name: 'Karolina', gender: Gender.female },
    { name: 'Maciej', gender: Gender.male },
    { name: 'Julia', gender: Gender.female },
    { name: 'Michał', gender: Gender.male },
    { name: 'Paweł', gender: Gender.male },
    { name: 'Marcin', gender: Gender.male },
    { name: 'Paul', gender: Gender.male },
    { name: 'Anna', gender: Gender.female },
    { name: 'Kasia', gender: Gender.female },
];
