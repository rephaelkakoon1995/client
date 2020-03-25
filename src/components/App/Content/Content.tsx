import React from 'react';
import useStyles from './ContentStyle';
import SearchForm from './SearchForm/SearchForm';

const Content: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
      <SearchForm />
    )
};

export default Content;