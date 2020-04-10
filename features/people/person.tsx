import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from 'components/button';

type Props = {
    avatar: string;
    name: string;
    onButtonClick: Function;
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

export const Person: React.FunctionComponent<Props> = ({
    avatar,
    name,
    onButtonClick,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div dangerouslySetInnerHTML={{ __html: avatar }} />
                <label>{name}</label>
                <Button onClick={(): void => onButtonClick(name)}>
                    See details
                </Button>
            </div>
        </div>
    );
};
