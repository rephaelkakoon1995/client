import React from 'react';
import useStyles from './ContentStyle';

import SearchForm from './SearchForm/SearchForm';

const Content: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
      <div className={classes.paperContainer}>
        <SearchForm />
      </div>
    )
};

export default Content;