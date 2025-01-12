import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { CreateEventStore } from '../model';
import React, { useState } from 'react';
import { IDoctorOut } from '../../../shared/api/schedule/data-contracts';
import { createObserver } from '../../../shared/utils/MobxUtils';

export interface ISelectDoctorParams {
  store: CreateEventStore;
}

export const SelectDoctor: React.FC<ISelectDoctorParams> = createObserver((params) => {
  const { store } = params;
  const { doctors } = store;

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<IDoctorOut[]>([]);

  const handleOpen = () => {
    setOpen(true);
    store.getAllDoctors();

    if (doctors) {
      setOptions([...doctors]);
    }
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
      isOptionEqualToValue={(option, value) => option.first_name === value.first_name}
      getOptionLabel={(option) => `${option.first_name} ${option.last_name} ${option.father_name}`}
      options={options}
      loading={store.isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Специалист"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {store.isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
}, 'SelectDoctor');
