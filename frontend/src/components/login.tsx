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
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={1} alignItems="center" direction="column">
        <Grid item xs={12} lg>
          <TextField onChange={e => inputHandler(e)} type="email" name="email" label="E-Mail" />
        </Grid>
        <Grid item xs={12} lg>
          <TextField onChange={e => inputHandler(e)} type="password" name="password" label="Password" />
        </Grid>
        <Grid item xs={12} sm={3} lg>
          <Button variant="contained" type="submit" color="secondary">Submit</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;