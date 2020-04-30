import React from 'react';
import useStyles from './ContentStyle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import SearchForm from './SearchForm/SearchForm';

const Content: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.paperContainer}>
      <Switch>
        <Route path="/addDuty" component={SearchForm}/>
        <Route path="/oldRoster">
          <div>-</div>
        </Route>
        <Route path="/currentRoster">
          <div>-</div>
        </Route>

        <Route exact path="/" render={() => (
          <Redirect to="/addDuty" />
        )} />
      </Switch>
    </div>
  )
};

export default Content;