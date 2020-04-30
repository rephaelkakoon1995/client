import React from 'react';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './AppBarStyle';

const AppBar: React.FC = (): JSX.Element => {
    const selectedTabInitial = 1;

    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(selectedTabInitial);

    const handleChangeTab = (event: React.ChangeEvent<{}>, newSelectedTab: number) => {
        setSelectedTab(newSelectedTab);
      };

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
            <Tabs
                value={selectedTab}
                onChange={handleChangeTab}
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto">

                <Tab label="שיבוצים קיימים" />
                <Tab label="הוספת תורנות" />
                <Tab label="תורנויות עבר" />

            </Tabs>
        </div>
    )
};

export default AppBar;