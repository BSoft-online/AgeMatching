import React from 'react';
import { createUseStyles } from 'react-jss';
import { mobileBreakpoint } from 'config/breakpoints';

type Props = {
    children: React.ReactNode;
};

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [`@media (min-width: ${mobileBreakpoint}px)`]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
});

export const PeopleWrapper: React.FunctionComponent<Props> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};
