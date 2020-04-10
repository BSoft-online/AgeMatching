import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    children: React.ReactNode;
};

const useStyles = createUseStyles({
    header: {
        margin: '20px 0',
    },
});

export const Header: React.FunctionComponent<Props> = ({ children }) => {
    const classes = useStyles();
    return <h2 className={classes.header}>{children}</h2>;
};
