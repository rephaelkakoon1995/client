import React from 'react';
import Divider from '@material-ui/core/Divider';

import useStyles from './AppBarStyle';

const AppBar: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src='/assets/RoosterLogoSearch.png' className={classes.logo} />

            <div className={classes.dividerContainer}>
                <Divider variant='fullWidth'
                    flexItem={true}
                    orientation='vertical'
                    className={classes.divider}
                />
            </div>
        </div>
    )
};

export default AppBar;