import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import code from '../bhanu.jpeg'
const useStyles = makeStyles({
  root: {
    backgroundColor: '#A2CBC9'
    //backgroundImage: code
  },
  backdrop: {
    backgroundImage: `url(${code})`,
    //backgroundSize: 'contain',
    height: '100vh'
  },
  paper: {
    padding: 10,
    margin: 10,
    backgroundColor: '#F8F9F3'
  }
})

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        className={classes.backdrop}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Paper className={classes.paper}>
                <Typography variant='h1'>
                  Welcome
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Landing;