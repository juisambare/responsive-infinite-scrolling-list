import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '20px',
  },
}));

export default function User(props) {
  const { user } = props;
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={4}
        className={classes.container}
      >
        <Grid item>
          <Avatar alt={user.name} src={user.imageURL} />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={0}>
            <Grid item> Name : {user.name}</Grid>
            <Grid item> Contact No. : {user.contact}</Grid>
            <Grid item> City : {user.city}</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider light />
    </>
  );
}
