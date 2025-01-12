import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

// Медицинские услуги стоматологии
const dentalServices = [
  { title: 'Профессиональная чистка зубов', year: 2023 },
  { title: 'Отбеливание зубов', year: 2023 },
  { title: 'Имплантация зубов', year: 2023 },
  { title: 'Протезирование зубов', year: 2023 },
  { title: 'Лечение кариеса', year: 2023 },
  { title: 'Пломбирование зубов', year: 2023 },
  { title: 'Удаление зубов', year: 2023 },
  { title: 'Ортодонтическое лечение (брекеты)', year: 2023 },
  { title: 'Эстетическая реставрация зубов', year: 2023 },
  { title: 'Лечение пульпита', year: 2023 },
  { title: 'Лечение пародонтита', year: 2023 },
  { title: 'Фторирование зубов', year: 2023 },
  { title: 'Изготовление виниров', year: 2023 },
  { title: 'Установка коронок', year: 2023 },
];

export const SelectService = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<typeof dentalServices>([]);
  const [loading, setLoading] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      await sleep(1e3); // Для демонстрации.
      setLoading(false);

      setOptions([...dentalServices]);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  return (
    <Autocomplete
      sx={{ width: '100%' }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Выберите услугу"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
};
