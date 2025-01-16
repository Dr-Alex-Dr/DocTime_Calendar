import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { SxProps, Theme } from '@mui/material';

export interface IRemoteDataSelectorProps<T> {
  label: string;
  isLoading: boolean;
  options: T[];
  onOpen: () => void;
  onClose?: () => void;
  onChange: (value: T | null) => void;
  isOptionEqualToValue: (option: T, value: T) => boolean;
  getOptionLabel: (option: T) => string;
  sx?: SxProps<Theme>;
}

export const RemoteDataSelector = <T,>({
  label,
  isLoading,
  options,
  onOpen,
  onClose,
  onChange,
  isOptionEqualToValue,
  getOptionLabel,
  sx,
}: IRemoteDataSelectorProps<T>) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    onOpen();
  };

  const handleClose = () => {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <Autocomplete
      sx={{ ...sx }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={(event, value) => {
        onChange(value);
        console.log(event);
      }}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      options={options}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
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
