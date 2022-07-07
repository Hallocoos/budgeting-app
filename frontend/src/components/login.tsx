import React, { useState } from 'react';
import UserForm from '../interfaces/UserForm.interface';
import { loginUser } from '../services/account.service';
import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Container,
  Grid,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
);

export const Login = (): JSX.Element => {
  const [inputFields, setInputFields] = useState({} as UserForm);
  const [error, setError] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data.target);
    const result = await loginUser(inputFields);
    result.error ? setError(true) : sessionStorage.setItem('token', result.token);
  }

  const inputHandler = (data: any) => {
    setInputFields({
      ...inputFields,
      [data.target.name]: data.target.value
    });
  }

  const classes = useStyles();

  return (
    <div>
      <p>Login</p>
      {/* error ? error : null */}
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={1} alignItems="center" direction="column">
          <Grid item xs={12} lg>
            <TextField onChange={e => inputHandler(e)} type="email" name="email" label="Email" />
          </Grid>
          <Grid item xs={12} lg>
            <TextField onChange={e => inputHandler(e)} type="password" name="password" label="Password" />
          </Grid>
          <Grid item xs={12} sm={3} lg>
            <Button variant="contained" type="submit" color="secondary" onClick={onSubmit}>Submit</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}