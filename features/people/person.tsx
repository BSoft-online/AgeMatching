import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from 'components/button';

type Props = {
    avatar: string;
    name: string;
};

const useStyles = createUseStyles({
    container: {
        textAlign: 'center',
        display: 'inline-block',
    },
    wrapper: {
        width: '100px',
    },
});

export const Person: React.FunctionComponent<Props> = ({ avatar, name }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div dangerouslySetInnerHTML={{ __html: avatar }} />
                <label>{name}</label>
                <Button onClick={(): void => {}}>See details</Button>
            </div>
        </div>
    );
};
