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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './registration.module.scss';

const schema = yup.object().shape({
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  password: yup.string()
    .min(8, 'Ваш пароль должен содержать не менее 8 символов.')  
    .matches(/^(?!.*(\w)\1{2,}).*$/, 'Ваш пароль слишком простой') 
    .matches(/^(?![0-9]*$)/, 'Ваш пароль не может быть быть полностью числовым') 
    .required('Пароль обязателен'),
});

export const Registration = () => {
  const { control, handleSubmit, formState: { errors }, } = useForm(
    {
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    }
);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box     
          sx={{
            marginTop: 13,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  error={!!errors.email}
                 
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                  
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
