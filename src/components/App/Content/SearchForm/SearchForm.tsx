import React from 'react';
import useStyles from './SearchFormStyle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

const SearchForm: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image='/assets/find.jpg'
                        title="search"
                    />
    
                <CardActions className={classes.cardActions}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.button}
                        startIcon={<Search />}
                    >
                        מצא לי את התורן הבא
      </Button>
                </CardActions>
            </Card>
        </div>
    )
};

export default SearchForm;