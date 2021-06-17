import React from 'react';
import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Container,
  Grid,
  TextField } from '@material-ui/core';

function Login({sendDataToParent}:any) {

  const inputHandler = (e: any) => {
    sendDataToParent(e);
  }

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
);

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={12}>
            <TextField onChange={e => inputHandler(e)} type="email" name="email" label="E-Mail" />
        </Grid>
        <Grid item xs={12}>
          <label>
            <TextField onChange={e => inputHandler(e)} type="password" name="password" label="Password" />
          </label>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" type="submit" color="secondary">Submit</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;