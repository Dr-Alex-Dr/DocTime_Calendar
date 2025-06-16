import { TextField } from '@mui/material';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CabinetSelector } from './CabinetSelector';
import { SelectService } from './SelectService';
import { SelectDuration } from './SelectDuration';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '../../../shared/Button';
import moment from 'moment';
import { ReceptionStore } from '../../../pages/Reception/model/ReceptionStore';
import { Modal } from '../../../shared/Modal/ui';
import { DoctorSelector } from './DoctorSelector';
import styles from './CreateEventModal.module.scss';

export interface ICreateEventParams {
  store: ReceptionStore;
}

export const CreateEventModal: React.FC<ICreateEventParams> = createObserver(({ store }) => {
  const { recordCreationModal, createInterval, setSelectedDate, setAppointmentDuration, slotInfo } =
    store;

  const selectedDuration =
    slotInfo?.start && slotInfo?.end
      ? moment.duration(moment(slotInfo.end).diff(moment(slotInfo.start))).asMinutes()
      : null;

  return (
    <Modal
      open={recordCreationModal.shown}
      handleClose={recordCreationModal.hide}
      title="Запись пациента на прием"
      height={700}
    >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Дата"
          value={slotInfo?.start ? moment(slotInfo.start) : null}
          onChange={(newValue) => setSelectedDate(newValue)}
        />

        <DoctorSelector store={store} />

        <TextField id="outlined-basic" label="Пациент" variant="outlined" />

        <CabinetSelector store={store} />
        <SelectService />
        <TextField id="standard-basic" label="Почта" variant="standard" />
        <TextField id="standard-basic" label="Номер телефона" variant="standard" />

        <SelectDuration
          selectedDuration={selectedDuration}
          setSelectedDuration={setAppointmentDuration}
        />
        <FormControl>
          <RadioGroup defaultValue="female" name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Первичный прием" />
            <FormControlLabel value="male" control={<Radio />} label="Вторичный прием" />
          </RadioGroup>
        </FormControl>
        <Button className={styles.enterButton} variant="contained" onClick={createInterval}>
          Записать
        </Button>
      </LocalizationProvider>
    </Modal>
  );
}, 'CreateEvent');
