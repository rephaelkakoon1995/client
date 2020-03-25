import React, { useState } from 'react';
import useStyles from './SearchFormStyle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Loader from '../../../commons/Loader/Loader';

const SearchForm: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(false);

    const submitSearch = () => {
        setIsLoading(true);
    };

    return (
        <div className={classes.content}>
            <Card className={classes.root}>
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
                    <Loader textInfo={'מחפשים עבורך את התורן הפנוי ביותר'}/>
                    }
                </CardActions>
            </Card>
        </div>
    )
};

export default SearchForm;