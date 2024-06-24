import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from './login.module.scss';


export const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={sxStyles.container}>
          <Avatar sx={sxStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>

          <Box component="form" onSubmit={onSubmit} noValidate sx={sxStyles.form}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={sxStyles.submitButton}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Зарегестрироваться "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

const sxStyles = {
    container: {
      marginTop: 13,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      m: 1,
      bgcolor: 'secondary.main',
    },
    form: {
      mt: 1,
    },
    submitButton: {
      mt: 3,
      mb: 2,
    },
  };
