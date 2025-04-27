import React from 'react';
import { ReceptionStore } from '../../../pages/Reception/model/ReceptionStore';
import { createObserver } from '../../../shared/utils';
import { IDoctorOut } from '../../../shared/api/schedule/data-contracts';
import { RemoteDataSelector } from '../../../shared/RemoteDataSelector/ui/RemoteDataSelector';
import { SxProps, Theme } from '@mui/material';

export interface IDoctorSelectorParams {
  store: ReceptionStore;
  sx?: SxProps<Theme>;
}

export const DoctorSelector: React.FC<IDoctorSelectorParams> = createObserver(({ store, sx }) => {
  const handleOpen = () => {
    store.getAllDoctors();
  };

  const handleChange = (value: IDoctorOut | null) => {
    if (store.slotInfo && value) {
      store.slotInfo.doctor = value;
    }
  };

  return (
    <RemoteDataSelector
      label="Специалист"
      isLoading={store.isLoading.doctors}
      options={store.doctors}
      onOpen={handleOpen}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option.first_name === value.first_name}
      getOptionLabel={(option) => `${option.first_name} ${option.last_name} ${option.father_name}`}
      sx={sx}
    />
  );
}, 'DoctorSelector');
