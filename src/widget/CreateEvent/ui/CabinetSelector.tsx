import React from 'react';
import { ReceptionStore } from '../../../pages/Reception/model/ReceptionStore';
import { createObserver } from '../../../shared/utils';
import { ICabinetOut } from '../../../shared/api/schedule/data-contracts';
import { RemoteDataSelector } from '../../../shared/RemoteDataSelector/ui/RemoteDataSelector';
import { SxProps, Theme } from '@mui/material';

export interface ICabinetSelectorParams {
  store: ReceptionStore;
  sx?: SxProps<Theme>;
}

export const CabinetSelector: React.FC<ICabinetSelectorParams> = createObserver(({ store, sx }) => {
  const handleOpen = () => {
    store.getAllCabinets();
  };

  const handleChange = (value: ICabinetOut | null) => {
    store.selectedIntervalValues.cabinet = value;
  };

  return (
    <RemoteDataSelector
      label="Кабинет"
      isLoading={store.isLoading.cabinets}
      options={store.cabinets}
      onOpen={handleOpen}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option.number === value.number}
      getOptionLabel={(option) => option.number}
      sx={sx}
    />
  );
}, 'CabinetSelector');
