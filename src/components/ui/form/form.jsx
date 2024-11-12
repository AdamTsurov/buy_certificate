import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid2,
} from '@mui/material';

const ContactForm = ({ onSubmit, onBack }) => {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = 'Обязательное поле';
    }

    if (!values.phone) {
      newErrors.phone = 'Обязательное поле';
    } else if (!/^\+?\d{10,15}$/.test(values.phone)) {
      newErrors.phone = 'Введите правильный номер телефона';
    }

    if (!values.email) {
      newErrors.email = 'Обязательное поле';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Неверный адрес электронной почты';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSubmit(values);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2} direction="column">
          <Grid2 item xs={12}>
            <Typography variant="h6" align="center">Контактные данные</Typography>
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Имя"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Телефон"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Почта"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <Button variant="outlined" onClick={onBack} fullWidth>
              Назад
            </Button>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }} fullWidth>
              Оплатить
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  );
};

export default ContactForm;
