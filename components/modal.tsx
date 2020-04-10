import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from 'components/button';

type Props = {
    onClose: Function;
    age: string;
    name: string;
};

const useStyles = createUseStyles({
    background: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    container: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '20px',
        minWidth: '300px',
        '& > *': {
            display: 'block',
        },
    },
    button: {
        marginTop: '20px',
        padding: '10px',
    },
});

export const Modal: React.FunctionComponent<Props> = ({
    onClose,
    age,
    name,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <label>Name: {name}</label>
                <label>Age: {age || 'Loading'}</label>
                <Button className={classes.button} onClick={onClose}>
                    Cool
                </Button>
            </div>
        </div>
    );
};
