import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#A2CBC9'
  }
})

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      AboutMe
    </div>
  )
}

export default AboutMe;