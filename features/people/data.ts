import Avatars from '@dicebear/avatars';
import maleSprites from '@dicebear/avatars-male-sprites';
import femaleSprites from '@dicebear/avatars-female-sprites';

interface Person {
    name: string;
    avatar: string;
}

export const getData = (): Person[] => {
    const maleAvatars = new Avatars(maleSprites, {});
    const femaleAvatars = new Avatars(femaleSprites, {});
    return [
        { name: 'Jan', avatar: maleAvatars.create('jan') },
        {
            name: 'Karolina',
            avatar: femaleAvatars.create('karolina'),
        },
        {
            name: 'Maciej',
            avatar: maleAvatars.create('maciej'),
        },
        {
            name: 'Julia',
            avatar: femaleAvatars.create('julia'),
        },
        {
            name: 'Michał',
            avatar: maleAvatars.create('michal'),
        },
        {
            name: 'Paweł',
            avatar: maleAvatars.create('pawel'),
        },
        {
            name: 'Marcin',
            avatar: maleAvatars.create('marcin'),
        },
        {
            name: 'Paul',
            avatar: maleAvatars.create('paul'),
        },
        {
            name: 'Anna',
            avatar: femaleAvatars.create('anna'),
        },
        {
            name: 'Kasia',
            avatar: femaleAvatars.create('kasia'),
        },
    ];
};
