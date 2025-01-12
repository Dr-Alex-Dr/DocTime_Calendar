import { Dialog, TextField } from '@mui/material';
import { createObserver } from '../../../shared/utils/MobxUtils';
import CloseIcon from '@mui/icons-material/Close';
import styles from './CreateEvent.module.scss';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectDoctor } from './SelectDoctor';
import { CreateEventStore } from '../model';
import { useMemo, useState } from 'react';
import { SelectCabinet } from './SelectCabinet';
import { SelectService } from './SelectService';
import { SelectDuration } from './SelectDuration';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '../../../shared/Button';
import dayjs, { Dayjs } from 'dayjs';

export interface ICreateEventParams {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  eventInfo: any;
}

export const CreateEventModal: React.FC<ICreateEventParams> = createObserver((params) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const createEventStore = useMemo(() => new CreateEventStore(), []);
  const { open, setOpen, eventInfo } = params;

  const handleClose = () => {
    setOpen(false);
  };

  const calculateInterval = () => {
    if (!eventInfo?.start || !selectedDate || selectedDuration === null) {
      return { start: null, end: null };
    }

    // Получаем время из eventInfo.start
    const startTime = dayjs(eventInfo.start);

    // Формируем start
    const start = selectedDate
      .hour(startTime.hour())
      .minute(startTime.minute())
      .second(startTime.second());

    // Формируем end с учетом продолжительности
    const end = start.add(selectedDuration, 'minute');

    return { start, end };
  };

  const { start, end } = calculateInterval();

  console.log('Start:', start?.toISOString());
  console.log('End:', end?.toISOString());

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <div className={styles.container}>
          <div className={styles.header}>
            Запись пациента на прием
            <CloseIcon onClick={handleClose} />
          </div>
          <SelectDoctor store={createEventStore} />
          <TextField
            sx={{ width: '100%' }}
            id="outlined-basic"
            label="Пациент"
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ paddingTop: 0, width: '100%' }} components={['DatePicker']}>
              <DatePicker
                sx={{ width: '100%' }}
                label="Дата"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <SelectCabinet store={createEventStore} />
          <SelectService />
          <TextField sx={{ width: '100%' }} id="standard-basic" label="Почта" variant="standard" />
          <TextField
            sx={{ width: '100%' }}
            id="standard-basic"
            label="Номер телефона"
            variant="standard"
          />

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
          <Button styles={{ width: '100%' }} variant="contained" onClick={() => setOpen(false)}>
            Записать
          </Button>
        </div>
      </Dialog>
    </div>
  );
}, 'CreateEvent');
