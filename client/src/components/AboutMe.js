import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import profile from '../HaydenPhoto.jpeg';
import aboutMe from '../AboutMe.js';
import code from '../bhanu.jpeg'

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${code})`,
  },
  profile: {
    maxWidth: '100%',
    display: 'flex',
    maxHeight: 500,

  },
  paperProfile: {
    maxWidth: 350,
    padding: 10,
    margin: 10,
    backgroundColor: '#F8F9F3'
  },

  paper: {
    padding: 10,
    margin: 10,
    backgroundColor: '#F8F9F3'
  }
})

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <Grid container direction="column" alignItems='center'>
            <Grid item>
              <Paper className={classes.paperProfile} elevation={3}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                  <img alt='' src={profile} className={classes.profile} />
                </Grid>
              </Paper>
            </Grid>
            <Grid item container justifyContent="center" alignItems="center">
              <Paper className={classes.paper}>
                <Typography variant='h4'>
                  Work Experience
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Business System Specialist
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Speir Innovations LLC
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Redesigned and Implemented new operational workflows to increase efficiency and productivity
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Utilized out of the box applications and software
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Zapier, Intergromat, Microsoft
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        IT Operations Analyst
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        General Motors
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Identified server issues, deployed patches, aided dealerships and factories with website/mainframe issues.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Initial responder to issues related to the sales and marketing functions of the GM Enterprise
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" justifyContent="center" alignItems="stretch">
            <Grid item>
              <Paper className={classes.paper} elevation={6} >
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography gutterBottom variant="h4">
                      About Me
                    </Typography>
                    <Divider />
                    <Typography variant='body2'>
                      {aboutMe}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6} container justifyContent="center" alignItems="center">
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item>
                    <Typography variant='h4'>
                      Software Experience
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Emaily (Email Campaign Application)
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        React, Redux, Materialize CSS, Express, Node.js, MongoDB, Mongoose.js, Passport.js, SendGrid, Stripe, Google Oauth, Heroku
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Built a web application that allows users to set up an account using their Gmail account to create and send customer experience email campaigns and track metrics via the SendGrid API
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Set up a Google Oauth flow using the Google Strategy from Passport.js
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Set up Prod and Dev version of a DB on Mongo Atlas for use in the application
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Book Squid (Book Club Application)
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        React, Express, MongoDB, Material UI, Firebase
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Developed a website for users to track books they are reading, books they want to read and books they have read in the past. The user had the ability to add any book title via the Google API
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Integrated Firebase as the authorization system so that users could log in to the site to track their book list
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Responsible for building how the search function/results page functioned, how results were displayed on the page and how the info was fetched from either the DB or the Google API
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Utilized React Router to provide a multi page experience
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Project Catwalk
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        React, Node.js, Material-UI, AWS EC2, Font Awesome
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Developed a product information page for a user displaying product reviews, Q&A, and related product items
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Implemented Git Feature Branch Workflow and Agile methodology with a team of 5 developers
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Tailored Material-UI components and leveraged grid to adapt screen size and orientation across layouts
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        - Designed seamless and intuitive navigation component that conditionally rendered dynamic content
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default AboutMe;