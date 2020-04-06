import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Done from '@material-ui/icons/Done';
import axios from 'axios';
import useStyles from './SearchFormStyle';
import Loader from '../../../commons/Loader/Loader';
import WeeklyVolunteer from './WeeklyVolunteer/WeeklyVolunteer';

const LOADING_DELAY = 1000;

const SearchForm: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    const [isLoading, setIsLoading] = useState(false);
    const [weeklyVolunteerName, setWeeklyVolunteerName] = useState('');

    const submitSearch = () => {
        setIsLoading(true);

        setTimeout(() => {
            axios.get('/nextVolunteer')
                .then(res => {
                    setWeeklyVolunteerName(res.data ? res.data : '');
                })
                .catch(err => {
                    console.log(err)
                })
        }, LOADING_DELAY)
    };

    return (
        <div className={classes.content}>
            <Card className={isDesktopOrLaptop ? classes.rootDesktopOrLaptop : classes.rootTabletOrMobileDevice}>
                <CardMedia
                    className={classes.media}
                    image='/assets/find.jpg'
                    title="search"
                />

                <CardActions className={classes.cardActions}>
                    {
                        !isLoading ?
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                className={classes.button}
                                startIcon={<Search />}
                                onClick={() => submitSearch()}
                            >
                                מצא לי את התורן הבא
                 </Button>
                            :
                            !weeklyVolunteerName ?
                                <Loader textInfo={'מחפשים עבורך את התורן הפנוי ביותר'} />
                                :
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="h6">מצאנו עבורך תורן פנוי</Typography>
                                    <div className={classes.doneIcons}>
                                        <Done />
                                    </div>
                                </div>
                    }
                </CardActions>
            </Card>

            {
                weeklyVolunteerName &&
                <div className={classes.weeklyVolunteerStyle}>
                    <WeeklyVolunteer weeklyVolunteerName={weeklyVolunteerName} isDesktopOrLaptop={isDesktopOrLaptop}/>
                </div>
            }
        </div>
    )
};

export default SearchForm;