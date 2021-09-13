import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header.js';
import Landing from './Landing.js';
import AboutMe from './AboutMe.js';
import Application from './Applications.js';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#A2CBC9'
  }
})


const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/Apps" component={Application} />
        <Route path="/AboutMe" component={AboutMe} />
      </BrowserRouter>
    </div>
  )
}

export default App;