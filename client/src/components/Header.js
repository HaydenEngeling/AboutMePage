import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',

  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar>
        <Grid container>
          <Grid item xs={6}>
            <Link to='/'>
              Logo
            </Link>
          </Grid>
          <Grid item xs={6} justifyContent='center'>
            <Breadcrumbs aria-label="breadcrumb">

              <Link to="/Apps">
                Apps
                </Link>
              <Link to="/AboutMe">
                About Me
                </Link>

            </Breadcrumbs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header;