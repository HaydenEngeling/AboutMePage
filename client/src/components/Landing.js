import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#A2CBC9'
  }
})

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Landing
    </div>
  )
}

export default Landing;