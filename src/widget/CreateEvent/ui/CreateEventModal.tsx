import { Dialog, TextField } from '@mui/material';
import { createObserver } from '../../../shared/utils/MobxUtils';
import CloseIcon from '@mui/icons-material/Close';
import styles from './CreateEvent.module.scss';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectDoctor } from './SelectDoctor';
import { CreateEventStore } from '../model';
import { useEffect, useMemo, useState } from 'react';
import { SelectCabinet } from './SelectCabinet';
import { SelectService } from './SelectService';
import { SelectDuration } from './SelectDuration';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '../../../shared/Button';
import moment, { Moment } from 'moment';
import { SlotInfo } from 'react-big-calendar';

export interface ICreateEventParams {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  eventInfo: SlotInfo | undefined;
}

export const CreateEventModal: React.FC<ICreateEventParams> = createObserver((params) => {
  const createEventStore = useMemo(() => new CreateEventStore(), []);

  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const { open, setOpen, eventInfo } = params;

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendForm = () => {
    createEventStore.createInterval();
    setOpen(false);
  };

  const calculateInterval = () => {
    if (!eventInfo?.start || !selectedDate || selectedDuration === null) {
      return { start: null, end: null };
    }

    const startTime = moment(eventInfo.start);

    const start = selectedDate
      .clone()
      .hour(startTime.hour())
      .minute(startTime.minute())
      .second(startTime.second());

    const end = start.clone().add(selectedDuration, 'minute');

    return { start, end };
  };

  useEffect(() => {
    if (params.eventInfo?.start) {
      setSelectedDate(moment(params.eventInfo.start));
    }
  }, [params.eventInfo]);

  const { start, end } = calculateInterval();
  createEventStore.selectStartDate = start;
  createEventStore.selectEndDate = end;

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
          <LocalizationProvider dateAdapter={AdapterMoment}>
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
          <Button styles={{ width: '100%' }} variant="contained" onClick={handleSendForm}>
            Записать
          </Button>
        </div>
      </Dialog>
    </div>
  );
}, 'CreateEvent');
