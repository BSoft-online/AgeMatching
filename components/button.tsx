import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

type Props = {
    onClick: Function;
    children: React.ReactNode;
    className?: string;
};

const useStyles = createUseStyles({
    button: {
        padding: '20px',
        backgroundColor: '#db0840',
        color: '#fff',
        borderRadius: '5px',
        borderWidth: 0,
        minWidth: '100px',
        '&:hover': {
            backgroundColor: '#9b0e2e',
            cursor: 'pointer',
        },
    },
});

export const Button: React.FunctionComponent<Props> = ({
    onClick,
    children,
    className = '',
}) => {
    const classes = useStyles();
    return (
        <button
            className={clsx(classes.button, className)}
            onClick={(): void => onClick()}
        >
            {children}
        </button>
    );
};
