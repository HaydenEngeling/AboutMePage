import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import profile from '../HaydenPhoto.jpeg';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#A2CBC9'
  },
  profile: {
    maxWidth: '100%',
    display: 'flex',
    maxHeight: 500,

  },
  paper: {
    padding: 10,
    margin: 10
  }
})

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3} >
            <Grid container justifyContent='center'>
              <img
                alt=''
                src={profile}
                className={classes.profile}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
      </Grid>
      AboutMe
    </div>
  )
}

export default AboutMe;