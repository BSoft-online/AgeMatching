import Avatars from '@dicebear/avatars';
import maleSprites from '@dicebear/avatars-male-sprites';
import femaleSprites from '@dicebear/avatars-female-sprites';
import { GenderName, Gender } from 'config/constants';

interface Person {
    name: string;
    avatar: string;
}

export const getData = (names: GenderName[]): Person[] => {
    const maleAvatars = new Avatars(maleSprites, {});
    const femaleAvatars = new Avatars(femaleSprites, {});
    return names.map(({ name, gender }) => {
        const avatar = gender === Gender.male ? maleAvatars : femaleAvatars;
        return {
            name,
            avatar: avatar.create(name),
        };
    });
};
