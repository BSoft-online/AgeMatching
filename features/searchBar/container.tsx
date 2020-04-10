import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    children?: React.ReactNode;
};

const useStyles = createUseStyles({
    background: {
        display: 'flex',
        height: '400px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
            'url("https://images.unsplash.com/photo-1576158114254-3ba81558b87d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80")',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: '20px',
        background: '#fff',
        borderRadius: '5px',
    },
});

export const Container: React.FunctionComponent<Props> = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>{children}</div>
        </div>
    );
};
