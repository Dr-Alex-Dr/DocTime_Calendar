import { TextField } from '@mui/material';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { CabinetSelector } from './CabinetSelector';
import { SelectService } from './SelectService';
import { SelectDuration } from './SelectDuration';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '../../../shared/Button';
import moment, { Moment } from 'moment';
import { ReceptionStore } from '../../../pages/Reception/model/ReceptionStore';
import { Modal } from '../../../shared/Modal/ui';
import { DoctorSelector } from './DoctorSelector';

export interface ICreateEventParams {
  store: ReceptionStore;
}

export const CreateEventModal: React.FC<ICreateEventParams> = createObserver((params) => {
  const { store } = params;
  const { createEventModal, createInterval, slotInfo } = store;

  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);

  const handleSendForm = () => {
    createInterval();
    createEventModal.hide();
  };

  const calculateInterval = () => {
    if (!slotInfo?.start || !selectedDate || selectedDuration === null) {
      return { start: null, end: null };
    }

    const startTime = moment(store.slotInfo?.start);

    const start = selectedDate
      .clone()
      .hour(startTime.hour())
      .minute(startTime.minute())
      .second(startTime.second());

    const end = start.clone().add(selectedDuration, 'minute');

    return { start, end };
  };

  useEffect(() => {
    if (store.slotInfo?.start) {
      setSelectedDate(moment(store.slotInfo.start));
    }
  }, [store.slotInfo]);

  const { start, end } = calculateInterval();
  store.selectStartDate = start;
  store.selectEndDate = end;

  return (
    <Modal
      open={createEventModal.shown}
      handleClose={createEventModal.hide}
      title="Запись пациента на прием"
    >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Дата"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </LocalizationProvider>
      <DoctorSelector store={store} />

      <TextField id="outlined-basic" label="Пациент" variant="outlined" />

      <CabinetSelector store={store} />
      <SelectService />
      <TextField id="standard-basic" label="Почта" variant="standard" />
      <TextField id="standard-basic" label="Номер телефона" variant="standard" />

      <SelectDuration
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
      />
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Первичный прием" />
          <FormControlLabel value="male" control={<Radio />} label="Вторичный прием" />
        </RadioGroup>
      </FormControl>
      <Button styles={{ width: '100%' }} variant="contained" onClick={handleSendForm}>
        Записать
      </Button>
    </Modal>
  );
}, 'CreateEvent');
