import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { CreateEventStore } from '../model';
import React, { useEffect, useState } from 'react';
import { ICabinetOut } from '../../../shared/api/schedule/data-contracts';
import { createObserver } from '../../../shared/utils/MobxUtils';

export interface ISelectDoctorParams {
  store: CreateEventStore;
}

export const SelectCabinet: React.FC<ISelectDoctorParams> = createObserver((params) => {
  const { store } = params;
  const { cabinets } = store;

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ICabinetOut[]>([]);

  const handleOpen = () => {
    setOpen(true);
    store.getAllCabinets();

    if (cabinets) {
      setOptions([...cabinets]);
    }
  };

  useEffect(() => {
    if (cabinets) {
      setOptions([...cabinets]);
    }
  }, [cabinets]);

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  const handleChange = (event: React.SyntheticEvent, value: ICabinetOut | null) => {
    store.selectCabinet = value;
  };

  return (
    <Autocomplete
      sx={{ width: '100%' }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option.number === value.number}
      getOptionLabel={(option) => option.number}
      options={options}
      loading={store.isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Кабинет"
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
