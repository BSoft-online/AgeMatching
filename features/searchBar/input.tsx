import React, { ChangeEvent } from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    onChange: Function;
    value: string;
};

const useStyles = createUseStyles({
    input: {
        padding: '20px',
        width: '200px',
        borderRadius: '5px',
        marginRight: '20px',
        borderStyle: 'solid',
        borderColor: '#ddd',
    },
});

export const Input: React.FunctionComponent<Props> = ({ value, onChange }) => {
    const classes = useStyles();
    return (
        <input
            type="text"
            placeholder="Person name"
            value={value}
            className={classes.input}
            onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                onChange(event.currentTarget.value || '')
            }
        />
    );
};
