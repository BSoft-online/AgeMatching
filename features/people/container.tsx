import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    children: React.ReactNode;
};

const useStyles = createUseStyles({
    container: {
        padding: '50px 5%',
    },
});

export const Container: React.FunctionComponent<Props> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};
