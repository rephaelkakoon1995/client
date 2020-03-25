import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoaderStyle';

const Loader: React.FC<IProps> = ({ textInfo }: IProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.loaderContainer}>
            {
                textInfo &&
                <Typography variant="h6">{textInfo}</Typography>
            }
            <CircularProgress size={25} />
        </div>
    );
}

export default Loader;

interface IProps {
    textInfo?: string;
}